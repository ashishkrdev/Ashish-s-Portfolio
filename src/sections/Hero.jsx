import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { SiCodechef, SiGithub } from 'react-icons/si'
import Container from '../components/Container.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import { contact, stats } from '../data/portfolioData.js'

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Ashish-Kumar-Resume.pdf`

  return (
    <section className="hero section-band" id="home">
      <Container className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="eyebrow">Frontend Developer</p>
          <h1>Building polished React products for ambitious teams.</h1>
          <p className="hero-lede">
            I am Ashish Kumar, a frontend developer focused on responsive,
            performance-minded web applications with modern React and MERN stack
            fundamentals.
          </p>

          <div className="hero-actions">
            <PrimaryButton href="#projects" icon={FiArrowUpRight}>
              View Projects
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="secondary">
              Hire Me
            </PrimaryButton>
            <PrimaryButton
              href={resumeUrl}
              variant="ghost"
              icon={FiDownload}
              download
            >
              Resume
            </PrimaryButton>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a href={contact.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
              <SiGithub aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href={contact.codechef}
              aria-label="CodeChef profile"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodechef aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-showcase"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          aria-label="Portfolio interface preview"
        >
          <div className="showcase-toolbar">
            <span />
            <span />
            <span />
            <strong>ashishkr.dev</strong>
          </div>
          <div className="showcase-body">
            <div className="profile-panel">
              <div className="profile-avatar" aria-hidden="true">
                AK
              </div>
              <div>
                <p>Available for frontend roles</p>
                <h2>Ashish Kumar</h2>
              </div>
            </div>

            <div className="code-panel" aria-hidden="true">
              <span>const developer = {'{'}</span>
              <span> role: 'Frontend',</span>
              <span> focus: 'React UI',</span>
              <span> mindset: 'Product quality'</span>
              <span>{'}'}</span>
            </div>

            <div className="metric-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
