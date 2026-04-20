import gandivaLogo from '../assets/gandiva_logo.jpg'
import './Footer.css'

const footerLinks = {
  Services: [
    'AI & Automation',
    'Business Transformation',
    'Custom Software',
    'Cloud & DevOps',
    'Cybersecurity',
    'Operations Support',
    'Training Programs',
  ],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Case Studies', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
}

const socials = [
  { label: 'LinkedIn', icon: '💼', href: '#' },
  { label: 'Twitter', icon: '🐦', href: '#' },
  { label: 'GitHub', icon: '🐙', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top-gradient" />
      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={gandivaLogo} alt="GANDIVA Tech Solutions" className="footer-logo-img" />
            <div className="footer-logo-title">
              <span className="footer-logo-gandiva">GANDIVA</span>
              <span className="footer-logo-techsub">Tech Solutions</span>
            </div>
          </div>
          <p className="footer-tagline">
            Empowering businesses with AI, cloud, and intelligent automation. 
            Your growth, powered by intelligence.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} title={s.label}>
                <span>{s.icon}</span>
              </a>
            ))}
          </div>
          <div className="footer-contact-brief">
            <a href="mailto:info@gandivatechsolutions.com" className="footer-email">
              info@gandivatechsolutions.com
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="footer-col">
            <h4 className="footer-col-title">{category}</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} GANDIVA Tech Solutions. All rights reserved. Built with ❤️ for the future.
          </p>
          <p className="footer-domain">
            🌐 <strong>gandivatechsolutions.com</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
