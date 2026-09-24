'use client';

import { useState } from 'react';
import { STORE_FAQS } from '@/data/products';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="editorial-faq-section" id="faqs">
      <div className="container-fluid">
        <div className="editorial-section-header">
          <div className="header-eyebrow">
            <span className="red-dot"></span>
            <span>CUSTOMER ASSISTANCE // INQUIRIES</span>
          </div>
          <h2 className="editorial-huge-heading">FREQUENT INQUIRIES</h2>
        </div>

        <div className="editorial-faq-list">
          {STORE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`editorial-faq-row ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-num">0{index + 1}</span>
                  <span className="faq-question-title">{faq.q}</span>
                  <span className="faq-toggle-glyph">{isOpen ? '—' : '+'}</span>
                </button>
                <div
                  className="faq-accordion-body"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0
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
