export default function StoreVisit() {
  return (
    <section className="store-visit-section" id="store-visit">
      <div className="container store-visit-grid">
        <div className="store-info-card">
          <div className="store-badge">
            <span className="status-dot"></span> In-Store Shopping Boutique
          </div>

          <h2 className="store-title">Visit Padma Men's Wear in Kariyad</h2>

          <div className="location-points">
            <div className="location-point">
              <div className="point-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="point-content">
                <h5>Store Address</h5>
                <p>58/2, Near KNUP School, Kariyad, Peringathur, Kannur District, Kerala - 673316</p>
              </div>
            </div>

            <div className="location-point">
              <div className="point-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="point-content">
                <h5>Visiting Hours</h5>
                <p>Monday to Sunday: 9:30 AM – 8:30 PM (All days open for festive & wedding shopping)</p>
              </div>
            </div>

            <div className="location-point">
              <div className="point-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="point-content">
                <h5>Direct Contact & WhatsApp</h5>
                <p>+91 81130 21038 (Call or WhatsApp for availability, trials, or directions)</p>
              </div>
            </div>
          </div>

          <div className="store-action-buttons">
            <a
              href="https://maps.google.com/?q=KNUP+School+Kariyad+Peringathur+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-directions"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Google Maps Directions
            </a>
            <a href="tel:8113021038" className="btn-call-large">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 8113021038
            </a>
          </div>
        </div>

        {/* Map visual with location badge */}
        <div className="map-visual-card">
          <iframe
            title="Padma Clothing Kariyad Location"
            src="https://maps.google.com/maps?q=Kariyad+Peringathur+Kerala+673316&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
          <div className="map-overlay-badge">
            <svg width="22" height="22" fill="#d4af37" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p>
              <strong>Padma Men's Wear</strong>
              <span>Near KNUP School, Kariyad, Peringathur</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
