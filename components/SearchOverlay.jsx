'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/products';

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery, openQuickView } = useStore();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const matches = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="search-overlay-backdrop" onClick={closeSearch}>
      <div className="search-overlay-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-overlay-header">
          <span className="search-kicker">ARCHIVE SEARCH</span>
          <button className="search-close-btn" onClick={closeSearch} aria-label="Close search">
            ✕
          </button>
        </div>

        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="search-huge-input"
            placeholder="SEARCH KASAVU, SILK, LINEN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="search-results-tray">
          {searchQuery.trim() === '' ? (
            <div className="search-suggestions">
              <span>FREQUENT SEARCHES:</span>
              <div className="suggestion-tags">
                <button type="button" onClick={() => setSearchQuery('Kasavu')}>Kasavu Mundu</button>
                <button type="button" onClick={() => setSearchQuery('Silk')}>Raw Silk Jubba</button>
                <button type="button" onClick={() => setSearchQuery('Linen')}>Pure Linen</button>
                <button type="button" onClick={() => setSearchQuery('Sherwani')}>Groom Sherwani</button>
              </div>
            </div>
          ) : matches.length === 0 ? (
            <div className="search-no-results">
              <p>NO PIECES MATCHING "{searchQuery.toUpperCase()}"</p>
            </div>
          ) : (
            <div className="search-matches-grid">
              {matches.map((item) => (
                <div
                  key={item.id}
                  className="search-result-card"
                  onClick={() => {
                    closeSearch();
                    openQuickView(item);
                  }}
                >
                  <div className="search-result-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={100}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="search-result-info">
                    <span className="search-cat-badge">{item.categoryName}</span>
                    <h5 className="search-product-name">{item.name}</h5>
                    <span className="search-product-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
