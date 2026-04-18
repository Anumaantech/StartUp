import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Anumaan Technologies — our mission, vision, values, and the team behind India\'s leading IT solutions company.',
};

const values = [
  { icon: '💡', title: 'Innovation', desc: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent communication, ethical practices, and honesty in all our dealings.' },
  { icon: '❤️', title: 'Client-first', desc: 'Every decision we make is driven by what\'s best for our clients\' success.' },
  { icon: '⚡', title: 'Excellence', desc: 'We hold ourselves to the highest standards — quality is never negotiated.' },
];

const process = [
  { step: '01', title: 'Discovery & Planning', desc: 'We dive deep into your requirements, goals, and constraints to create a comprehensive project blueprint.' },
  { step: '02', title: 'Design & Prototyping', desc: 'Our designers craft intuitive wireframes and stunning prototypes for your approval before development begins.' },
  { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing ensures quality at every sprint and zero surprises at launch.' },
  { step: '04', title: 'Launch & Support', desc: 'Smooth deployment followed by dedicated post-launch support, training, and maintenance.' },
];

const team = [
  { 
    name: 'Madhuri Patil', 
    role: 'Founder & CEO', 
    bio: 'Visionary leader driving the company mission. Passionate about leveraging technology to solve complex real-world problems.', 
    emoji: '/Madhuri.jpeg' 
  },
  { 
    name: 'Ajay Bastal', 
    role: 'Sales Head & Project Manager', 
    bio: 'Manages end-to-end client relationships, from initial meetings and sales to ensuring project delivery and satisfaction.', 
    emoji: '/Ajay.jpeg' 
  },
  { 
    name: 'Rajwardhan Patil', 
    role: 'Tech Lead & Full Stack Engineer', 
    bio: 'Expert in end-to-end development. Oversees the technical architecture and ensures seamless integration across the stack.', 
    emoji: '/Raj.jpeg' 
  },
  { 
    name: 'Akash Kharche', 
    role: 'AI & Data Analyst', 
    bio: 'Specializes in AI/ML workflows and data analysis to derive actionable insights and drive intelligent automation.', 
    emoji: '/Akash.jpeg' 
  },
  { 
    name: 'Pranjali Jadhav', 
    role: 'Head of Design', 
    bio: 'UI/UX specialist focused on creating intuitive, beautiful, and user-centric interfaces for all digital products.', 
    emoji: '/Pranjali.jpeg' 
  },{
    name: 'Gitesh Darekar', 
    role: 'Marketing & SEO Lead', 
    bio: 'Expert in digital growth strategies and search engine optimization. He specializes in boosting online visibility and driving organic traffic for complex web platforms.', 
    emoji: '/Gitesh.jpeg'
  } 
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{ top: '-100px', left: '-100px' }} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">About Us</div>
            <h1 className="page-hero__heading">Building India&apos;s Digital <span className="gradient-text">Future</span></h1>
            <p className="page-hero__sub">
              We are a passionate team of technologists, designers, and dreamers committed to transforming 
              businesses through innovative software solutions.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section" aria-labelledby="overview-heading">
        <div className="container">
          <div className="about-overview-grid">
            <div>
              <div className="section-label">Who We Are</div>
              <h2 id="overview-heading" className="section-heading">More Than Just a <span className="gradient-text">Tech Company</span></h2>
              <div className="divider" />
              <p style={{color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'1rem'}}>
                Founded in 2018, Anumaan Technologies has grown from a small startup to a trusted technology partner 
                for 120+ clients across India. We specialize in delivering bespoke digital solutions that solve real 
                business challenges.
              </p>
              <p style={{color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'1rem'}}>
                Our expertise spans web development, mobile applications, government software, ERP/CRM systems, 
                and cutting-edge AI automation — making us a one-stop-shop for all your technology needs.
              </p>
              <p style={{color:'var(--text-secondary)', lineHeight:1.8}}>
                What sets us apart? We don&apos;t just deliver software — we become your technology partner, 
                invested in your long-term success.
              </p>
            </div>
            <div className="about-overview-cards">
              <div className="about-info-card glass-card">
                <div className="about-info-card__icon">🎯</div>
                <h3 className="about-info-card__title">Our Mission</h3>
                <p className="about-info-card__text">
                  To empower Indian businesses through technology — making enterprise-grade software accessible, 
                  affordable, and impactful for organizations of all sizes.
                </p>
              </div>
              <div className="about-info-card glass-card">
                <div className="about-info-card__icon">🔭</div>
                <h3 className="about-info-card__title">Our Vision</h3>
                <p className="about-info-card__text">
                  To be India&apos;s most trusted IT company — recognized for technical excellence, ethical 
                  practices, and transformative impact on businesses and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{background:'rgba(255,255,255,0.01)'}} aria-labelledby="values-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">Our DNA</div>
            <h2 id="values-heading" className="section-heading">Core <span className="gradient-text">Values</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card" id={`value-card-${i}`}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">How We Work</div>
            <h2 id="process-heading" className="section-heading">Our <span className="gradient-text">Process</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
            <p className="section-sub" style={{margin:'0 auto'}}>A proven 4-step methodology that ensures your project is delivered on time and exceeds expectations.</p>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-card" id={`process-step-${i}`}>
                <div className="process-card__step">{p.step}</div>
                {i < process.length - 1 && <div className="process-card__line" />}
                <h3 className="process-card__title">{p.title}</h3>
                <p className="process-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{background:'rgba(255,255,255,0.01)'}} aria-labelledby="team-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">The Team</div>
            <h2 id="team-heading" className="section-heading">Meet the <span className="gradient-text">Experts</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card glass-card" id={`team-member-${i}`}>
                <div className="team-card__avatar">
                  {member.emoji.startsWith('/') ? (
                    <Image 
                      src={member.emoji} 
                      alt={member.name} 
                      width={100} 
                      height={100} 
                      className="team-card__img"
                    />
                  ) : (
                    member.emoji
                  )}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <div className="badge badge-blue" style={{marginBottom:'0.75rem'}}>{member.role}</div>
                <p className="team-card__bio">{member.bio}</p>
                <div className="team-card__social">
                  <a href="#" className="team-card__social-link" aria-label={`${member.name} LinkedIn`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Hiring CTA */}
          <div className="hiring-cta glass-card">
            <div className="hiring-cta__content">
              <span style={{fontSize:'2rem'}}>🚀</span>
              <div>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:700, marginBottom:'0.25rem'}}>We&apos;re Hiring!</h3>
                <p style={{color:'var(--text-secondary)', fontSize:'0.938rem'}}>Join our growing team of innovators and problem-solvers.</p>
              </div>
            </div>
            <Link href="/careers" className="btn-primary" id="about-careers-btn">
              <span>View Open Positions</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section" aria-labelledby="trust-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">Trust & Credentials</div>
            <h2 id="trust-heading" className="section-heading">Why You Can <span className="gradient-text">Trust Us</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
          </div>
          <div className="trust-grid">
            {[
              { icon: '🏆', title: 'ISO 9001:2015 Certified', desc: 'Quality management system certified for software development.' },
              { icon: '📋', title: 'Registered Company', desc: 'GST & CIN registered | CIN: U72900DL****PTC123456' },
              { icon: '☁️', title: 'AWS Partner', desc: 'Authorized Amazon Web Services implementation partner.' },
              { icon: '🔒', title: 'NDA Protected', desc: 'Your IP and business data are fully protected by confidentiality agreements.' },
            ].map((t, i) => (
              <div key={i} className="trust-card glass-card" id={`trust-card-${i}`}>
                <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>{t.icon}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:700, marginBottom:'0.5rem'}}>{t.title}</h3>
                <p style={{color:'var(--text-secondary)', fontSize:'0.875rem'}}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 10rem 0 5rem;
          background: radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.1) 0%, transparent 60%);
          position: relative;
          overflow: hidden;
        }
        .page-hero__content { max-width: 700px; }
        .page-hero__heading { font-size: clamp(2.5rem, 4vw, 3.5rem); margin: 1rem 0; }
        .page-hero__sub { font-size: 1.125rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
        .page-hero__breadcrumb { display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); }
        .page-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .page-hero__breadcrumb a:hover { text-decoration: underline; }
        .section__header.text-center, .section__header { text-align: center; margin-bottom: 3rem; }
        .about-overview-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;
        }
        .about-overview-cards { display: flex; flex-direction: column; gap: 1.25rem; }
        .about-info-card { padding: 2rem; }
        .about-info-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .about-info-card__title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
        .about-info-card__text { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.7; }
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .value-card { padding: 2rem; text-align: center; }
        .value-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .value-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.625rem; }
        .value-card__desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; position: relative; }
        .process-card { text-align: center; position: relative; }
        .process-card__step {
          display: inline-flex; align-items: center; justify-content: center;
          width: 64px; height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright));
          font-family: var(--font-display); font-size: 1.25rem; font-weight: 800;
          margin-bottom: 1.25rem;
          position: relative; z-index: 1;
          box-shadow: 0 8px 30px rgba(0,102,255,0.3);
        }
        .process-card__line {
          position: absolute;
          top: 32px;
          left: 50%;
          right: -50%;
          height: 2px;
          background: linear-gradient(90deg, var(--blue-primary), rgba(0,102,255,0.2));
        }
        .process-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.625rem; }
        .process-card__desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
        .team-card { padding: 2rem; text-align: center; }
        .team-card__avatar {
          width: 100px; height: 100px; font-size: 2.5rem;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0,102,255,0.15), rgba(124,58,237,0.15));
          border: 2px solid var(--border-subtle);
          margin: 0 auto 1.25rem;
          overflow: hidden;
          position: relative;
        }
        .team-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .team-card:hover .team-card__img {
          transform: scale(1.1);
        }
        .team-card__name { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem; }
        .team-card__bio { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1rem; }
        .team-card__social { display: flex; justify-content: center; gap: 0.75rem; }
        .team-card__social-link {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--glass-bg); border: 1px solid var(--border-subtle);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary); transition: all 0.2s ease;
        }
        .team-card__social-link:hover { color: var(--blue-bright); border-color: var(--border-glow); }
        .hiring-cta {
          padding: 2rem;
          display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hiring-cta__content { display: flex; align-items: center; gap: 1rem; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .trust-card { padding: 2rem; text-align: center; }
        @media (max-width: 1024px) {
          .about-overview-grid { grid-template-columns: 1fr; }
          .values-grid, .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid, .trust-grid, .team-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
          .process-card__line { display: none; }
        }
      `}</style>
    </>
  );
}
