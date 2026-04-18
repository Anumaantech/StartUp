'use client';
import Link from 'next/link';

const services = [
  { label: 'Web Design & Development', href: '/services/web-design' },
  { label: 'Web Application Development', href: '/services/web-app' },
  { label: 'Mobile App Development', href: '/services/mobile-app' },
  { label: 'Government Software', href: '/services/government' },
  { label: 'ERP / CRM Solutions', href: '/services/erp-crm' },
  { label: 'AI / Automation', href: '/services/ai-automation' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Banner inside footer top */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-content">
            <div className="section-label">🚀 Ready to Start?</div>
            <h2 className="footer__cta-heading">Ready to build something <span className="gradient-text">great?</span></h2>
            <p className="footer__cta-sub">Let&apos;s transform your vision into reality. Talk to our experts today.</p>
          </div>
          <div className="footer__cta-actions">
            <Link href="/contact" className="btn-primary" id="footer-cta-contact-btn">
              <span>Let&apos;s Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="tel:+91 7517459054" className="btn-outline" id="footer-cta-call-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link href="/" className="footer__logo" aria-label="Anumaan Technologies">
                <div className="footer__logo-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066ff"/>
                        <stop offset="100%" stopColor="#00aaff"/>
                      </linearGradient>
                    </defs>
                    <rect width="36" height="36" rx="10" fill="url(#footerLogoGrad)"/>
                    <path d="M8 26L18 10L28 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M11 21h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="28" cy="10" r="2.5" fill="#00f5d4"/>
                  </svg>
                </div>
                <span className="footer__logo-text">
                  <span className="gradient-text-blue">Anumaan</span> Technologies
                </span>
              </Link>
              <p className="footer__brand-desc">
                We build cutting-edge digital solutions for businesses across India. From government portals to AI-powered applications — we deliver excellence.
              </p>
              {/* Social Links */}
              <div className="footer__socials">
                {[
                  { href: '#', label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { href: '#', label: 'Twitter/X', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { href: '#', label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01 M7.56 2h8.88A5.56 5.56 0 0122 7.56v8.88A5.56 5.56 0 0116.44 22H7.56A5.56 5.56 0 012 16.44V7.56A5.56 5.56 0 017.56 2z' },
                  { href: '#', label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                ].map((s) => (
                  <a key={s.label} href={s.href} className="footer__social-link" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h3 className="footer__col-title">Services</h3>
              <ul className="footer__links-list">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="footer__link">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__col-title">Company</h3>
              <ul className="footer__links-list">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer__link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact</h3>
              <div className="footer__contact-list">
                {[
                  { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.19 12.9 19.79 19.79 0 012.12 4.22 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', text: '+91 9021191320', href: 'tel:+91 7517459054' },
                  { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', text: 'info@anumaantech.com', href: 'mailto:info@anumaantech.com' },
                  { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a1 1 0 100-2 1 1 0 000 2z', text: 'Karad, India', href: 'https://maps.google.com' },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="footer__contact-item" target={i === 2 ? '_blank' : undefined} rel={i === 2 ? 'noopener noreferrer' : undefined}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon}/>
                    </svg>
                    <span>{c.text}</span>
                  </a>
                ))}
              </div>
              {/* Newsletter */}
              <div className="footer__newsletter">
                <p className="footer__newsletter-label">Get tech insights in your inbox</p>
                <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="your@email.com" className="footer__newsletter-input" id="footer-newsletter-input" aria-label="Email for newsletter"/>
                  <button type="submit" className="footer__newsletter-btn" id="footer-newsletter-submit-btn" aria-label="Subscribe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Anumaan Technologies. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="footer__legal">
              {legal.map((l) => (
                <Link key={l.href} href={l.href} className="footer__legal-link">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer { background: var(--navy-900); }
        .footer__cta {
          background: linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(124,58,237,0.15) 100%);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          padding: 4rem 0;
        }
        .footer__cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer__cta-heading { font-size: clamp(1.75rem, 3vw, 2.5rem); margin: 0.5rem 0; }
        .footer__cta-sub { color: var(--text-secondary); }
        .footer__cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .footer__main { padding: 4rem 0 0; }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .footer__logo {
          display: flex; align-items: center; gap: 0.75rem;
          text-decoration: none; color: var(--text-primary);
          font-family: var(--font-display); font-weight: 700; font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .footer__brand-desc {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .footer__socials { display: flex; gap: 0.75rem; }
        .footer__social-link {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .footer__social-link:hover {
          background: rgba(0,170,255,0.1);
          border-color: var(--border-glow);
          color: var(--blue-bright);
          transform: translateY(-2px);
        }
        .footer__col-title {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .footer__links-list { list-style: none; display: flex; flex-direction: column; gap: 0.625rem; }
        .footer__link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          display: flex; align-items: center; gap: 0.375rem;
        }
        .footer__link::before { content: '›'; color: var(--blue-bright); opacity: 0; transition: all 0.2s ease; }
        .footer__link:hover { color: var(--text-primary); padding-left: 0.5rem; }
        .footer__link:hover::before { opacity: 1; }
        .footer__contact-list { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
        .footer__contact-item {
          display: flex; align-items: center; gap: 0.75rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }
        .footer__contact-item:hover { color: var(--blue-bright); }
        .footer__contact-item svg { color: var(--blue-bright); flex-shrink: 0; }
        .footer__newsletter-label {
          font-size: 0.813rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        .footer__newsletter-form {
          display: flex;
          background: var(--surface-input);
          border: 1px solid var(--border-subtle);
          border-radius: 0.75rem;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .footer__newsletter-form:focus-within { border-color: var(--border-glow); }
        .footer__newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-family: var(--font-sans);
        }
        .footer__newsletter-input::placeholder { color: var(--text-muted); }
        .footer__newsletter-btn {
          padding: 0 1rem;
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright));
          border: none;
          cursor: pointer;
          color: white;
          display: flex; align-items: center;
          transition: opacity 0.2s ease;
        }
        .footer__newsletter-btn:hover { opacity: 0.85; }
        .footer__bottom {
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer__copyright { color: var(--text-muted); font-size: 0.813rem; }
        .footer__legal { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .footer__legal-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.813rem;
          transition: color 0.2s ease;
        }
        .footer__legal-link:hover { color: var(--blue-bright); }
        @media (max-width: 1024px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
          .footer__brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer__grid { grid-template-columns: 1fr; }
          .footer__brand { grid-column: 1; }
          .footer__cta-actions { flex-direction: column; }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
