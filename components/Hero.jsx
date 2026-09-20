import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Premier Men's Textile Store in Kariyad
          </div>

          <h1 className="hero-title">
            Distinguished Men’s Fashion & <span className="gold-text">Kerala Handlooms</span>
          </h1>

          <p className="hero-description">
            Experience timeless elegance at Padma Men's Wear. From authentic Kerala Kasavu double mundu & raw silk jubbas to tailored European linen shirts and groom wear—curated for weddings, Onam festivals, and gentlemanly style.
          </p>

          <div className="hero-actions">
            <a href="#collection" className="btn-primary">
              Explore Men's Collection
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/918113021038?text=Hello%20Padma%20Clothing%2C%20I%20would%20like%20to%20know%20about%20your%20men's%20collections%20and%20store%20timings."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              Enquire on WhatsApp
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Authentic Handlooms</p>
            </div>
            <div class="stat-item">
              <h3>In-Store</h3>
              <p>Trial & Custom Fit</p>
            </div>
            <div className="stat-item">
              <h3>Kariyad</h3>
              <p>Near KNUP School</p>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-image-wrapper">
            <Image
              src="/assets/images/hero.jpg"
              alt="Padma Men's Wear Boutique in Kariyad"
              width={600}
              height={480}
              priority
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
            <div className="hero-floating-card">
              <div className="card-info">
                <h4>In-Store Shopping Experience</h4>
                <p>Feel the pure fabrics & get customized tailoring</p>
              </div>
              <span className="card-pill">Open Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
