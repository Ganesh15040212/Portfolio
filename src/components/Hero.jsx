import { useState, useEffect } from 'react'
import ganeshProfile from '../assets/ganesh_profile.jpeg'

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'PHP & MySQL Developer',
  'UI/UX Enthusiast',
]

function useTypewriter(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    let timer

    if (!deleting && charIdx <= current.length) {
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIdx))
        setCharIdx(c => c + 1)
      }, speed)
    } else if (!deleting && charIdx > current.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    }

    return () => clearTimeout(timer)
  }, [charIdx, deleting, idx, texts, speed, pause])

  return display
}

export default function Hero() {
  const role = useTypewriter(roles)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const techBadges = [
    { label: 'React.js', color: '#61dafb', dot: '#61dafb' },
    { label: 'PHP', color: '#8993be', dot: '#8993be' },
    { label: 'MySQL', color: '#00d4aa', dot: '#00d4aa' },
    { label: 'JavaScript', color: '#f7df1e', dot: '#f7df1e' },
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* Left - Text */}
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I&apos;m <span className="gradient-text">Ganesh Kumar</span>
          </h1>

          <p className="hero-title">
            <span>{role}</span>
            <span className="cursor" />
          </p>

          <p className="hero-desc">
            Motivated MCA student with hands-on experience building modern web applications
            using React.js, PHP, MySQL &amp; MongoDB. Passionate about crafting elegant,
            user-centric digital experiences.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              View Projects
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </button>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/ganeshkumar-m-aa9b97280"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Ganesh15040212/All-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:ganeshmanivnr2004@gmail.com" className="social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="hero-visual">
          <div className="hero-orb">
            <div className="hero-avatar">
              <img
                src={ganeshProfile}
                alt="Ganesh Kumar M"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
          <div className="hero-tech-badges">
            {techBadges.map((badge, i) => (
              <div key={i} className="tech-badge">
                <span className="tech-badge-dot" style={{ background: badge.dot }} />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse" />
        <span>scroll</span>
      </div>
    </section>
  )
}
