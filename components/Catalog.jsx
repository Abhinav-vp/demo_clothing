'use client';

import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from './ProductCard';

export default function Catalog() {
  const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useStore();
  const [sortBy, setSortBy] = useState('featured');

  // Filter products
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      q === '' ||
      item.name.toLowerCase().includes(q) ||
      item.fabric.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.color.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ''), 10) || 0;
    const priceB = parseInt(b.price.replace(/[^\d]/g, ''), 10) || 0;
    if (sortBy === 'price-low') return priceA - priceB;
    if (sortBy === 'price-high') return priceB - priceA;
    return 0; // featured default
  });

  return (
    <section className="editorial-catalog-section" id="collection">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="editorial-section-header catalog-header-flex">
          <div>
            <div className="header-eyebrow">
              <span className="red-dot"></span>
              <span>COMPLETE MENSWEAR LOOKBOOK</span>
            </div>
            <h2 className="editorial-huge-heading">THE ARCHIVE</h2>
          </div>

          <div className="catalog-sort-group">
            <span className="sort-label">SORT BY:</span>
            <select
              className="editorial-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">CURATED / FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        {/* Minimal Editorial Filter Bar */}
        <div className="catalog-control-panel">
          <div className="category-scroll-track">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`editorial-filter-chip ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="chip-name">{cat.label.toUpperCase()}</span>
                  <span className="chip-count">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="catalog-search-inline">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="FILTER FABRIC, WEAVE, COLOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata */}
        <div className="catalog-status-bar">
          <span className="status-count-text">
            SHOWING <strong>{sortedProducts.length}</strong> OF {PRODUCTS.length} MENSWEAR SILHOUETTES
          </span>
          {activeCategory !== 'all' && (
            <button
              type="button"
              className="btn-clear-filter"
              onClick={() => setActiveCategory('all')}
            >
              RESET TO ALL [×]
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="editorial-products-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="catalog-empty-block">
              <span className="empty-glyph">—</span>
              <h3>NO SILHOUETTES FOUND</h3>
              <p>No products match your current filter. Clear search or select another category.</p>
              <button
                type="button"
                className="btn-editorial-red"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                VIEW FULL ARCHIVE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
