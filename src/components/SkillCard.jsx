import { motion } from 'framer-motion'

function SkillCard({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.article
      className="skill-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.035 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="skill-icon">
        <Icon aria-hidden="true" />
      </div>
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.group}</p>
      </div>
    </motion.article>
  )
}

export default SkillCard
