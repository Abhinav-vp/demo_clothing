'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/products';

export default function FeaturedEditorial() {
  const { openQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();

  const primaryProduct = PRODUCTS.find((p) => p.id === 'padma-m-01') || PRODUCTS[0];
  const secondaryProducts = PRODUCTS.filter((p) => p.id !== 'padma-m-01').slice(0, 2);

  return (
    <section className="featured-editorial-section" id="featured">
      <div className="container-fluid">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="header-eyebrow">
            <span className="red-dot"></span>
            <span>CURATED SPOTLIGHT // AUTUMN 2026</span>
          </div>
          <h2 className="editorial-huge-heading">FEATURED PIECES</h2>
        </div>

        {/* Asymmetrical Editorial Showcase */}
        <div className="editorial-showcase-grid">
          {/* Main Large Product Spotlight */}
          <div className="spotlight-primary-card">
            <div className="spotlight-image-holder">
              <Image
                src={primaryProduct.image}
                alt={primaryProduct.name}
                width={800}
                height={600}
                className="spotlight-image"
              />
              <span className="editorial-edition-badge">{primaryProduct.badge}</span>
              <button
                type="button"
                className={`editorial-heart-btn ${isInWishlist(primaryProduct.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(primaryProduct.id)}
                aria-label="Add to wishlist"
              >
                {isInWishlist(primaryProduct.id) ? '♥' : '♡'}
              </button>
            </div>

            <div className="spotlight-info">
              <div className="spotlight-meta-top">
                <span className="category-num">01 // {primaryProduct.categoryName.toUpperCase()}</span>
                <span className="spotlight-price">{primaryProduct.price}</span>
              </div>

              <h3 className="spotlight-title">{primaryProduct.name}</h3>
              <p className="spotlight-desc">{primaryProduct.description}</p>

              <div className="spotlight-specs-row">
                <span><strong>FABRIC:</strong> {primaryProduct.fabric}</span>
                <span><strong>SHADE:</strong> {primaryProduct.color}</span>
              </div>

              <div className="spotlight-cta-row">
                <button
                  type="button"
                  className="btn-editorial-red"
                  onClick={() => addToCart(primaryProduct)}
                >
                  ADD TO BAG
                </button>
                <button
                  type="button"
                  className="btn-editorial-outline"
                  onClick={() => openQuickView(primaryProduct)}
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Editorial Cards */}
          <div className="spotlight-secondary-stack">
            {secondaryProducts.map((product, idx) => (
              <div key={product.id} className="stacked-editorial-card">
                <div className="stacked-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={320}
                    className="stacked-image"
                  />
                  <span className="stacked-badge">{product.badge}</span>
                  <button
                    type="button"
                    className={`editorial-heart-btn mini ${isInWishlist(product.id) ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    {isInWishlist(product.id) ? '♥' : '♡'}
                  </button>
                </div>

                <div className="stacked-content">
                  <div className="stacked-meta-line">
                    <span className="category-num">0{idx + 2} // {product.categoryName.toUpperCase()}</span>
                    <span className="stacked-price">{product.price}</span>
                  </div>
                  <h4 className="stacked-title">{product.name}</h4>
                  <p className="stacked-fabric"><strong>WEAVE:</strong> {product.fabric}</p>

                  <div className="stacked-actions">
                    <button
                      type="button"
                      className="btn-text-action"
                      onClick={() => openQuickView(product)}
                    >
                      EXPLORE SPECIFICATION →
                    </button>
                    <button
                      type="button"
                      className="btn-editorial-outline mini"
                      onClick={() => addToCart(product)}
                    >
                      + BAG
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
