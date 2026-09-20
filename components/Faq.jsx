'use client';

import { useState } from 'react';
import { STORE_FAQS } from '@/data/products';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faqs-section" id="faqs">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Everything you need to know about shopping at Padma Men's Wear, Kariyad.</p>
        </div>

        <div className="faq-list">
          {STORE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? '250px' : '0',
                    paddingBottom: isOpen ? '1.5rem' : '0'
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
