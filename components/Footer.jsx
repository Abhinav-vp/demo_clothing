export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>PADMA MEN'S WEAR</h3>
          <p>
            Your premier destination in Kariyad, Kerala for traditional Kasavu mundus, wedding silks, linen shirts, and bespoke festive attire. Dedicated to craftsmanship and timeless heritage.
          </p>
          <div className="store-badge">
            <span className="status-dot"></span> In-Store Shopping Boutique
          </div>
        </div>

        <div className="footer-col">
          <h4>Collections</h4>
          <ul className="footer-links">
            <li><a href="#collection">Kerala Kasavu Mundus</a></li>
            <li><a href="#collection">Festive Silk Kurtas</a></li>
            <li><a href="#collection">Groom Wedding Sherwanis</a></li>
            <li><a href="#collection">Pure European Linens</a></li>
            <li><a href="#collection">Dhotis & Angavastrams</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Store Hours</h4>
          <ul className="footer-links">
            <li>Monday – Friday: 9:30 AM – 8:30 PM</li>
            <li>Saturday: 9:30 AM – 8:30 PM</li>
            <li>Sunday: 9:30 AM – 8:30 PM</li>
            <li style={{ color: 'var(--text-gold)', marginTop: '0.5rem' }}>
              Open all 7 days for wedding shopping
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & Location</h4>
          <div className="footer-contact-info">
            <div className="contact-row">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>58/2, Near KNUP School, Kariyad, Peringathur, Kerala - 673316</span>
            </div>

            <div className="contact-row">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:8113021038">+91 81130 21038</a>
            </div>

            <div className="contact-row">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              <a href="https://wa.me/918113021038" target="_blank" rel="noopener noreferrer">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 Padma Men's Wear & Textiles. All rights reserved. Kariyad, Peringathur, Kerala.</p>
        <p>In-Store Retail Boutique • Trial & Tailoring Available On-Site</p>
      </div>
    </footer>
  );
}
