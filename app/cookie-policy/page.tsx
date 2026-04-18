import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Anumaan Technologies — how we use cookies to improve your experience.',
};

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      purpose: 'Required for the website to function. They enable basic features like page navigation and access to secure areas.',
      examples: 'Session cookies, authentication tokens',
      canDisable: false,
    },
    {
      name: 'Analytics Cookies',
      purpose: 'Help us understand how visitors interact with our website by collecting anonymous data on pages visited, time spent, and traffic sources.',
      examples: 'Google Analytics (_ga, _gid)',
      canDisable: true,
    },
    {
      name: 'Marketing Cookies',
      purpose: 'Used to track visitors across websites to display relevant advertisements. Set only with your explicit consent.',
      examples: 'Google Ads, Facebook Pixel',
      canDisable: true,
    },
    {
      name: 'Preference Cookies',
      purpose: 'Remember your settings and preferences to provide a more personalised experience on repeat visits.',
      examples: 'Language preferences, theme settings',
      canDisable: true,
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Legal</div>
            <h1 className="page-hero__heading">Cookie <span className="gradient-text">Policy</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: April 18, 2026</p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content glass-card">
            <div className="legal-section">
              <h2 className="legal-section__title">What Are Cookies?</h2>
              <p className="legal-section__body">
                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and actions over time. Cookies are harmless and do not contain personal information like passwords or credit card numbers.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">Types of Cookies We Use</h2>
              <div className="cookie-table">
                {cookieTypes.map((c, i) => (
                  <div key={i} className="cookie-row glass-card">
                    <div className="cookie-row__header">
                      <h3 className="cookie-row__name">{c.name}</h3>
                      <span className={`badge ${c.canDisable ? 'badge-purple' : 'badge-blue'}`}>
                        {c.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="cookie-row__purpose">{c.purpose}</p>
                    <p className="cookie-row__examples">
                      <strong style={{ color: 'var(--text-secondary)' }}>Examples: </strong>
                      {c.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">Managing Cookies</h2>
              <p className="legal-section__body">
                You can control and manage cookies in your browser settings. Most browsers allow you to refuse new cookies, accept or decline specific cookies, and delete existing cookies. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">Your Consent</h2>
              <p className="legal-section__body">
                When you first visit our website, you will see a cookie consent banner. By clicking "Accept All", you consent to all cookies described in this policy. You can change your preferences at any time by clearing your browser cookies and revisiting the site.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">Contact</h2>
              <p className="legal-section__body">
                {`For any questions about our Cookie Policy, contact us at privacy@anumaantech.com`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { padding: 10rem 0 4rem; background: radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.07) 0%, transparent 60%); position: relative; overflow: hidden; }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2rem, 4vw, 3rem); margin: 1rem 0; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); margin-top: 1rem; }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .legal-content { padding: 3rem; max-width: 800px; margin: 0 auto; }
        .legal-section { margin-bottom: 2.5rem; }
        .legal-section:last-child { margin-bottom: 0; }
        .legal-section__title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--blue-bright); }
        .legal-section__body { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.8; }
        .cookie-table { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
        .cookie-row { padding: 1.5rem; }
        .cookie-row__header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.75rem; }
        .cookie-row__name { font-family: var(--font-display); font-weight: 700; font-size: 1rem; }
        .cookie-row__purpose { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; margin-bottom: 0.375rem; }
        .cookie-row__examples { font-size: 0.813rem; color: var(--text-muted); }
        @media (max-width: 640px) { .legal-content { padding: 1.5rem; } }
      `}</style>
    </>
  );
}
