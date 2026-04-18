import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials & Reviews',
  description: 'Read what our clients say about Anumaan Technologies — real reviews from government departments, enterprises, and startups.',
};

const testimonials = [
  { name: 'Rajiv Kumar', role: 'District Collector', company: 'Govt. of Haryana', quote: 'Anumaan Technologies transformed our citizen services portal. The system handles 50,000+ monthly transactions flawlessly. Processing time reduced by 60% and citizen satisfaction scores are at an all-time high.', rating: 5, category: 'Government' },
  { name: 'Priya Sharma', role: 'Director', company: 'Excellence Coaching Institute', quote: 'The institute management software they built for us is outstanding. Student admissions, fee collection, online exams — everything in one platform. Our administrative work reduced by 70%. Highly recommend!', rating: 5, category: 'Education' },
  { name: 'Arun Mehta', role: 'CEO', company: 'Mehta Enterprises', quote: 'Outstanding technical expertise and professionalism. The custom ERP they built handles all our operations. Delivered ahead of schedule with zero critical bugs. They set the bar for what good IT consulting should look like.', rating: 5, category: 'Enterprise' },
  { name: 'Dr. Sunita Nair', role: 'Hospital Director', company: 'LifeCare Hospital Group', quote: 'Our patient management app has been a game-changer. Appointment bookings up 200%, wait times down 40%. The Anumaan team understood our complex requirements and delivered exactly what we needed.', rating: 5, category: 'Healthcare' },
  { name: 'Vikram Agarwal', role: 'Managing Partner', company: 'VG Capital NBFC', quote: 'The loan management system they built is robust, secure, and compliant with RBI guidelines. Managing 50,000+ borrower accounts is now effortless. Their team\'s fintech knowledge is exceptional.', rating: 5, category: 'Finance' },
  { name: 'Neha Kapoor', role: 'Co-Founder', company: 'FreshCart Online', quote: 'From concept to launch in 3 months — our e-commerce platform handles 10K+ daily orders without a hiccup. The performance optimization they did is remarkable. Best tech partner we\'ve worked with.', rating: 5, category: 'E-commerce' },
  { name: 'IAS Ramesh Tiwari', role: 'IT Director', company: 'Municipal Corporation', quote: 'Property tax portal built by Anumaan crossed ₹10 crore in collections in the first month. The NIC integration was seamless and the support during launch was exceptional.', rating: 5, category: 'Government' },
  { name: 'Anjali Bose', role: 'HR Director', company: 'TechPark Pvt. Ltd.', quote: 'The HRMS they built handles 2,000 employees across 8 locations. Payroll accuracy is now 100% and compliance reports generate in seconds. The team was professional from day one.', rating: 5, category: 'Enterprise' },
  { name: 'Prof. Suresh Modi', role: 'Principal', company: 'Modi IAS Academy', quote: 'The mobile app and web platform for our academy has 8,000+ active students. The online test engine is particularly impressive — handles simultaneous exams without any downtime.', rating: 5, category: 'Education' },
];

const categories = ['All', 'Government', 'Enterprise', 'Education', 'Healthcare', 'Finance', 'E-commerce'];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'-100px', left:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Client Reviews</div>
            <h1 className="page-hero__heading">What Our <span className="gradient-text">Clients Say</span></h1>
            <p className="page-hero__sub">120+ clients. 150+ projects. Real results. Hear directly from the organizations we&apos;ve helped transform.</p>
            <div className="page-hero__breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Testimonials</span></div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{padding:'2rem 0', borderBottom:'1px solid var(--border-subtle)', borderTop:'1px solid var(--border-subtle)', background:'rgba(255,255,255,0.02)'}}>
        <div className="container">
          <div style={{display:'flex', justifyContent:'center', gap:'4rem', flexWrap:'wrap'}}>
            {[{val:'⭐ 4.9', label:'Average Rating'}, {val:'120+', label:'Happy Clients'}, {val:'98%', label:'On-time Delivery'}, {val:'100%', label:'NDA Compliance'}].map((s, i) => (
              <div key={i} style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:800, background:'linear-gradient(135deg,#00aaff,#00f5d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>{s.val}</div>
                <div style={{fontSize:'0.875rem', color:'var(--text-muted)', marginTop:'0.25rem'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((c) => (
              <button key={c} className={`portfolio-filter-btn${c === 'All' ? ' active' : ''}`} id={`testimonials-filter-${c.toLowerCase()}`}>{c}</button>
            ))}
          </div>
          <div className="testimonials-page-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonials-full-card glass-card" id={`testimonial-full-${i}`}>
                <div className="stars" style={{fontSize:'1rem', marginBottom:'1rem'}}>{'★'.repeat(t.rating)}</div>
                <div className="badge badge-blue" style={{marginBottom:'1rem'}}>{t.category}</div>
                <blockquote className="testimonials-full-card__quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testimonials-full-card__author">
                  <div className="testimonials-full-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div style={{fontWeight:700, fontSize:'0.938rem'}}>{t.name}</div>
                    <div style={{fontSize:'0.8rem', color:'var(--text-muted)'}}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background:'rgba(255,255,255,0.01)', textAlign:'center'}}>
        <div className="container">
          <h2 className="section-heading">Ready to Be Our <span className="gradient-text">Next Success Story?</span></h2>
          <p style={{color:'var(--text-secondary)', maxWidth:'450px', margin:'1rem auto 2rem'}}>Join 120+ satisfied clients across India. Let&apos;s build something great together.</p>
          <Link href="/contact" className="btn-primary" id="testimonials-cta-btn">
            <span>Start Your Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <style>{`
        .page-hero { padding: 10rem 0 5rem; background: radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.1) 0%, transparent 60%); position: relative; overflow: hidden; }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2rem, 4vw, 3.5rem); margin: 1rem 0; }
        .page-hero__sub { font-size: 1.125rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .portfolio-filters { display: flex; gap: 0.625rem; flex-wrap: wrap; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); }
        .portfolio-filter-btn { padding: 0.5rem 1.25rem; border-radius: 50px; border: 1px solid var(--border-subtle); background: var(--glass-bg); color: var(--text-secondary); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; font-family: var(--font-sans); }
        .portfolio-filter-btn.active { background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright)); border-color: transparent; color: white; }
        .testimonials-page-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .testimonials-full-card { padding: 2rem; display: flex; flex-direction: column; }
        .testimonials-full-card__quote { font-size: 0.938rem; color: var(--text-secondary); line-height: 1.8; font-style: italic; margin-bottom: 1.5rem; flex: 1; }
        .testimonials-full-card__author { display: flex; align-items: center; gap: 0.875rem; }
        .testimonials-full-card__avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright)); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.125rem; flex-shrink: 0; }
        @media (max-width: 1024px) { .testimonials-page-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .testimonials-page-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
