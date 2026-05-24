import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiGitPullRequest,
  FiLayers,
  FiLayout,
  FiMonitor,
  FiPenTool,
  FiServer,
  FiSmartphone,
  FiTool,
  FiZap,
} from 'react-icons/fi'
import movieExplorerImage from '../assets/projects/movie-explorer.png'
import noteMindImage from '../assets/projects/notemind-ai.png'
import portfolioImage from '../assets/projects/portfolio.png'

export const contact = {
  email: 'erashishkr82@gmail.com',
  github: 'https://github.com/ashishkrdev',
  githubLabel: 'github.com/ashishkrdev',
  linkedin: 'https://linkedin.com/in/ashishkrdev',
  linkedinLabel: 'linkedin.com/in/ashishkrdev',
  leetcode: 'https://leetcode.com/u/ashishkrdev',
  leetcodeLabel: 'leetcode.com/u/ashishkrdev',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'React', label: 'primary stack' },
  { value: 'MERN', label: 'full-stack path' },
  { value: 'UI', label: 'product mindset' },
]

export const skills = [
  { name: 'React.js', group: 'Frontend', icon: FiCode },
  { name: 'JavaScript', group: 'Language', icon: FiCpu },
  { name: 'HTML5', group: 'Structure', icon: FiLayout },
  { name: 'CSS3', group: 'Styling', icon: FiPenTool },
  { name: 'Tailwind CSS', group: 'UI Systems', icon: FiLayers },
  { name: 'Node.js', group: 'Backend', icon: FiServer },
  { name: 'Express.js', group: 'APIs', icon: FiGitPullRequest },
  { name: 'MongoDB', group: 'Database', icon: FiDatabase },
  { name: 'MySQL', group: 'Database', icon: FiDatabase },
  { name: 'PostgreSQL', group: 'Database', icon: FiDatabase },
  { name: 'Git & GitHub', group: 'Workflow', icon: FiGithub },
  { name: 'Postman', group: 'Testing', icon: FiTool },
]

export const projects = [
  {
    title: 'NoteMindAI',
    description:
      'AI-powered note management platform with a modern React interface, organized content flows, and scalable product architecture.',
    stack: ['React', 'Node.js', 'Tailwind'],
    accent: 'green',
    icon: FiZap,
    image: noteMindImage,
    links: {
      live: '#contact',
      github: contact.github,
    },
  },
  {
    title: 'Movie Explorer',
    description:
      'Responsive movie discovery experience with API-driven search, clean cards, and smooth browsing across desktop and mobile.',
    stack: ['React', 'API', 'CSS'],
    accent: 'blue',
    icon: FiMonitor,
    image: movieExplorerImage,
    links: {
      live: 'https://ashishkrdev.github.io/Movie-Explorer-Recommendation-Web-Application/',
      github: 'https://github.com/ashishkrdev/Movie-Explorer-Recommendation-Web-Application',
    },
  },
  {
    title: 'Personal Portfolio',
    description:
      'Premium personal branding website designed to communicate frontend skill, product thinking, and recruiter readiness.',
    stack: ['React', 'Framer Motion', 'Vite'],
    accent: 'gold',
    icon: FiLayout,
    image: portfolioImage,
    links: {
      live: '#contact',
      github: contact.github,
    },
  },
]

export const services = [
  {
    title: 'Portfolio Websites',
    description:
      'Personal websites that present your story, skills, and project proof with a polished professional feel.',
    icon: FiLayout,
  },
  {
    title: 'Landing Pages',
    description:
      'Focused launch pages for products, services, and campaigns with responsive layouts and clear conversion paths.',
    icon: FiExternalLink,
  },
  {
    title: 'Frontend Development',
    description:
      'React interfaces built with reusable components, clean styling, and performance-conscious implementation.',
    icon: FiCode,
  },
  {
    title: 'Responsive Websites',
    description:
      'Layouts that feel intentional on phones, tablets, and desktops with accessible interaction patterns.',
    icon: FiSmartphone,
  },
  {
    title: 'React UI Development',
    description:
      'Component-driven UI work for dashboards, marketing sites, product pages, and polished web applications.',
    icon: FiLayers,
  },
]
