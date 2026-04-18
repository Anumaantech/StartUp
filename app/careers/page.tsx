'use client';
import { useState } from 'react';
import Link from 'next/link';

const jobListings = [
  { id: 1, title: 'Senior Full-Stack Developer', dept: 'Engineering', type: 'Full-time', location: 'New Delhi (Hybrid)', skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'], desc: 'Build and maintain scalable web applications for our enterprise clients.' },
  { id: 2, title: 'Flutter Mobile Developer', dept: 'Mobile', type: 'Full-time', location: 'Remote', skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs'], desc: 'Develop cross-platform mobile apps with stunning UIs and smooth performance.' },
  { id: 3, title: 'UI/UX Designer', dept: 'Design', type: 'Full-time', location: 'New Delhi (Onsite)', skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'], desc: 'Design intuitive interfaces for web and mobile applications.' },
  { id: 4, title: 'DevOps Engineer', dept: 'Infrastructure', type: 'Full-time', location: 'Remote / Hybrid', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'], desc: 'Manage cloud infrastructure and automate deployment pipelines.' },
  { id: 5, title: 'AI/ML Engineer', dept: 'AI Lab', type: 'Full-time', location: 'New Delhi / Remote', skills: ['Python', 'TensorFlow', 'LangChain', 'OpenAI API'], desc: 'Build intelligent automation and AI-powered features for client solutions.' },
  { id: 6, title: 'Business Development Executive', dept: 'Sales', type: 'Full-time', location: 'New Delhi (Onsite)', skills: ['B2B Sales', 'CRM', 'IT Knowledge', 'Communication'], desc: 'Identify and close new business opportunities with enterprise and government clients.' },
  { id: 7, title: 'Frontend Developer Intern', dept: 'Engineering', type: 'Internship', location: 'Remote', skills: ['React', 'JavaScript', 'CSS', 'Git'], desc: '3-6 month internship with mentorship and real project exposure.' },
  { id: 8, title: 'Content Writer & SEO Specialist', dept: 'Marketing', type: 'Full-time', location: 'Remote', skills: ['SEO', 'Technical Writing', 'WordPress', 'Analytics'], desc: 'Create high-quality content and drive organic growth through SEO strategies.' },
];

const perks = [
  { icon: '🏠', title: 'Remote-Friendly', desc: 'Flexible work from home options with hybrid models.' },
  { icon: '📈', title: 'Career Growth', desc: 'Clear promotion tracks and leadership opportunities.' },
  { icon: '🎓', title: 'Learning & Development', desc: 'Sponsored certifications, courses, and conference attendance.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-competitive salaries with annual performance bonuses.' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your family.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Results-driven culture — you manage your own schedule.' },
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'-100px', right:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Careers</div>
            <h1 className="page-hero__heading">Build the Future <span className="gradient-text">With Us</span></h1>
            <p className="page-hero__sub">
              Join a team of passionate technologists building impactful digital solutions. 
              Great culture, competitive pay, and unlimited growth.
            </p>
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Careers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section" aria-labelledby="culture-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">Life at Anumaan</div>
            <h2 id="culture-heading" className="section-heading">Why Work <span className="gradient-text">With Us?</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
            <p className="section-sub" style={{margin:'0 auto'}}>We&apos;re more than a company — we&apos;re a community of builders who love what they do.</p>
          </div>
          <div className="perks-grid">
            {perks.map((p, i) => (
              <div key={i} className="perk-card glass-card" id={`perk-card-${i}`}>
                <div className="perk-card__icon">{p.icon}</div>
                <h3 className="perk-card__title">{p.title}</h3>
                <p className="perk-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section" style={{background:'var(--surface-hover)'}} aria-labelledby="jobs-heading">
        <div className="container">
          <div className="section__header text-center">
            <div className="section-label">Open Positions</div>
            <h2 id="jobs-heading" className="section-heading">Current <span className="gradient-text">Openings</span></h2>
            <div className="divider" style={{margin:'0 auto 1.25rem'}} />
          </div>
          <div className="jobs-list">
            {jobListings.map((job) => (
              <div key={job.id} className={`job-card glass-card${activeJob === job.id ? ' active' : ''}`} id={`job-card-${job.id}`}>
                <div className="job-card__header" onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}>
                  <div className="job-card__info">
                    <h3 className="job-card__title">{job.title}</h3>
                    <div className="job-card__meta">
                      <span className="badge badge-blue">{job.dept}</span>
                      <span className="job-card__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {job.type}
                      </span>
                      <span className="job-card__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="job-card__toggle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         style={{transform: activeJob === job.id ? 'rotate(180deg)' : 'none', transition:'transform 0.3s ease'}}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>
                {activeJob === job.id && (
                  <div className="job-card__body">
                    <p className="job-card__desc">{job.desc}</p>
                    <div className="job-card__skills">
                      <p style={{fontSize:'0.813rem', color:'var(--text-muted)', marginBottom:'0.5rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em'}}>Required Skills</p>
                      <div style={{display:'flex', gap:'0.375rem', flexWrap:'wrap'}}>
                        {job.skills.map((s) => <span key={s} className="badge badge-purple">{s}</span>)}
                      </div>
                    </div>
                    <Link href={`#apply`} className="btn-primary" style={{alignSelf:'flex-start', marginTop:'0.5rem'}} id={`apply-btn-${job.id}`}>
                      <span>Apply Now</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" id="apply" aria-labelledby="apply-heading">
        <div className="container">
          <div className="apply-grid">
            <div>
              <div className="section-label">Apply Now</div>
              <h2 id="apply-heading" className="section-heading">Ready to <span className="gradient-text">Join Us?</span></h2>
              <div className="divider" />
              <p style={{color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1.5rem'}}>
                Fill out the form and we&apos;ll get back to you within 48 hours. Don&apos;t see your role? 
                Send us your resume anyway — we&apos;re always looking for great talent!
              </p>
              <div className="apply-contact">
                <a href="mailto:careers@anumaantech.com" className="apply-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"/>
                  </svg>
                  careers@anumaantech.com
                </a>
              </div>
            </div>
            <form className="apply-form glass-card" onSubmit={(e) => e.preventDefault()} aria-label="Job application form">
              <div className="form-group">
                <label className="form-label" htmlFor="apply-name">Full Name *</label>
                <input type="text" id="apply-name" className="form-input" placeholder="Your full name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="apply-email">Email *</label>
                  <input type="email" id="apply-email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="apply-phone">Phone *</label>
                  <input type="tel" id="apply-phone" className="form-input" placeholder="+91 99999 99999" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apply-position">Position Applying For *</label>
                <select id="apply-position" className="form-input" required>
                  <option value="">Select a position</option>
                  {jobListings.map((j) => <option key={j.id} value={j.id}>{j.title}</option>)}
                  <option value="other">Other / General Application</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apply-resume">Upload Resume (PDF) *</label>
                <div className="file-upload">
                  <input type="file" id="apply-resume" accept=".pdf,.doc,.docx" required style={{display:'none'}} />
                  <label htmlFor="apply-resume" className="file-upload__label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                    <span>Click to upload or drag & drop</span>
                    <span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>PDF, DOC, DOCX (max 5MB)</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apply-cover">Cover Letter / Message</label>
                <textarea id="apply-cover" className="form-input" rows={4} placeholder="Tell us about yourself and why you want to join Anumaan Technologies..." />
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center'}} id="apply-submit-btn">
                <span>Submit Application</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
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
        .section__header.text-center { text-align: center; margin-bottom: 3rem; }
        .perks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .perk-card { padding: 2rem; }
        .perk-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .perk-card__title { font-family: var(--font-display); font-weight: 700; margin-bottom: 0.5rem; }
        .perk-card__desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; }
        .jobs-list { display: flex; flex-direction: column; gap: 1rem; }
        .job-card { overflow: hidden; }
        .job-card__header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.5rem; cursor: pointer;
          transition: background 0.2s ease;
        }
        .job-card__header:hover { background: var(--surface-hover); }
        .job-card__info { flex: 1; }
        .job-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.625rem; }
        .job-card__meta { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .job-card__meta-item {
          display: flex; align-items: center; gap: 0.375rem;
          font-size: 0.825rem; color: var(--text-muted);
        }
        .job-card__toggle { color: var(--text-muted); flex-shrink: 0; padding: 0.25rem; }
        .job-card__body {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid var(--border-subtle);
          display: flex; flex-direction: column; gap: 1rem;
          animation: fade-in-up 0.3s ease;
        }
        .job-card__desc { color: var(--text-secondary); font-size: 0.938rem; line-height: 1.6; padding-top: 1rem; }
        .apply-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: start; }
        .apply-form { padding: 2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .apply-contact-item {
          display: flex; align-items: center; gap: 0.5rem;
          color: var(--blue-bright); text-decoration: none; font-size: 0.938rem;
        }
        .file-upload__label {
          display: flex; flex-direction: column; align-items: center; gap: 0.375rem;
          padding: 1.75rem;
          border: 2px dashed var(--border-subtle);
          border-radius: 0.75rem; cursor: pointer;
          font-size: 0.875rem; color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .file-upload__label:hover { border-color: var(--border-glow); color: var(--blue-bright); background: var(--surface-input-focus); }
        textarea.form-input { resize: vertical; }
        select.form-input option { background: var(--surface-dropdown); color: var(--text-primary); }
        @media (max-width: 1024px) {
          .perks-grid { grid-template-columns: repeat(2, 1fr); }
          .apply-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .perks-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
