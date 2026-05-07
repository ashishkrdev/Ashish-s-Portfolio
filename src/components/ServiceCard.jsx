import { motion } from 'framer-motion'

function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
    >
      <div className="service-icon">
        <Icon aria-hidden="true" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.article>
  )
}

export default ServiceCard
