import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading section-heading-${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
