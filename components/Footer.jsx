import Link from 'next/link';
import { STORE_INFO } from '@/data/products';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="container-fluid">
        {/* Giant Brand Banner */}
        <div className="footer-big-brand">
          <span className="big-brand-text">PADMA</span>
        </div>

        <div className="footer-columns-grid">
          {/* Col 1: About */}
          <div className="footer-col col-main">
            <span className="footer-label">ATELIER // KARIYAD</span>
            <p className="footer-desc">
              Dedicated to the preservation and progressive elevation of Malabar handlooms, Kasavu double-mundus, and bespoke Indian menswear.
            </p>
            <div className="footer-badge-pill">
              <span className="pill-status-dot"></span>
              <span>IN-STORE TRIAL & BESPOKE ALTERATIONS</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <span className="footer-label">COLLECTIONS</span>
            <ul className="footer-menu">
              <li><a href="#collection">KASAVU & DOUBLE MUNDU</a></li>
              <li><a href="#collection">EMERALD & RAW SILK KURTAS</a></li>
              <li><a href="#collection">GROOM WEDDING SHERWANIS</a></li>
              <li><a href="#collection">EUROPEAN PURE LINEN</a></li>
              <li><a href="#collection">KALYANA PATTU DHOTIS</a></li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div className="footer-col">
            <span className="footer-label">VISITING HOURS</span>
            <ul className="footer-menu">
              <li>MONDAY – FRIDAY: 9:30 AM – 8:30 PM</li>
              <li>SATURDAY: 9:30 AM – 8:30 PM</li>
              <li>SUNDAY: 9:30 AM – 8:30 PM</li>
              <li className="footer-highlight-text">*OPEN ALL 7 DAYS FOR WEDDINGS</li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="footer-col">
            <span className="footer-label">DESTINATION</span>
            <div className="footer-contact-data">
              <p>58/2, NEAR KNUP SCHOOL, KARIYAD, PERINGATHUR, KERALA — 673316</p>
              <p>
                TEL: <a href="tel:8113021038" className="footer-phone-link">+91 81130 21038</a>
              </p>
              <a
                href={STORE_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-red"
                style={{ display: 'inline-block', marginTop: '0.75rem', padding: '0.55rem 1.1rem', fontSize: '0.78rem' }}
              >
                WHATSAPP CONCIERGE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} PADMA MEN’S WEAR & TEXTILES. ALL RIGHTS RESERVED.</p>
          <p className="footer-legal">KARIYAD ATELIER // EXPERIMENTAL STREETWEAR & TRADITIONAL SILHOUETTES</p>
        </div>
      </div>
    </footer>
  );
}
