const services = [
  { icon: 'services-1.png', title: 'Engine & Transmission', text: 'Diagnosis and repair for engine and transmission problems.' },
  { icon: 'services-2.png', title: 'Brake Service', text: 'Brake work to keep you stopping safely.' },
  { icon: 'services-3.png', title: 'Factory Maintenance', text: 'Scheduled maintenance to keep your car running as built.' },
  { icon: 'services-4.png', title: 'Advanced Diagnostics', text: 'Engine diagnostics to find the real cause, not just the symptom.' },
  { icon: 'services-6.png', title: 'Steering & Suspension', text: 'Steering and suspension repair for a car that handles right.' },
  { icon: null, title: 'Collision & Frame Repair', text: 'Computerized frame measuring and factory-spec structural realignment.' },
];

export default function Services({ onEstimate }) {
  return (
    <section id="services" className="section service has-bg-image" aria-labelledby="service-label" style={{ backgroundImage: "url('/autofix/images/service-bg.jpg')" }}>
      <div className="container">
        <p className="section-subtitle :light" id="service-label">Our services</p>
        <h2 className="h2 section-title">Great service for your vehicle, from diagnosis to paint</h2>

        <ul className="service-list">
          {services.slice(0, 4).map((s) => <ServiceCard key={s.title} s={s} onEstimate={onEstimate} />)}
          <li className="service-banner">
            <img src="/autofix/images/services-5.png" width="646" height="380" loading="lazy" alt="Collision and frame repair" className="move-anim" />
          </li>
          {services.slice(4).map((s) => <ServiceCard key={s.title} s={s} onEstimate={onEstimate} />)}
        </ul>

        <button className="btn" onClick={onEstimate}>
          <span className="span">Get a free estimate</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ s, onEstimate }) {
  return (
    <li>
      <div className="service-card">
        {s.icon && (
          <figure className="card-icon">
            <img src={`/autofix/images/${s.icon}`} width="110" height="110" loading="lazy" alt="" />
          </figure>
        )}
        <h3 className="h3 card-title">{s.title}</h3>
        <p className="card-text">{s.text}</p>
        <button className="btn-link" onClick={onEstimate}>Get a quote</button>
      </div>
    </li>
  );
}
