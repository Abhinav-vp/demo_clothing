'use client';

import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/products';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, closeWishlist, toggleWishlist, addToCart, openQuickView } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="drawer-backdrop" onClick={closeWishlist}>
      <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-kicker">ARCHIVE // SAVED</span>
            <h3 className="drawer-title">
              WISHLIST <span className="drawer-count">({wishlistProducts.length})</span>
            </h3>
          </div>
          <button className="drawer-close-btn" onClick={closeWishlist} aria-label="Close wishlist">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {wishlistProducts.length === 0 ? (
            <div className="drawer-empty-state">
              <span className="empty-symbol">♡</span>
              <h4>NO SAVED PIECES</h4>
              <p>Mark pieces across the editorial lookbook to save for your in-store consultation.</p>
            </div>
          ) : (
            <div className="drawer-items-list">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="drawer-item">
                  <div className="drawer-item-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={125}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="drawer-item-details">
                    <span className="item-category-tag">{product.categoryName}</span>
                    <h5 className="drawer-item-name">{product.name}</h5>
                    <div className="drawer-item-meta">
                      <span className="drawer-item-price">{product.price}</span>
                    </div>

                    <div className="drawer-item-actions" style={{ marginTop: '0.85rem' }}>
                      <button
                        type="button"
                        className="btn-editorial-red"
                        style={{ padding: '0.45rem 0.9rem', fontSize: '0.75rem' }}
                        onClick={() => {
                          addToCart(product);
                          closeWishlist();
                        }}
                      >
                        ADD TO BAG
                      </button>
                      <button
                        type="button"
                        className="btn-remove-item"
                        onClick={() => toggleWishlist(product.id)}
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
      </aside>
    </div>
  );
}
