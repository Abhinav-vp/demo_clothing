'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export default function ProductCard({ product }) {
  const { openQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();

  const isFavorited = isInWishlist(product.id);

  const getWhatsAppUrl = () => {
    const basePhone = '918113021038';
    const text = `Hello Padma Clothing (Kariyad), I am interested in viewing / checking in-store availability for:\n\n*Product:* ${product.name}\n*Item Code:* ${product.id.toUpperCase()}\n*Category:* ${product.categoryName}\n*Ref Price:* ${product.price}\n\nCould you please let me know if this is currently in stock at your Kariyad store?`;
    return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <article className="editorial-product-card" data-id={product.id}>
      <div className="card-media-wrapper">
        <Image
          src={product.image}
          alt={product.name}
          width={450}
          height={550}
          className="card-product-image"
        />

        <div className="card-overlay-scrim"></div>

        {/* Wishlist Button */}
        <button
          type="button"
          className={`card-wishlist-btn ${isFavorited ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isFavorited ? '♥' : '♡'}
        </button>

        {/* Badge */}
        {product.badge && <span className="card-editorial-badge">{product.badge}</span>}

        {/* Hover Quick Action Drawer */}
        <div className="card-hover-actions">
          <button
            type="button"
            className="btn-card-quickview"
            onClick={() => openQuickView(product)}
          >
            QUICK VIEW
          </button>
          <button
            type="button"
            className="btn-card-addbag"
            onClick={() => addToCart(product)}
          >
            + BAG
          </button>
        </div>
      </div>

      <div className="card-info-block">
        <div className="card-meta-line">
          <span className="card-category-label">{product.categoryName}</span>
          <span className="card-sku">{product.id.toUpperCase()}</span>
        </div>

        <h4 className="card-title" onClick={() => openQuickView(product)}>
          {product.name}
        </h4>

        <div className="card-pricing-row">
          <span className="card-price">{product.price}</span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="card-wa-link"
            title="Ask availability on WhatsApp"
          >
            <span className="wa-status-dot"></span>
            IN-STORE CHECK
          </a>
        </div>
      </div>
    </article>
  );
}
