import { useRef, useEffect, useState } from 'react'
import './WhyUs.css'

const reasons = [
  {
    icon: '🧠',
    title: 'AI-First Approach',
    desc: 'We lead every engagement with intelligence at the core — not as an afterthought, but as the foundation.',
    metric: '3×',
    metricLabel: 'Faster outcomes',
    color: '#6c63ff',
  },
  {
    icon: '🏭',
    title: 'End-to-End Ownership',
    desc: 'From strategy to deployment and ongoing support — one partner, complete accountability.',
    metric: '100%',
    metricLabel: 'Full lifecycle',
    color: '#00d4ff',
  },
  {
    icon: '⚡',
    title: 'Rapid Time-to-Value',
    desc: 'Our agile delivery model ensures you see tangible results within weeks, not months.',
    metric: '6 Wks',
    metricLabel: 'Avg. first delivery',
    color: '#10b981',
  },
  {
    icon: '🌐',
    title: 'Multi-Cloud Expertise',
    desc: 'Deep expertise across AWS, Azure, and GCP means your infrastructure is cloud-agnostic and future-proof.',
    metric: 'AWS+Azure+GCP',
    metricLabel: 'All major clouds',
    color: '#f59e0b',
  },
  {
    icon: '🔒',
    title: 'Security by Design',
    desc: 'Every solution we build embeds security and compliance from day one — never bolted on after.',
    metric: 'Zero',
    metricLabel: 'Breach incidents',
    color: '#ef4444',
  },
  {
    icon: '📈',
    title: 'Measurable ROI',
    desc: 'We define success metrics upfront and measure every initiative against real business KPIs.',
    metric: '40%+',
    metricLabel: 'Avg. cost reduction',
    color: '#8b5cf6',
  },
]

const technologies = [
  'Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI GPT',
  'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker',
  'React', 'Node.js', 'FastAPI', 'Kafka', 'PostgreSQL',
]

export default function WhyUs() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" className="whyus-section" ref={ref}>
      <div className="container">
        <div className="whyus-header">
          <div className="section-badge">💡 WHY GANDIVA</div>
          <h2 className="section-title">The Gandiva Advantage</h2>
          <p className="section-subtitle">
            We don&apos;t just build technology — we build competitive advantages. Here&apos;s what sets us apart.
          </p>
        </div>

        <div className={`reasons-grid ${visible ? 'visible' : ''}`}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reason-card"
              style={{ animationDelay: `${i * 0.1}s`, '--card-color': r.color }}
            >
              <div className="reason-metric">
                <span className="metric-number" style={{ color: r.color }}>{r.metric}</span>
                <span className="metric-sub">{r.metricLabel}</span>
              </div>
              <div className="reason-icon">{r.icon}</div>
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
              <div className="reason-accent" style={{ background: r.color }} />
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className={`tech-stack ${visible ? 'visible' : ''}`}>
          <h3 className="tech-heading">Technologies We Master</h3>
          <div className="tech-scroll">
            <div className="tech-track">
              {[...technologies, ...technologies].map((tech, i) => (
                <div key={`${tech}-${i}`} className="tech-pill">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className={`cta-banner ${visible ? 'visible' : ''}`}>
          <div className="cta-banner-content">
            <h3 className="cta-banner-title">Ready to Transform Your Business?</h3>
            <p className="cta-banner-sub">Join 50+ enterprises already leveraging the Gandiva advantage.</p>
          </div>
          <button
            className="btn-primary cta-banner-btn"
            onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Schedule Free Consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
