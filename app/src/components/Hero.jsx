import { site } from '../config.js';

export default function Hero({ onEstimate }) {
  return (
    <section id="top" className="hero has-bg-image" aria-label="home" style={{ backgroundImage: "url('/autofix/images/hero-bg.jpg')" }}>
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle :dark">Long Island City, NY</p>
          <h1 className="h1 section-title">Where NYC drives with confidence</h1>
          <p className="section-text">
            Full-frame collision restoration, direct insurance claim handling, and expert auto repair under one roof.
          </p>
          <div className="hero-actions">
            <button className="btn" onClick={onEstimate}>
              <span className="span">Get Instant Estimate</span>
              <span className="material-symbols-rounded">arrow_forward</span>
            </button>
            <a href={site.phoneHref} className="btn">
              <span className="span">Call {site.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <figure className="img-holder" style={{ '--width': 1600, '--height': 1600 }}>
          <img src="/images/hero-storefront.webp" width="1600" height="1600" fetchPriority="high" alt="MasterCraft Auto Repair & Collision storefront" className="img-cover" />
        </figure>
      </div>
    </section>
  );
}
