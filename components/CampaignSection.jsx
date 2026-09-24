'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export default function CampaignSection() {
  const { setActiveCategory } = useStore();

  const handleExplore = (category) => {
    setActiveCategory(category);
    const target = document.getElementById('catalog');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="scroll-section editorial-campaign-section" id="campaign">
      <div className="section-atmosphere-blur navy-tint" />

      <div className="container campaign-outer-container">
        {/* Section Kicker */}
        <div className="section-kicker-row">
          <span className="section-number-pill">08 // CAMPAIGN</span>
          <span className="kicker-line-divider" />
          <span className="kicker-subtext">BRAND MANIFESTO</span>
        </div>

        {/* Full-Width Cinematic Campaign Visual */}
        <div className="campaign-fullwidth-stage">
          <div className="campaign-fullwidth-frame">
            <Image
              src="/assets/images/wedding_sherwani.jpg"
              alt="Padma Menswear 2026 Collection Campaign"
              width={1400}
              height={700}
              className="campaign-fullwidth-photo"
            />
            <div className="campaign-fullwidth-scrim" />

            <div className="campaign-fullwidth-floating-badge">
              <span className="pulse-dot-red" />
              <span>ATELIER ARCHIVE // REGAL WEDDING EDITION</span>
            </div>
          </div>
        </div>

        {/* Statement & Explore CTA */}
        <div className="campaign-statement-card">
          <div className="statement-grid">
            <div className="statement-left">
              <span className="statement-label">COLLECTION STATEMENT</span>
              <h2 className="statement-headline">
                REDEFINING<br />
                <span className="text-crimson">SOUTHERN REGALITY</span><br />
                FOR THE CONTEMPORARY MAN.
              </h2>
            </div>

            <div className="statement-right">
              <p className="statement-body">
                We believe ceremonial menswear should command the room through uncompromised craftsmanship rather than ostentatious embellishment. Each silhouette from Padma Kariyad fuses ancient Malabar handloom precision with immaculate bespoke tailoring.
              </p>

              <div className="statement-specs-list">
                <div className="statement-spec-item">
                  <span className="spec-bullet">✦</span>
                  <span>Pure Chanderi & Raw Silk foundations</span>
                </div>
                <div className="statement-spec-item">
                  <span className="spec-bullet">✦</span>
                  <span>Hand-stitched micro-bead Zardozi motifs</span>
                </div>
                <div className="statement-spec-item">
                  <span className="spec-bullet">✦</span>
                  <span>Personal in-store trial & sleeve fitting in Kariyad</span>
                </div>
              </div>

              <div className="statement-cta-row">
                <button
                  type="button"
                  className="btn-editorial-red"
                  onClick={() => handleExplore('wedding')}
                >
                  <span>EXPLORE WEDDING ARCHIVE</span>
                  <span className="cta-arrow">→</span>
                </button>
                <a
                  href="https://wa.me/918113021038?text=Hello%20Padma%20Kariyad%2C%20I%20would%20like%20to%20inquire%20about%20the%20wedding%20and%20groom%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-outline"
                >
                  WHATSAPP CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
