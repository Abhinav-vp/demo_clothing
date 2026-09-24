'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

const CATEGORY_PANELS = [
  {
    id: 'kasavu',
    title: 'KASAVU & DHOTIS',
    subtitle: 'TRADITIONAL KERALA DOUBLE-PLY & TEMPLE ZARI',
    image: '/assets/images/kasavu_mundu.jpg',
    count: '02 DESIGNS'
  },
  {
    id: 'kurtas',
    title: 'FESTIVE SILKS',
    subtitle: 'ROYAL EMERALD & EMBROIDERED RAW SILK KURTAS',
    image: '/assets/images/festive_kurta.jpg',
    count: '02 DESIGNS'
  },
  {
    id: 'shirts',
    title: 'EUROPEAN LINEN',
    subtitle: 'CRISP FLAX TEXTURES & TAILORED MANDARIN CUTS',
    image: '/assets/images/linen_shirt.jpg',
    count: '02 DESIGNS'
  },
  {
    id: 'wedding',
    title: 'GROOM BESPOKE',
    subtitle: 'HAND-ZARDOZI SILK SHERWANIS & IMPERIAL WEAVES',
    image: '/assets/images/wedding_sherwani.jpg',
    count: '01 MASTERPIECE'
  }
];

export default function CategoryShowcase() {
  const { setActiveCategory } = useStore();

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    const target = document.getElementById('collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="editorial-category-section" id="categories">
      <div className="container-fluid">
        <div className="editorial-section-header">
          <div className="header-eyebrow">
            <span className="red-dot"></span>
            <span>ARCHIVE CURATIONS // 2026</span>
          </div>
          <h2 className="editorial-huge-heading">CATEGORIES</h2>
        </div>

        <div className="category-panels-grid">
          {CATEGORY_PANELS.map((panel, idx) => (
            <div
              key={panel.id}
              className="category-panel-card"
              onClick={() => handleCategoryClick(panel.id)}
            >
              <div className="category-panel-media">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  width={500}
                  height={650}
                  className="category-bg-image"
                />
                <div className="category-panel-scrim"></div>
              </div>

              <div className="category-panel-info">
                <div className="panel-meta-top">
                  <span className="panel-index">0{idx + 1} //</span>
                  <span className="panel-count">{panel.count}</span>
                </div>

                <div className="panel-title-group">
                  <h3 className="panel-title">{panel.title}</h3>
                  <p className="panel-subtitle">{panel.subtitle}</p>
                </div>

                <div className="panel-hover-arrow">
                  <span>DISCOVER</span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
