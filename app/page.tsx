'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ===================== DATA ===================== */
const services = [
  { icon: '🌐', title: 'Web Design & Development', desc: 'Stunning, high-performance websites that convert visitors into customers.', href: '/services/web-design', color: '#0066ff' },
  { icon: '⚙️', title: 'Web Application Development', desc: 'Scalable, secure web applications built with modern frameworks.', href: '/services/web-app', color: '#00aaff' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Cross-platform iOS & Android apps with delightful user experiences.', href: '/services/mobile-app', color: '#00d4ff' },
  { icon: '🏛️', title: 'Government Software Solutions', desc: 'Digital transformation for government departments and public sector.', href: '/services/government', color: '#7c3aed' },
  { icon: '🔄', title: 'ERP / CRM Solutions', desc: 'Streamline operations with custom ERP and CRM implementations.', href: '/services/erp-crm', color: '#a855f7' },
  { icon: '🤖', title: 'AI / Automation Solutions', desc: 'Future-ready AI tools and workflow automation to boost efficiency.', href: '/services/ai-automation', color: '#00f5d4' },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 120, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '+', label: 'Years of Experience' },
  { value: 35, suffix: '+', label: 'Technologies Used' },
];

const differentiators = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'We sprint-based development ensures on-time delivery without compromising quality.' },
  { icon: '🛡️', title: 'Dedicated Support', desc: '24/7 post-launch support with SLA-backed response times for all clients.' },
  { icon: '💡', title: 'Innovation First', desc: 'We stay ahead of tech trends — integrating AI, cloud, and modern architectures.' },
  { icon: '🤝', title: 'Client-Centric', desc: 'Full transparency, clear communication, and measurable results in every project.' },
];

const industries = [
  { icon: '🏛️', label: 'Government', href: '/industries#government' },
  { icon: '🏢', label: 'Private Enterprises', href: '/industries#private' },
  { icon: '📚', label: 'Coaching & EdTech', href: '/industries#edtech' },
  { icon: '🏥', label: 'Healthcare', href: '/industries#healthcare' },
  { icon: '💰', label: 'Finance & Banking', href: '/industries#finance' },
  { icon: '🛒', label: 'Retail & E-commerce', href: '/industries#retail' },
];

const projects = [
  { title: 'Municipal Portal', category: 'Government', desc: 'Digitized infrastructure for a district municipal corporation serving 500K+ citizens.', tech: ['Next.js', 'Node.js', 'PostgreSQL'] },
  { title: 'EduPro LMS', category: 'EdTech', desc: 'Complete Learning Management System for a chain of coaching institutes with 10K+ students.', tech: ['React Native', 'Django', 'AWS'] },
  { title: 'FinTrack CRM', category: 'Finance', desc: 'Custom CRM for an NBF company managing 50K+ client portfolios with real-time analytics.', tech: ['Vue.js', 'FastAPI', 'MongoDB'] },
];

const testimonials = [
  { quote: "Anumaan Technologies transformed our digital presence. The government portal they built reduced our processing time by 60%. Exceptional work!", name: 'Rajiv Kumar', role: 'District Collector', company: 'Govt. of Haryana' },
  { quote: 'The mobile app they developed for our coaching institute is flawless. Our students love it and our revenue doubled within 6 months.', name: 'Priya Sharma', role: 'Director', company: 'Excellence Coaching Institute' },
  { quote: 'Outstanding technical expertise and professionalism. They delivered our ERP system ahead of schedule with zero critical bugs. Highly recommended!', name: 'Arun Mehta', role: 'CEO', company: 'Mehta Enterprises' },
];

const techLogos = ['Next.js', 'React', 'Node.js', 'Python', 'Flutter', 'AWS', 'MongoDB', 'PostgreSQL', 'Django', 'React Native', 'TypeScript', 'Docker', 'Kubernetes', 'GraphQL', 'Tailwind'];

