import { REVIEWS } from '@/data/products';

export default function Reviews() {
  return (
    <section className="editorial-reviews-section" id="reviews">
      <div className="container-fluid">
        <div className="editorial-section-header">
          <div className="header-eyebrow">
            <span className="red-dot"></span>
            <span>CUSTOMER VOICES // VERIFIED</span>
          </div>
          <h2 className="editorial-huge-heading">TESTIMONIALS</h2>
        </div>

        <div className="reviews-editorial-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="editorial-review-card">
              <div className="review-card-top">
                <span className="review-index">0{i + 1} //</span>
                <span className="review-stars-red">{'★'.repeat(r.rating)}</span>
              </div>

              <blockquote className="review-quote-text">
                "{r.comment}"
              </blockquote>

              <div className="review-author-block">
                <div className="author-avatar">{r.name.charAt(0)}</div>
                <div className="author-meta">
                  <h5 className="author-name">{r.name}</h5>
                  <span className="author-loc">{r.location.toUpperCase()} • {r.date.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
