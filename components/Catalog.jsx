'use client';

import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function Catalog() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      item.name.toLowerCase().includes(q) ||
      item.fabric.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.color.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const resetFilters = () => {
    setCurrentCategory('all');
    setSearchQuery('');
  };

  return (
    <section className="catalog-section" id="collection">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Exclusive Men's Catalog</span>
          <h2 className="section-title">Designed for Distinction & Festivity</h2>
          <p className="section-desc">
            Browse our fine selection of Kerala Kasavu mundus, wedding silks, pure linens, and casual kurtas. Click any piece to see detailed specs or message us on WhatsApp to check stock before visiting.
          </p>
        </div>

        {/* Category & Search Filters */}
        <div className="filter-container">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-tab ${currentCategory === cat.id ? 'active' : ''}`}
                onClick={() => setCurrentCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="catalog-toolbar">
            <div className="search-box">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by fabric, color, or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="results-count">
              Showing <span>{filteredProducts.length}</span> luxury men's designs
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))
          ) : (
            <div className="empty-catalog-state">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3>No matching men's attire found</h3>
              <p>Try searching for Kasavu, Silk Kurta, Linen Shirt, or Sherwani, or browse all categories.</p>
              <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={resetFilters} type="button">
                View All Collections
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
