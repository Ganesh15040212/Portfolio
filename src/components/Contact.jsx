import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS credentials ──────────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com and replace these values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ojwy5an'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xzsnks8'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'SAcW5OwfuQpLUIhUD'
// ─────────────────────────────────────────────────────────────────────────────

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
    value: 'linkedin.com/in/ganeshkumar-m',
    href: 'https://www.linkedin.com/in/ganeshkumar-m-aa9b97280',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Ganesh15040212',
    href: 'https://github.com/Ganesh15040212',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Virudhunagar, Tamil Nadu',
    href: null,
  },
]

// ── Status icon components ───────────────────────────────────────────────────
const SendIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const SpinnerIcon = () => (
  <svg
    width="17" height="17" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    style={{ animation: 'contact-spin 0.8s linear infinite' }}
  >
    <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ErrorIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

// ── Main Component ───────────────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })

  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setStatus('success')
      setForm({ from_name: '', from_email: '', subject: '', message: '' })

      // Reset back to idle after 5s
      setTimeout(() => setStatus('idle'), 5000)

    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg(
        err?.text ||
        'Failed to send message. Please try emailing directly at ganeshmanivnr2004@gmail.com'
      )
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  // ── Button label / icon ────────────────────────────────────────────────────
  const buttonContent = {
    idle: { icon: <SendIcon />, text: 'Send Message', cls: '' },
    sending: { icon: <SpinnerIcon />, text: 'Sending…', cls: 'sending' },
    success: { icon: <CheckIcon />, text: 'Message Sent!', cls: 'sent' },
    error: { icon: <ErrorIcon />, text: 'Try Again', cls: 'error-btn' },
  }[status]

  return (
    <section className="section contact-section" id="contact">
      {/* Keyframe for spinner */}
      <style>{`
        @keyframes contact-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .form-submit.sending   { background: linear-gradient(135deg,#5a52d5,#00b891); opacity:.85; cursor:not-allowed; }
        .form-submit.sent      { background: linear-gradient(135deg,#00d4aa,#00b891); }
        .form-submit.error-btn { background: linear-gradient(135deg,#e05a6d,#c0392b); }
        .contact-toast {
          display: flex; align-items: flex-start; gap: .75rem;
          padding: 1rem 1.15rem;
          border-radius: 12px;
          font-size: .875rem;
          line-height: 1.55;
          margin-top: 1rem;
          animation: fadeInUp .35s ease;
        }
        .contact-toast.success-toast {
          background: rgba(0,212,170,.1);
          border: 1px solid rgba(0,212,170,.3);
          color: #00d4aa;
        }
        .contact-toast.error-toast {
          background: rgba(224,90,109,.1);
          border: 1px solid rgba(224,90,109,.3);
          color: #e05a6d;
        }
        .toast-icon { flex-shrink:0; margin-top:.05rem; }
        .toast-title { font-weight:700; margin-bottom:.2rem; }
        .toast-msg   { color: inherit; opacity:.85; font-size:.82rem; }
      `}</style>

      <div className="container">
        <span className="section-tag">// contact</span>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="divider" />

        <div className="contact-grid">

          {/* ── Left – Info ──────────────────────────────────────────────── */}
          <div>
            <p className="contact-info-desc">
              I&apos;m actively seeking entry-level Full Stack Developer
              opportunities. Whether you have a project idea, a job opening,
              or just want to connect — my inbox is always open.
              Let&apos;s build something great together!
            </p>

            <div className="contact-items">
              {contactInfo.map((item, i) =>
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
              )}
            </div>
          </div>

          {/* ── Right – Form ─────────────────────────────────────────────── */}
          <div className="contact-form-card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Send a Message 💬
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about the opportunity…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Submit button */}
              <button
                id="contact-submit"
                type="submit"
                className={`form-submit ${buttonContent.cls}`}
                disabled={status === 'sending'}
              >
                {buttonContent.icon}
                {buttonContent.text}
              </button>

              {/* Success toast */}
              {status === 'success' && (
                <div className="contact-toast success-toast">
                  <span className="toast-icon"><CheckIcon /></span>
                  <div>
                    <p className="toast-title">Message delivered! 🎉</p>
                    <p className="toast-msg">
                      Thanks for reaching out. Ganesh will reply to{' '}
                      <strong>{form.from_email || 'your email'}</strong> shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error toast */}
              {status === 'error' && (
                <div className="contact-toast error-toast">
                  <span className="toast-icon"><ErrorIcon /></span>
                  <div>
                    <p className="toast-title">Oops, something went wrong!</p>
                    <p className="toast-msg">{errorMsg}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
