import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Anumaan Technologies\' services, process, pricing, and support.',
};

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'What kind of IT company is Anumaan Technologies?', a: 'We are a full-service IT company based in India specializing in web development, mobile apps, government software, ERP/CRM solutions, and AI automation. We serve both private enterprises and government organizations.' },
      { q: 'How many years of experience do you have?', a: 'Anumaan Technologies was founded in 2018, giving us 6+ years of experience. We\'ve successfully delivered 150+ projects across various industries.' },
      { q: 'Do you work with government clients?', a: 'Yes! Government and public sector projects are a core part of our business. We build NIC-compliant, highly secure solutions for central and state government departments.' },
    ]
  },
  {
    category: 'Process & Timeline',
    items: [
      { q: 'How long does a website or app take to develop?', a: 'A basic website takes 2–3 weeks. A web application or mobile app typically takes 6–16 weeks depending on complexity. We provide a detailed timeline before project start.' },
      { q: 'Do you provide project updates?', a: 'Yes, we follow an agile methodology with weekly sprint updates. You\'ll always know what stage the project is at through regular calls and our project management portal.' },
      { q: 'What information do you need to start a project?', a: 'We start with a discovery call to understand your requirements, target audience, budget, and timeline. Post that, we create a detailed SRS (Software Requirements Specification) document.' },
    ]
  },
  {
    category: 'Pricing & Payments',
    items: [
      { q: 'How much does a website cost?', a: 'A basic website starts at ₹49,999. Business websites range from ₹1–3 lakhs. Custom web applications and enterprise solutions are quoted based on scope. Contact us for a free estimate.' },
      { q: 'What is your payment structure?', a: 'We typically work on a 40-40-20 model: 40% upfront, 40% at project midpoint/milestone, and 20% on final delivery and approval.' },
      { q: 'Do you offer EMI or payment plans?', a: 'For larger projects (₹2L+), we offer flexible installment plans. Contact us to discuss what works best for your budget.' },
    ]
  },
  {
    category: 'Technical',
    items: [
      { q: 'Will I own the source code?', a: 'Absolutely. Upon final payment, you receive 100% ownership of all source code, design assets, databases, and documentation. We also provide a knowledge transfer session.' },
      { q: 'Do you provide hosting and domain services?', a: 'Yes, we offer managed cloud hosting starting at ₹2,999/month with AWS/GCP infrastructure and a 99.9% uptime SLA. We can also host on your existing infrastructure.' },
      { q: 'What technologies do you work with?', a: 'We work with React, Next.js, Node.js, Python, Django, Flutter, React Native, Java, AWS, GCP, Docker, Kubernetes, MongoDB, PostgreSQL, and many more modern technologies.' },
    ]
  },
  {
    category: 'Support & Maintenance',
    items: [
      { q: 'What post-launch support do you provide?', a: 'All projects include a free bug-fix warranty period (1–3 months based on plan). We also offer Annual Maintenance Contracts (AMC) for ongoing support, updates, and monitoring.' },
      { q: 'How quickly do you respond to issues?', a: 'On AMC plans, we guarantee response within 4 hours for critical issues and 24 hours for standard issues. For non-AMC clients, response time is within 48 hours.' },
    ]
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'-100px', left:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">FAQ</div>
            <h1 className="page-hero__heading">Frequently Asked <span className="gradient-text">Questions</span></h1>
            <p className="page-hero__sub">Everything you need to know about working with Anumaan Technologies. Can&apos;t find your answer? <Link href="/contact" style={{color:'var(--blue-bright)', textDecoration:'none'}}>Contact us</Link>.</p>
            <div className="page-hero__breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>FAQ</span></div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <div className="faq-page-grid">
            {faqs.map((section, si) => (
              <div key={si} className="faq-section">
                <h2 className="faq-section__title">{section.category}</h2>
                <div className="faq-section__items">
                  {section.items.map((item, ii) => (
                    <details key={ii} className="faq-detail glass-card" id={`faq-${si}-${ii}`}>
                      <summary className="faq-detail__summary">
                        {item.q}
                        <svg className="faq-detail__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </summary>
                      <p className="faq-detail__answer">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background:'var(--surface-hover)', textAlign:'center'}}>
        <div className="container">
          <h2 className="section-heading">Still Have <span className="gradient-text">Questions?</span></h2>
          <p style={{color:'var(--text-secondary)', maxWidth:'450px', margin:'1rem auto 2rem'}}>Our team is happy to answer any questions. Get in touch and we&apos;ll respond within 24 hours.</p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/contact" className="btn-primary" id="faq-contact-btn">
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="https://wa.me/919999999999" className="btn-outline" id="faq-whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { padding: 10rem 0 5rem; background: radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.1) 0%, transparent 60%); position: relative; overflow: hidden; }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2rem, 4vw, 3.5rem); margin: 1rem 0; }
        .page-hero__sub { font-size: 1.125rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .faq-page-grid { display: flex; flex-direction: column; gap: 3rem; max-width: 860px; margin: 0 auto; }
        .faq-section__title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--blue-bright); }
        .faq-section__items { display: flex; flex-direction: column; gap: 0.75rem; }
        .faq-detail { padding: 0; list-style: none; }
        .faq-detail__summary {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          font-weight: 600; font-size: 1rem;
          font-family: var(--font-display);
          list-style: none;
        }
        .faq-detail__summary::-webkit-details-marker { display: none; }
        .faq-detail__summary:hover { color: var(--blue-bright); }
        .faq-detail[open] .faq-detail__arrow { transform: rotate(180deg); }
        .faq-detail__arrow { flex-shrink: 0; color: var(--text-muted); transition: transform 0.3s ease; }
        .faq-detail__answer { padding: 0 1.5rem 1.5rem; color: var(--text-secondary); font-size: 0.938rem; line-height: 1.7; border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-top: -0.25rem; }
      `}</style>
    </>
  );
}
