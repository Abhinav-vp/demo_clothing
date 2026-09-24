'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export default function CategoryTransition() {
  const { setActiveCategory } = useStore();

  const handleFilterJump = (catId) => {
    setActiveCategory(catId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="scroll-section category-transition-section" id="category-transition">
      {/* Full-bleed background visual */}
      <div className="transition-bg-container">
        <Image
          src="/assets/images/hero.jpg"
          alt="Padma Kariyad Menswear Transition Canvas"
          fill
          priority={false}
          className="transition-bg-photo"
        />
        <div className="transition-overlay-scrim" />
      </div>

      <div className="container transition-content-container">
        <div className="transition-kicker-badge">
          <span className="badge-dot-red" />
          <span className="badge-text">SECTION 06 // ARCHIVE TRANSITION</span>
        </div>

        {/* Huge Display Typography */}
        <div className="transition-headline-wrap">
          <h2 className="transition-giant-title">
            <span className="giant-sub-stroke">MALABAR</span><br />
            KASAVU
          </h2>
          <span className="transition-year-mark">ARCHIVE 2026 // KARIYAD</span>
        </div>

        <p className="transition-lead-copy">
          From unbleached handloom dhotis adorned with royal zari to bespoke silk jubbas and Italian cut linens. Experience the convergence of Malabar heritage and modern menswear aesthetics.
        </p>

        {/* Quick Category Jump Pills */}
        <div className="transition-category-links">
          <button
            type="button"
            className="transition-pill-btn"
            onClick={() => handleFilterJump('kasavu')}
          >
            <span>KASAVU & MUNDU</span>
            <span className="pill-arrow">↗</span>
          </button>

          <button
            type="button"
            className="transition-pill-btn"
            onClick={() => handleFilterJump('kurtas')}
          >
            <span>FESTIVE SILK KURTAS</span>
            <span className="pill-arrow">↗</span>
          </button>

          <button
            type="button"
            className="transition-pill-btn"
            onClick={() => handleFilterJump('shirts')}
          >
            <span>EUROPEAN FLAX LINENS</span>
            <span className="pill-arrow">↗</span>
          </button>

          <button
            type="button"
            className="transition-pill-btn"
            onClick={() => handleFilterJump('wedding')}
          >
            <span>GROOM BESPOKE</span>
            <span className="pill-arrow">↗</span>
          </button>
        </div>

        <div className="transition-scroll-prompt">
          <span className="prompt-label">EXPLORE COMPLETE CATALOG</span>
          <span className="prompt-indicator-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
