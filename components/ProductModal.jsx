'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS, STORE_INFO } from '@/data/products';

export default function ProductModal() {
  const { quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || 'Standard');
      setQuantity(1);
      setAddedToast(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeQuickView();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeQuickView]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorited = isInWishlist(product.id);

  // WhatsApp Link for this specific product + size
  const getWhatsAppProductUrl = () => {
    const text = `Hello Padma Clothing (Kariyad), I would like to check in-store stock and arrange a trial for:\n\n*Product:* ${product.name}\n*Item Code:* ${product.id.toUpperCase()}\n*Selected Size:* ${selectedSize}\n*Qty:* ${quantity}\n*Price:* ${product.price}\n\nCould you confirm availability at your Kariyad boutique? Thank you!`;
    return `https://wa.me/${STORE_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  const handleAdd = () => {
    addToCart(product, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  // Related products
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="modal-backdrop-editorial" onClick={closeQuickView}>
      <div className="modal-editorial-wrapper" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-trigger"
          onClick={closeQuickView}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-editorial-grid">
          {/* Left: Large Product Image Gallery */}
          <div className="modal-gallery-col">
            <div className="modal-main-image-wrap">
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={850}
                className="modal-hero-photo"
                priority
              />
              <span className="modal-badge-tag">{product.badge}</span>
            </div>
          </div>

          {/* Right: Editorial Information & Actions */}
          <div className="modal-narrative-col">
            <div className="modal-meta-top">
              <span className="modal-cat-tag">{product.categoryName.toUpperCase()}</span>
              <span className="modal-sku-tag">{product.id.toUpperCase()}</span>
            </div>

            <h2 className="modal-editorial-title">{product.name}</h2>

            <div className="modal-price-box">
              <span className="modal-price-val">{product.price}</span>
              <span className="modal-price-label">IN-STORE RETAIL / BESPOKE TRIAL</span>
            </div>

            <p className="modal-description-text">{product.description}</p>

            {/* Size Selector */}
            <div className="modal-control-section">
              <div className="section-label-flex">
                <span className="control-label">SELECT SIZE / CUT:</span>
                <span className="control-selected-note">{selectedSize}</span>
              </div>
              <div className="size-buttons-row">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`size-button ${selectedSize === s ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="modal-control-section">
              <span className="control-label">QUANTITY:</span>
              <div className="qty-selector modal-qty">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="modal-action-buttons">
              <button
                type="button"
                className={`btn-editorial-red full-width ${addedToast ? 'added-success' : ''}`}
                onClick={handleAdd}
              >
                {addedToast ? '✓ ADDED TO YOUR BAG' : 'ADD TO BAG'}
              </button>

              <button
                type="button"
                className={`btn-editorial-outline full-width ${isFavorited ? 'active-fav' : ''}`}
                onClick={() => toggleWishlist(product.id)}
              >
                {isFavorited ? '♥ SAVED IN WISHLIST' : '♡ SAVE TO WISHLIST'}
              </button>

              <a
                href={getWhatsAppProductUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-inquire full-width"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                ENQUIRE IN-STORE TRIAL ON WHATSAPP
              </a>
            </div>

            {/* Specifications Matrix */}
            <div className="modal-specs-matrix">
              <div className="spec-matrix-row">
                <span className="matrix-label">WEAVE / FABRIC</span>
                <span className="matrix-value">{product.fabric}</span>
              </div>
              <div className="spec-matrix-row">
                <span className="matrix-label">COLORWAY</span>
                <span className="matrix-value">{product.color}</span>
              </div>
              <div className="spec-matrix-row">
                <span className="matrix-label">FIT PROFILE</span>
                <span className="matrix-value">{product.fit}</span>
              </div>
            </div>

            {/* Highlights List */}
            {product.highlights && (
              <div className="modal-highlights-block">
                <span className="highlights-heading">CRAFTSMANSHIP HIGHLIGHTS</span>
                <ul>
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* In-Store Notice Box */}
            <div className="modal-instore-disclaimer">
              <span className="disclaimer-dot"></span>
              <p>
                <strong>IN-STORE EXCLUSIVE:</strong> We do not offer courier delivery. Visit our boutique in Kariyad (Near KNUP School, Peringathur) for custom sleeve alteration and trial.
              </p>
            </div>
          </div>
        </div>

        {/* Related Silhouettes Bar */}
        <div className="modal-related-section">
          <h4 className="related-title">COMPLEMENTARY SILHOUETTES</h4>
          <div className="related-grid">
            {related.map((item) => (
              <div
                key={item.id}
                className="related-item-card"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={110}
                  style={{ objectFit: 'cover' }}
                />
                <div className="related-item-info">
                  <span className="related-item-name">{item.name}</span>
                  <span className="related-item-price">{item.price}</span>
                  <span className="related-add-link">+ QUICK ADD TO BAG</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
