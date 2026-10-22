import { useEffect, useState } from 'react';
import { site } from '../config.js';

const links = [
  ['#services', 'Services'],
  ['#before-after', 'Results'],
  ['#reviews', 'Reviews'],
  ['#location', 'Visit'],
];

export default function Header({ onEstimate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'bg-charcoal/95 shadow-lg shadow-black/40 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/logo-badge.webp" alt={`${site.name} logo`} width="44" height="44" className="h-11 w-11 rounded-full object-cover" />
          <span className="font-display text-base leading-none">
            {site.shortName}
            <small className="mt-1 block font-body text-[0.65rem] normal-case tracking-wide text-white/60">Auto Repair &amp; Collision</small>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-bold uppercase tracking-wide text-white/85 transition hover:text-brand">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">{site.phoneDisplay}</a>
          <button onClick={onEstimate} className="btn-ghost hidden !px-4 !py-2.5 lg:inline-flex">Free Estimate</button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 space-y-1.5">
              <span className="block h-0.5 bg-white" />
              <span className="block h-0.5 bg-white" />
              <span className="block h-0.5 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-charcoal px-5 py-4 md:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
