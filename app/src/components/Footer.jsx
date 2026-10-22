import { site } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer" id="visit">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <img src="/images/logo-badge.webp" width="128" height="128" loading="lazy" alt={site.name} />
            </a>
            <p className="footer-text">Auto repair, insurance collision work and paint in Long Island City.</p>
            <ul className="social-list">
              <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link"><img src="/autofix/images/facebook.svg" width="20" height="20" alt="Facebook" /></a></li>
              <li><a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.4 3.5 12 3.5 12 3.5h0s-4.4 0-7.7.4c-.5.1-1.5.1-2.4 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.9C.8 14.7 1 16.5 1 16.5s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .2 8 .2s4.4 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7v-1.9c0-1.9-.2-3.7-.2-3.7zM9.7 14.9V8.7l6 3.1-6 3.1z" /></svg></a></li>
              <li><a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M16.6 5.8c-.9-.9-1.4-2.2-1.4-3.5h-3.1v13.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1v-3.2c-.3 0-.5-.1-.8-.1-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6V9.1c1.2.9 2.7 1.4 4.3 1.4V7.4c-.9 0-1.7-.3-2.4-.8-.3-.2-.6-.5-.9-.8z" /></svg></a></li>
            </ul>
          </div>

          <ul className="footer-list">
            <li><p className="h3">Opening Hours</p></li>
            <li><p className="p">Monday to Sunday</p><span className="span">6AM to 12AM (Midnight)</span></li>
          </ul>

          <ul className="footer-list">
            <li><p className="h3">Contact Info</p></li>
            <li>
              <a href={site.phoneHref} className="footer-link">
                <span className="material-symbols-rounded">call</span>
                <span className="span">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="footer-link">
                <span className="material-symbols-rounded">mail</span>
                <span className="span">{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="footer-link address">
                <span className="material-symbols-rounded">location_on</span>
                <span className="span">{site.street}, {site.cityStateZip}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="container" style={{ marginTop: 40 }}>
          <iframe
            title="Map of MasterCraft Auto Repair & Collision"
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', height: 320, border: 0 }}
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. &nbsp;|&nbsp; <a href="/privacy.html" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </p>
          <p style={{ fontSize: 12, marginTop: 12, textAlign: 'center' }}>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
