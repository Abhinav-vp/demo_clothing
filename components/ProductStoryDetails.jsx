'use client';

import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';

export default function ProductStoryDetails() {
  const { openQuickView } = useStore();
  const silkDhoti = PRODUCTS[4]; // Heritage Pattu Veshti
  const emeraldKurta = PRODUCTS[1]; // Imperial Emerald Silk Kurta

  return (
    <section className="scroll-section product-story-section" id="product-story">
      <div className="section-atmosphere-blur teal-tint" />

      <div className="container story-details-container">
        {/* Section Kicker */}
        <div className="section-kicker-row">
          <span className="section-number-pill">04 // CRAFT</span>
          <span className="kicker-line-divider" />
          <span className="kicker-subtext">WEAVE ARCHITECTURE</span>
        </div>

        {/* Layout: [LARGE IMAGE] -> THE DETAILS -> [SECOND IMAGE] */}
        <div className="story-editorial-spread">
          {/* Top Left: Large Image Frame */}
          <div className="story-frame-left">
            <div className="story-photo-wrapper">
              <Image
                src={silkDhoti.image}
                alt={silkDhoti.name}
                width={800}
                height={550}
                className="story-reveal-photo"
              />
              <div className="story-photo-caption">
                <span className="caption-tag">PURE MULBERRY SILK // KALYANA PATTU</span>
                <p>Ornate Mayil (Peacock) temple motifs across the traditional 8-muzham pallu border.</p>
              </div>
            </div>
          </div>

          {/* Center / Editorial Header: THE DETAILS */}
          <div className="story-center-typography">
            <span className="details-kicker">ARCHIVAL MASTERWORK</span>
            <h2 className="details-huge-title">
              THE<br />
              <span className="text-crimson">DETAILS</span>
            </h2>
            <p className="details-paragraph">
              Crafted in collaboration with heritage loom masters. Every zari thread is woven with disciplined density, producing an authentic golden luster that captures Kerala celebratory light.
            </p>

            <div className="craft-spec-pills">
              <span className="craft-pill">✦ 8-MUZHAM DOUBLE DHOTI</span>
              <span className="craft-pill">✦ PURE GOLDEN ZARI</span>
              <span className="craft-pill">✦ MATCHING ANGAVASTRAM</span>
            </div>

            <button
              type="button"
              className="btn-editorial-red"
              onClick={() => openQuickView(silkDhoti)}
            >
              EXPLORE VESHTI SPECIFICATIONS →
            </button>
          </div>

          {/* Right / Second Image Frame */}
          <div className="story-frame-right">
            <div className="story-photo-wrapper secondary">
              <Image
                src={emeraldKurta.image}
                alt={emeraldKurta.name}
                width={650}
                height={500}
                className="story-reveal-photo"
              />
              <div className="story-photo-caption">
                <span className="caption-tag">TUSSAR SILK BLEND // EMERALD & GOLD</span>
                <p>Antique zari embroidered placket and tailored Mandarin cuffs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
