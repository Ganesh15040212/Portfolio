import { useState } from 'react'

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9361371846',
    href: 'tel:+919361371846',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'ganeshmanivnr2004@gmail.com',
    href: 'mailto:ganeshmanivnr2004@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ganeshkumar-m-aa9b97280',
    href: 'https://www.linkedin.com/in/ganeshkumar-m-aa9b97280',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Ganesh15040212',
    href: 'https://github.com/Ganesh15040212/All-Projects',
  },
  {
    icon: '📍',
    label: 'Location',
    value: '6/833 Valluvar 3rd Street, Allam Patti, Virudhunagar',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build mailto link
    const mailto = `mailto:ganeshmanivnr2004@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ganesh,\n\nMy name is ${form.name}.\n\n${form.message}\n\nFrom: ${form.email}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <span className="section-tag">// contact</span>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="divider" />

        <div className="contact-grid">
          {/* Left - Info */}
          <div>
            <p className="contact-info-desc">
              I&apos;m actively seeking entry-level Full Stack Developer opportunities.
              Whether you have a project idea, a job opening, or just want to connect —
              my inbox is always open. Let&apos;s build something great together!
            </p>

            <div className="contact-items">
              {contactInfo.map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    className="contact-item"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <p className="contact-item-label">{item.label}</p>
                      <p className="contact-item-value">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <p className="contact-item-label">{item.label}</p>
                      <p className="contact-item-value">{item.value}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Send a Message 💬
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                id="contact-submit"
                type="submit"
                className={`form-submit ${sent ? 'sent' : ''}`}
              >
                {sent ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
