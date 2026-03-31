import { useRef, useEffect, useState } from 'react'
import './About.css'

const values = [
  { icon: '🎯', title: 'Results-Driven', desc: 'Every engagement is measured against tangible business outcomes — not just deliverables.' },
  { icon: '🤝', title: 'Partnership First', desc: 'We embed ourselves in your team, understanding your challenges as if they were our own.' },
  { icon: '⚡', title: 'Agile Execution', desc: 'Rapid iteration cycles ensure you see value fast, with continuous improvement over time.' },
  { icon: '🔬', title: 'Innovation Mindset', desc: 'We stay ahead of the technology curve so your business always benefits from the latest breakthroughs.' },
]

const team = [
  { name: 'Prashanth Namani', role: 'CEO & Founder', emoji: '👨‍💼', color: '#6c63ff' },
  { name: 'Arjun Golla', role: 'Director', emoji: '🚀', color: '#00d4ff' },
  { name: 'Srujana Namani', role: 'Director', emoji: '💡', color: '#10b981' },
  { name: 'Mounika Vadla', role: 'Director', emoji: '⚡', color: '#f59e0b' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className={`about-grid ${visible ? 'visible' : ''}`}>
          <div className="about-left">
            <div className="section-badge">🏢 ABOUT GANDIVA</div>
            <h2 className="section-title">Transforming Visions Into Intelligent Digital Realities</h2>
            <p className="about-intro">
              Gandiva Tech Solutions is a next-generation technology consultancy founded with a singular mission: 
              to make advanced AI and digital capabilities accessible to every business — from ambitious startups 
              to global enterprises.
            </p>
            <p className="about-body">
              Named after the legendary bow of Arjuna in the Mahabharata — a symbol of precision, power, and 
              mastery — Gandiva Tech Solutions embodies the belief that the right technology, wielded with 
              expertise, can achieve extraordinary results.
            </p>
            <p className="about-body">
              We operate at the intersection of artificial intelligence, cloud engineering, and business strategy, 
              delivering solutions that don&apos;t just solve today&apos;s problems but build the foundation for 
              tomorrow&apos;s growth.
            </p>

            <div className="about-values">
              {values.map((v) => (
                <div key={v.title} className="value-item">
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <h4 className="value-title">{v.title}</h4>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="mission-card">
              <h3 className="mission-title">🎯 Our Mission</h3>
              <p className="mission-text">
                To accelerate business transformation through intelligent technology solutions, 
                empowering organizations to realize their full potential in the digital age.
              </p>
            </div>

            <div className="vision-card">
              <h3 className="vision-title">🔭 Our Vision</h3>
              <p className="vision-text">
                To be the most trusted AI and technology partner for businesses across the globe, 
                known for innovation, integrity, and measurable impact.
              </p>
            </div>

            <div className="team-preview">
              <h3 className="team-heading">Leadership Team</h3>
              <div className="team-grid">
                {team.map((member) => (
                  <div key={member.name} className="team-card">
                    <div className="team-avatar" style={{ borderColor: member.color, boxShadow: `0 0 20px ${member.color}40` }}>
                      <span>{member.emoji}</span>
                    </div>
                    <div className="team-info">
                      <span className="team-name">{member.name}</span>
                      <span className="team-role" style={{ color: member.color }}>{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
