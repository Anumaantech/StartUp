import type { Metadata } from 'next';
import Link from 'next/link';

const serviceData: Record<string, {
  title: string; emoji: string; tagline: string;
  description: string; features: string[];
  tech: string[]; audience: string;
  process: { step: string; label: string; desc: string }[];
  color: string;
}> = {
  'web-design': {
    title: 'Website Design & Development', emoji: '🌐',
    tagline: 'Stunning websites that convert visitors into customers',
    color: '#0066ff',
    description: 'We craft high-performance, visually stunning websites that represent your brand professionally and drive measurable business results. From corporate sites to complete web platforms, we build experiences users love.',
    features: ['Mobile-First Responsive Design', 'Core Web Vitals Optimized (90+ Lighthouse)', 'SEO-Optimized Architecture', 'CMS Integration (WordPress/Strapi/Custom)', 'E-commerce Integration (WooCommerce/Shopify)', 'Custom Animations & Micro-interactions', 'Multi-language Support', 'Google Analytics & Tag Manager Setup'],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'WordPress', 'Strapi', 'Vercel'],
    audience: 'Businesses of all sizes — startups, SMEs, enterprises, government departments — who need a professional web presence that drives growth.',
    process: [
      { step: '01', label: 'Discovery', desc: 'Understanding your brand, goals, and target audience.' },
      { step: '02', label: 'Design', desc: 'Wireframes, UI mockups, and brand-aligned design systems.' },
      { step: '03', label: 'Development', desc: 'Clean, performant code with regular demos for your feedback.' },
      { step: '04', label: 'Launch & SEO', desc: 'Go live with full SEO setup, sitemap, and analytics.' },
    ],
  },
  'web-app': {
    title: 'Web Application Development', emoji: '⚙️',
    tagline: 'Scalable, secure web apps for modern businesses',
    color: '#00aaff',
    description: 'We build complex, data-driven web applications that automate processes, improve productivity, and give your business a competitive edge. From B2B SaaS to internal tools, we architect and deliver scalable solutions.',
    features: ['Custom Business Logic & Workflows', 'RESTful & GraphQL API Development', 'Real-time Features (WebSockets)', 'Role-based Access Control (RBAC)', 'Multi-tenant SaaS Architecture', 'Automated Testing & CI/CD', 'Microservices Architecture', 'Third-party & Payment Integrations'],
    tech: ['Next.js', 'Node.js', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS'],
    audience: 'Enterprises, startups, and government bodies needing custom software to automate operations, manage data, or build digital services for users.',
    process: [
      { step: '01', label: 'Requirements', desc: 'Detailed SRS documentation and technical architecture planning.' },
      { step: '02', label: 'Prototyping', desc: 'Clickable prototype for stakeholder review before development.' },
      { step: '03', label: 'Agile Development', desc: 'Sprint-based development with weekly demos and check-ins.' },
      { step: '04', label: 'QA & Deployment', desc: 'Rigorous testing, staging environment, then production launch.' },
    ],
  },
  'mobile-app': {
    title: 'Mobile App Development', emoji: '📱',
    tagline: 'Native & cross-platform iOS and Android apps',
    color: '#00d4ff',
    description: 'We design and develop high-performance mobile applications for iOS and Android using Flutter and React Native. Our apps are fast, feature-rich, and deliver exceptional user experiences that keep users coming back.',
    features: ['Cross-Platform (iOS + Android)', 'Offline-First Architecture', 'Push Notifications & Real-time Sync', 'Biometric Authentication', 'In-App Payments (Razorpay/Stripe)', 'App Store & Play Store Publishing', 'Analytics Integration', 'OTA Updates'],
    tech: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'Razorpay'],
    audience: 'Businesses with a customer-facing or employee-facing need — delivery apps, coaching platforms, hospital patient apps, field workforce management, and more.',
    process: [
      { step: '01', label: 'UX Research', desc: 'User journey mapping and UX audit before a single pixel is designed.' },
      { step: '02', label: 'UI Design', desc: 'Platform-native UI/UX with Figma prototypes for review.' },
      { step: '03', label: 'Development', desc: 'Feature-by-feature development with weekly TestFlight/beta builds.' },
      { step: '04', label: 'App Store', desc: 'End-to-end publishing to Google Play and Apple App Store.' },
    ],
  },
  'government': {
    title: 'Government Software Solutions', emoji: '🏛️',
    tagline: 'Trusted digital transformation for public sector',
    color: '#7c3aed',
    description: 'We specialize in building secure, compliant, and highly reliable software for government departments and public sector organizations. Our solutions are designed to digitize citizen services, improve transparency, and reduce operational overhead.',
    features: ['NIC & MeitY Compliance', 'DigiLocker & Aadhaar Integration', 'National Payment Gateway (e-GRAS)', 'RTI & Transparency Module', 'Multi-department Workflow', 'Audit Trail & Reporting', 'Bilingual Support (Hindi/English)', 'High-availability Architecture (99.9% SLA)'],
    tech: ['Java Spring Boot', 'React', 'Oracle DB', 'AWS GovCloud', 'CentOS', 'LDAP', 'OTP/eSign', 'HTTPS/TLS'],
    audience: 'State and central government departments, municipal corporations, public sector undertakings (PSUs), and autonomous government bodies.',
    process: [
      { step: '01', label: 'Compliance Audit', desc: 'Review of NIC/MeitY guidelines and security requirements.' },
      { step: '02', label: 'Architecture', desc: 'High-availability, multi-tier architecture with disaster recovery.' },
      { step: '03', label: 'Development & VAPT', desc: 'Secure development with Vulnerability Assessment & Penetration Testing.' },
      { step: '04', label: 'Training & Handover', desc: 'Staff training, Go-live support, and comprehensive documentation.' },
    ],
  },
  'erp-crm': {
    title: 'ERP / CRM Solutions', emoji: '🔄',
    tagline: 'Integrate and automate your entire business',
    color: '#a855f7',
    description: 'Our ERP and CRM solutions bring all your business processes under one roof — from inventory and accounting to customer management and reporting. Custom-built or configured from leading platforms, we make your operations seamless.',
    features: ['HR & Payroll Management', 'Inventory & Supply Chain', 'Financial Accounting & GST Filing', 'CRM Pipeline & Lead Tracking', 'Custom Reporting & Dashboards', 'Role-based Access Control', 'Mobile App for Field Teams', 'API Integration with Existing Tools'],
    tech: ['Odoo (v17)', 'Salesforce', 'SAP B1', 'Custom Python/Node.js', 'Power BI', 'MySQL', 'Razorpay', 'GST APIs'],
    audience: 'Manufacturing companies, trading firms, service businesses, hospitals, and any organization looking to replace disconnected spreadsheets and siloed software.',
    process: [
      { step: '01', label: 'Business Analysis', desc: 'Mapping all current processes, pain points, and data flows.' },
      { step: '02', label: 'Solution Design', desc: 'Recommending the best platform (Odoo/Custom) with module selection.' },
      { step: '03', label: 'Configuration & Dev', desc: 'Configuring, customizing, and developing needed modules.' },
      { step: '04', label: 'Migration & Go-Live', desc: 'Data migration, parallel running, staff training, and go-live.' },
    ],
  },
  'ai-automation': {
    title: 'AI / Automation Solutions', emoji: '🤖',
    tagline: 'Intelligent automation for the future-ready enterprise',
    color: '#00f5d4',
    description: 'We build AI-powered solutions that automate repetitive tasks, generate intelligent insights, and supercharge your team\'s productivity. From chatbots to custom ML models and workflow automation, we bring the power of AI to your business.',
    features: ['AI Chatbot & Virtual Assistant', 'Document Processing with OCR+AI', 'Intelligent Process Automation (IPA)', 'Custom ML Model Development', 'NLP & Sentiment Analysis', 'Predictive Analytics Dashboards', 'RAG-based Knowledge Bases', 'WhatsApp Business Bot Integration'],
    tech: ['Python', 'LangChain', 'OpenAI GPT-4', 'TensorFlow', 'Hugging Face', 'FastAPI', 'Pinecone', 'n8n'],
    audience: 'Businesses looking to reduce manual labor, improve customer experience with AI, extract insights from data, or automate document-heavy workflows.',
    process: [
      { step: '01', label: 'Use Case Mapping', desc: 'Identifying the highest-ROI automation opportunities in your workflow.' },
      { step: '02', label: 'POC / Pilot', desc: 'Building a quick proof-of-concept to validate feasibility and value.' },
      { step: '03', label: 'Build & Train', desc: 'Full-scale development, model training, and integration.' },
      { step: '04', label: 'Monitor & Improve', desc: 'Continuous monitoring, retraining, and performance optimization.' },
    ],
  },
  'consulting': {
    title: 'IT Consulting & Strategy', emoji: '🧠',
    tagline: 'Expert technology advisory to accelerate growth',
    color: '#10b981',
    description: 'Our IT consultants provide strategic guidance to help organizations make the right technology decisions. Whether you\'re planning a digital transformation, evaluating vendors, or optimizing existing systems, we\'re your trusted technology advisors.',
    features: ['Digital Transformation Roadmap', 'Technology Stack Assessment', 'Cloud Architecture Review', 'Vendor Evaluation & Selection', 'IT Process Optimization', 'Security & Compliance Audit', 'Cost Optimization Analysis', 'Post-project Due Diligence'],
    tech: ['AWS', 'Azure', 'GCP', 'DevOps', 'TOGAF', 'ITIL', 'ISO 27001', 'OWASP'],
    audience: 'C-suite executives, IT directors, and decision-makers at enterprises and government bodies who need independent, unbiased technology guidance.',
    process: [
      { step: '01', label: 'Discovery', desc: 'Comprehensive audit of existing technology, teams, and processes.' },
      { step: '02', label: 'Analysis', desc: 'Gap analysis, risk assessment, and opportunity identification.' },
      { step: '03', label: 'Recommendation', desc: 'Actionable roadmap with prioritized initiatives and ROI projections.' },
      { step: '04', label: 'Implementation Support', desc: 'Ongoing advisory during execution to ensure strategy succeeds.' },
    ],
  },
  'cloud': {
    title: 'Cloud & Hosting Solutions', emoji: '☁️',
    tagline: 'Reliable, scalable, secure cloud infrastructure',
    color: '#06b6d4',
    description: 'We design, deploy, and manage cloud infrastructure that scales with your business. From migrating existing applications to the cloud to building cloud-native architectures, we ensure your systems are fast, secure, and always available.',
    features: ['AWS / Azure / GCP Setup & Management', 'Auto-scaling & Load Balancing', 'Managed Kubernetes (EKS/GKE)', 'CI/CD Pipeline Automation', 'Database Performance Tuning', 'Security Hardening & WAF', '99.9% Uptime SLA Guarantee', '24/7 Infrastructure Monitoring'],
    tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx', 'Cloudflare'],
    audience: 'Businesses migrating from shared hosting, startups needing scalable infrastructure, and enterprises needing managed cloud operations without maintaining an in-house DevOps team.',
    process: [
      { step: '01', label: 'Assessment', desc: 'Audit current infrastructure, traffic patterns, and requirements.' },
      { step: '02', label: 'Architecture', desc: 'Design right-sized, cost-optimized cloud architecture.' },
      { step: '03', label: 'Migration', desc: 'Zero-downtime migration with rollback plans at every step.' },
      { step: '04', label: 'Managed Services', desc: 'Ongoing monitoring, updates, cost optimization, and support.' },
    ],
  },
  'uiux': {
    title: 'UI/UX Design', emoji: '🎨',
    tagline: 'Beautiful, intuitive designs that delight users',
    color: '#ec4899',
    description: 'Great design is invisible — it just works. Our UX designers research, prototype, and test interfaces that are intuitive, accessible, and visually stunning. We create design systems that scale and delight.',
    features: ['User Research & Persona Development', 'Information Architecture', 'Wireframing & Prototyping (Figma)', 'Interactive Prototype for User Testing', 'Design System & Component Library', 'Accessibility (WCAG 2.1 AA)', 'Motion Design & Micro-animations', 'Design Handoff Documentation'],
    tech: ['Figma', 'Adobe XD', 'Framer', 'Lottie', 'Maze (Testing)', 'Hotjar', 'Zeplin', 'Storybook'],
    audience: 'Product companies, startups, and enterprises who want to improve user satisfaction, reduce support burden, and increase conversion rates through better design.',
    process: [
      { step: '01', label: 'Research', desc: 'User interviews, competitor analysis, and heuristic evaluation.' },
      { step: '02', label: 'Wireframes', desc: 'Low-fidelity wireframes to establish structure and flow.' },
      { step: '03', label: 'Visual Design', desc: 'High-fidelity designs with brand identity and design system.' },
      { step: '04', label: 'Handoff', desc: 'Developer-ready Figma files with full specifications.' },
    ],
  },
  'coaching': {
    title: 'Coaching Institute Software', emoji: '📚',
    tagline: 'Complete digital ecosystem for coaching institutes',
    color: '#f59e0b',
    description: 'We build comprehensive management systems for coaching institutes — handling everything from student admissions and batch management to online exams, fee collection, and parent communication. Reduce administration overhead by 70%.',
    features: ['Student Enrollment & Profiles', 'Batch & Schedule Management', 'Online Exam with Auto-grading', 'Fee Collection & Receipt (Razorpay)', 'Attendance Tracking (QR/Biometric)', 'Performance Reports & Analytics', 'Parent Portal & Notifications', 'Faculty & Staff Management'],
    tech: ['React Native', 'Next.js', 'Node.js', 'MySQL', 'Firebase', 'Razorpay', 'Twilio SMS', 'AWS S3'],
    audience: 'IIT/NEET coaching centres, CA/CS academies, language institutes, skill development centres, and any educational organization with 50+ students.',
    process: [
      { step: '01', label: 'Institute Audit', desc: 'Mapping all workflows — admissions, fees, exams, attendance.' },
      { step: '02', label: 'Custom Design', desc: 'Tailored UI for your staff, students, and parents.' },
      { step: '03', label: 'Development', desc: 'Web + mobile app with all modules, tested with real data.' },
      { step: '04', label: 'Training', desc: 'Staff onboarding, data migration from existing systems.' },
    ],
  },
  'maintenance': {
    title: 'Maintenance & AMC', emoji: '🛠️',
    tagline: 'Keep your systems running at peak performance',
    color: '#64748b',
    description: 'Our Annual Maintenance Contracts (AMC) give you peace of mind with proactive monitoring, regular updates, security patches, and priority support. We ensure your software stays secure, fast, and bug-free year-round.',
    features: ['Monthly Security Patches & Updates', 'Performance Monitoring (24/7)', 'Database Backup & Recovery', 'Bug Fixes & Minor Enhancements', 'SSL Certificate Renewal', 'Uptime Monitoring with Alerts', 'Quarterly Performance Reports', 'Priority Support SLA (4-hour for critical)'],
    tech: ['Datadog', 'New Relic', 'PagerDuty', 'AWS CloudWatch', 'Let\'s Encrypt', 'Grafana', 'Sentry', 'GitHub'],
    audience: 'Any business with a live website, web application, or mobile app who needs ongoing reliability without hiring a full-time in-house tech team.',
    process: [
      { step: '01', label: 'Audit', desc: 'Comprehensive health check of your existing systems.' },
      { step: '02', label: 'AMC Agreement', desc: 'Define scope, SLAs, and response times in the agreement.' },
      { step: '03', label: 'Monitoring Setup', desc: 'Deploy monitoring tools and alert workflows.' },
      { step: '04', label: 'Ongoing Support', desc: 'Monthly maintenance tasks and on-demand support.' },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.description.slice(0, 155),
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Not Found</h1>
          <Link href="/services" className="btn-primary"><span>View All Services</span></Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="service-hero" style={{ '--svc-color': service.color } as React.CSSProperties}>
        <div className="grid-pattern" />
        <div className="service-hero__glow" style={{ background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)` }} />
        <div className="container">
          <div className="service-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/services">Services</Link> <span>/</span>
            <span>{service.title}</span>
          </div>
          <div className="service-hero__icon">{service.emoji}</div>
          <h1 className="service-hero__title">{service.title}</h1>
          <p className="service-hero__tagline" style={{ color: service.color }}>{service.tagline}</p>
          <p className="service-hero__desc">{service.description}</p>
          <div className="service-hero__actions">
            <Link href="/contact" className="btn-primary" id="service-get-quote-btn">
              <span>Get a Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/portfolio" className="btn-outline" id="service-view-work-btn">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Features + Tech */}
      <section className="section">
        <div className="container">
          <div className="service-grid">
            <div>
              <div className="section-label">What&apos;s Included</div>
              <h2 className="section-heading" style={{ fontSize: '1.75rem', margin: '0.75rem 0 1.5rem' }}>
                Key <span className="gradient-text">Features & Benefits</span>
              </h2>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f} className="service-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke={service.color}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="section-label">Who Is This For?</div>
              <h2 className="section-heading" style={{ fontSize: '1.5rem', margin: '0.75rem 0 1rem' }}>
                Target <span className="gradient-text">Audience</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>{service.audience}</p>

              <div className="section-label">Technology Stack</div>
              <h2 className="section-heading" style={{ fontSize: '1.5rem', margin: '0.75rem 0 1rem' }}>
                Technologies <span className="gradient-text">Used</span>
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.tech.map((t) => (
                  <span key={t} className="badge badge-purple" style={{ fontSize: '0.875rem', padding: '0.375rem 0.875rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ display: 'inline-flex' }}>How We Deliver</div>
            <h2 className="section-heading" style={{ margin: '0.75rem 0' }}>
              Our <span className="gradient-text">Delivery Process</span>
            </h2>
          </div>
          <div className="service-process-grid">
            {service.process.map((p, i) => (
              <div key={i} className="service-process-card glass-card" id={`service-process-${i}`} style={{ '--svc-color': service.color } as React.CSSProperties}>
                <div className="service-process-card__step">{p.step}</div>
                <h3 className="service-process-card__title">{p.label}</h3>
                <p className="service-process-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="service-cta glass-card">
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', background: `radial-gradient(circle, ${service.color}15, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{service.emoji}</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
                Ready to Start Your <span className="gradient-text">{service.title} Project?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Let&apos;s discuss your requirements. Get a free consultation with our experts — no obligation, no pressure.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" id="service-bottom-cta-btn">
                  <span>Book Free Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="https://wa.me/917517459054" target="_blank" rel="noopener noreferrer" className="btn-outline" id="service-whatsapp-btn">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Explore <span className="gradient-text">Other Services</span>
          </h2>
          <div style={{ textAlign: 'center' }}>
            <Link href="/services" className="btn-outline" id="service-all-services-btn">View All Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-hero {
          padding: 10rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .service-hero__glow {
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .service-hero__breadcrumb {
          display: flex; gap: 0.5rem;
          font-size: 0.875rem; color: var(--text-muted);
          margin-bottom: 2rem;
          position: relative; z-index: 1;
        }
        .service-hero__breadcrumb a { color: var(--blue-bright); text-decoration: none; }
        .service-hero__breadcrumb a:hover { text-decoration: underline; }
        .service-hero__icon { font-size: 4rem; margin-bottom: 1rem; position: relative; z-index: 1; }
        .service-hero__title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900; margin-bottom: 0.75rem;
          position: relative; z-index: 1;
        }
        .service-hero__tagline {
          font-family: var(--font-display);
          font-size: 1.25rem; font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }
        .service-hero__desc {
          font-size: 1.1rem; color: var(--text-secondary);
          line-height: 1.8; max-width: 720px;
          margin-bottom: 2rem;
          position: relative; z-index: 1;
        }
        .service-hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; position: relative; z-index: 1; }
        .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .service-features { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .service-feature-item {
          display: flex; align-items: flex-start; gap: 0.75rem;
          font-size: 0.938rem; color: var(--text-secondary);
          padding: 0.875rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-subtle);
          border-radius: 0.75rem;
          transition: all 0.2s ease;
        }
        .service-feature-item:hover { border-color: var(--border-glow); color: white; }
        .service-process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .service-process-card { padding: 2rem; text-align: center; position: relative; }
        .service-process-card__step {
          display: inline-flex; align-items: center; justify-content: center;
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, var(--svc-color, #0066ff), color-mix(in srgb, var(--svc-color, #0066ff) 60%, white));
          font-family: var(--font-display); font-size: 1.2rem; font-weight: 800;
          margin-bottom: 1rem;
          box-shadow: 0 8px 25px color-mix(in srgb, var(--svc-color, #0066ff) 40%, transparent);
        }
        .service-process-card__title { font-family: var(--font-display); font-weight: 700; margin-bottom: 0.5rem; }
        .service-process-card__desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; }
        .service-cta { padding: 4rem; position: relative; overflow: hidden; }
        @media (max-width: 1024px) { .service-grid { grid-template-columns: 1fr; } .service-process-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .service-process-grid { grid-template-columns: 1fr; } .service-cta { padding: 2rem; } }
      `}</style>
    </>
  );
}
