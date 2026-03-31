import { useEffect, useRef } from 'react'
import heroBanner from '../assets/hero_banner.png'
import './Hero.css'

const stats = [
  { value: '7', label: 'Premium Services' },
  { value: '3', label: 'Expert Directors' },
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

export default function Hero() {
  const heroRef = useRef(null)

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
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
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
            <button className="btn-primary hero-cta" onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }) }}>
              Start Your Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-outline" onClick={() => { const el = document.getElementById('services'); if(el) el.scrollIntoView({ behavior: 'smooth' }) }}>
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
              </div>
              <div className="ai-bar-group">
                {[
                  { label: '🤖 AI & Intelligent Automation', color: '#6c63ff' },
                  { label: '📊 Business Transformation', color: '#f59e0b' },
                  { label: '💻 Custom Software Development', color: '#10b981' },
                  { label: '☁️ Cloud & DevOps Engineering', color: '#06b6d4' },
                  { label: '🔐 Cybersecurity & Compliance', color: '#ef4444' },
                  { label: '⚙️ Operations & Support', color: '#8b5cf6' },
                  { label: '🎓 Training & Upskilling', color: '#f59e0b' },
                ].map((item, i) => (
                  <div key={item.label} className="service-pill" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="pill-dot" style={{ background: item.color }} />
                    <span>{item.label}</span>
                  </div>
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
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </button>
    </section>
  )
}
