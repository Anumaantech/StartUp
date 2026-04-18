import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Transparent pricing for web design, app development, and software solutions. Find the right package for your business.',
};

const plans = [
  {
    name: 'Starter',
    badge: null,
    price: '₹49,999',
    period: 'one-time',
    desc: 'Perfect for small businesses and startups looking to establish an online presence.',
    features: [
      '5-page professional website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      'Google Analytics setup',
      '1 month free support',
      'SSL certificate',
      '1 revision round',
    ],
    notIncluded: ['CMS/Admin panel', 'E-commerce features', 'Custom integrations'],
    cta: 'Get Started',
    color: '#0066ff',
  },
  {
    name: 'Business',
    badge: 'Most Popular',
    price: '₹1,49,999',
    period: 'one-time',
    desc: 'For growing businesses that need a complete web presence with dynamic content.',
    features: [
      'Up to 15-page website',
      'CMS / Admin panel',
      'Advanced SEO optimization',
      'Blog & news section',
      'Social media integration',
      'WhatsApp chat integration',
      'Speed optimization',
      '3 months free support',
      '3 revision rounds',
      'Google Business setup',
    ],
    notIncluded: ['Mobile app', 'E-commerce advanced features'],
    cta: 'Most Popular',
    color: '#00aaff',
  },
  {
    name: 'Enterprise',
    badge: null,
    price: 'Custom',
    period: 'per project',
    desc: 'Full-scale custom solutions for enterprises, government, or complex multi-feature projects.',
    features: [
      'Unlimited pages & features',
      'Custom web/mobile application',
      'Third-party API integrations',
      'Payment gateway integration',
      'E-commerce / marketplace',
      'ERP / CRM integration',
      'Dedicated project manager',
      'Performance SLA guarantee',
      '12 months support & AMC',
      'Priority 24/7 support',
    ],
    notIncluded: [],
    cta: 'Get a Quote',
    color: '#7c3aed',
  },
];

const faqs = [
  { q: 'Do you provide a free consultation?', a: 'Yes! We offer a free 30-minute consultation call to understand your requirements and recommend the best approach — no obligation.' },
  { q: 'How long does a typical project take?', a: 'A basic website takes 2–3 weeks. A full web application or mobile app typically takes 6–12 weeks depending on complexity.' },
  { q: 'Do you offer EMI / installment payment options?', a: 'Yes, we offer flexible payment structures — typically 40% upfront, 40% at midpoint, and 20% on delivery.' },
  { q: 'Is the website source code provided?', a: 'Absolutely. Upon project completion and final payment, you receive 100% ownership of all source code and assets.' },
  { q: 'Do you provide hosting too?', a: 'Yes, we offer managed cloud hosting plans starting at ₹2,999/month with 99.9% uptime SLA.' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'-100px', left:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Pricing</div>
            <h1 className="page-hero__heading">Transparent <span className="gradient-text">Pricing Plans</span></h1>
            <p className="page-hero__sub">No hidden fees. No surprises. Choose a plan that fits your needs, or contact us for a fully custom quote.</p>
            <div className="page-hero__breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Pricing</span></div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`pricing-card glass-card${plan.badge ? ' pricing-card--featured' : ''}`} id={`pricing-card-${i}`} style={{'--plan-color': plan.color} as React.CSSProperties}>
                {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
                <div className="pricing-card__header">
                  <h2 className="pricing-card__name">{plan.name}</h2>
                  <p className="pricing-card__desc">{plan.desc}</p>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{plan.price}</span>
                    <span className="pricing-card__period">/{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f} className="pricing-card__feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="pricing-card__feature pricing-card__feature--no">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={plan.badge ? 'btn-primary' : 'btn-outline'} style={{display:'flex', justifyContent:'center', marginTop:'auto'}} id={`pricing-cta-${i}`}>
                  <span>{plan.cta}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
          <p style={{textAlign:'center', color:'var(--text-muted)', fontSize:'0.875rem', marginTop:'2rem'}}>
            All prices are exclusive of GST. Custom projects are quoted based on scope. 
            <Link href="/contact" style={{color:'var(--blue-bright)', textDecoration:'none'}}> Contact us</Link> for a free estimate.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{background:'rgba(255,255,255,0.01)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <div className="section-label" style={{display:'inline-flex'}}>FAQs</div>
            <h2 className="section-heading" style={{margin:'1rem 0'}}>Pricing <span className="gradient-text">FAQs</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item glass-card" id={`pricing-faq-${i}`}>
                <div className="faq-item__q">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  {faq.q}
                </div>
                <p className="faq-item__a">{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}}>
            <p style={{color:'var(--text-secondary)', marginBottom:'1rem'}}>Need something custom?</p>
            <Link href="/contact" className="btn-primary" id="pricing-custom-btn">
              <span>Contact Us for Custom Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
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
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: start; }
        .pricing-card { display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem; position: relative; }
        .pricing-card--featured {
          border-color: var(--blue-bright) !important;
          box-shadow: 0 20px 60px rgba(0,170,255,0.2);
          transform: scale(1.03);
        }
        .pricing-card__badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright));
          color: white; font-size: 0.75rem; font-weight: 700;
          padding: 0.25rem 1rem; border-radius: 50px;
          white-space: nowrap;
        }
        .pricing-card__name { font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; }
        .pricing-card__desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; }
        .pricing-card__price { display: flex; align-items: baseline; gap: 0.25rem; }
        .pricing-card__amount { font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; color: var(--plan-color, var(--blue-bright)); }
        .pricing-card__period { color: var(--text-muted); font-size: 0.875rem; }
        .pricing-card__features { list-style: none; display: flex; flex-direction: column; gap: 0.625rem; flex: 1; }
        .pricing-card__feature { display: flex; align-items: center; gap: 0.625rem; font-size: 0.875rem; color: var(--text-secondary); }
        .pricing-card__feature--no { color: var(--text-muted); text-decoration: line-through; opacity: 0.6; }
        .faq-list { display: flex; flex-direction: column; gap: 1rem; max-width: 760px; margin: 0 auto; }
        .faq-item { padding: 1.5rem; }
        .faq-item__q { display: flex; align-items: flex-start; gap: 0.75rem; font-weight: 700; font-size: 1rem; font-family: var(--font-display); margin-bottom: 0.75rem; }
        .faq-item__a { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.6; margin-left: 1.75rem; }
        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; } .pricing-card--featured { transform: none; } }
      `}</style>
    </>
  );
}
