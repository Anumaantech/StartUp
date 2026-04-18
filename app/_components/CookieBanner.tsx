'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie__text">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2" style={{flexShrink:0}}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p style={{fontSize:'0.875rem', color:'var(--text-secondary)', margin:0}}>
          We use cookies to enhance your experience. By continuing, you agree to our{' '}
          <a href="/cookie-policy" style={{color:'var(--blue-bright)', textDecoration:'none'}}>Cookie Policy</a>.
        </p>
      </div>
      <div className="cookie__actions">
        <button onClick={decline} className="cookie__decline-btn" id="cookie-decline-btn">Decline</button>
        <button onClick={accept} className="btn-primary" id="cookie-accept-btn" style={{padding:'0.5rem 1.5rem', fontSize:'0.875rem'}}>
          <span>Accept All</span>
        </button>
      </div>
      <style>{`
        .cookie__text { display: flex; align-items: flex-start; gap: 0.75rem; flex: 1; }
        .cookie__actions { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .cookie__decline-btn {
          padding: 0.5rem 1.25rem;
          background: none;
          border: 1px solid var(--border-subtle);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-sans);
        }
        .cookie__decline-btn:hover { border-color: var(--text-secondary); color: white; }
        @media (max-width: 640px) {
          .cookie-banner { flex-direction: column; align-items: flex-start; padding: 1rem; }
        }
      `}</style>
    </div>
  );
}
