import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/portfolioData.js'

function Services() {
  return (
    <section className="section-band section-muted" id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Focused frontend help for clean digital launches."
          description="Design-aware implementation for founders, students, and small teams that need polished web presence."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
