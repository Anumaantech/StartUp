import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Anumaan Technologies — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Legal</div>
            <h1 className="page-hero__heading">Privacy <span className="gradient-text">Policy</span></h1>
            <p style={{color:'var(--text-muted)', fontSize:'0.875rem'}}>Last updated: April 18, 2026</p>
            <div className="page-hero__breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Privacy Policy</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content glass-card">
            {[
              { title: '1. Information We Collect', body: 'We collect information you provide directly to us, such as when you fill out a contact form, request a quote, apply for a job, or subscribe to our newsletter. This includes your name, email address, phone number, company name, and project details. We also automatically collect certain information when you visit our website, including IP address, browser type, pages visited, and time spent on pages.' },
              { title: '2. How We Use Your Information', body: 'We use the information we collect to respond to your inquiries and provide our services, send you updates and marketing communications (with your consent), improve our website and services, comply with legal obligations, and process job applications. We do not sell, rent, or trade your personal information to third parties.' },
              { title: '3. Data Security', body: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit using SSL/TLS and at rest where applicable. We conduct regular security audits and our team follows strict data handling protocols.' },
              { title: '4. Cookies', body: 'We use cookies and similar tracking technologies to enhance your experience on our website. Essential cookies are required for the website to function properly. Analytics cookies help us understand how visitors interact with our site. Marketing cookies (only with your consent) allow us to show you relevant advertisements. You can manage cookie preferences through our cookie consent banner.' },
              { title: '5. Your Rights', body: 'Under applicable data protection laws, you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to processing of your data, and withdraw consent at any time. To exercise these rights, contact us at privacy@anumaantech.com.' },
              { title: '6. Third-party Services', body: 'We may use third-party services for analytics (Google Analytics), email communication, payment processing, and cloud hosting. These services have their own privacy policies and may collect data as described therein. We ensure all third-party providers comply with applicable data protection regulations.' },
              { title: '7. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending an email. Your continued use of our services after such changes constitutes acceptance of the updated policy.' },
              { title: '8. Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at:\n\nAnumaan Technologies\n123, Tech Hub, Sector 62, Noida, UP 201309\nEmail: privacy@anumaantech.com\nPhone: +91 99999 99999' },
            ].map((section, i) => (
              <div key={i} className="legal-section">
                <h2 className="legal-section__title">{section.title}</h2>
                <p className="legal-section__body">{section.body}</p>
              </div>
            ))}
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
        .legal-section__body { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.8; white-space: pre-line; }
        @media (max-width: 640px) { .legal-content { padding: 1.5rem; } }
      `}</style>
    </>
  );
}
