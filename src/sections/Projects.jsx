import Container from '../components/Container.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/portfolioData.js'

function Projects() {
  return (
    <section className="section-band" id="projects">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that show product thinking and React craft."
          description="Selected work focused on clean interfaces, responsive layouts, and useful application structure."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
