import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Page not found — Anumaan Technologies',
};

export default function NotFoundPage() {
  return (
    <>
      <section className="notfound">
        <div className="grid-pattern" />
        <div className="bg-glow-1" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}} />
        <div className="container notfound__inner">
          <div className="notfound__code gradient-text-blue">404</div>
          <h1 className="notfound__heading">Oops! Page <span className="gradient-text">Not Found</span></h1>
          <p className="notfound__sub">
            The page you&apos;re looking for seems to have gone on a digital vacation. 
            Let&apos;s get you back on track.
          </p>
          <div className="notfound__actions">
            <Link href="/" className="btn-primary" id="404-home-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Go Home</span>
            </Link>
            <Link href="/contact" className="btn-outline" id="404-contact-btn">Contact Us</Link>
          </div>
          <div className="notfound__links">
            <p style={{color:'var(--text-muted)', marginBottom:'1rem'}}>Or visit:</p>
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center'}}>
              {[
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="badge badge-blue" style={{textDecoration:'none', padding:'0.5rem 1rem'}}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .notfound {
          min-height: 100dvh; display: flex; align-items: center;
          justify-content: center; text-align: center;
          position: relative; overflow: hidden;
          padding: 8rem 1.5rem;
        }
        .notfound__inner { position: relative; z-index: 1; }
        .notfound__code {
          font-family: var(--font-display);
          font-size: clamp(6rem, 20vw, 12rem);
          font-weight: 900; line-height: 1;
          opacity: 0.3; margin-bottom: -1rem;
        }
        .notfound__heading { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem; }
        .notfound__sub { color: var(--text-secondary); font-size: 1.125rem; max-width: 450px; margin: 0 auto 2rem; line-height: 1.7; }
        .notfound__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .notfound__links { }
      `}</style>
    </>
  );
}
