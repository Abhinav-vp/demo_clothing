'use client';

import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';

export default function FeaturedProductStory() {
  const { openQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();
  // Using real product from database: Kasavu Mundu & Jubba Set
  const product = PRODUCTS[0];
  const isWishlisted = isInWishlist(product.id);

  return (
    <section className="scroll-section featured-product-story-section" id="featured-story">
      <div className="section-atmosphere-blur navy-tint" />

      <div className="container featured-story-container">
        {/* Section Header */}
        <div className="section-kicker-row">
          <span className="section-number-pill">03 // SPOTLIGHT</span>
          <span className="kicker-line-divider" />
          <span className="kicker-subtext">ATELIER HERO PIECE</span>
        </div>

        <div className="featured-story-grid">
          {/* LEFT: Large Product Visual */}
          <div className="story-media-column">
            <div className="story-image-viewport">
              <Image
                src={product.image}
                alt={product.name}
                width={780}
                height={920}
                className="story-main-image"
              />
              <div className="story-image-vignette" />

              {/* Badges on Visual */}
              <div className="story-badge-cluster">
                <span className="badge-pill-editorial red-accent">{product.badge}</span>
                <span className="badge-pill-editorial dark-glass">HANDLOOM ARCHIVE</span>
              </div>

              {/* Wishlist toggle */}
              <button
                type="button"
                className={`story-wishlist-toggle ${isWishlisted ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Save to Wishlist"
              >
                <svg width="20" height="20" fill={isWishlisted ? '#ff2a4d' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: Product Name, Description, Price, Sizes, View Product */}
          <div className="story-content-column">
            <div className="story-meta-lead">
              <span className="story-sku-label">CURATED ITEM #{product.id.toUpperCase()}</span>
              <span className="story-category-tag">{product.categoryName}</span>
            </div>

            <h2 className="story-product-title">{product.name}</h2>

            <div className="story-price-row">
              <span className="story-price-val">{product.price}</span>
              <span className="story-tax-note">INCL. ALL TAXES • TRIAL IN KARIYAD</span>
            </div>

            <p className="story-product-desc">{product.description}</p>

            {/* Fabric & Fit Details */}
            <div className="story-specs-table">
              <div className="spec-row-item">
                <span className="spec-key">FABRIC COMPOSITION</span>
                <span className="spec-value">{product.fabric}</span>
              </div>
              <div className="spec-row-item">
                <span className="spec-key">COLOR PALETTE</span>
                <span className="spec-value">{product.color}</span>
              </div>
              <div className="spec-row-item">
                <span className="spec-key">FIT & SILHOUETTE</span>
                <span className="spec-value">{product.fit}</span>
              </div>
            </div>

            {/* Available Sizes */}
            <div className="story-sizes-group">
              <span className="sizes-label">AVAILABLE ATELIER SIZES:</span>
              <div className="sizes-chips-row">
                {product.sizes.map((sz) => (
                  <span key={sz} className="size-chip-box">
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            {/* Interaction Buttons */}
            <div className="story-actions-cluster">
              <button
                type="button"
                className="btn-editorial-red"
                onClick={() => openQuickView(product)}
              >
                <span>VIEW PRODUCT DETAILS</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>

              <button
                type="button"
                className="btn-editorial-outline"
                onClick={() => addToCart(product, product.sizes[0], 1)}
              >
                + ADD TO BAG
              </button>
            </div>

            <div className="story-in-store-note">
              <span className="pulse-green-dot" />
              <span>In stock at Kariyad showroom for instant fitting & tailoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
