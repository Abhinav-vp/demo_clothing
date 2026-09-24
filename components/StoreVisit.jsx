export default function StoreVisit() {
  return (
    <section className="editorial-store-section" id="store-visit">
      <div className="container-fluid">
        <div className="editorial-section-header">
          <div className="header-eyebrow">
            <span className="red-dot"></span>
            <span>ATELIER DESTINATION // KERALA</span>
          </div>
          <h2 className="editorial-huge-heading">THE KARIYAD BOUTIQUE</h2>
        </div>

        <div className="store-layout-grid">
          {/* Store Info Card */}
          <div className="store-editorial-card">
            <div className="store-card-kicker">
              <span className="kicker-line"></span>
              <span>VISITING ARCHIVE</span>
            </div>

            <h3 className="store-card-title">EXPERIENCE IN PERSON</h3>
            <p className="store-card-desc">
              Visit our flagship boutique to experience the unbleached texture of pure Malabar cotton, drape handwoven Kasavu double-mundus, and consult on custom sleeve alterations with our master tailors.
            </p>

            <div className="store-data-matrix">
              <div className="store-data-item">
                <span className="data-label">ADDRESS</span>
                <p className="data-val">58/2, Near KNUP School, Kariyad, Peringathur, Kannur District, Kerala — 673316</p>
              </div>

              <div className="store-data-item">
                <span className="data-label">ATELIER HOURS</span>
                <p className="data-val">MONDAY – SUNDAY: 9:30 AM – 8:30 PM (OPEN ALL DAYS)</p>
              </div>

              <div className="store-data-item">
                <span className="data-label">DIRECT CONCIERGE</span>
                <p className="data-val">+91 81130 21038 (VOICE & WHATSAPP)</p>
              </div>
            </div>

            <div className="store-action-row">
              <a
                href="https://maps.google.com/?q=KNUP+School+Kariyad+Peringathur+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-red"
              >
                OPEN GOOGLE MAPS DIRECTIONS
              </a>
              <a href="tel:8113021038" className="btn-editorial-outline">
                CALL ATELIER (+91 81130 21038)
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="store-map-frame">
            <iframe
              title="Padma Men's Wear Kariyad Location"
              src="https://maps.google.com/maps?q=Kariyad+Peringathur+Kerala+673316&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="map-iframe-dark"
            />
            <div className="map-glass-badge">
              <div className="map-badge-dot"></div>
              <div>
                <strong>PADMA ATELIER</strong>
                <span>Near KNUP School, Kariyad, Peringathur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
