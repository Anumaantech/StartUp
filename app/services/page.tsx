import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Anumaan Technologies\' comprehensive IT services — web development, mobile apps, government solutions, ERP/CRM, AI automation, and more.',
};

const services = [
  {
    id: 'web-design',
    icon: '🌐',
    title: 'Website Design & Development',
    shortDesc: 'Stunning, high-performance websites that convert.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'E-commerce Ready', 'Performance Optimized'],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    color: '#0066ff',
    href: '/services/web-design',
  },
  {
    id: 'web-app',
    icon: '⚙️',
    title: 'Web Application Development',
    shortDesc: 'Scalable, secure web apps for modern businesses.',
    features: ['Custom Business Logic', 'REST & GraphQL APIs', 'Real-time Features', 'Role-based Access', 'Scalable Architecture'],
    tech: ['Node.js', 'Django', 'PostgreSQL', 'Redis'],
    color: '#00aaff',
    href: '/services/web-app',
  },
  {
    id: 'mobile-app',
    icon: '📱',
    title: 'Mobile App Development',
    shortDesc: 'Native & cross-platform iOS and Android apps.',
    features: ['Cross-platform', 'Offline Support', 'Push Notifications', 'App Store Publishing', 'Analytics Integration'],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    color: '#00d4ff',
    href: '/services/mobile-app',
  },
  {
    id: 'government',
    icon: '🏛️',
    title: 'Government Software Solutions',
    shortDesc: 'Digital transformation for public sector organizations.',
    features: ['NIC Compliant', 'Multi-tier Security', 'e-Governance Ready', 'Citizen Portal', 'RTI & Reporting'],
    tech: ['Java', 'Spring Boot', 'Oracle DB', 'AWS GovCloud'],
    color: '#7c3aed',
    href: '/services/government',
  },
  {
    id: 'erp-crm',
    icon: '🔄',
    title: 'ERP / CRM Solutions',
    shortDesc: 'Streamline operations with integrated business software.',
    features: ['HR & Payroll', 'Inventory Management', 'Financial Accounting', 'Customer Pipeline', 'Custom Reports'],
    tech: ['Odoo', 'Salesforce', 'Custom Build', 'Power BI'],
    color: '#a855f7',
    href: '/services/erp-crm',
  },
  {
    id: 'coaching',
    icon: '📚',
    title: 'Coaching Institute Software',
    shortDesc: 'Complete management system for coaching institutes.',
    features: ['Student Management', 'Fee Collection', 'Online Exams', 'Attendance System', 'Parent Portal'],
    tech: ['React', 'Node.js', 'MySQL', 'Razorpay'],
    color: '#f59e0b',
    href: '/services/coaching',
  },
  {
    id: 'consulting',
    icon: '🧠',
    title: 'IT Consulting & Strategy',
    shortDesc: 'Expert technology advisory for business growth.',
    features: ['Digital Audit', 'Tech Roadmap', 'Architecture Review', 'Vendor Selection', 'Cost Optimization'],
    tech: ['Cloud Architecture', 'DevOps', 'Security', 'AI/ML'],
    color: '#10b981',
    href: '/services/consulting',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud & Hosting Solutions',
    shortDesc: 'Reliable, scalable cloud infrastructure management.',
    features: ['AWS / Azure / GCP', 'Auto-scaling', 'CI/CD Pipelines', 'Managed Databases', '99.9% Uptime SLA'],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    color: '#06b6d4',
    href: '/services/cloud',
  },
  {
    id: 'uiux',
    icon: '🎨',
    title: 'UI/UX Design',
    shortDesc: 'Beautiful, intuitive designs that users love.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
    tech: ['Figma', 'Adobe XD', 'Framer', 'Lottie'],
    color: '#ec4899',
    href: '/services/uiux',
  },
  {
    id: 'maintenance',
    icon: '🛠️',
    title: 'Maintenance & AMC',
    shortDesc: 'Annual maintenance contracts for peace of mind.',
    features: ['Bug Fixes', 'Security Patches', 'Performance Monitoring', 'Regular Backups', 'Priority Support'],
    tech: ['Monitoring', 'DevOps', 'Security', 'Analytics'],
    color: '#64748b',
    href: '/services/maintenance',
  },
  {
    id: 'ai-automation',
    icon: '🤖',
    title: 'AI / Automation Solutions',
    shortDesc: 'Intelligent automation to supercharge your operations.',
    features: ['AI Chatbots', 'Process Automation', 'Data Analytics', 'ML Models', 'NLP Integration'],
    tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
    color: '#00f5d4',
    href: '/services/ai-automation',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '-100px', right: '-100px' }} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Our Services</div>
            <h1 className="page-hero__heading">Complete <span className="gradient-text">IT Solutions</span> Under One Roof</h1>
            <p className="page-hero__sub">
              From startups to enterprises, from government to private sector — we have the expertise 
              to deliver the exact technology solution your organization needs.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="services-page-grid">
            {services.map((s, i) => (
              <div key={s.id} className="sp-card glass-card" id={`sp-card-${s.id}`} style={{'--card-color': s.color} as React.CSSProperties}>
                <div className="sp-card__header">
                  <div className="sp-card__icon">{s.icon}</div>
                  <div>
                    <h2 className="sp-card__title">{s.title}</h2>
                    <p className="sp-card__desc">{s.shortDesc}</p>
                  </div>
                </div>
                <div className="sp-card__body">
                  <div className="sp-card__features">
                    <p className="sp-card__features-label">Key Features</p>
                    <ul className="sp-card__features-list">
                      {s.features.map((f) => (
                        <li key={f} className="sp-card__feature-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sp-card__tech">
                    <p className="sp-card__features-label">Technologies</p>
                    <div className="sp-card__tech-list">
                      {s.tech.map((t) => <span key={t} className="badge badge-purple">{t}</span>)}
                    </div>
                  </div>
                </div>
                <Link href={s.href} className="sp-card__cta" id={`sp-cta-${s.id}`}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{textAlign:'center', background:'var(--surface-hover)'}}>
        <div className="container">
          <div className="services-cta glass-card">
            <div className="bg-glow-1" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:0.5}} />
            <div style={{position:'relative', zIndex:1}}>
              <div className="section-label" style={{display:'inline-flex'}}>Free Consultation</div>
              <h2 className="section-heading" style={{margin:'1rem 0'}}>Not Sure Which Service <span className="gradient-text">You Need?</span></h2>
              <p style={{color:'var(--text-secondary)', maxWidth:'500px', margin:'0 auto 2rem'}}>
                Our experts will analyze your business requirements and recommend the perfect solution. No obligation, completely free.
              </p>
              <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
                <Link href="/contact" className="btn-primary" id="services-get-consultation-btn">
                  <span>Get Free Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="tel:+919999999999" className="btn-outline" id="services-call-btn">Call Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 10rem 0 5rem;
          background: radial-gradient(ellipse at 70% 50%, rgba(0,102,255,0.1) 0%, transparent 60%);
          position: relative;
          overflow: hidden;
        }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2rem, 4vw, 3.5rem); margin: 1rem 0; }
        .page-hero__sub { font-size: 1.125rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .services-page-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .sp-card {
          display: flex; flex-direction: column;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .sp-card:hover {
          border-color: var(--card-color, #0066ff);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px var(--card-color, #0066ff)30;
        }
        .sp-card__header {
          display: flex; gap: 1rem; align-items: flex-start;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .sp-card__icon { font-size: 2rem; flex-shrink: 0; margin-top: 0.125rem; }
        .sp-card__title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem; }
        .sp-card__desc { font-size: 0.825rem; color: var(--text-secondary); }
        .sp-card__body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
        .sp-card__features-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.625rem; }
        .sp-card__features-list { list-style: none; display: flex; flex-direction: column; gap: 0.375rem; }
        .sp-card__feature-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.825rem; color: var(--text-secondary); }
        .sp-card__tech-list { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .sp-card__cta {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,170,255,0.08));
          border-top: 1px solid var(--border-subtle);
          color: var(--blue-bright);
          text-decoration: none;
          font-weight: 600; font-size: 0.875rem;
          transition: all 0.2s ease;
          font-family: var(--font-display);
        }
        .sp-card__cta:hover { background: rgba(0,170,255,0.15); gap: 0.75rem; }
        .services-cta {
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) { .services-page-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .services-page-grid { grid-template-columns: 1fr; } .services-cta { padding: 2rem; } }
      `}</style>
    </>
  );
}
