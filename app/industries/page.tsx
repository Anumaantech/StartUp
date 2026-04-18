import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Anumaan Technologies serves government, healthcare, education, finance, retail and private enterprises with tailored IT solutions.',
};

const industries = [
  {
    id: 'government',
    icon: '🏛️',
    title: 'Government & Public Sector',
    color: '#7c3aed',
    desc: 'We deliver NIC-compliant, highly secure digital solutions for central and state government departments, enabling efficient citizen service delivery.',
    solutions: ['Citizen Service Portals', 'RTI Management System', 'Property Tax & Revenue', 'Document Management', 'e-Tendering Platform', 'Grievance Redressal'],
    stats: [{ val: '15+', label: 'Govt. Projects' }, { val: '2M+', label: 'Citizens Served' }],
  },
  {
    id: 'private',
    icon: '🏢',
    title: 'Private Enterprises',
    color: '#0066ff',
    desc: 'Custom software solutions tailored for SMEs and large enterprises — from workflow automation to full-scale ERP implementations.',
    solutions: ['ERP Implementation', 'CRM Solutions', 'HR & Payroll Systems', 'Business Intelligence', 'Process Automation', 'Cloud Migration'],
    stats: [{ val: '80+', label: 'Enterprises' }, { val: '40%', label: 'Avg. Efficiency Gain' }],
  },
  {
    id: 'edtech',
    icon: '📚',
    title: 'Coaching Institutes & EdTech',
    color: '#f59e0b',
    desc: 'Complete digital ecosystem for coaching institutes — from student enrollment to online exams, fee management, and parent communication.',
    solutions: ['Institute Management Software', 'Online Exam Platform', 'Fee Collection Portal', 'Student App', 'Parent Dashboard', 'Faculty Management'],
    stats: [{ val: '25+', label: 'Institutes' }, { val: '50K+', label: 'Students Managed' }],
  },
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare',
    color: '#10b981',
    desc: 'HIPAA-aware healthcare IT solutions — patient management, telemedicine, and hospital operations digitization.',
    solutions: ['Hospital Management System', 'Patient App & Portal', 'Telemedicine Platform', 'Pharmacy Management', 'Lab Report System', 'Appointment Booking'],
    stats: [{ val: '10+', label: 'Healthcare Clients' }, { val: '100K+', label: 'Patients Managed' }],
  },
  {
    id: 'finance',
    icon: '💰',
    title: 'Finance & Banking',
    color: '#06b6d4',
    desc: 'Secure, compliant fintech solutions for NBFCs, microfinance institutions, and financial advisory firms.',
    solutions: ['Loan Management System', 'KYC Automation', 'Portfolio Management', 'Customer Analytics', 'Compliance Reporting', 'Mobile Banking App'],
    stats: [{ val: '8+', label: 'Fintech Clients' }, { val: '₹500Cr+', label: 'Transactions Managed' }],
  },
  {
    id: 'retail',
    icon: '🛒',
    title: 'Retail & E-commerce',
    color: '#ec4899',
    desc: 'End-to-end e-commerce and retail management solutions — from online storefronts to inventory and multi-channel selling.',
    solutions: ['E-commerce Platform', 'Inventory Management', 'POS System', 'Multi-vendor Marketplace', 'Loyalty Program', 'Analytics Dashboard'],
    stats: [{ val: '20+', label: 'Retail Clients' }, { val: '₹100Cr+', label: 'Annual GMV' }],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-2" style={{top:'-50px', right:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Industries</div>
            <h1 className="page-hero__heading">Domain Expertise <span className="gradient-text">Across Sectors</span></h1>
            <p className="page-hero__sub">
              We understand that every industry has unique challenges. Our sector-specific expertise 
              ensures solutions that truly fit your domain.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Industries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          {industries.map((ind, i) => (
            <div key={ind.id} id={ind.id} className={`industry-section${i % 2 === 0 ? '' : ' industry-section--reverse'}`}>
              <div className="industry-visual glass-card" style={{'--ind-color': ind.color} as React.CSSProperties}>
                <div className="industry-visual__icon">{ind.icon}</div>
                <div className="industry-visual__stats">
                  {ind.stats.map((s, j) => (
                    <div key={j} className="industry-visual__stat">
                      <div className="industry-visual__stat-val" style={{color: ind.color}}>{s.val}</div>
                      <div className="industry-visual__stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="industry-content">
                <div className="section-label" style={{'--label-color': ind.color} as React.CSSProperties}>{ind.title}</div>
                <h2 className="industry-content__title">{ind.title}</h2>
                <p className="industry-content__desc">{ind.desc}</p>
                <div className="industry-solutions">
                  <p className="industry-solutions__label">Solutions We Offer</p>
                  <div className="industry-solutions__grid">
                    {ind.solutions.map((s) => (
                      <div key={s} className="industry-solution-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ind.color} strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="btn-primary" style={{marginTop:'1.5rem'}} id={`industry-cta-${ind.id}`}>
                  <span>Get a Solution for {ind.title.split(' ')[0]}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
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
        .industry-section {
          display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem;
          align-items: center; padding: 4rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .industry-section:last-child { border-bottom: none; }
        .industry-section--reverse { direction: rtl; }
        .industry-section--reverse > * { direction: ltr; }
        .industry-visual {
          padding: 3rem;
          display: flex; flex-direction: column; gap: 2rem; align-items: center;
          text-align: center;
          border: 1px solid color-mix(in srgb, var(--ind-color, #0066ff) 30%, transparent) !important;
          background: color-mix(in srgb, var(--ind-color, #0066ff) 5%, transparent) !important;
        }
        .industry-visual__icon { font-size: 5rem; }
        .industry-visual__stats { display: flex; gap: 2rem; }
        .industry-visual__stat { text-align: center; }
        .industry-visual__stat-val { font-family: var(--font-display); font-size: 2rem; font-weight: 800; }
        .industry-visual__stat-label { font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; }
        .industry-content { }
        .industry-content__title { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; margin: 0.75rem 0; }
        .industry-content__desc { color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem; }
        .industry-solutions__label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.75rem; }
        .industry-solutions__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
        .industry-solution-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary); }
        @media (max-width: 1024px) {
          .industry-section { grid-template-columns: 1fr; direction: ltr; }
          .industry-section--reverse { direction: ltr; }
        }
        @media (max-width: 640px) { .industry-solutions__grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
