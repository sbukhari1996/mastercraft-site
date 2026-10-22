import { useState } from 'react';

// Drag the handle to compare the before and after photos.
function Slider({ item }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] select-none overflow-hidden">
      <img src={item.after} alt={`${item.alt}: after`} loading="lazy" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
      <img src={item.before} alt={`${item.alt}: before`} loading="lazy" draggable="false" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} />
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export default function Work({ items }) {
  return (
    <section id="work" className="section work">
      <div className="container">
        <p className="section-subtitle :light">Our work</p>
        <h2 className="h2 section-title">Recent collision and repair work</h2>

        {items.length === 0 ? (
          <p className="section-text text-center">Before and after photos are coming soon.</p>
        ) : (
          <ul className="has-scrollbar">
            {items.map((item) => (
              <li key={item.id} className="scrollbar-item">
                <div className="work-card">
                  <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
                    {item.kind === 'before-after' ? (
                      <Slider item={item} />
                    ) : (
                      <img src={item.src} alt={item.alt} loading="lazy" className="img-cover" />
                    )}
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">{item.kind === 'before-after' ? 'Before & after' : 'Auto Repair'}</p>
                    <h3 className="h3 card-title">{item.caption || item.alt}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
