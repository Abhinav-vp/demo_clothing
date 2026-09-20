import { REVIEWS } from '@/data/products';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Customer Voices</span>
          <h2 className="section-title">Trusted Across Kariyad & Thalassery</h2>
          <p className="section-desc">Hear what our local shoppers have to say about our men's collection and in-store hospitality.</p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {'★'.repeat(r.rating)}
              </div>
              <p className="review-comment">"{r.comment}"</p>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">{r.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <h5>{r.name}</h5>
                  <p>{r.location} • {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
