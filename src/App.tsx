import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { ProjectDemoModal } from './components/ProjectDemo'
import { profile, projects, type Project, type ProjectType } from './data/projects'

const projectTypes: Array<ProjectType | 'Todos'> = [
  'Todos',
  'Backend',
  'Frontend',
  'Mobile',
  'Tesis',
  'Full stack',
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <article
        aria-describedby={`modal-summary-${project.id}`}
        aria-labelledby={`modal-title-${project.id}`}
        aria-modal="true"
        className="project-modal"
        role="dialog"
      >
        <header className="modal-header">
          <div>
            <p className="repo-name">{project.repository}</p>
            <h2 id={`modal-title-${project.id}`}>{project.name}</h2>
            <p className="modal-tagline" id={`modal-summary-${project.id}`}>
              {project.tagline}
            </p>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Cerrar modal">
            Cerrar
          </button>
        </header>

        <div className="quick-facts">
          {project.quickFacts.map((fact) => (
            <div key={`${project.id}-${fact.label}`}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <div className="modal-content-grid">
          <section>
            <p className="modal-section-label">Que es</p>
            <p>{project.context}</p>
          </section>
          <section>
            <p className="modal-section-label">Mi aporte</p>
            <p>{project.contribution}</p>
          </section>
          <section>
            <p className="modal-section-label">Impacto</p>
            <p>{project.impact}</p>
          </section>
        </div>

        <div className="modal-lists">
          <section>
            <h3>Responsabilidades</h3>
            <ul>
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Funciones clave</h3>
            <ul>
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="technical-section">
          <h3>Stack y base tecnica</h3>
          <div className="stack-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <ul>
            {project.technicalHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="modal-footer">
          <span className="status">{project.status}</span>
          <a href={project.url} target="_blank" rel="noreferrer">
            Abrir GitHub
          </a>
        </footer>
      </article>
    </div>
  )
}

function App() {
  const [activeType, setActiveType] = useState<ProjectType | 'Todos'>('Todos')
  const [search, setSearch] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [demoProject, setDemoProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!selectedProject && !demoProject) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        setDemoProject(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedProject, demoProject])

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesType = activeType === 'Todos' || project.type === activeType
      const searchableText = [
        project.name,
        project.repository,
        project.summary,
        project.highlight,
        project.tagline,
        project.context,
        project.contribution,
        project.impact,
        ...project.stack,
        ...project.responsibilities,
        ...project.features,
        ...project.technicalHighlights,
        ...project.quickFacts.flatMap((fact) => [fact.label, fact.value]),
        project.demo.title,
        project.demo.objective,
        ...project.demo.steps.flatMap((demoStep) => [demoStep.title, demoStep.description]),
      ]
        .join(' ')
        .toLowerCase()
      const matchesSearch = normalizedSearch.length === 0 || searchableText.includes(normalizedSearch)

      return matchesType && matchesSearch
    })
  }, [activeType, search])

  const totalStacks = Array.from(new Set(projects.flatMap((project) => project.stack)))

  return (
    <main className="portfolio-shell">
      <section className="hero-section" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Principal">
          <a className="brand" href={profile.github} target="_blank" rel="noreferrer">
            SwTzu
          </a>
          <div className="nav-links">
            <a href="#projects">Proyectos</a>
            <a href={`mailto:${profile.email}`}>Contacto</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.location} - Portafolio seleccionado</p>
            <h1 id="page-title">{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>

            <div className="hero-actions" aria-label="Enlaces de contacto">
              <a className="primary-action" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="secondary-action" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="secondary-action" href={`mailto:${profile.email}`}>
                Email
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Resumen del portafolio">
            <div>
              <span className="metric">{projects.length}</span>
              <span className="metric-label">proyectos seleccionados</span>
            </div>
            <div>
              <span className="metric">{totalStacks.length}</span>
              <span className="metric-label">areas y tecnologias</span>
            </div>
            <div>
              <span className="metric">100%</span>
              <span className="metric-label">enlaces verificados</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Trabajo destacado</p>
            <h2 id="projects-title">Repositorios seleccionados</h2>
          </div>
          <p>
            Una vista curada de proyectos academicos, web, backend y movil para revisar rapido
            alcance, rol tecnico y codigo fuente.
          </p>
        </div>

        <div className="controls" aria-label="Filtros de proyectos">
          <label className="search-label">
            <span>Buscar</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Nombre, stack o repositorio"
            />
          </label>

          <div className="filter-group" aria-label="Tipo de proyecto">
            {projectTypes.map((type) => (
              <button
                key={type}
                className={type === activeType ? 'filter active' : 'filter'}
                type="button"
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid" aria-live="polite">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="card-header">
                <div>
                  <p className="repo-name">{project.repository}</p>
                  <h3>{project.name}</h3>
                </div>
                <span className="type-badge">{project.type}</span>
              </div>

              <p className="project-tagline">{project.tagline}</p>
              <p className="project-summary">{project.summary}</p>

              <div className="stack-list" aria-label={`Stack de ${project.name}`}>
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="card-footer">
                <span className="status">{project.status}</span>
                <div className="card-actions">
                  <button
                    className="primary-card-action"
                    type="button"
                    onClick={() => {
                      setSelectedProject(null)
                      setDemoProject(project)
                    }}
                  >
                    Probar demo
                  </button>
                  <button
                    className="secondary-card-button"
                    type="button"
                    onClick={() => {
                      setDemoProject(null)
                      setSelectedProject(project)
                    }}
                  >
                    Vista rapida
                  </button>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="empty-state">No hay proyectos que coincidan con ese filtro.</p>
        )}
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {demoProject && <ProjectDemoModal project={demoProject} onClose={() => setDemoProject(null)} />}
    </main>
  )
}

export default App
