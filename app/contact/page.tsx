'use client';
import Link from 'next/link';


export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '-100px', right: '-100px' }} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Get in Touch</div>
            <h1 className="page-hero__heading">Let&apos;s Build Something <span className="gradient-text">Great Together</span></h1>
            <p className="page-hero__sub">
              Have a project in mind? We&apos;d love to hear about it. Fill out the form or reach us
              directly — we reply within 24 hours.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Info */}
            <div className="contact-info">
              <h2 className="section-heading" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                Contact <span className="gradient-text">Information</span>
              </h2>
              <div className="contact-cards">
                {[
                  { icon: '📞', title: 'Call Us', lines: ['+91 75174 59054', '+91 90211 91320'], href: 'tel:+91 9999999999' },
                  { icon: '✉️', title: 'Email Us', lines: ['info@anumaantech.com'], href: 'mailto:info@anumaantech.com' },
                  { icon: '📍', title: 'Office Address', lines: ['3, Desai nagar, Vakhan Road, Karad, Maharashtra, 415110'], href: 'https://maps.google.com' },
                  { icon: '⏰', title: 'Business Hours', lines: ['Mon – Fri: 9 AM – 7 PM IST', 'Sat: 10 AM – 4 PM IST'], href: null },
                ].map((card, i) => (
                  <a
                    key={i}
                    href={card.href ?? '#'}
                    className="contact-card glass-card"
                    id={`contact-info-card-${i}`}
                    target={i === 2 ? '_blank' : undefined}
                    rel={i === 2 ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: card.href ? 'pointer' : 'default' }}
                  >
                    <span className="contact-card__icon">{card.icon}</span>
                    <div>
                      <p className="contact-card__title">{card.title}</p>
                      {card.lines.map((l, j) => <p key={j} className="contact-card__text">{l}</p>)}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>FOLLOW US</p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((s) => (
                    <a key={s} href="#" className="contact-social-btn" aria-label={s}>{s.charAt(0)}</a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="contact-response glass-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-accent)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>We reply within 24 hours.</strong> For urgent queries, WhatsApp or call us directly.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-wrapper glass-card">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Send Us a Message</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '2rem' }}>Fill in the details and we&apos;ll get back to you shortly.</p>
              <form onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input type="text" id="contact-name" className="form-input" placeholder="Rajesh Kumar" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input type="email" id="contact-email" className="form-input" placeholder="rajesh@company.com" required />
                  </div>
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                    <input type="tel" id="contact-phone" className="form-input" placeholder="+91 99999 99999" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">Service Needed</label>
                    <select id="contact-service" className="form-input">
                      <option value="">Select a service</option>
                      <option>Website Design & Development</option>
                      <option>Web Application Development</option>
                      <option>Mobile App Development</option>
                      <option>Government Software</option>
                      <option>ERP / CRM Solutions</option>
                      <option>AI / Automation</option>
                      <option>IT Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-budget">Approximate Budget</label>
                  <select id="contact-budget" className="form-input">
                    <option value="">Select budget range</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹10,00,000</option>
                    <option>₹10,00,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Project Details *</label>
                  <textarea id="contact-message" className="form-input" rows={5}
                    placeholder="Tell us about your project — what you want to build, your timeline, and any specific requirements..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit-btn">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-wrapper glass-card">
            <div className="map-placeholder">
              <div className="map-placeholder__inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, margin: '0.75rem 0 0.25rem' }}>Our Office</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>3, Desai nagar, Vakhan Road, Karad, Maharashtra, 415110</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: '1rem', padding: '0.625rem 1.5rem', fontSize: '0.875rem' }} id="view-map-btn">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 10rem 0 5rem;
          background: radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.1) 0%, transparent 60%);
          position: relative; overflow: hidden;
        }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2rem, 4vw, 3.5rem); margin: 1rem 0; }
        .page-hero__sub { font-size: 1.125rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; align-items: start; }
        .contact-cards { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        .contact-card {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1.25rem;
          transition: all 0.3s ease;
        }
        .contact-card__icon { font-size: 1.75rem; flex-shrink: 0; }
        .contact-card__title { font-weight: 700; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .contact-card__text { color: var(--text-primary); font-size: 0.938rem; }
        .contact-social-btn {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.875rem; font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .contact-social-btn:hover { background: rgba(0,170,255,0.1); border-color: var(--border-glow); color: var(--blue-bright); }
        .contact-social { margin-bottom: 1.5rem; }
        .contact-response {
          display: flex; align-items: flex-start; gap: 0.875rem;
          padding: 1.25rem;
          border-left: 3px solid var(--cyan-accent) !important;
        }
        .contact-form-wrapper { padding: 2.5rem; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        textarea.form-input { resize: vertical; }
        select.form-input option { background: var(--surface-dropdown); color: var(--text-primary); }
        .map-wrapper { overflow: hidden; }
        .map-placeholder {
          height: 350px;
          background: 
            radial-gradient(circle at 50% 50%, rgba(0,102,255,0.12), transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,170,255,0.06) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,170,255,0.06) 40px);
          display: flex; align-items: center; justify-content: center;
        }
        .map-placeholder__inner { text-align: center; }
        @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .form-row-2 { grid-template-columns: 1fr; } .contact-form-wrapper { padding: 1.5rem; } }
      `}</style>
    </>
  );
}
