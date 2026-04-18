'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Website Design & Development', href: '/services/web-design' },
      { label: 'Web Application Development', href: '/services/web-app' },
      { label: 'Mobile App Development', href: '/services/mobile-app' },
      { label: 'Government Software Solutions', href: '/services/government' },
      { label: 'ERP / CRM Solutions', href: '/services/erp-crm' },
      { label: 'Coaching Institute Software', href: '/services/coaching' },
      { label: 'IT Consulting & Strategy', href: '/services/consulting' },
      { label: 'Cloud & Hosting Solutions', href: '/services/cloud' },
      { label: 'UI/UX Design', href: '/services/uiux' },
      { label: 'Maintenance & AMC', href: '/services/maintenance' },
      { label: 'AI / Automation Solutions', href: '/services/ai-automation' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="navbar__logo" aria-label="Anumaan Technologies Home">
            <div className="navbar__logo-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff"/>
                    <stop offset="100%" stopColor="#00aaff"/>
                  </linearGradient>
                </defs>
                <rect width="36" height="36" rx="10" fill="url(#logoGrad)"/>
                <path d="M8 26L18 10L28 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M11 21h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="28" cy="10" r="2.5" fill="#00f5d4"/>
              </svg>
            </div>
            <span className="navbar__logo-text">
              <span className="gradient-text-blue">Anumaan</span>
              <span> Technologies</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar__links" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} className="navbar__item" role="none">
                {link.children ? (
                  <div className="navbar__dropdown-wrapper">
                    <button
                      className="navbar__link navbar__link--dropdown"
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                           style={{transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease'}}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <div className="navbar__dropdown" role="menu">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} className="navbar__dropdown-item" role="menuitem"
                                onClick={() => setActiveDropdown(null)}>
                            <span className="navbar__dropdown-dot" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} className="navbar__link" role="menuitem">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <Link href="/contact" className="btn-primary" id="navbar-cta-btn">
              <span>Get a Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <button
              className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <div className="mobile-menu__content">
          {navLinks.map((link) => (
            <div key={link.href} className="mobile-menu__section">
              <Link href={link.href} className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
              {link.children && (
                <div className="mobile-menu__sub">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="mobile-menu__sub-link" onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary" style={{marginTop:'1rem'}} onClick={() => setMobileOpen(false)}>
            <span>Get a Quote</span>
          </Link>
        </div>
      </div>
      {mobileOpen && <div className="mobile-menu__overlay" onClick={() => setMobileOpen(false)} />}

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 8000;
          padding: 1rem 0;
          transition: all 0.4s ease;
        }
        .navbar--scrolled {
          background: rgba(5,13,24,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 0.75rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: white;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
          letter-spacing: -0.01em;
        }
        .navbar__logo-icon { flex-shrink: 0; }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar__link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          white-space: nowrap;
        }
        .navbar__link:hover, .navbar__link--dropdown:hover { color: white; background: rgba(255,255,255,0.06); }
        .navbar__dropdown-wrapper { position: relative; }
        .navbar__dropdown {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(8,18,35,0.97);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-subtle);
          border-radius: 1rem;
          padding: 0.75rem;
          min-width: 280px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.25rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          animation: fade-in-up 0.2s ease;
          z-index: 100;
        }
        .navbar__dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.625rem 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.813rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }
        .navbar__dropdown-item:hover { color: var(--blue-bright); background: rgba(0,170,255,0.08); }
        .navbar__dropdown-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--blue-bright);
          flex-shrink: 0;
        }
        .navbar__actions { display: flex; align-items: center; gap: 1rem; }
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        .navbar__hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .navbar__hamburger.open span:nth-child(2) { opacity: 0; }
        .navbar__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .mobile-menu {
          position: fixed;
          top: 0; right: -100%;
          width: min(380px, 100vw);
          height: 100dvh;
          background: rgba(5,13,24,0.98);
          backdrop-filter: blur(30px);
          border-left: 1px solid var(--border-subtle);
          z-index: 8500;
          transition: right 0.4s var(--ease-smooth);
          overflow-y: auto;
        }
        .mobile-menu--open { right: 0; }
        .mobile-menu__content {
          padding: 5rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-menu__link {
          display: block;
          padding: 0.75rem 1rem;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 0.75rem;
          transition: all 0.2s ease;
        }
        .mobile-menu__link:hover { background: rgba(255,255,255,0.06); color: var(--blue-bright); }
        .mobile-menu__sub { margin-left: 1rem; }
        .mobile-menu__sub-link {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.875rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }
        .mobile-menu__sub-link:hover { color: var(--blue-bright); }
        .mobile-menu__overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 8400;
          backdrop-filter: blur(4px);
        }
        @media (max-width: 1100px) {
          .navbar__links { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar__actions .btn-primary { padding: 0.625rem 1.25rem; font-size: 0.813rem; }
        }
      `}</style>
    </>
  );
}
