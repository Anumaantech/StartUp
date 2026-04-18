import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You!',
  description: 'Thank you for contacting Anumaan Technologies. We will get back to you within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <>
      <section className="thankyou-page">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container thankyou-inner">
          <div className="thankyou-icon animate-float">✅</div>
          <h1 className="thankyou-heading">
            Thank You! <span className="gradient-text">We Got Your Message.</span>
          </h1>
          <p className="thankyou-sub">
            Our team will review your enquiry and get back to you within{' '}
            <strong style={{ color: 'white' }}>24 hours</strong>. In the meantime, feel free to explore our work
            or reach out directly if it&apos;s urgent.
          </p>

          <div className="thankyou-actions">
            <Link href="/" className="btn-primary" id="thankyou-home-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <Link href="/portfolio" className="btn-outline" id="thankyou-portfolio-btn">
              View Our Work
            </Link>
          </div>

          <div className="thankyou-contact-strip glass-card">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>
              📞 Need immediate help?
            </p>
            <div className="thankyou-contact-options">
              <a href="tel:+919999999999" className="thankyou-contact-btn" id="thankyou-call-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.19 12.9 19.79 19.79 0 012.12 4.22 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Us
              </a>
              <a
                href="https://wa.me/917517459054?text=Hi%20Anumaan%20Technologies%2C%20I%20sent%20an%20enquiry%20and%20need%20urgent%20help."
                className="thankyou-contact-btn thankyou-contact-btn--wa"
                target="_blank"
                rel="noopener noreferrer"
                id="thankyou-whatsapp-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a href="mailto:info@anumaantech.com" className="thankyou-contact-btn" id="thankyou-email-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .thankyou-page {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 1.5rem 4rem;
          background: radial-gradient(ellipse at center, rgba(0,102,255,0.08) 0%, transparent 70%);
        }
        .thankyou-inner {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .thankyou-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        .thankyou-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }
        .thankyou-sub {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .thankyou-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .thankyou-contact-strip {
          padding: 2rem;
          text-align: center;
        }
        .thankyou-contact-options {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .thankyou-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: var(--surface-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .thankyou-contact-btn:hover {
          border-color: var(--border-glow);
          color: var(--blue-bright);
          background: rgba(0,170,255,0.08);
          transform: translateY(-2px);
        }
        .thankyou-contact-btn--wa { color: #25D366; }
        .thankyou-contact-btn--wa:hover { border-color: #25D366; color: #25D366; background: rgba(37,211,102,0.08); }
      `}</style>
    </>
  );
}
