'use client';
import Link from 'next/link';

const posts = [
  { slug: 'ai-automation-2026', title: 'AI Automation Trends in 2026: What Indian Businesses Need to Know', category: 'AI/ML', author: 'Priya Verma', date: 'Apr 15, 2026', readTime: '8 min read', excerpt: 'Explore how AI is reshaping business processes in 2026 and which automation tools are gaining traction across Indian industries.', emoji: '🤖' },
  { slug: 'govt-digital-transformation', title: 'Digital Transformation in Indian Government: Progress & Challenges', category: 'Government Tech', author: 'Anumaan Sharma', date: 'Apr 10, 2026', readTime: '10 min read', excerpt: 'A deep dive into the e-governance initiatives transforming citizen services and the technical challenges being overcome.', emoji: '🏛️' },
  { slug: 'nextjs-performance', title: 'Building High-Performance Websites with Next.js 16', category: 'Web Dev', author: 'Rahul Singh', date: 'Apr 5, 2026', readTime: '6 min read', excerpt: 'Practical techniques for achieving sub-second load times using Next.js 16 App Router, partial prerendering, and edge functions.', emoji: '⚡' },
  { slug: 'coaching-software-guide', title: 'Complete Guide to Choosing Coaching Institute Management Software', category: 'EdTech', author: 'Neha Gupta', date: 'Mar 28, 2026', readTime: '7 min read', excerpt: 'What features to look for, questions to ask vendors, and how to ensure your institute gets the best ROI from its software.', emoji: '📚' },
  { slug: 'erp-vs-custom-software', title: 'ERP vs Custom Software: Which is Right for Your Business?', category: 'Enterprise', author: 'Arjun Patel', date: 'Mar 20, 2026', readTime: '9 min read', excerpt: 'A practical comparison to help SMEs decide between off-the-shelf ERP solutions and custom-built business software.', emoji: '🔄' },
  { slug: 'flutter-vs-react-native', title: 'Flutter vs React Native in 2026: Complete Comparison', category: 'Mobile Dev', author: 'Priya Verma', date: 'Mar 12, 2026', readTime: '12 min read', excerpt: 'An honest, technical comparison of the two leading cross-platform frameworks to help you choose the right one for your project.', emoji: '📱' },
];

const categories = ['All', 'Web Dev', 'Mobile Dev', 'AI/ML', 'Government Tech', 'EdTech', 'Enterprise'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'-100px', left:'-100px'}} />
        <div className="container">
          <div className="page-hero__content">
            <div className="section-label">Blog & Resources</div>
            <h1 className="page-hero__heading">Tech Insights & <span className="gradient-text">Expert Guides</span></h1>
            <p className="page-hero__sub">Stay ahead of the curve with our latest articles on technology trends, development best practices, and business digitization.</p>
            <div className="page-hero__breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Blog</span></div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="portfolio-filters">
            {categories.map((c) => (
              <button key={c} className={`portfolio-filter-btn${c === 'All' ? ' active' : ''}`} id={`blog-filter-${c.toLowerCase().replace('/','-').replace(' ','-')}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-grid">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card glass-card" id={`blog-card-${i}`}>
                <div className="blog-card__visual">
                  <span className="blog-card__emoji">{post.emoji}</span>
                  <div className="badge badge-blue blog-card__cat">{post.category}</div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.author}</span>
                    <span className="blog-card__dot" />
                    <span>{post.date}</span>
                    <span className="blog-card__dot" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <span className="blog-card__link">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{background:'rgba(255,255,255,0.01)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="newsletter-box glass-card">
            <div className="section-label" style={{display:'inline-flex'}}>Newsletter</div>
            <h2 className="section-heading" style={{margin:'1rem 0'}}>Get Tech Insights in Your <span className="gradient-text">Inbox</span></h2>
            <p style={{color:'var(--text-secondary)', maxWidth:'400px', margin:'0 auto 2rem'}}>No spam. Just the latest tech trends and insights from our team. Unsubscribe anytime.</p>
            <form style={{display:'flex', gap:'0.75rem', maxWidth:'440px', margin:'0 auto'}} onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-input" placeholder="your@email.com" id="blog-newsletter-input" style={{flex:1}} />
              <button type="submit" className="btn-primary" id="blog-newsletter-submit-btn" style={{flexShrink:0}}>
                <span>Subscribe</span>
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
        .portfolio-filters { display: flex; gap: 0.625rem; flex-wrap: wrap; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); }
        .portfolio-filter-btn { padding: 0.5rem 1.25rem; border-radius: 50px; border: 1px solid var(--border-subtle); background: var(--glass-bg); color: var(--text-secondary); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; font-family: var(--font-sans); }
        .portfolio-filter-btn.active { background: linear-gradient(135deg, var(--blue-primary), var(--blue-bright)); border-color: transparent; color: white; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .blog-card { overflow: hidden; text-decoration: none; color: inherit; display: block; }
        .blog-card__visual { height: 160px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0,102,255,0.08), rgba(124,58,237,0.08)); border-bottom: 1px solid var(--border-subtle); position: relative; }
        .blog-card__emoji { font-size: 4rem; }
        .blog-card__cat { position: absolute; top: 1rem; left: 1rem; }
        .blog-card__body { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .blog-card__meta { display: flex; align-items: center; gap: 0.5rem; font-size: 0.775rem; color: var(--text-muted); flex-wrap: wrap; }
        .blog-card__dot { width: 3px; height: 3px; border-radius: 50%; background: var(--text-muted); }
        .blog-card__title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; line-height: 1.4; }
        .blog-card__excerpt { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }
        .blog-card__link { display: flex; align-items: center; gap: 0.375rem; font-size: 0.813rem; font-weight: 600; color: var(--blue-bright); transition: gap 0.2s ease; }
        .blog-card:hover .blog-card__link { gap: 0.625rem; }
        .newsletter-box { padding: 3rem; }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
