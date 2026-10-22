export default function About({ rating }) {
  const stats = [
    [rating, 'Average review rating'],
    ['All', 'Insurance welcome'],
    ['7 days', 'Open 6AM to midnight'],
    ['Free', 'Estimates, photos welcome'],
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <figure className="about-banner">
          <img src="/images/shop-sign-hires.webp" width="1400" height="1093" loading="lazy" alt="MasterCraft Auto Repair & Collision hanging shop sign" className="w-100" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle :dark">About us</p>
          <h2 className="h2 section-title">Insurance, collision and repair under one roof</h2>
          <p className="section-text">
            MasterCraft Auto Repair &amp; Collision is a Long Island City shop for mechanical repair and full-frame collision work.
            We deal with your insurance adjuster so you are not stuck on the phone.
          </p>
          <p className="section-text">
            Collision jobs come with progress photos sent along the way, and color-match paint finished to a clear coat.
          </p>

          <ul className="about-list">
            {stats.map(([value, label]) => (
              <li key={label} className="about-item">
                <p><strong className="display-1 strong">{value}</strong> {label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
