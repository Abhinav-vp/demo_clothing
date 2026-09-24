'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', num: '01', label: 'HERO' },
  { id: 'collection-intro', num: '02', label: 'COLLECTION' },
  { id: 'featured-story', num: '03', label: 'SPOTLIGHT' },
  { id: 'product-story', num: '04', label: 'THE DETAILS' },
  { id: 'editorial-showcase', num: '05', label: 'CURATION' },
  { id: 'category-transition', num: '06', label: 'ARCHIVE' },
  { id: 'catalog', num: '07', label: 'CATALOG' },
  { id: 'campaign', num: '08', label: 'CAMPAIGN' },
  { id: 'final-cta', num: '09', label: 'FINALE' },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const pct = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
          setScrollPercent(Math.min(100, Math.max(0, pct)));
          setIsVisible(currentScroll > 150);

          // Find current in-view section
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.45) {
                setActiveSection(SECTIONS[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside className="vael-scroll-indicator" aria-label="Page navigation tracker">
      <div className="scroll-track-line">
        <div className="scroll-fill-bar" style={{ height: `${scrollPercent}%` }} />
      </div>

      <div className="scroll-status-capsule">
        <span className="section-index-digit">{activeSection.num}</span>
        <span className="section-divider-slash">/</span>
        <span className="section-total-digit">09</span>
        <span className="section-badge-name">{activeSection.label}</span>
      </div>

      {/* Quick jump dots for desktop */}
      <div className="scroll-dots-column" role="tablist">
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`scroll-dot-link ${activeSection.id === sec.id ? 'active' : ''}`}
            title={`Jump to ${sec.label}`}
            aria-label={`Jump to section ${sec.num}: ${sec.label}`}
          >
            <span className="dot-tooltip">{sec.num} // {sec.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
