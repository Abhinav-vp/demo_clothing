'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { STORE_INFO } from '@/data/products';

export default function FinalShopCta() {
  const { setActiveCategory } = useStore();

  const handleShopAll = () => {
    setActiveCategory('all');
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="scroll-section final-shop-cta-section" id="final-cta">
      {/* Background atmosphere */}
      <div className="final-cta-bg">
        <Image
          src="/assets/images/hero.jpg"
          alt="Padma Kariyad Final Fashion Narrative"
          fill
          className="final-cta-bg-img"
        />
        <div className="final-cta-vignette-scrim" />
      </div>

      <div className="container final-cta-container">
        <div className="section-kicker-row center-kicker">
          <span className="section-number-pill">09 // FINALE</span>
          <span className="kicker-line-divider" />
          <span className="kicker-subtext">THE CONCLUSION</span>
        </div>

        {/* Huge Headline */}
        <div className="final-headline-wrap">
          <h2 className="final-giant-title">
            FIND<br />
            YOUR<br />
            <span className="text-crimson">NEXT LOOK</span>
          </h2>
        </div>

        <p className="final-supporting-copy">
          From festival double mundus to bespoke wedding ensembles. Visit our physical atelier in Kariyad, Kerala for personal trials, tactile fabric exploration, and custom sleeve alterations.
        </p>

        {/* Action Buttons */}
        <div className="final-actions-cluster">
          <button
            type="button"
            className="btn-editorial-red large-btn"
            onClick={handleShopAll}
          >
            <span>SHOP ALL SILHOUETTES</span>
            <span className="cta-arrow">↑</span>
          </button>

          <a
            href={STORE_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline large-btn"
          >
            <span>WHATSAPP CONCIERGE</span>
            <span className="cta-wa-dot" />
          </a>

          <a
            href="#store-visit"
            className="btn-text-editorial"
          >
            GET ATELIER DIRECTIONS ↓
          </a>
        </div>

        {/* Coordinates strip */}
        <div className="final-footer-coordinates">
          <span>ATELIER: 58/2, NEAR KNUP SCHOOL, KARIYAD, PERINGATHUR</span>
          <span className="coord-dot">✦</span>
          <span>DAILY 9:30 AM – 8:30 PM</span>
          <span className="coord-dot">✦</span>
          <span>TEL: {STORE_INFO.phoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
