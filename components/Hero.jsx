import Image from 'next/image';

export default function Hero() {
  return (
    <section className="editorial-hero" id="hero">
      {/* Background ambient lighting */}
      <div className="hero-atmosphere">
        <div className="glow-sphere navy"></div>
        <div className="glow-sphere teal"></div>
        <div className="glow-sphere red-tint"></div>
      </div>

      <div className="container-fluid hero-container">
        {/* Campaign Metadata Bar */}
        <div className="hero-meta-bar">
          <div className="meta-col">
            <span className="meta-label">ATELIER</span>
            <span className="meta-value">PADMA // KARIYAD</span>
          </div>
          <div className="meta-col center-meta">
            <span className="meta-badge-red">CAMPAIGN 2026</span>
            <span className="meta-value">KERALA HANDLOOM & BESPOKE MENSWEAR</span>
          </div>
          <div className="meta-col right-meta">
            <span className="meta-label">COORDINATES</span>
            <span className="meta-value">11.758° N, 75.568° E</span>
          </div>
        </div>

        {/* Huge Editorial Headline */}
        <div className="hero-headline-block">
          <h1 className="hero-giant-title">
            <span className="giant-line primary-word">PADMA</span>
            <span className="giant-line secondary-phrase">KASAVU ARCHIVE</span>
          </h1>
        </div>

        {/* Cinematic Split Canvas: Image & Narrative */}
        <div className="hero-cinematic-grid">
          <div className="hero-narrative-col">
            <p className="hero-lead-text">
              Bridging centuries of Malabar handloom weaving with progressive menswear silhouettes. Pure double-ply Kerala Kasavu, mulberry silks, and sculpted European linens tailored for weddings and elevated gatherings.
            </p>

            <div className="hero-actions-group">
              <a href="#featured" className="btn-editorial-red">
                <span>EXPLORE ARCHIVE</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="https://wa.me/918113021038?text=Hello%20Padma%20Clothing%20Kariyad%2C%20I%20would%20like%20to%20reserve%20a%20personal%20in-store%20styling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-outline"
              >
                BOOK ATELIER VISIT
              </a>
            </div>

            <div className="hero-craft-stats">
              <div className="craft-item">
                <span className="craft-num">100%</span>
                <span className="craft-desc">PURE HANDLOOM COTTON & ZARI</span>
              </div>
              <div className="craft-item">
                <span className="craft-num">07</span>
                <span className="craft-desc">SIGNATURE CURATED SILHOUETTES</span>
              </div>
              <div className="craft-item">
                <span className="craft-num">BESPOKE</span>
                <span className="craft-desc">IN-STORE TRIAL & SLEEVE ALTERATION</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-visual-frame">
              <Image
                src="/assets/images/hero.jpg"
                alt="Padma Menswear Atelier Showroom Kariyad"
                width={850}
                height={550}
                priority
                className="hero-main-photo"
              />
              <div className="hero-visual-overlay"></div>

              {/* Floating Architectural Badge */}
              <div className="hero-spec-tag">
                <span className="tag-index">01 // ATELIER SHOWCASE</span>
                <h4>KARIYAD FLAGSHIP BOUTIQUE</h4>
                <p>Near KNUP School, Peringathur — Trial & Tailoring On-Site</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Marquee Line */}
        <div className="hero-ticker-track">
          <div className="ticker-content">
            <span>KERALA KASAVU DOUBLE MUNDU</span>
            <span className="ticker-divider">✦</span>
            <span>RAW SILK JUBBA ENSEMBLE</span>
            <span className="ticker-divider">✦</span>
            <span>EUROPEAN FLAX LINEN</span>
            <span className="ticker-divider">✦</span>
            <span>HAND-ZARDOZI GROOM SHERWANI</span>
            <span className="ticker-divider">✦</span>
            <span>TEMPLE PEACOCK PATTU VESHTI</span>
            <span className="ticker-divider">✦</span>
            <span>NATURAL INDIGO DABU KURTAS</span>
            <span className="ticker-divider">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
