import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card project-card-${project.accent}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-visual">
        <img src={project.image} alt={`${project.title} project screenshot`} />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.links.live}
            aria-label={`${project.title} live demo`}
            target={project.links.live.startsWith('http') ? '_blank' : undefined}
            rel={project.links.live.startsWith('http') ? 'noreferrer' : undefined}
          >
            <FiArrowUpRight aria-hidden="true" />
            Live
          </a>
          <a
            href={project.links.github}
            aria-label={`${project.title} GitHub profile`}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