/* ===================== COUNTER ===================== */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (value / duration) * 16;
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ===================== HOME PAGE ===================== */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero section">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '-200px', left: '-200px' }} />
        <div className="bg-glow-2" style={{ bottom: '-100px', right: '-100px' }} />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="section-label animate-fade">
              🚀 Leading IT Solutions Provider in India
            </div>
            <h1 className="hero__heading animate-fade" style={{animationDelay:'0.1s'}}>
              We Build Digital <br />
              <span className="gradient-text">Solutions That</span><br />
              <span className="hero__highlight">Drive Growth</span>
            </h1>
            <p className="hero__sub animate-fade" style={{animationDelay:'0.2s'}}>
              From government portals to AI-powered applications — Anumaan Technologies 
              delivers world-class software solutions tailored for the modern Indian market.
            </p>
            <div className="hero__ctas animate-fade" style={{animationDelay:'0.3s'}}>
              <Link href="/contact" className="btn-primary" id="hero-get-quote-btn">
                <span>Get a Free Quote</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portfolio" className="btn-outline" id="hero-view-work-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>View Our Work</span>
              </Link>
            </div>
            {/* Trust Bar */}
            <div className="hero__trust animate-fade" style={{animationDelay:'0.4s'}}>
              <div className="hero__trust-item">✅ ISO Certified</div>
              <div className="hero__trust-divider" />
              <div className="hero__trust-item">⭐ 4.9/5 Rating</div>
              <div className="hero__trust-divider" />
              <div className="hero__trust-item">🔒 NDA Protected</div>
              <div className="hero__trust-divider" />
              <div className="hero__trust-item">🇮🇳 Made in India</div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero__visual animate-float">
            <div className="hero__visual-card">
              <div className="hero__visual-header">
                <div className="hero__visual-dots">
                  <span style={{background:'#ff5f57'}} /><span style={{background:'#febc2e'}} /><span style={{background:'#28c840'}} />
                </div>
                <span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>anumaantech.com</span>
              </div>
              <div className="hero__visual-body">
                <div className="hero__visual-metric">
                  <span className="hero__visual-metric-val gradient-text-blue">↑ 240%</span>
                  <span className="hero__visual-metric-label">Traffic Growth</span>
                </div>
                <div className="hero__visual-chart">
                  {[40, 65, 45, 80, 60, 95, 75, 100].map((h, i) => (
                    <div key={i} className="hero__visual-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <div className="hero__visual-tags">
                  {['React', 'Node.js', 'AI', 'Cloud'].map((t) => (
                    <span key={t} className="badge badge-blue">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="hero__badge hero__badge--projects">
              <div className="hero__badge-val">150+</div>
              <div className="hero__badge-label">Projects</div>
            </div>
            <div className="hero__badge hero__badge--clients">
              <div className="hero__badge-val" style={{color:'#00f5d4'}}>🛡️ Secure</div>
              <div className="hero__badge-label">NDA Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-section" aria-label="Technology stack">
        <div className="marquee-section__inner">
          <span className="marquee-section__label">Tech Stack</span>
          <div className="marquee-wrapper" style={{flex:1}}>
            <div className="marquee-track">
              {[...techLogos, ...techLogos].map((tech, i) => (
                <div key={i} className="marquee-item">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section__header">
            <div className="section-label">Our Services</div>
            <h2 id="services-heading" className="section-heading">What We <span className="gradient-text">Build For You</span></h2>
            <div className="divider" />
            <p className="section-sub">From concept to deployment, we deliver end-to-end digital solutions that empower your business.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="service-card" id={`service-card-${i}`} style={{'--card-color': s.color} as React.CSSProperties}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__cta">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}}>
            <Link href="/services" className="btn-outline" id="view-all-services-btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section why-section" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="section-label">Why Anumaan?</div>
              <h2 id="why-heading" className="section-heading">Why Businesses <span className="gradient-text">Trust Us</span></h2>
              <div className="divider" />
              <p className="section-sub" style={{maxWidth:'100%'}}>
                We don&apos;t just write code — we build partnerships. Our team of experts is committed to delivering results that matter.
              </p>
              <Link href="/about" className="btn-primary" style={{marginTop:'1.5rem'}} id="why-learn-more-btn">
                <span>Learn About Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="why-cards">
              {differentiators.map((d, i) => (
                <div key={i} className="why-card glass-card" id={`why-card-${i}`}>
                  <div className="why-card__icon">{d.icon}</div>
                  <div>
                    <h3 className="why-card__title">{d.title}</h3>
                    <p className="why-card__desc">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section" aria-label="Company statistics">
        <div className="stats-section__bg" />
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card" id={`stat-card-${i}`}>
                <div className="stat-card__value gradient-text-blue">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section" id="industries" aria-labelledby="industries-heading">
        <div className="container">
          <div className="section__header">
            <div className="section-label">Industries We Serve</div>
            <h2 id="industries-heading" className="section-heading">Domain <span className="gradient-text">Expertise</span></h2>
            <div className="divider" />
            <p className="section-sub">We understand the unique demands of different sectors and tailor our solutions accordingly.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <Link key={i} href={ind.href} className="industry-card glass-card" id={`industry-card-${i}`}>
                <span className="industry-card__icon">{ind.icon}</span>
                <span className="industry-card__label">{ind.label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft:'auto', color:'var(--blue-bright)', opacity:0}} className="industry-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section" id="portfolio" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section__header">
            <div className="section-label">Featured Work</div>
            <h2 id="projects-heading" className="section-heading">Projects That <span className="gradient-text">Made an Impact</span></h2>
            <div className="divider" />
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card glass-card" id={`project-card-${i}`}>
                <div className="project-card__visual" aria-hidden="true">
                  <span className="project-card__emoji">{i === 0 ? '🏛️' : i === 1 ? '📚' : '💹'}</span>
                </div>
                <div className="project-card__body">
                  <div className="badge badge-blue" style={{marginBottom:'0.75rem'}}>{p.category}</div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                  <div className="project-card__tech">
                    {p.tech.map((t) => <span key={t} className="badge badge-purple">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}}>
            <Link href="/portfolio" className="btn-outline" id="view-all-projects-btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section__header">
            <div className="section-label">Client Reviews</div>
            <h2 id="testimonials-heading" className="section-heading">What Our <span className="gradient-text">Clients Say</span></h2>
            <div className="divider" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card glass-card" id={`testimonial-card-${i}`}>
                <div className="stars">★★★★★</div>
                <blockquote className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2rem'}}>
            <Link href="/testimonials" className="btn-outline" id="view-all-testimonials-btn">View All Reviews</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── HERO ── */
        .hero {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 0 4rem;
          background: radial-gradient(ellipse at 20% 50%, rgba(0,102,255,0.12) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.1) 0%, transparent 60%);
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero__heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin: 1rem 0;
        }
        .hero__highlight {
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__sub {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 480px;
        }
        .hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }
        .hero__trust {
          display: flex; align-items: center; gap: 0.75rem;
          margin-top: 2rem; flex-wrap: wrap;
        }
        .hero__trust-item { font-size: 0.813rem; color: var(--text-secondary); font-weight: 500; }
        .hero__trust-divider { width: 1px; height: 16px; background: var(--border-subtle); }
        /* Hero Visual */
        .hero__visual { position: relative; }
        .hero__visual-card {
          background: var(--card-bg);
          border: 1px solid var(--border-subtle);
          border-radius: 1.5rem;
          overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }
        .hero__visual-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.25rem;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid var(--border-subtle);
        }
        .hero__visual-dots { display: flex; gap: 6px; }
        .hero__visual-dots span { width: 12px; height: 12px; border-radius: 50%; }
        .hero__visual-body { padding: 1.5rem 1.25rem; }
        .hero__visual-metric { margin-bottom: 1.5rem; }
        .hero__visual-metric-val { font-size: 2rem; font-family: var(--font-display); font-weight: 800; display: block; }
        .hero__visual-metric-label { font-size: 0.8rem; color: var(--text-muted); }
        .hero__visual-chart {
          display: flex; align-items: flex-end; gap: 6px;
          height: 80px; margin-bottom: 1.25rem;
        }
        .hero__visual-bar {
          flex: 1;
          background: linear-gradient(to top, var(--blue-primary), var(--blue-glow));
          border-radius: 4px 4px 0 0;
          animation: bar-grow 0.8s ease both;
          animation-delay: inherit;
        }
        @keyframes bar-grow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        .hero__visual-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .hero__badge {
          position: absolute;
          background: rgba(8,18,35,0.9);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-subtle);
          border-radius: 1rem;
          padding: 0.875rem 1.25rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .hero__badge--projects { bottom: -1.5rem; left: -2rem; }
        .hero__badge--clients { top: -1rem; right: -1.5rem; }
        .hero__badge-val {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--blue-bright);
        }
        .hero__badge-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
        .animate-fade { animation: fade-in-up 0.6s ease both; }

        /* ── MARQUEE ── */
        .marquee-section {
          padding: 1.25rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(255,255,255,0.02);
        }
        .marquee-section__inner {
          display: flex; align-items: center; gap: 2rem; overflow: hidden;
        }
        .marquee-section__label {
          flex-shrink: 0;
          padding: 0 1.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          border-right: 1px solid var(--border-subtle);
          padding-right: 1.5rem;
        }
        .marquee-item {
          white-space: nowrap;
          padding: 0.375rem 1.25rem;
          border: 1px solid var(--border-subtle);
          border-radius: 50px;
          font-size: 0.813rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--glass-bg);
          cursor: default;
          transition: all 0.2s ease;
        }
        .marquee-item:hover { border-color: var(--border-glow); color: var(--blue-bright); }

        /* ── SECTION HEADER ── */
        .section__header { text-align: center; margin-bottom: 3rem; }
        .section__header .section-label { display: inline-flex; }
        .section__header .divider { margin: 0 auto 1.25rem; }
        .section__header .section-sub { margin: 0 auto; }

        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .service-card {
          display: flex; flex-direction: column;
          padding: 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-subtle);
          border-radius: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s var(--ease-smooth);
          position: relative;
          overflow: hidden;
          group: true;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--card-color, #0066ff)10, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card:hover { transform: translateY(-6px); border-color: var(--card-color, #0066ff); box-shadow: 0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px var(--card-color, #0066ff)30; }
        .service-card:hover::before { opacity: 1; }
        .service-card__icon { font-size: 2.5rem; margin-bottom: 1.25rem; }
        .service-card__title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.625rem; color: white; }
        .service-card__desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; flex: 1; }
        .service-card__cta {
          display: flex; align-items: center; gap: 0.375rem;
          font-size: 0.813rem; font-weight: 600;
          color: var(--card-color, #0066ff);
          margin-top: 1.25rem;
          opacity: 0; transform: translateX(-5px);
          transition: all 0.3s ease;
        }
        .service-card:hover .service-card__cta { opacity: 1; transform: translateX(0); }

        /* ── WHY SECTION ── */
        .why-section { background: rgba(255,255,255,0.01); }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }
        .why-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .why-card {
          padding: 1.5rem;
          display: flex; gap: 1rem; align-items: flex-start;
        }
        .why-card__icon { font-size: 1.75rem; flex-shrink: 0; }
        .why-card__title { font-family: var(--font-display); font-weight: 700; margin-bottom: 0.375rem; font-size: 1rem; }
        .why-card__desc { font-size: 0.813rem; color: var(--text-secondary); line-height: 1.6; }

        /* ── STATS ── */
        .stats-section {
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }
        .stats-section__bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,102,255,0.08) 0%, rgba(124,58,237,0.08) 100%);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }
        .stat-card { text-align: center; }
        .stat-card__value {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0.5rem;
          display: block;
        }
        .stat-card__label {
          font-size: 0.938rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* ── INDUSTRIES ── */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .industry-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
        }
        .industry-card:hover .industry-arrow { opacity: 1 !important; }
        .industry-card__icon { font-size: 1.75rem; flex-shrink: 0; }
        .industry-card__label { font-weight: 600; font-size: 1rem; font-family: var(--font-display); }

        /* ── PROJECTS ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .project-card { overflow: hidden; }
        .project-card__visual {
          height: 160px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(124,58,237,0.1));
          border-bottom: 1px solid var(--border-subtle);
        }
        .project-card__emoji { font-size: 4rem; }
        .project-card__body { padding: 1.5rem; }
        .project-card__title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.625rem; }
        .project-card__desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem; }
        .project-card__tech { display: flex; gap: 0.5rem; flex-wrap: wrap; }

        /* ── TESTIMONIALS ── */
        .testimonials-section {
          background: radial-gradient(ellipse at center, rgba(0,102,255,0.05) 0%, transparent 70%);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .testimonial-card { padding: 2rem; }
        .testimonial-card .stars { font-size: 1rem; margin-bottom: 1rem; }
        .testimonial-card__quote {
          font-size: 0.938rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .testimonial-card__author { display: flex; align-items: center; gap: 0.875rem; }
        .testimonial-card__avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright));
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 1.125rem;
          flex-shrink: 0;
        }
        .testimonial-card__name { font-weight: 700; font-size: 0.938rem; }
        .testimonial-card__role { font-size: 0.8rem; color: var(--text-muted); margin-top: 2px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero__inner { grid-template-columns: 1fr; text-align: center; }
          .hero__sub { margin: 0 auto; }
          .hero__ctas { justify-content: center; }
          .hero__trust { justify-content: center; }
          .hero__visual { max-width: 400px; margin: 0 auto; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid, .industries-grid, .projects-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .why-cards { grid-template-columns: 1fr; }
          .hero__badge { display: none; }
        }
      `}</style>
    </>
  );
}
