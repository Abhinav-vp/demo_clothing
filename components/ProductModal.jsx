'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const basePhone = '918113021038';
  const text = `Hello Padma Clothing (Kariyad), I am interested in viewing / checking in-store availability for:\n\n*Product:* ${product.name}\n*Item Code:* ${product.id}\n*Category:* ${product.categoryName}\n*Ref Price:* ${product.price}\n\nCould you please let me know if this is currently in stock at your Kariyad store?`;
  const waLink = `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;

  return (
    <div className="modal-backdrop active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-grid">
          <div className="modal-image-col">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="modal-details-col">
            <span className="modal-tag">{product.categoryName}</span>
            <h2 className="modal-title">{product.name}</h2>

            <div className="modal-price-row">
              <span className="modal-price">{product.price}</span>
              <span className="modal-badge-pill">{product.badge}</span>
            </div>

            <p className="modal-desc">{product.description}</p>

            <div className="modal-specs-table">
              <div className="spec-item">
                <span className="spec-label">Fabric / Weave</span>
                <span className="spec-value">{product.fabric}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Color & Tone</span>
                <span className="spec-value">{product.color}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Cut & Fit</span>
                <span className="spec-value">{product.fit}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Product Code</span>
                <span className="spec-value">{product.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="modal-sizes-box">
              <span className="modal-sizes-label">Available Sizes in Store:</span>
              <div className="size-chips">
                {product.sizes.map(s => (
                  <span key={s} className="size-chip">{s}</span>
                ))}
              </div>
            </div>

            <div className="in-store-notice">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong>In-Store Exclusive Experience:</strong>
                <p>We do not offer shipping or delivery. You are welcome to visit our boutique in Kariyad to try on this outfit, feel the fabric, and request alterations.</p>
              </div>
            </div>

            <div className="modal-actions">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-modal">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                Ask In-Store Details on WhatsApp
              </a>
              <a href="tel:8113021038" className="btn-call-modal">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Store (+91 81130 21038)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
