import ganeshProfile from '../assets/ganesh_profile.jpeg'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left - Card with contact info */}
          <div>
            <div className="about-card">
              <div className="about-avatar-wrap">
                <div className="about-avatar">
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

              <div>
                {[
                  { icon: '📍', label: 'Location', value: 'Virudhunagar, TN' },
                  { icon: '📞', label: 'Phone', value: '+91 9361371846', href: 'tel:+919361371846' },
                  {
                    icon: '✉️', label: 'Email',
                    value: 'ganeshmanivnr2004@gmail.com',
                    href: 'mailto:ganeshmanivnr2004@gmail.com',
                    small: true,
                  },
                  {
                    icon: '💼', label: 'LinkedIn',
                    value: 'ganeshkumar-m',
                    href: 'https://www.linkedin.com/in/ganeshkumar-m-aa9b97280',
                  },
                  {
                    icon: '🐙', label: 'GitHub',
                    value: 'Ganesh15040212',
                    href: 'https://github.com/Ganesh15040212',
                  },
                ].map((item, i) => (
                  <div className="about-info-item" key={i}>
                    <span className="about-info-icon">{item.icon}</span>
                    <span className="about-info-label">{item.label}</span>
                    <span className="about-info-val" style={{ fontSize: item.small ? '0.78rem' : undefined }}>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-row" style={{ marginTop: '1.5rem' }}>
              {[
                { number: '3+', label: 'Projects Built' },
                { number: '82%', label: 'MCA CGPA' },
                { number: '2+', label: 'Awards Won' },
              ].map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <span className="section-tag">about me</span>
            <h2 className="section-title">
              Building the <span className="gradient-text">Future</span>,<br />
              One Line at a Time
            </h2>
            <div className="divider" />

            <div className="about-text">
              <p>
                I&apos;m <span className="about-highlight">Ganesh Kumar M</span>, a passionate
                Full Stack Developer and MCA student at Ayya Nadar Janaki Ammal College, Sivakasi.
                I thrive on building end-to-end web solutions that are both functional and beautiful.
              </p>
              <p>
                With hands-on experience in{' '}
                <span className="about-highlight">React.js, PHP, MySQL,</span> and{' '}
                <span className="about-highlight">MongoDB</span>, I love turning complex problems
                into simple, elegant interfaces. From crafting pixel-perfect UIs to designing
                robust backend systems — I do it all.
              </p>
              <p>
                Outside of coding, I express my creativity through{' '}
                <span className="about-highlight">Adobe Photoshop</span> and digital design —
                earning 2nd place prizes in advertisement design and meme creation competitions.
                I believe great software is as much about design as it is about logic.
              </p>
              <p>
                My goal is to land an entry-level Full Stack Developer role where I can apply
                my problem-solving skills and contribute to innovative, impactful software projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
