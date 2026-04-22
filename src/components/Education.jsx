const education = [
  {
    icon: '🎓',
    year: '2025 – 2026 (Expected)',
    degree: 'Master of Computer Application (MCA)',
    school: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    grade: '82% CGPA',
    current: true,
  },
  {
    icon: '🎓',
    year: '2021 – 2024',
    degree: 'Bachelor of Computer Application (BCA)',
    school: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    grade: '71% CGPA',
  },
  {
    icon: '📘',
    year: '2021',
    degree: '12th Standard (HSC)',
    school: 'K.V.S Higher Secondary School, Virudhunagar',
    grade: '84% CGPA',
  },
  {
    icon: '📗',
    year: '2019',
    degree: '10th Standard (SSLC)',
    school: 'K.V.S Higher Secondary School, Virudhunagar',
    grade: '73% CGPA',
  },
]

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <span className="section-tag">// education</span>
        <h2 className="section-title">My <span className="gradient-text">Learning</span> Journey</h2>
        <div className="divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Academic milestones that shaped my technical foundation and professional outlook.
        </p>

        <div className="timeline">
          {education.map((edu, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot">{edu.icon}</div>
              <div className="timeline-card">
                <span className="timeline-year">{edu.year}</span>
                <h3 className="timeline-degree">
                  {edu.degree}
                  {edu.current && (
                    <span style={{
                      marginLeft: '0.5rem',
                      padding: '0.1rem 0.5rem',
                      background: 'rgba(0,212,170,0.12)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-mono)',
                      verticalAlign: 'middle',
                    }}>
                      Current
                    </span>
                  )}
                </h3>
                <p className="timeline-school">{edu.school}</p>
                <span className="timeline-grade">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
