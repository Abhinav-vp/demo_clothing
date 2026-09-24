'use client';

import Image from 'next/image';

export default function CollectionIntro() {
  return (
    <section className="scroll-section collection-intro-section" id="collection-intro">
      <div className="section-atmosphere-blur teal-tint" />

      <div className="container collection-intro-container">
        {/* Section Kicker */}
        <div className="section-kicker-row">
          <span className="section-number-pill">02 // COLLECTION</span>
          <span className="kicker-line-divider" />
          <span className="kicker-subtext">ARCHIVAL HANDLOOM EDIT</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="intro-giant-headline">
          <h2 className="intro-title-line">
            <span className="title-dim">NEW</span> COLLECTION
          </h2>
          <div className="intro-year-badge">
            <span className="year-num">2026</span>
            <span className="year-label">AUTUMN // WEDDING ARCHIVE</span>
          </div>
        </div>

        {/* Immersive Split Canvas */}
        <div className="intro-editorial-layout">
          {/* Large Clothing Image Frame */}
          <div className="intro-image-stage">
            <div className="intro-image-frame">
              <Image
                src="/assets/images/kasavu_mundu.jpg"
                alt="Padma 2026 Kasavu Mundu & Silk Jubba Collection"
                width={920}
                height={620}
                className="intro-photo"
              />
              <div className="image-vignette-scrim" />
              <div className="intro-artisan-tag">
                <span className="tag-pulse" />
                <span className="tag-txt">PURE DOUBLE-PLY KASAVU & GOLD RAW SILK</span>
              </div>
            </div>
          </div>

          {/* Narrative & Call-to-Action */}
          <div className="intro-narrative-card">
            <span className="narrative-index">02.1 // PHILOSOPHY</span>
            <h3 className="narrative-headline">
              HONORING MALABAR TRADITION THROUGH PROGRESSIVE MENSWEAR SILHOUETTES.
            </h3>
            <p className="narrative-body">
              Every garment in the 2026 archive is shaped at the crossroads of ancestral Kerala loom craft and contemporary tailored drape. Featuring unbleached organic cotton dhotis woven with genuine zari borders and matched with hand-finished jubbas.
            </p>

            <div className="intro-metrics-strip">
              <div className="metric-box">
                <span className="metric-val">3.5″</span>
                <span className="metric-lbl">WOVEN ZARI BORDER</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">UNBLEACHED COTTON</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">KARIYAD</span>
                <span className="metric-lbl">FLAGSHIP SHOWROOM</span>
              </div>
            </div>

            <div className="intro-cta-wrapper">
              <a href="#catalog" className="btn-editorial-red">
                <span>SHOP COLLECTION</span>
                <span className="arrow-glyph">→</span>
              </a>
              <a href="#featured-story" className="btn-text-editorial">
                DISCOVER THE CRAFT ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
