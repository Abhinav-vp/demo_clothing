// Padma Men's Wear & Textiles (Kariyad) - App Logic

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const searchInput = document.getElementById('search-input');
  const resultsCount = document.getElementById('results-count');
  const reviewsGrid = document.getElementById('reviews-grid');
  const faqList = document.getElementById('faq-list');
  const modalBackdrop = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const storeStatusPill = document.getElementById('store-status-pill');

  // Check store opening hours (9:30 AM to 8:30 PM IST)
  function updateStoreStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour + currentMinutes / 60;

    // 9:30 AM is 9.5, 8:30 PM is 20.5
    const isOpen = currentTime >= 9.5 && currentTime <= 20.5;

    if (storeStatusPill) {
      if (isOpen) {
        storeStatusPill.innerHTML = `<span class="status-dot"></span> Open Today until 8:30 PM`;
      } else {
        storeStatusPill.innerHTML = `<span class="status-dot" style="background-color: #f59e0b; box-shadow: 0 0 10px #f59e0b;"></span> Opens Tomorrow at 9:30 AM`;
      }
    }
  }
  updateStoreStatus();

  // Generate WhatsApp Enquiry URL
  function getWhatsAppUrl(product, customMessage = '') {
    const basePhone = '918113021038';
    let text = `Hello Padma Clothing (Kariyad), I am interested in viewing / checking in-store availability for:\n\n*Product:* ${product.name}\n*Item Code:* ${product.id}\n*Category:* ${product.categoryName}\n*Ref Price:* ${product.price}\n\nCould you please let me know if this is currently in stock at your Kariyad store?`;
    if (customMessage) {
      text += `\n*Note:* ${customMessage}`;
    }
    return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
  }

  // Render Products
  function renderProducts() {
    if (!productsGrid) return;

    let filtered = PRODUCTS.filter(item => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.color.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (resultsCount) {
      resultsCount.innerHTML = `Showing <span>${filtered.length}</span> luxury men's designs`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="empty-catalog-state">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3>No matching men's attire found</h3>
          <p>Try searching for Kasavu, Silk Kurta, Linen Shirt, or Sherwani, or browse all categories.</p>
          <button class="btn-primary" style="margin-top: 1.5rem;" onclick="resetFilters()">View All Collections</button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => {
      const waLink = getWhatsAppUrl(item);
      return `
        <article class="product-card" data-id="${item.id}">
          <div class="product-image-container">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="product-badge">${item.badge}</span>
            <button class="product-quick-btn" onclick="openProductModal('${item.id}')">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Quick View
            </button>
          </div>

          <div class="product-content">
            <span class="product-category-label">${item.categoryName}</span>
            <h3 class="product-title" title="${item.name}">${item.name}</h3>

            <div class="product-meta-row">
              <div class="product-meta-item">
                <strong>Fabric:</strong> ${item.fabric}
              </div>
              <div class="product-meta-item">
                <strong>Shade:</strong> ${item.color}
              </div>
            </div>

            <div class="product-footer">
              <div class="product-price-box">
                <span class="price-label">In-Store Price</span>
                <span class="product-price">${item.price}</span>
              </div>
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-ask-whatsapp" title="Ask details on WhatsApp">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                Ask Details
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Reset Filters helper
  window.resetFilters = function() {
    currentCategory = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === 'all');
    });
    renderProducts();
  };

  // Category Tab Click
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Search Input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Open Product Modal
  window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !modalBackdrop) return;

    const modalBody = document.getElementById('modal-dynamic-body');
    const waLink = getWhatsAppUrl(product);

    modalBody.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image-col">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="modal-details-col">
          <span class="modal-tag">${product.categoryName}</span>
          <h2 class="modal-title">${product.name}</h2>

          <div class="modal-price-row">
            <span class="modal-price">${product.price}</span>
            <span class="modal-badge-pill">${product.badge}</span>
          </div>

          <p class="modal-desc">${product.description}</p>

          <div class="modal-specs-table">
            <div class="spec-item">
              <span class="spec-label">Fabric / Weave</span>
              <span class="spec-value">${product.fabric}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Color & Tone</span>
              <span class="spec-value">${product.color}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Cut & Fit</span>
              <span class="spec-value">${product.fit}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Product Code</span>
              <span class="spec-value">${product.id.toUpperCase()}</span>
            </div>
          </div>

          <div class="modal-sizes-box">
            <span class="modal-sizes-label">Available Sizes in Store:</span>
            <div class="size-chips">
              ${product.sizes.map(s => `<span class="size-chip">${s}</span>`).join('')}
            </div>
          </div>

          <div class="in-store-notice">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <strong>In-Store Exclusive Experience:</strong>
              <p>We do not offer shipping or delivery. You are welcome to visit our boutique in Kariyad to try on this outfit, feel the fabric, and request alterations.</p>
            </div>
          </div>

          <div class="modal-actions">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-modal">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              Ask In-Store Details on WhatsApp
            </a>
            <a href="tel:8113021038" class="btn-call-modal">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Store (+91 81130 21038)
            </a>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Modal
  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Render Reviews
  if (reviewsGrid) {
    reviewsGrid.innerHTML = REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-stars">
          ${'★'.repeat(r.rating)}
        </div>
        <p class="review-comment">"${r.comment}"</p>
        <div class="reviewer-meta">
          <div class="reviewer-avatar">${r.name.charAt(0)}</div>
          <div class="reviewer-info">
            <h5>${r.name}</h5>
            <p>${r.location} • ${r.date}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render FAQs
  if (faqList) {
    faqList.innerHTML = STORE_FAQS.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'open' : ''}">
        <button class="faq-question-btn" onclick="toggleFaq(this)">
          <span>${faq.q}</span>
          <span class="faq-icon">▼</span>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  }

  window.toggleFaq = function(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
    }
  };

  // Initial render
  renderProducts();
});
