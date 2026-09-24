'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { STORE_INFO, PRODUCTS } from '@/data/products';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedCart = localStorage.getItem('padma_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('padma_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch (e) {
      console.error('Failed to load localStorage', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('padma_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('padma_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist, isMounted]);

  // Cart operations
  const addToCart = (product, size = null, quantity = 1) => {
    const selectedSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, size: selectedSize, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Wishlist operations
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Computations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const cartSubtotal = cart.reduce((total, item) => {
    const numericPrice = parseInt(item.product.price.replace(/[^\d]/g, ''), 10) || 0;
    return total + numericPrice * item.quantity;
  }, 0);

  // WhatsApp Order / Inquiry Link
  const getWhatsAppCartUrl = () => {
    if (cart.length === 0) {
      return `https://wa.me/${STORE_INFO.phone}?text=${encodeURIComponent(
        'Hello Padma Men’s Wear, I am browsing your online editorial catalog.'
      )}`;
    }

    let text = `*PADMA MEN'S WEAR // IN-STORE BAG ENQUIRY*\n\n`;
    text += `Hello, I would like to check in-store availability and arrange a trial for the following selection:\n\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n   - Code: ${item.product.id.toUpperCase()}\n   - Size: ${item.size}\n   - Qty: ${item.quantity}\n   - Price: ${item.product.price}\n\n`;
    });

    text += `*Estimated Subtotal:* ₹${cartSubtotal.toLocaleString('en-IN')}\n\n`;
    text += `Could you confirm today's stock and trial timings at your Kariyad boutique? Thank you!`;

    return `https://wa.me/${STORE_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isWishlistOpen,
        isSearchOpen,
        searchQuery,
        activeCategory,
        quickViewProduct,
        cartCount,
        wishlistCount,
        cartSubtotal,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsSearchOpen,
        setSearchQuery,
        setActiveCategory,
        setQuickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        getWhatsAppCartUrl,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        openWishlist: () => setIsWishlistOpen(true),
        closeWishlist: () => setIsWishlistOpen(false),
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        openQuickView: (prod) => setQuickViewProduct(prod),
        closeQuickView: () => setQuickViewProduct(null)
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
