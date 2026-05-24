import { FiMail, FiSend } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiLeetcode } from 'react-icons/si'
import Container from '../components/Container.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contact } from '../data/portfolioData.js'

function Contact() {
  return (
    <section className="section-band contact-section" id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great."
          description="Reach out for frontend roles, collaborations, portfolio work, or product ideas that need a polished React interface."
          align="center"
        />

        <div className="contact-layout">
          <form className="contact-form" action={`mailto:${contact.email}`} method="post">
            <div className="field-grid">
              <label>
                <span>Your name</span>
                <input type="text" name="name" placeholder="Ashish Kumar" />
              </label>
              <label>
                <span>Email address</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the role, project, or idea..."
              />
            </label>
            <PrimaryButton icon={FiSend}>Send Message</PrimaryButton>
          </form>

          <aside className="contact-card">
            <div>
              <FiMail aria-hidden="true" />
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <SiGithub aria-hidden="true" />
              <span>GitHub</span>
              <a href={contact.github} target="_blank" rel="noreferrer">
                {contact.githubLabel}
              </a>
            </div>
            <div>
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                {contact.linkedinLabel}
              </a>
            </div>
            <div>
              <SiLeetcode aria-hidden="true" />
              <span>LeetCode</span>
              <a href={contact.leetcode} target="_blank" rel="noreferrer">
                {contact.leetcodeLabel}
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Contact
