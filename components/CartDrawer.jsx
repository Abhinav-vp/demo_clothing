'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    getWhatsAppCartUrl
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={closeCart}>
      <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-kicker">CURATION // 01</span>
            <h3 className="drawer-title">
              YOUR BAG <span className="drawer-count">({cart.reduce((s, i) => s + i.quantity, 0)})</span>
            </h3>
          </div>
          <button className="drawer-close-btn" onClick={closeCart} aria-label="Close bag">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty-state">
              <span className="empty-symbol">—</span>
              <h4>YOUR BAG IS EMPTY</h4>
              <p>Explore our handcrafted Kerala Kasavu and bespoke menswear collections.</p>
              <button
                className="btn-editorial-red"
                onClick={() => {
                  closeCart();
                  const target = document.getElementById('collection');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                DISCOVER THE COLLECTION
              </button>
            </div>
          ) : (
            <div className="drawer-items-list">
              {cart.map((item, idx) => (
                <div key={`${item.product.id}-${item.size}-${idx}`} className="drawer-item">
                  <div className="drawer-item-image">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={100}
                      height={125}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="drawer-item-details">
                    <span className="item-category-tag">{item.product.categoryName}</span>
                    <h5 className="drawer-item-name">{item.product.name}</h5>
                    <div className="drawer-item-meta">
                      <span className="drawer-item-size">SIZE: {item.size}</span>
                      <span className="drawer-item-price">{item.product.price}</span>
                    </div>

                    <div className="drawer-item-actions">
                      <div className="qty-selector">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, -1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="btn-remove-item"
                        onClick={() => removeFromCart(item.product.id, item.size)}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-subtotal-row">
              <span>ESTIMATED TOTAL</span>
              <span className="drawer-total-amount">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>
            <p className="drawer-disclaimer">
              *In-Store Trial & Reservation: Items are reserved directly with our Kariyad boutique staff via WhatsApp.
            </p>
            <a
              href={getWhatsAppCartUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-checkout"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              CHECKOUT VIA WHATSAPP
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
