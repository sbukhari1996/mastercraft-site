import { useState } from 'react';

const services = [
  {
    id: 'collision',
    title: 'Collision & Frame Repair',
    summary: 'Factory-spec structural realignment with computerized measuring.',
    details: ['Computerized frame measuring', 'Factory-spec structural realignment', 'Full-frame collision repair'],
    wide: true,
  },
  {
    id: 'insurance',
    title: 'Insurance Claim Concierge',
    summary: 'We deal with your adjuster, supplements and paperwork.',
    details: ['Direct handling of insurance adjusters', 'Supplements handled for you', 'Paperwork taken off your plate'],
  },
  {
    id: 'mechanical',
    title: 'Mechanical & Diagnostics',
    summary: 'Engine, transmission, brakes and factory maintenance.',
    details: ['Advanced engine diagnostics', 'Brake service', 'Factory maintenance'],
  },
  {
    id: 'paint',
    title: 'Custom Body & Paint',
    summary: 'Color-matched precision paint with a flawless clear coat.',
    details: ['Color-matched precision painting', 'Precision body work', 'Flawless clear coat finish'],
  },
];

export default function Services({ onEstimate }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <p className="eyebrow">What We Do</p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Auto Repair &amp; Collision, Done Right</h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((s) => {
          const open = openId === s.id;
          return (
            <article
              key={s.id}
              className={`card group p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-2xl hover:shadow-brand/10 ${
                s.wide ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-3 text-white/70">{s.summary}</p>

              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : s.id)}
                className="mt-5 text-sm font-bold uppercase tracking-wide text-brand hover:underline"
              >
                {open ? 'Hide details -' : 'See what is included +'}
              </button>

              {open && (
                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-white/80">
                  {s.details.map((d) => (
                    <li key={d}>&#10003; {d}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}

        <div className="card flex flex-col justify-between gap-6 bg-brand p-7 md:col-span-1">
          <div>
            <h3 className="text-2xl">Not sure what you need?</h3>
            <p className="mt-3 text-white/90">Send a few photos and your car details. We reply with next steps.</p>
          </div>
          <button onClick={onEstimate} className="btn bg-white text-charcoal hover:bg-white/90">Start My Estimate</button>
        </div>
      </div>
    </section>
  );
}
