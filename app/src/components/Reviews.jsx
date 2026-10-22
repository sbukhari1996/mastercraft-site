import { site } from '../config.js';

const Stars = ({ n }) => (
  <span style={{ color: 'var(--international-orange-engineering)' }} aria-label={`${n} out of 5 stars`}>
    {'★'.repeat(n)}
    <span style={{ opacity: 0.25 }}>{'★'.repeat(5 - n)}</span>
  </span>
);

export default function Reviews({ reviews }) {
  return (
    <section id="reviews" className="section" style={{ background: 'var(--space-cadet)', color: 'var(--white)' }}>
      <div className="container">
        <p className="section-subtitle :dark">Verified local reviews</p>
        <h2 className="h2 section-title" style={{ color: 'var(--white)' }}>What drivers say</h2>

        {reviews.length === 0 ? (
          <p className="section-text text-center">Reviews are coming soon.</p>
        ) : (
          <ul className="review-grid" style={{ marginBlock: 40 }}>
            {reviews.map((r) => (
              <li key={r.id}>
                <figure className="review-card">
                  <Stars n={r.rating} />
                  <blockquote style={{ marginBlock: 16, flex: 1, lineHeight: 1.6 }}>&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption style={{ fontSize: 14 }}>
                    <strong>{r.name}</strong>
                    {r.dateText && <span> &middot; {r.dateText}</span>}
                    {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--international-orange-engineering)', marginLeft: 8 }}>Read on Google</a>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}

        <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn">
          <span className="span">Leave a Google review</span>
        </a>
      </div>
    </section>
  );
}
