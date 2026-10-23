/* MasterCraft site behavior. No dependencies. Config comes from config.js. */
(() => {
  'use strict';

  const cfg = window.SITE_CONFIG || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MAX_PHOTOS = 10;
  const MAX_BYTES = 10 * 1024 * 1024;

  /* ---------- Config hydration (data-cfg) + SEO schema ---------- */
  function applyConfig() {
    document.querySelectorAll('[data-cfg]').forEach((node) => {
      node.dataset.cfg.split(';').forEach((rule) => {
        const [target, path] = rule.split(':').map((s) => s && s.trim());
        if (!target || !path) return;
        const value = path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), cfg);
        if (value === undefined) return;
        if (target === 'text') node.textContent = value;
        else node.setAttribute(target, value);
      });
    });

    const hero = $('.hero-photo');
    if (hero && cfg.images && cfg.images.hero) hero.style.backgroundImage = `url('${cfg.images.hero}')`;

    const schema = $('#business-schema');
    if (schema && cfg.business) {
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        '@id': cfg.business.website + '/#business',
        name: cfg.business.name,
        image: cfg.business.website + '/' + cfg.images.logo,
        url: cfg.business.website,
        telephone: cfg.business.phoneE164,
        email: cfg.business.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: cfg.address.street,
          addressLocality: cfg.address.city,
          addressRegion: cfg.address.region,
          postalCode: cfg.address.zip,
          addressCountry: cfg.address.country,
        },
        areaServed: ['Long Island City', 'Astoria', 'Sunnyside', 'Queens', 'Western Long Island'],
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: cfg.hours.schemaDays,
          opens: cfg.hours.schemaOpens,
          closes: cfg.hours.schemaCloses,
        }],
      }, null, 2);
    }
  }

  /* ---------- Race: the car drives across the page as you scroll ---------- */
  function initRace() {
    const car = $('.race-car');
    const header = $('#header');
    if (!car) return;
    const grow = document.querySelectorAll('[data-grow]');
    let frame = 0;

    const paint = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? scrollY / max : 0;
      const w = car.offsetWidth;
      // Start fully off the left edge, finish fully off the right edge.
      car.style.transform = `translate3d(${-w + progress * (innerWidth + w)}px,0,0)`;
      header.classList.toggle('scrolled', scrollY > 12);
      if (reduced) return;
      // Grow from 82% to 100% as each item rises into view (eased, no layout writes).
      grow.forEach((node) => {
        const t = Math.min(Math.max((innerHeight - node.getBoundingClientRect().top) / (innerHeight * 0.9), 0), 1);
        node.style.scale = (0.82 + 0.18 * (1 - (1 - t) ** 3)).toFixed(3);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };

    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    paint();
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((n) => n.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((n) => io.observe(n));
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    const nav = $('#mainNav');
    const toggle = $('#navToggle');
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- Before / after sliders (empty state when no pairs) ---------- */
  function initCompare() {
    const root = $('#compare');
    const pairs = cfg.beforeAfter || [];
    if (!pairs.length) {
      root.append(emptyBox('Before and after photos are coming soon.'));
      return;
    }
    pairs.forEach((p) => {
      const fig = el('figure', 'glass compare');
      const stage = el('div', 'compare-stage');
      const after = new Image();
      after.src = p.after; after.alt = (p.caption || 'Collision repair') + ', after';
      const before = new Image();
      before.src = p.before; before.alt = (p.caption || 'Collision repair') + ', before';
      before.className = 'before';
      before.loading = 'lazy';
      after.loading = 'lazy';
      const line = el('div', 'compare-line');
      const range = el('input', 'compare-range');
      range.type = 'range'; range.min = '0'; range.max = '100'; range.value = '50';
      range.setAttribute('aria-label', 'Drag to compare before and after');
      range.addEventListener('input', () => {
        const v = Number(range.value);
        before.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
        line.style.left = v + '%';
      });
      stage.append(after, before, line, range);
      fig.append(stage);
      if (p.caption) fig.append(el('figcaption', null, p.caption));
      root.append(fig);
    });
  }

  /* ---------- Reviews carousel ---------- */
  function initReviews() {
    const track = $('#reviewsTrack');
    const list = cfg.reviews || [];
    const avg = $('#avgRating');
    if (!list.length) {
      track.replaceChildren(emptyBox('Reviews are coming soon.'));
      $('#revPrev').hidden = $('#revNext').hidden = true;
      avg.textContent = '–';
      return;
    }
    avg.textContent = (list.reduce((s, r) => s + r.rating, 0) / list.length).toFixed(1);
    list.forEach((r) => {
      const card = el('article', 'glass review');
      const stars = el('p', 'stars', '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating));
      stars.setAttribute('role', 'img');
      stars.setAttribute('aria-label', `${r.rating} out of 5 stars`);
      const quote = el('blockquote', null, `“${r.text}”`);
      const cite = el('cite', null, r.name);
      if (r.dateText) cite.append(el('span', null, ' · ' + r.dateText));
      card.append(stars, quote, cite);
      track.append(card);
    });
    const step = (dir) => track.scrollBy({ left: dir * (track.firstElementChild.offsetWidth + 22), behavior: 'smooth' });
    $('#revPrev').addEventListener('click', () => step(-1));
    $('#revNext').addEventListener('click', () => step(1));
  }

  /* ---------- Rainbow cursor trail (fine pointers only) ---------- */
  function initTrail() {
    const canvas = $('#trail');
    if (reduced || !matchMedia('(pointer: fine)').matches) return;
    const ctx = canvas.getContext('2d');
    const LIFE = 650;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let points = [];
    let hue = 0;
    let frame = 0;

    const size = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    addEventListener('resize', size);

    const draw = (now) => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      points = points.filter((p) => now - p.t < LIFE);
      ctx.globalCompositeOperation = 'lighter';
      points.forEach((p) => {
        const life = 1 - (now - p.t) / LIFE;
        ctx.fillStyle = `hsla(${p.h}, 100%, 60%, ${life * 0.55})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 + 10 * life, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = points.length ? requestAnimationFrame(draw) : 0;
    };

    addEventListener('pointermove', (e) => {
      hue = (hue + 5) % 360;
      points.push({ x: e.clientX, y: e.clientY, h: hue, t: performance.now() });
      if (points.length > 40) points.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    }, { passive: true });
  }

  /* ---------- Click ripple on buttons and tiles ---------- */
  function initRipple() {
    if (reduced) return;
    document.addEventListener('pointerdown', (e) => {
      const target = e.target.closest('.btn, .icon-btn, .service-tile, .social-card, .nav-toggle');
      if (!target) return;
      const r = target.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2.2;
      const ripple = el('span', 'ripple');
      Object.assign(ripple.style, {
        width: size + 'px',
        height: size + 'px',
        left: e.clientX - r.left - size / 2 + 'px',
        top: e.clientY - r.top - size / 2 + 'px',
      });
      target.append(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }

  function emptyBox(text) {
    return el('div', 'empty', text);
  }

  /* ---------- Estimate form: validation, sending state, recovery ---------- */
  function initForm() {
    const form = $('#estimateForm');
    const note = $('#formNote');
    const submit = $('#submitBtn');
    const photos = $('#photos');
    const idleLabel = submit.textContent;

    const setError = (field, msg) => {
      const group = field.closest('.form-group');
      group.classList.toggle('invalid', Boolean(msg));
      group.querySelector('.field-error').textContent = msg || '';
    };
    const fieldsToCheck = form.querySelectorAll('[required]');
    fieldsToCheck.forEach((f) => f.addEventListener('blur', () => setError(f, f.checkValidity() ? '' : f.validationMessage)));

    photos.addEventListener('change', () => {
      const files = [...photos.files];
      let msg = '';
      if (files.length > MAX_PHOTOS) msg = `Please choose up to ${MAX_PHOTOS} photos.`;
      else if (files.some((f) => f.size > MAX_BYTES)) msg = 'Each photo must be 10 MB or less.';
      setError(photos, msg);
      if (msg) photos.value = '';
    });

    const reset = () => {
      submit.disabled = false;
      submit.textContent = idleLabel;
      note.textContent = '';
      note.className = 'form-note';
    };
    addEventListener('pageshow', (e) => { if (e.persisted) reset(); });

    form.addEventListener('submit', (e) => {
      const bad = [...fieldsToCheck].find((f) => !f.checkValidity());
      if (bad || photos.closest('.form-group').classList.contains('invalid')) {
        e.preventDefault();
        fieldsToCheck.forEach((f) => setError(f, f.checkValidity() ? '' : f.validationMessage));
        note.textContent = 'Please fix the highlighted fields.';
        note.className = 'form-note error';
        (bad || photos).focus();
        return;
      }
      // Posts to FormSubmit, which navigates away; the pageshow handler resets this on Back.
      submit.disabled = true;
      submit.textContent = 'Sending…';
      note.textContent = 'Sending your request…';
      note.className = 'form-note pending';
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    $('#year').textContent = new Date().getFullYear();
    initCompare();
    initReviews();
    initRace();
    initReveal();
    initNav();
    initForm();
    initTrail();
    initRipple();
  });
})();
