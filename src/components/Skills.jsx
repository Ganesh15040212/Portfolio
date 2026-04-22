const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    bg: 'rgba(108, 99, 255, 0.12)',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    bg: 'rgba(0, 212, 170, 0.12)',
    skills: ['PHP', 'REST API Integration', 'Cross-Browser Compatibility'],
    accent: true,
  },
  {
    title: 'Database',
    icon: '🗄️',
    bg: 'rgba(108, 99, 255, 0.12)',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Developer Tools',
    icon: '🛠️',
    bg: 'rgba(0, 212, 170, 0.12)',
    skills: ['Git', 'GitHub', 'VS Code', 'Antigravity', 'Cursor', 'Chrome DevTools'],
    accent: true,
  },
  {
    title: 'Design Tools',
    icon: '✏️',
    bg: 'rgba(255, 101, 132, 0.12)',
    skills: ['Canva', 'Adobe Photoshop'],
  },
  {
    title: 'Other Skills',
    icon: '💡',
    bg: 'rgba(108, 99, 255, 0.12)',
    skills: ['Problem Solving', 'Web Performance', 'SEO Basics', 'UI/UX Principles'],
  },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <span className="section-tag">skills & technologies</span>
        <h2 className="section-title">My Tech <span className="gradient-text">Stack</span></h2>
        <div className="divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Technologies and tools I use to craft seamless digital experiences from frontend to backend.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category-card" key={i}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: cat.bg }}>
                  {cat.icon}
                </div>
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className={`skill-tag ${cat.accent ? 'accent' : ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
