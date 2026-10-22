import { useState } from 'react';
import { site } from '../config.js';

const links = [
  ['#top', 'Home'],
  ['#about', 'About'],
  ['#services', 'Services'],
  ['#work', 'Projects'],
  ['#reviews', 'Reviews'],
  ['#visit', 'Contact'],
];

export default function Header({ onEstimate }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#top" className="logo" onClick={close}>
          <img src="/images/logo-badge.webp" width="128" height="128" alt={`${site.name} home`} />
        </a>

        <nav className={`navbar ${open ? 'active' : ''}`} aria-label="Main">
          <ul className="navbar-list">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="navbar-link" onClick={close}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="btn" onClick={onEstimate}>
          <span className="span">Get a Quote</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </button>

        <button
          className={`nav-toggle-btn ${open ? 'active' : ''}`}
          aria-label="toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-icon icon-1" />
          <span className="nav-toggle-icon icon-2" />
          <span className="nav-toggle-icon icon-3" />
        </button>
      </div>
    </header>
  );
}
