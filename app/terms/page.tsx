import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using Anumaan Technologies services and website.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using any services provided by Anumaan Technologies ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all clients, visitors, and users of our services.',
  },
  {
    title: '2. Services',
    body: 'Anumaan Technologies provides IT consulting, software development, web design, mobile application development, and related digital services. The specific scope of services for each engagement is defined in the respective Service Agreement or Statement of Work (SoW) signed between both parties.',
  },
  {
    title: '3. Intellectual Property',
    body: 'Upon full payment of all agreed fees, the client receives full ownership of all custom code, designs, and deliverables created specifically for their project. Anumaan Technologies retains ownership of all pre-existing tools, frameworks, libraries, and methodologies used in the development process. We reserve the right to showcase the work in our portfolio unless explicitly restricted by a Non-Disclosure Agreement (NDA).',
  },
  {
    title: '4. Payment Terms',
    body: 'Payment terms are as specified in the project agreement. Standard terms require a percentage upfront before work begins, with the balance due upon project milestones or completion. Late payments may attract a penalty of 1.5% per month. Work may be paused or suspended for accounts with overdue payments beyond 30 days.',
  },
  {
    title: '5. Project Timeline & Delays',
    body: 'Anumaan Technologies will make all reasonable efforts to deliver projects on the agreed timeline. We are not responsible for delays caused by: client delays in providing required materials/feedback, changes in project scope requested by the client, third-party dependencies outside our control, or force majeure events.',
  },
  {
    title: '6. Confidentiality',
    body: 'Both parties agree to keep confidential any proprietary information shared during the engagement. We respect client data and business information and will not disclose it to third parties without explicit consent. Clients may request a separate NDA for additional protection of sensitive information.',
  },
  {
    title: '7. Limitation of Liability',
    body: 'Anumaan Technologies\'s liability for any claims arising from our services shall be limited to the total fees paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages, loss of revenue, or lost profits arising from the use of our deliverables.',
  },
  {
    title: '8. Warranty',
    body: 'We provide a warranty period (as specified in the project agreement, typically 30–90 days) during which we will fix bugs or defects in the delivered work at no additional cost. This warranty does not cover issues caused by client modifications, third-party integrations, or server environment changes.',
  },
  {
    title: '9. Governing Law',
    body: 'These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India. We encourage resolving disputes amicably through mutual negotiation before resorting to legal action.',
  },
  {
    title: '10. Changes to Terms',
    body: 'We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes are posted constitutes acceptance of the new terms.',
  },
  {
    title: '11. Contact',
    body: 'For any questions about these Terms and Conditions, please contact:\n\nAnumaan Technologies\n123, Tech Hub, Sector 62, Noida, UP 201309\nEmail: legal@anumaantech.com\nPhone: +91 99999 99999',
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Legal</div>
            <h1 className="page-hero__heading">Terms & <span className="gradient-text">Conditions</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: April 18, 2026</p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content glass-card">
            <p className="legal-intro">
              Please read these Terms and Conditions carefully before using our services. By engaging with
              Anumaan Technologies, you acknowledge that you have read, understood, and agree to be bound
              by these terms.
            </p>
            {sections.map((s, i) => (
              <div key={i} className="legal-section">
                <h2 className="legal-section__title">{s.title}</h2>
                <p className="legal-section__body">{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/contact" className="btn-primary" id="terms-contact-btn">
              <span>Contact Us With Questions</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
        .legal-intro { color: var(--text-secondary); font-size: 1rem; line-height: 1.8; margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); font-style: italic; }
        .legal-section { margin-bottom: 2.5rem; }
        .legal-section:last-child { margin-bottom: 0; }
        .legal-section__title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--blue-bright); }
        .legal-section__body { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.8; white-space: pre-line; }
        @media (max-width: 640px) { .legal-content { padding: 1.5rem; } }
      `}</style>
    </>
  );
}
