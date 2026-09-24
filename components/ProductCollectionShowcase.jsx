'use client';

import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';

export default function ProductCollectionShowcase() {
  const { openQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();

  // Selected products for editorial staggered layout
  const primaryHeroProduct = PRODUCTS[2]; // Masterpiece Groom Sherwani
  const secondaryProducts = [
    PRODUCTS[3], // Pure European Linen
    PRODUCTS[5], // Royal Navy Dress Shirt
    PRODUCTS[6], // Artisanal Indigo Kurta
  ];

  return (
    <section className="scroll-section editorial-collection-showcase-section" id="editorial-showcase">
      <div className="section-atmosphere-blur navy-tint" />

      <div className="container showcase-container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-kicker-row">
            <span className="section-number-pill">05 // CURATION</span>
            <span className="kicker-line-divider" />
            <span className="kicker-subtext">EDITORIAL HIERARCHY</span>
          </div>

          <div className="showcase-title-flex">
            <h2 className="showcase-main-title">
              FEATURED<br />
              <span className="title-dim">COLLECTION</span>
            </h2>
            <p className="showcase-subtext">
              Selected silhouettes from the Kariyad atelier, arranged by handloom heritage, festive grandeur, and refined daily comfort.
            </p>
          </div>
        </div>

        {/* Editorial Layout: Large Primary + Staggered Sub-Products */}
        <div className="editorial-stagger-layout">
          {/* Large Primary Product Card */}
          <div className="stagger-primary-col">
            <article className="editorial-hero-card">
              <div className="hero-card-media">
                <Image
                  src={primaryHeroProduct.image}
                  alt={primaryHeroProduct.name}
                  width={850}
                  height={950}
                  className="hero-card-img"
                />
                <div className="hero-card-vignette" />

                <div className="hero-card-badges">
                  <span className="badge-pill-editorial red-accent">{primaryHeroProduct.badge}</span>
                  <span className="badge-pill-editorial dark-glass">WEDDING LUXURY</span>
                </div>

                <button
                  type="button"
                  className={`hero-card-wishlist ${isInWishlist(primaryHeroProduct.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(primaryHeroProduct)}
                  aria-label="Toggle Wishlist"
                >
                  <svg width="20" height="20" fill={isInWishlist(primaryHeroProduct.id) ? '#ff2a4d' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <div className="hero-card-info">
                <div className="card-meta-line">
                  <span className="card-category-lbl">{primaryHeroProduct.categoryName}</span>
                  <span className="card-sku-code">#{primaryHeroProduct.id.toUpperCase()}</span>
                </div>

                <h3
                  className="hero-card-title"
                  onClick={() => openQuickView(primaryHeroProduct)}
                >
                  {primaryHeroProduct.name}
                </h3>

                <p className="hero-card-desc">{primaryHeroProduct.description}</p>

                <div className="hero-card-specs-row">
                  <span><strong>FABRIC:</strong> {primaryHeroProduct.fabric}</span>
                  <span><strong>FIT:</strong> {primaryHeroProduct.fit}</span>
                </div>

                <div className="hero-card-bottom">
                  <div className="hero-card-price-group">
                    <span className="hero-card-price">{primaryHeroProduct.price}</span>
                    <span className="hero-card-trial">COMPLIMENTARY IN-STORE TAILORING</span>
                  </div>

                  <div className="hero-card-actions">
                    <button
                      type="button"
                      className="btn-editorial-red"
                      onClick={() => openQuickView(primaryHeroProduct)}
                    >
                      VIEW PIECE
                    </button>
                    <button
                      type="button"
                      className="btn-editorial-outline"
                      onClick={() => addToCart(primaryHeroProduct, primaryHeroProduct.sizes[0], 1)}
                    >
                      + ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Staggered Sub-Products Column */}
          <div className="stagger-secondary-col">
            {secondaryProducts.map((item, idx) => {
              const isItemWishlisted = isInWishlist(item.id);
              return (
                <article key={item.id} className="secondary-stagger-card">
                  <div className="secondary-media-wrapper">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={420}
                      height={380}
                      className="secondary-img"
                    />
                    <span className="secondary-badge">{item.badge}</span>
                    <button
                      type="button"
                      className={`secondary-wishlist-btn ${isItemWishlisted ? 'active' : ''}`}
                      onClick={() => toggleWishlist(item)}
                      aria-label="Wishlist"
                    >
                      <svg width="17" height="17" fill={isItemWishlisted ? '#ff2a4d' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="secondary-content-box">
                    <div className="secondary-meta-row">
                      <span className="secondary-cat">{item.categoryName}</span>
                      <span className="secondary-num">05.{idx + 2} //</span>
                    </div>

                    <h4
                      className="secondary-title"
                      onClick={() => openQuickView(item)}
                    >
                      {item.name}
                    </h4>

                    <div className="secondary-pricing-row">
                      <span className="secondary-price">{item.price}</span>
                      <div className="secondary-btns">
                        <button
                          type="button"
                          className="btn-text-red"
                          onClick={() => openQuickView(item)}
                        >
                          DETAILS →
                        </button>
                        <button
                          type="button"
                          className="btn-card-mini-bag"
                          onClick={() => addToCart(item, item.sizes[0], 1)}
                        >
                          + BAG
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
