const certs = [
  {
    icon: '🥈',
    title: '2nd Prize — Advertisement Design Competition',
    tool: 'Adobe Photoshop',
    desc: 'Designed a creative and visually appealing advertisement poster with strong branding elements, showcasing skills in layout, typography, and visual hierarchy.',
  },
  {
    icon: '🥈',
    title: '2nd Prize — Meme Creation Competition',
    tool: 'Adobe Photoshop',
    desc: 'Created engaging and humorous visual content demonstrating creativity, digital design proficiency, and understanding of digital culture and trends.',
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <span className="section-tag">achievements</span>
        <h2 className="section-title">Certifications &amp; <span className="gradient-text">Awards</span></h2>
        <div className="divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Recognition and achievements that reflect my creativity and commitment to excellence.
        </p>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{cert.icon}</div>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-tool">🛠 Tool: {cert.tool}</p>
                <p className="cert-desc">{cert.desc}</p>
                <span className="cert-badge">
                  🏆 2nd Place Winner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
