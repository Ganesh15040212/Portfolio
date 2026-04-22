const projects = [
  {
    number: '01',
    icon: '🐠',
    title: 'Aquarium Website',
    tech: 'HTML • CSS (Bootstrap) • JavaScript • PHP • MySQL',
    bullets: [
      'Designed and developed a fully responsive website for an aquarium with interactive UI and smooth navigation.',
      'Implemented dynamic content management system using PHP and MySQL for real-time data updates.',
      'Optimized user experience with clean layouts and Bootstrap responsive grid.',
    ],
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    number: '02',
    icon: '🌤️',
    title: 'Weather Forecast App',
    tech: 'HTML • CSS • JavaScript • OpenWeatherMap API',
    bullets: [
      'Integrated real-time weather data using the OpenWeatherMap API with dynamic location search.',
      'Designed a clean, responsive, and mobile-friendly interface for better cross-device user experience.',
      'Implemented smooth UI transitions and weather condition icons for visual clarity.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'OpenWeatherMap'],
  },
  {
    number: '03',
    icon: '📚',
    title: 'Community Book Exchange Platform',
    tech: 'React.js • PHP • MySQL',
    bullets: [
      'Built a full-stack web platform enabling users to list, exchange, rent, or sell books within a community.',
      'Developed responsive frontend interfaces with React.js and component-based architecture.',
      'Designed a normalized database structure for managing users, book listings, and transactions.',
    ],
    tags: ['React.js', 'PHP', 'MySQL', 'REST API', 'Responsive UI'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-tag">featured projects</span>
        <h2 className="section-title">Things I&apos;ve <span className="gradient-text">Built</span></h2>
        <div className="divider" />
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          A selection of projects that demonstrate my full-stack capabilities and passion for clean, functional design.
        </p>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <article className="project-card" key={i}>
              <div className="project-icon-wrap">{proj.icon}</div>
              <span className="project-number">{proj.number}</span>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-tech-line">{proj.tech}</p>
              <ul className="project-bullets">
                {proj.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="project-tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
