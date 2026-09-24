'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';

export default function Header() {
  const { cartCount, wishlistCount, openCart, openWishlist, openSearch } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`editorial-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid header-inner">
          {/* Left: Brand Monogram & Name */}
          <div className="header-left">
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              type="button"
            >
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            <Link href="/" className="editorial-logo">
              <span className="logo-main">PADMA</span>
              <span className="logo-sub">KARIYAD // ATELIER</span>
            </Link>
          </div>

          {/* Center: Editorial Nav */}
          <nav className="header-center">
            <ul className="editorial-nav-links">
              <li><a href="#hero">CAMPAIGN</a></li>
              <li><a href="#featured">EDITORIAL</a></li>
              <li><a href="#collection">LOOKBOOK</a></li>
              <li><a href="#categories">ARCHIVE</a></li>
              <li><a href="#store-visit">BOUTIQUE</a></li>
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="header-right">
            {/* Search */}
            <button
              type="button"
              className="action-icon-btn"
              onClick={openSearch}
              aria-label="Search collection"
              title="Search"
            >
              <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="action-icon-btn"
              onClick={openWishlist}
              aria-label="View saved pieces"
              title="Wishlist"
            >
              <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && <span className="action-badge-dot">{wishlistCount}</span>}
            </button>

            {/* Cart / Bag */}
            <button
              type="button"
              className="action-icon-btn bag-btn"
              onClick={openCart}
              aria-label="View shopping bag"
              title="Bag"
            >
              <span className="bag-label">BAG</span>
              <span className="bag-counter">[{cartCount}]</span>
            </button>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/918113021038?text=Hello%20Padma%20Clothing%20Kariyad%2C%20I%20would%20like%20to%20enquire%20about%20your%20menswear%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-wa"
              title="Direct WhatsApp Consultation"
            >
              <span className="live-pulse"></span>
              WHATSAPP
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="logo-main">PADMA</span>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">01</span> CAMPAIGN
                </a>
              </li>
              <li>
                <a href="#featured" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">02</span> EDITORIAL
                </a>
              </li>
              <li>
                <a href="#collection" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">03</span> LOOKBOOK
                </a>
              </li>
              <li>
                <a href="#categories" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">04</span> ARCHIVE
                </a>
              </li>
              <li>
                <a href="#store-visit" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">05</span> BOUTIQUE / VISIT
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>
                  <span className="menu-num">06</span> INQUIRIES
                </a>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <div className="mobile-store-meta">
                <p><strong>LOCATION:</strong> NEAR KNUP SCHOOL, KARIYAD</p>
                <p><strong>HOURS:</strong> 9:30 AM – 8:30 PM</p>
                <p><strong>TEL:</strong> +91 81130 21038</p>
              </div>
              <a
                href="https://wa.me/918113021038"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-red"
                style={{ textAlign: 'center', marginTop: '1rem', width: '100%' }}
              >
                DIRECT WHATSAPP CONCIERGE
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
