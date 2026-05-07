import { motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function About() {
  return (
    <section className="section-band" id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Clean engineering with a product-focused eye."
          description="I care about interfaces that look sharp, feel fast, and make a product easier to trust."
        />

        <motion.div
          className="about-layout"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="about-copy">
            <p>
              I am Ashish Kumar, a frontend developer passionate about creating
              modern web experiences that are clean, responsive, and
              performance-focused.
            </p>
            <p>
              My journey started with curiosity about how websites work, which
              gradually evolved into building real-world React applications and
              exploring the MERN stack ecosystem.
            </p>
            <p>
              I enjoy turning ideas into polished digital products while
              continuously improving my skills in frontend engineering, UI
              design, and scalable development practices.
            </p>
          </div>

          <div className="about-note">
            <span>Current goal</span>
            <h3>Contribute to ambitious startups and product teams.</h3>
            <p>
              I want to solve meaningful problems, ship thoughtful frontend
              experiences, and keep growing into a high-level full-stack
              engineer.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default About
