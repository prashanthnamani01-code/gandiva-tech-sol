import { useState, useRef, useEffect } from 'react'
import './Contact.css'

const contactInfo = [
  { icon: '🌐', label: 'Website', value: 'www.gandivatechsolutions.com', href: 'https://www.gandivatechsolutions.com' },
  { icon: '📧', label: 'Email', value: 'info@gandivatechsolutions.com', href: 'mailto:info@gandivatechsolutions.com' },
  { icon: '📍', label: 'Location', value: 'India | Global Operations', href: null },
]

const services = [
  'AI & Intelligent Automation',
  'Business Transformation',
  'Custom Software Development',
  'Cloud & DevOps',
  'Cybersecurity',
  'Operations & Support',
  'Corporate Trainings & Upskilling',
  'Other/Custom Requirement',
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', mobile: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '6e817897-e7d0-44f1-8cef-814e7ca6acf2',
          to: 'info@gandivatechsolutions.com',
          subject: `New Enquiry from ${form.name} – ${form.service || 'General'}`,
          name: form.name,
          email: form.email,
          company: form.company,
          mobile: form.mobile,
          service: form.service,
          message: form.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again or email us directly at info@gandivatechsolutions.com')
      }
    } catch {
      alert('Network error. Please try again or email us directly at info@gandivatechsolutions.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">📬 CONTACT US</div>
          <h2 className="section-title">Let&apos;s Build Something Extraordinary</h2>
          <p className="section-subtitle">
            Ready to unlock the power of AI for your business? Tell us about your challenge and we&apos;ll 
            craft a solution tailored to your needs.
          </p>
        </div>

        <div className={`contact-grid ${visible ? 'visible' : ''}`}>
          {/* Info column */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-card-title">Get in Touch</h3>
              <div className="contact-details">
                {contactInfo.map((c) => (
                  <div key={c.label} className="contact-detail">
                    <span className="detail-icon">{c.icon}</span>
                    <div>
                      <span className="detail-label">{c.label}</span>
                      {c.href ? (
                        <a href={c.href} className="detail-value detail-link">{c.value}</a>
                      ) : (
                        <span className="detail-value">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-card">
              <h3 className="process-title">Our Engagement Process</h3>
              <div className="process-steps">
                {[
                  { step: '01', label: 'Discovery Call', desc: 'Understand your challenges and goals' },
                  { step: '02', label: 'Solution Design', desc: 'Tailored roadmap & proposal within 48hrs' },
                  { step: '03', label: 'Kickoff', desc: 'Team assigned, project begins immediately' },
                  { step: '04', label: 'Deliver & Grow', desc: 'Agile delivery with continuous improvement' },
                ].map((p) => (
                  <div key={p.step} className="process-step">
                    <div className="step-num">{p.step}</div>
                    <div>
                      <span className="step-label">{p.label}</span>
                      <span className="step-desc">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Thank You, {form.name}!</h3>
                <p>We&apos;ve received your message and will get back to you within 24 hours with a tailored proposal.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Contact No</label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Challenge *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your business challenge or project requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
