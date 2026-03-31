import { useState, useRef, useEffect } from 'react'
import aiAutomationImg from '../assets/ai_automation.png'
import businessImg from '../assets/business_strategy.png'
import cloudImg from '../assets/cloud_devops.png'
import cyberImg from '../assets/cybersecurity.png'
import softwareImg from '../assets/custom_software.png'
import './Services.css'

const services = [
  {
    id: 'ai',
    icon: '🤖',
    badge: 'HERO SERVICE',
    badgeColor: '#ffd700',
    title: 'AI & Intelligent Automation',
    tagline: 'Your Competitive Differentiator',
    description: 'Harness the full power of artificial intelligence to automate decisions, eliminate manual work, and drive unprecedented accuracy across your operations.',
    offerings: [
      'AI-powered chatbots & virtual assistants',
      'Document processing (OCR + NLP)',
      'Predictive analytics & forecasting',
      'Recommendation systems',
      'RPA + AI integration',
    ],
    outcome: 'Automate decisions, reduce manual work, increase accuracy',
    image: aiAutomationImg,
    gradient: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
    hero: true,
  },
  {
    id: 'strategy',
    icon: '📊',
    badge: 'TRANSFORMATION',
    badgeColor: '#6c63ff',
    title: 'Business Transformation & Strategy',
    tagline: 'Optimize, Automate, Scale',
    description: 'We partner with you to redesign your operations from the ground up — eliminating inefficiencies, cutting costs, and creating a scalable digital roadmap.',
    offerings: [
      'Process optimization & cost reduction',
      'Digital transformation roadmap',
      'Workflow automation strategy',
      'KPI-driven performance improvement',
    ],
    outcome: 'Reduce cost, increase efficiency, scale operations',
    image: businessImg,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    hero: false,
  },
  {
    id: 'software',
    icon: '💻',
    badge: 'DEVELOPMENT',
    badgeColor: '#10b981',
    title: 'Custom Software Development',
    tagline: 'Built for Your Business',
    description: 'From enterprise platforms to SaaS products and mobile apps, we engineer scalable, secure software tailored precisely to your requirements.',
    offerings: [
      'Enterprise applications',
      'Web & mobile apps',
      'SaaS platforms',
      'API & microservices architecture',
    ],
    outcome: 'Scalable systems tailored to your business needs',
    image: softwareImg,
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    hero: false,
  },
  {
    id: 'cloud',
    icon: '☁️',
    badge: 'CLOUD & DEVOPS',
    badgeColor: '#06b6d4',
    title: 'Cloud & DevOps Engineering',
    tagline: 'Faster Deployments, Lower Costs',
    description: 'Accelerate your delivery pipeline with modern cloud infrastructure, automated CI/CD, and container orchestration with Kubernetes.',
    offerings: [
      'Cloud migration (AWS / Azure / GCP)',
      'CI/CD pipeline automation',
      'Infrastructure as Code',
      'Kubernetes & containerization',
    ],
    outcome: 'Faster deployments, lower infrastructure cost',
    image: cloudImg,
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    hero: false,
  },
  {
    id: 'cyber',
    icon: '🔐',
    badge: 'SECURITY',
    badgeColor: '#ef4444',
    title: 'Cybersecurity & Compliance',
    tagline: 'Protect What Matters',
    description: 'Comprehensive security architecture, compliance frameworks, and vulnerability management to protect your business from evolving threats.',
    offerings: [
      'Security audits & assessments',
      'Data protection & GDPR compliance',
      'Vulnerability assessment & pen testing',
      'Secure architecture design',
    ],
    outcome: 'Risk reduction, compliance readiness',
    image: cyberImg,
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    hero: false,
  },
  {
    id: 'ops',
    icon: '⚙️',
    badge: '24/7 SUPPORT',
    badgeColor: '#8b5cf6',
    title: 'Operations, Maintenance & Support',
    tagline: 'Zero Downtime Guaranteed',
    description: 'Round-the-clock monitoring, proactive maintenance, and SLA-backed support to keep your systems running at peak performance.',
    offerings: [
      '24/7 system monitoring & alerting',
      'SLA-based tiered support',
      'Performance tuning & optimization',
      'Cloud & infrastructure management',
    ],
    outcome: 'Stable systems, zero downtime',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    hero: false,
  },
  {
    id: 'training',
    icon: '🎓',
    badge: 'LEARNING',
    badgeColor: '#f59e0b',
    title: 'Training & Upskilling Programs',
    tagline: 'Build Your AI-Ready Workforce',
    description: 'Comprehensive corporate training programs in AI, Cloud, and modern development — from executive workshops to developer bootcamps.',
    offerings: [
      'Corporate AI & cloud training',
      'Hands-on technical workshops',
      'Developer bootcamps',
      'Custom enterprise training programs',
    ],
    outcome: 'Skilled workforce, faster technology adoption',
    gradient: 'linear-gradient(135deg, #f59e0b, #84cc16)',
    hero: false,
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  if (service.hero) {
    return (
      <div
        ref={cardRef}
        className={`service-hero-card ${visible ? 'visible' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="shc-content">
          <div className="shc-badge" style={{ background: `${service.badgeColor}20`, color: service.badgeColor, borderColor: `${service.badgeColor}40` }}>
            ⭐ {service.badge}
          </div>
          <div className="shc-icon">{service.icon}</div>
          <h3 className="shc-title">{service.title}</h3>
          <p className="shc-tagline">{service.tagline}</p>
          <p className="shc-description">{service.description}</p>
          <ul className="shc-offerings">
            {service.offerings.map((o) => (
              <li key={o}>
                <span className="check-icon">✓</span> {o}
              </li>
            ))}
          </ul>
          <div className="shc-outcome">
            <span className="outcome-label">🎯 Outcome:</span> {service.outcome}
          </div>
          <button
            className="btn-primary shc-cta"
            onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Explore AI Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="shc-image">
          <img src={service.image} alt={service.title} />
          <div className="shc-image-glow" style={{ background: service.gradient }} />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className={`service-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="sc-top">
        <div className="sc-badge" style={{ background: `${service.badgeColor}15`, color: service.badgeColor, borderColor: `${service.badgeColor}30` }}>
          {service.badge}
        </div>
        {service.image && (
          <div className="sc-image-thumb">
            <img src={service.image} alt={service.title} />
          </div>
        )}
      </div>
      <div className="sc-icon-wrap" style={{ background: service.gradient }}>
        <span className="sc-icon">{service.icon}</span>
      </div>
      <h3 className="sc-title">{service.title}</h3>
      <p className="sc-tagline">{service.tagline}</p>
      <p className="sc-description">{service.description}</p>
      <ul className="sc-offerings">
        {service.offerings.map((o) => (
          <li key={o}>
            <span className="sc-dot" style={{ background: service.gradient }} />
            {o}
          </li>
        ))}
      </ul>
      <div className="sc-outcome">
        <span>🎯</span> {service.outcome}
      </div>
      <div className="sc-hover-line" style={{ background: service.gradient }} />
    </div>
  )
}

export default function Services() {
  const [heroService] = useState(services.find((s) => s.hero))
  const [otherServices] = useState(services.filter((s) => !s.hero))

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">⚡ OUR SERVICES</div>
          <h2 className="section-title">Everything Your Business Needs to Thrive in the Digital Age</h2>
          <p className="section-subtitle">
            From AI-powered automation to enterprise software, cloud infrastructure and beyond — 
            we are your end-to-end technology partner.
          </p>
        </div>

        {/* Hero service */}
        <ServiceCard service={heroService} index={0} />

        {/* Other services grid */}
        <div className="services-grid">
          {otherServices.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
