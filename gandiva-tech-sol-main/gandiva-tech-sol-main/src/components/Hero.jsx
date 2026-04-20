import { useRef, useState, useEffect } from 'react'
import heroBanner from '../assets/hero_banner.png'
import './Hero.css'

const stats = [
  { value: '8', label: 'Premium Services' },
  { value: '3', label: 'Technical Experts' },
  { value: '24/7', label: 'Support Availability' },
  { value: '∞', label: 'Growth Potential' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 8}s`,
  animationDuration: `${6 + Math.random() * 8}s`,
  size: `${2 + Math.random() * 4}px`,
}))

const serviceDetails = [
  {
    id: 'ai',
    label: '🤖 AI & Intelligent Automation',
    color: '#6c63ff',
    gradient: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
    tagline: 'Your Competitive Differentiator',
    description: 'Harness the full power of AI to automate decisions, eliminate manual work, and drive unprecedented accuracy across your operations.',
    offerings: [
      'AI-powered chatbots & virtual assistants',
      'Document processing (OCR + NLP)',
      'Predictive analytics & forecasting',
      'Recommendation systems',
      'RPA + AI integration',
    ],
    outcome: 'Automate decisions, reduce manual work, increase accuracy',
  },
  {
    id: 'data',
    label: '📈 Data Analytics & Engineering',
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #0891b2, #6366f1)',
    tagline: 'Turn Raw Data Into Business Intelligence',
    description: 'End-to-end data platforms — from ingestion pipelines to interactive dashboards — enabling data-driven decisions at every level.',
    offerings: [
      'Data warehouse & lakehouse architecture',
      'ETL / ELT pipeline engineering',
      'BI & dashboarding (Power BI, Tableau)',
      'Real-time streaming analytics (Kafka, Spark)',
      'Data governance & quality frameworks',
    ],
    outcome: 'Faster insights, confident decisions, unified data strategy',
  },
  {
    id: 'strategy',
    label: '📊 Business Transformation',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    tagline: 'Optimize, Automate, Scale',
    description: 'Redesign your operations from the ground up — eliminating inefficiencies, cutting costs, and creating a scalable digital roadmap.',
    offerings: [
      'Process optimization & cost reduction',
      'Digital transformation roadmap',
      'Workflow automation strategy',
      'KPI-driven performance improvement',
    ],
    outcome: 'Reduce cost, increase efficiency, scale operations',
  },
  {
    id: 'software',
    label: '💻 Custom Software Development',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    tagline: 'Built for Your Business',
    description: 'Enterprise platforms to SaaS products and mobile apps — scalable, secure software tailored precisely to your requirements.',
    offerings: [
      'Enterprise applications',
      'Web & mobile apps',
      'SaaS platforms',
      'API & microservices architecture',
    ],
    outcome: 'Scalable systems tailored to your business needs',
  },
  {
    id: 'cloud',
    label: '☁️ Cloud & DevOps Engineering',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    tagline: 'Faster Deployments, Lower Costs',
    description: 'Accelerate delivery with modern cloud infrastructure, automated CI/CD, and container orchestration with Kubernetes.',
    offerings: [
      'Cloud migration (AWS / Azure / GCP)',
      'CI/CD pipeline automation',
      'Infrastructure as Code',
      'Kubernetes & containerization',
    ],
    outcome: 'Faster deployments, lower infrastructure cost',
  },
  {
    id: 'cyber',
    label: '🔐 Cybersecurity & Compliance',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    tagline: 'Protect What Matters',
    description: 'Comprehensive security architecture, compliance frameworks, and vulnerability management to protect your business.',
    offerings: [
      'Security audits & assessments',
      'Data protection & GDPR compliance',
      'Vulnerability assessment & pen testing',
      'Secure architecture design',
    ],
    outcome: 'Risk reduction, compliance readiness',
  },
  {
    id: 'ops',
    label: '⚙️ Operations & Support',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    tagline: 'Zero Downtime Guaranteed',
    description: 'Round-the-clock monitoring, proactive maintenance, and SLA-backed support to keep your systems at peak performance.',
    offerings: [
      '24/7 system monitoring & alerting',
      'SLA-based tiered support',
      'Performance tuning & optimization',
      'Cloud & infrastructure management',
    ],
    outcome: 'Stable systems, zero downtime',
  },
  {
    id: 'training',
    label: '🎓 Corporate Trainings & Upskilling',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #84cc16)',
    tagline: 'Build Your AI-Ready Workforce',
    description: 'Comprehensive corporate training in AI, Cloud, and modern development — from executive workshops to developer bootcamps.',
    offerings: [
      'Corporate AI & cloud training',
      'Hands-on technical workshops',
      'Developer bootcamps',
      'Custom enterprise training programs',
    ],
    outcome: 'Skilled workforce, faster technology adoption',
  },
  {
    id: 'other',
    label: '💡 Other / Custom Requirements',
    color: '#64748b',
    gradient: 'linear-gradient(135deg, #64748b, #334155)',
    tagline: 'Something Unique? We\'ve Got You Covered',
    description: 'Have a bespoke project, a niche challenge, or something that doesn\'t fit neatly into any category? Our team thrives on custom problems and unique engagements.',
    offerings: [
      'Bespoke technology consulting',
      'Proof-of-concept & rapid prototyping',
      'Technology assessment & advisory',
      'Legacy system modernisation',
      'Multi-service integrated solutions',
    ],
    outcome: 'Tailored solution designed around your specific needs',
  },
]

/* ── Modal component ── */
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div className="modal-accent-bar" style={{ background: service.gradient }} />

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-body">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-icon-wrap" style={{ background: `${service.color}18` }}>
              <span className="modal-icon">{service.label.split(' ')[0]}</span>
            </div>
            <div className="modal-title-group">
              <span className="modal-badge" style={{ background: `${service.color}15`, color: service.color, borderColor: `${service.color}35` }}>
                {service.id.toUpperCase()}
              </span>
              <h2 className="modal-title">
                {service.label.slice(service.label.indexOf(' ') + 1)}
              </h2>
              <p className="modal-tagline">{service.tagline}</p>
            </div>
          </div>

          <div className="modal-divider" style={{ background: `${service.color}25` }} />

          {/* Description */}
          <p className="modal-description">{service.description}</p>

          {/* Offerings */}
          <div className="modal-section-label">What's included</div>
          <ul className="modal-offerings">
            {service.offerings.map((o) => (
              <li key={o}>
                <span className="modal-check" style={{ background: service.gradient }}>✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>

          {/* Outcome */}
          <div className="modal-outcome" style={{ borderColor: `${service.color}30`, background: `${service.color}09` }}>
            <span className="modal-outcome-icon" style={{ color: service.color }}>🎯</span>
            <div>
              <div className="modal-outcome-label" style={{ color: service.color }}>Expected Outcome</div>
              <div className="modal-outcome-text">{service.outcome}</div>
            </div>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              className="modal-cta"
              style={{ background: service.gradient }}
              onClick={() => {
                onClose()
                setTimeout(() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 200)
              }}
            >
              Get Started
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="modal-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const [activeModal, setActiveModal] = useState(null)

  const handleScrollDown = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Particle field */}
      <div className="particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.animationDelay, animationDuration: p.animationDuration }}
          />
        ))}
      </div>

      {/* Background image */}
      <div className="hero-bg">
        <img src={heroBanner} alt="Gandiva Tech - AI Innovation" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            The Future of <br />
            <span className="gradient-text">Intelligent Business</span>
            <br />Starts Here
          </h1>
          <p className="hero-description">
            Gandiva Tech Solutions delivers cutting-edge AI automation, digital transformation,
            and enterprise software that propels your business into the future. Your growth, powered by intelligence.
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-cta" onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}>
              Start Your Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn-outline" onClick={() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}>
              Explore Services
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="hero-card">
            <div className="hero-card-glow" />
            <div className="hero-card-inner">
              <div className="ai-status">
                <span className="ai-dot" />
                <span>What We Deliver</span>
                <span className="click-hint">click to learn more</span>
              </div>
              <div className="ai-bar-group">
                {serviceDetails.map((item, i) => (
                  <button
                    key={item.id}
                    className="service-pill"
                    style={{ animationDelay: `${i * 0.07}s` }}
                    onClick={() => setActiveModal(item)}
                    aria-label={`Learn more about ${item.label}`}
                  >
                    <span className="pill-dot" style={{ background: item.color }} />
                    <span className="pill-label">{item.label}</span>
                    <svg className="pill-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Scroll down">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
      </button>

      {/* Modal */}
      {activeModal && (
        <ServiceModal service={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  )
}
