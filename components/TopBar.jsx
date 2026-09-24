'use client';

import { useEffect, useState } from 'react';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour + currentMinutes / 60;
    setIsOpen(currentTime >= 9.5 && currentTime <= 20.5);
  }, []);

  return (
    <div className="editorial-topbar">
      <div className="container-fluid topbar-inner">
        <div className="topbar-left">
          <span className="accent-tag">ARCHIVE 2026</span>
          <span className="topbar-text">KARIYAD, PERINGATHUR // KERALA HANDLOOM ATELIER</span>
        </div>

        <div className="topbar-center">
          <span className="status-live-indicator">
            <span className={`status-orb ${isOpen ? 'open' : 'closed'}`}></span>
            {isOpen ? 'BOUTIQUE OPEN TODAY // 9:30 AM – 8:30 PM' : 'VISITS RESUME 9:30 AM'}
          </span>
        </div>

        <div className="topbar-right">
          <a href="tel:8113021038" className="topbar-phone-link">
            <span>DIRECT:</span> +91 81130 21038
          </a>
        </div>
      </div>
    </div>
  );
}
