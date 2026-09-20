import Image from 'next/image';

export default function ProductCard({ product, onQuickView }) {
  const getWhatsAppUrl = () => {
    const basePhone = '918113021038';
    const text = `Hello Padma Clothing (Kariyad), I am interested in viewing / checking in-store availability for:\n\n*Product:* ${product.name}\n*Item Code:* ${product.id}\n*Category:* ${product.categoryName}\n*Ref Price:* ${product.price}\n\nCould you please let me know if this is currently in stock at your Kariyad store?`;
    return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <article className="product-card" data-id={product.id}>
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span className="product-badge">{product.badge}</span>
        <button
          className="product-quick-btn"
          onClick={() => onQuickView(product)}
          type="button"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Quick View
        </button>
      </div>

      <div className="product-content">
        <span className="product-category-label">{product.categoryName}</span>
        <h3 className="product-title" title={product.name}>{product.name}</h3>

        <div className="product-meta-row">
          <div className="product-meta-item">
            <strong>Fabric:</strong> {product.fabric}
          </div>
          <div className="product-meta-item">
            <strong>Shade:</strong> {product.color}
          </div>
        </div>

        <div className="product-footer">
          <div className="product-price-box">
            <span className="price-label">In-Store Price</span>
            <span className="product-price">{product.price}</span>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ask-whatsapp"
            title="Ask details on WhatsApp"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            Ask Details
          </a>
        </div>
      </div>
    </article>
  );
}
