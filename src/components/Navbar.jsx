import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Highlight active section
      const sections = navItems.map(i => document.getElementById(i.id))
      const scrollPos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="nav-logo">GK.</div>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-link ${active === item.id ? 'active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button className="nav-cta" onClick={() => scrollTo('contact')}>
                Hire Me
              </button>
            </li>
          </ul>

          <div
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            className="mobile-link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button className="nav-cta" style={{ marginTop: '0.5rem' }} onClick={() => scrollTo('contact')}>
          Hire Me
        </button>
      </div>
    </>
  )
}
