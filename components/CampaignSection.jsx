'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export default function CampaignSection() {
  const { setActiveCategory } = useStore();

  const handleExplore = (category) => {
    setActiveCategory(category);
    const target = document.getElementById('collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="editorial-campaign-section">
      <div className="campaign-inner container-fluid">
        <div className="campaign-atmosphere-glow"></div>

        <div className="campaign-layout-grid">
          {/* Left Large Visual */}
          <div className="campaign-visual-container">
            <div className="campaign-image-frame">
              <Image
                src="/assets/images/silk_dhoti.jpg"
                alt="Heritage Silk Pattu Dhoti with Gold Peacock Zari"
                width={700}
                height={550}
                className="campaign-photo"
              />
              <div className="campaign-tag-badge">
                <span>ARCHIVE HIGHLIGHT // KALYANA PATTU</span>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="campaign-narrative-container">
            <div className="campaign-kicker-line">
              <span className="accent-bar-red"></span>
              <span>SPECIAL RELEASE // ATELIER KARIYAD</span>
            </div>

            <h2 className="campaign-huge-title">
              THE KASAVU & <br />
              <span className="text-stroke">ROYAL ZARI CODE</span>
            </h2>

            <p className="campaign-body-text">
              Every fold of our Kasavu double-mundu and wedding silk vesti reflects the storied handloom lineage of Northern Kerala. Hand-spun cotton paired with intricate Mayil (Peacock) temple zari motifs, crafted for life’s most auspicious milestones.
            </p>

            <div className="campaign-detail-specs">
              <div className="spec-pill">
                <span className="pill-dot"></span>
                <span>AUTHENTIC 8-MUZHAM (4.0M) CUT</span>
              </div>
              <div className="spec-pill">
                <span className="pill-dot"></span>
                <span>MATCHING ANGAVASTRAM SET</span>
              </div>
              <div className="spec-pill">
                <span className="pill-dot"></span>
                <span>KALYANA PATTU GRADE SILK</span>
              </div>
            </div>

            <div className="campaign-cta-row">
              <button
                type="button"
                className="btn-editorial-red"
                onClick={() => handleExplore('kasavu')}
              >
                DISCOVER KASAVU ARCHIVE
              </button>

              <button
                type="button"
                className="btn-editorial-outline"
                onClick={() => handleExplore('wedding')}
              >
                WEDDING GROOM ATTIRE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
