import { site } from '../config.js';

export default function Hero({ onEstimate }) {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden pt-24">
      <img
        src="/images/hero-storefront.webp"
        alt="MasterCraft Auto Repair & Collision storefront in Long Island City"
        width="2048"
        height="2048"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(189,26,34,0.35),transparent_45%)]" />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
        <p className="eyebrow mb-5 inline-flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" /> Long Island City, NY
        </p>
        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl">
          Where NYC Drives <span className="text-brand">With Confidence</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Full-frame collision restoration, direct insurance claim handling, and expert auto repair under one roof.
          Five-star reviews from our Long Island City customers.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={onEstimate} className="btn-primary">Get Instant Estimate / Upload Claim</button>
          <a href={site.phoneHref} className="btn-ghost">Call {site.phoneDisplay}</a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/75">
          <li>&#10003; All insurance welcome</li>
          <li>&#10003; Color-match paint</li>
          <li>&#10003; Daily progress photos</li>
          <li>&#10003; {site.hoursBadge}</li>
        </ul>
      </div>
    </section>
  );
}
