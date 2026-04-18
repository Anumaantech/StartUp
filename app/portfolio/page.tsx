'use client';
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Municipal Services Portal', category: 'Government', desc: 'Digitized citizen services for a district municipal corporation serving 500K+ citizens. Reduced processing time by 60%.', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'], emoji: '🏛️', result: '60% reduction in processing time' },
  { id: 2, title: 'EduPro LMS Platform', category: 'Education', desc: 'Complete Learning Management System for a chain of 20 coaching institutes with 10K+ students.', tech: ['React Native', 'Django', 'AWS', 'Redis'], emoji: '📚', result: '10K+ active students' },
  { id: 3, title: 'FinTrack CRM', category: 'Finance', desc: 'Custom CRM system for an NBFC managing 50K+ client portfolios with real-time analytics.', tech: ['Vue.js', 'FastAPI', 'MongoDB', 'Grafana'], emoji: '💹', result: '40% faster client management' },
  { id: 4, title: 'MediCare Patient App', category: 'Healthcare', desc: 'Patient management and appointment booking app for a hospital chain with 15 branches.', tech: ['Flutter', 'Node.js', 'MySQL', 'Firebase'], emoji: '🏥', result: '89% patient satisfaction' },
  { id: 5, title: 'RetailMax E-commerce', category: 'E-commerce', desc: 'High-performance e-commerce platform handling 10K+ daily orders with multi-vendor support.', tech: ['Next.js', 'Strapi', 'Elasticsearch', 'GCP'], emoji: '🛒', result: '₹2Cr+ monthly GMV' },
  { id: 6, title: 'GovPay Tax Portal', category: 'Government', desc: 'Property tax payment portal for a state government integrated with national payment gateway.', tech: ['React', 'Spring Boot', 'Oracle', 'NIC'], emoji: '💳', result: '1M+ transactions' },
  { id: 7, title: 'SmartHR Suite', category: 'Enterprise', desc: 'Complete HR software covering recruitment, attendance, payroll, and performance management.', tech: ['Angular', 'Django', 'PostgreSQL', 'Docker'], emoji: '👥', result: '70% HR efficiency gain' },
  { id: 8, title: 'AI Customer Support Bot', category: 'AI/ML', desc: 'Intelligent chatbot solution handling 80% of customer queries automatically using NLP.', tech: ['Python', 'OpenAI', 'LangChain', 'FastAPI'], emoji: '🤖', result: '80% query automation' },
  { id: 9, title: 'AgriMarket Platform', category: 'E-commerce', desc: 'Direct farmer-to-buyer marketplace with vernacular language support and SMS integration.', tech: ['React', 'Node.js', 'MySQL', 'Twilio'], emoji: '🌾', result: '5K+ farmers onboarded' },
];

const categories = ['All', 'Government', 'Education', 'Finance', 'Healthcare', 'E-commerce', 'Enterprise', 'AI/ML'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '-100px', left: '-100px' }} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Our Work</div>
            <h1 className="page-hero__heading">Projects That <span className="gradient-text">Made an Impact</span></h1>
            <p className="page-hero__sub">
              Browse our portfolio of successful projects across government, enterprise, healthcare, 
              education, and more.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section" aria-labelledby="portfolio-heading">
        <div className="container">
          {/* Filter */}
          <div className="portfolio-filters" role="group" aria-label="Filter portfolio by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                id={`filter-btn-${cat.toLowerCase().replace('/','').replace(' ','-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filtered.map((p) => (
              <div key={p.id} className="portfolio-card glass-card" id={`portfolio-card-${p.id}`}>
                <div className="portfolio-card__visual">
                  <span className="portfolio-card__emoji">{p.emoji}</span>
                  <div className="badge badge-blue portfolio-card__category">{p.category}</div>
                </div>
                <div className="portfolio-card__body">
                  <h2 className="portfolio-card__title">{p.title}</h2>
                  <p className="portfolio-card__desc">{p.desc}</p>
                  <div className="portfolio-card__result">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-accent)" strokeWidth="2.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                    </svg>
                    <span>{p.result}</span>
                  </div>
                  <div className="portfolio-card__tech">
                    {p.tech.map((t) => <span key={t} className="badge badge-purple">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:'center', padding:'4rem', color:'var(--text-muted)'}}>
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Start Project CTA */}
      <section className="section" style={{background:'var(--surface-hover)', textAlign:'center'}}>
        <div className="container">
          <div className="section-label" style={{display:'inline-flex'}}>Start Your Project</div>
          <h2 className="section-heading" style={{margin:'1rem 0'}}>Ready to Be Our <span className="gradient-text">Next Success Story?</span></h2>
          <p style={{color:'var(--text-secondary)', maxWidth:'500px', margin:'0 auto 2rem'}}>
            Let&apos;s discuss your project and build something extraordinary together.
          </p>
          <Link href="/contact" className="btn-primary" id="portfolio-start-project-btn">
            <span>Start a Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
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
        .portfolio-filters {
          display: flex; gap: 0.625rem; flex-wrap: wrap;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .portfolio-filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          border: 1px solid var(--border-subtle);
          background: var(--glass-bg);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-sans);
        }
        .portfolio-filter-btn:hover { border-color: var(--border-glow); color: var(--blue-bright); }
        .portfolio-filter-btn.active {
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright));
          border-color: transparent; color: white;
          box-shadow: 0 4px 15px rgba(0,102,255,0.3);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .portfolio-card { overflow: hidden; }
        .portfolio-card__visual {
          height: 180px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(0,102,255,0.08), rgba(124,58,237,0.08));
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .portfolio-card__category { position: absolute; top: 1rem; left: 1rem; }
        .portfolio-card__emoji { font-size: 4.5rem; }
        .portfolio-card__body { padding: 1.5rem; }
        .portfolio-card__title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.625rem; }
        .portfolio-card__desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem; }
        .portfolio-card__result {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.813rem; font-weight: 600; color: var(--cyan-accent);
          background: rgba(0,245,212,0.08);
          border: 1px solid rgba(0,245,212,0.15);
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          margin-bottom: 1rem;
        }
        .portfolio-card__tech { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        @media (max-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .portfolio-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
