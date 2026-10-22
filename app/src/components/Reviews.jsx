import { useState } from 'react';
import { site } from '../config.js';

const Stars = ({ n }) => (
  <span className="text-brand" aria-label={`${n} out of 5 stars`}>
    {'★'.repeat(n)}
    <span className="text-white/25">{'★'.repeat(5 - n)}</span>
  </span>
);

export default function Reviews({ reviews }) {
  const [index, setIndex] = useState(0);

  if (reviews.length === 0) {
    return (
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-3 text-4xl">Customer Reviews</h2>
        <p className="mt-6 text-white/60">Reviews are coming soon.</p>
      </section>
    );
  }

  const current = reviews[index];
  const average = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const go = (step) => setIndex((i) => (i + step + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Verified Local Reviews</p>
          <h2 className="mt-3 text-4xl md:text-5xl">What Drivers Say</h2>
          <p className="mt-3 text-white/70">
            <span className="font-bold text-white">{average}</span> average across {reviews.length} reviews shown here.
          </p>
        </div>
        <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost self-start md:self-auto">
          Leave a Google Review
        </a>
      </div>

      <figure className="card mt-12 p-8 md:p-12" aria-live="polite">
        <Stars n={current.rating} />
        <blockquote className="mt-5 text-xl leading-relaxed text-white/90 md:text-2xl">&ldquo;{current.text}&rdquo;</blockquote>
        <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
          <span className="font-bold text-white">{current.name}</span>
          {current.dateText && <span>&middot; {current.dateText}</span>}
          {current.url && (
            <a href={current.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              Read on Google &rarr;
            </a>
          )}
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 hover:border-brand">&larr;</button>
          <button onClick={() => go(1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 hover:border-brand">&rarr;</button>
        </div>
        <div className="flex gap-1.5" role="tablist" aria-label="Choose review">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
