export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <p className="footer-text">
        Designed &amp; Built with ❤️ by{' '}
        <span>Ganesh Kumar M</span>{' '}
        &mdash; MCA Student &amp; Full Stack Developer
      </p>
      <div className="footer-links">
        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map(label => (
          <button
            key={label}
            className="footer-link"
            onClick={() => document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
          >
            {label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.25)',
            borderRadius: '8px',
            padding: '0.4rem 0.9rem',
            color: 'var(--primary-light)',
            fontSize: '0.78rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => e.target.style.background = 'rgba(108,99,255,0.2)'}
          onMouseLeave={e => e.target.style.background = 'rgba(108,99,255,0.12)'}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  )
}
