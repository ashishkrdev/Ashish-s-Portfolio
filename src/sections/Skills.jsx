import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skills } from '../data/portfolioData.js'

function Skills() {
  return (
    <section className="section-band section-muted" id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for modern web products."
          description="Frontend foundations, backend awareness, and the workflow tools needed to build with clarity."
        />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
