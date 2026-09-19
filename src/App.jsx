import React, { useState } from 'react'
import { FaEnvelope, FaPaperPlane, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

const projects = [
  {
    type: 'Full-stack e-commerce',
    title: 'VELOURA E-commerce',
    description: 'A complete shopping experience where customers can browse products, create accounts, manage a cart, and track deliveries.',
    overview: 'VELOURA is a full-stack e-commerce website designed around a smooth customer journey, from discovering everyday products to following an order after checkout.',
    highlights: ['Product browsing and categories', 'Account creation and login', 'Cart and order workflow', 'Delivery tracking experience'],
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    tone: 'blue',
    liveLink: 'https://ecommerce-frontend-sand-xi.vercel.app',
  },
  {
    type: 'Productivity platform',
    title: 'Job Tracker',
    description: 'A focused workspace for organizing applications, tracking progress, and keeping the job search moving.',
    overview: 'Job Tracker is a practical project for turning a scattered application process into a clear, trackable workflow.',
    highlights: ['Application status tracking', 'Organized job records', 'Progress-focused workflow'],
    tags: ['GitHub link pending'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    tone: 'gold',
    liveLink: null,
  },
  {
    type: 'Booking platform',
    title: 'Booking Appointment',
    description: 'A scheduling experience designed to make appointment availability and customer bookings easier to manage.',
    overview: 'Booking Appointment is a scheduling project focused on making the path from choosing a time to confirming an appointment straightforward.',
    highlights: ['Appointment selection flow', 'Availability-focused interface', 'Booking confirmation experience'],
    tags: ['GitHub link pending'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85',
    tone: 'pink',
    liveLink: null,
  },
]

const skillGroups = [
  { title: 'What I know', items: ['Python', 'Flask', 'HTML', 'Problem solving'] },
  { title: 'Currently studying', items: ['React', 'Node.js', 'Tailwind CSS', 'Full-stack patterns'] },
  { title: 'Building with', items: ['Application logic', 'API design', 'Responsive systems', 'Database fundamentals'] },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

// NAVBAR: Persistent navigation and brand identity.
function Navbar({ menuOpen, setMenuOpen }) {
  const links = ['About', 'Work', 'Skills', 'Contact']
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="AFRITECH home">
        <span className="brand-mark">A</span>
        <span>AFRITECH</span>
      </a>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowIcon /></a>
      </nav>
      <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span>
      </button>
    </header>
  )
}

// HERO: Immediate value proposition and routes into the work.
function HeroSection() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-orbit orbit-one"></div>
      <div className="hero-orbit orbit-two"></div>
      <p className="eyebrow reveal">Full Stack developer <span className="eyebrow-dot"></span> Accra, Ghana</p>
      <h1 className="hero-title reveal delay-one">Digital tools for<br /><em>real-world</em> momentum.</h1>
      <div className="hero-bottom reveal delay-two">
        <p className="hero-copy">I’m Kwadwo, the person behind AFRITECH. I build practical web applications, automation tools, and digital systems that make good ideas easier to run.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
          <a className="text-link" href="#about">More about me <ArrowIcon /></a>
        </div>
      </div>
      <div className="scroll-note"><span className="scroll-line"></span> Scroll to explore</div>
    </section>
  )
}

// ABOUT: Trust-building context about the developer's approach.
function AboutSection() {
  return (
    <section className="about section-wrap" id="about">
      <div className="section-label"><span></span><span>About AFRITECH</span></div>
      <div className="about-grid">
        <h2 className="section-title">Less noise.<br /><em>More useful.</em></h2>
        <div className="about-copy">
          <p className="lead-copy">Technology should help people move with more confidence. That belief shapes every interface, workflow, and system I make.</p>
          <p>I’m a full-stack developer and problem solver focused on translating messy, ambitious ideas into calm, working products. From a logistics platform to a research automation tool, I care about the part after the launch: whether the thing is actually useful.</p>
          <p>AFRITECH is where I experiment, learn in public, and partner with people building something that matters to them.</p>
          <a className="text-link" href="#contact">Start a conversation <ArrowIcon /></a>
        </div>
      </div>
      <div className="principles">
        <div><span className="principle-number"></span><strong>Clarity first</strong><p>Good systems feel understandable.</p></div>
        <div><span className="principle-number"></span><strong>Built to ship</strong><p>Ideas deserve a path to real users.</p></div>
        <div><span className="principle-number"></span><strong>Always learning</strong><p>Curiosity keeps the work honest.</p></div>
      </div>
    </section>
  )
}

// PROJECT OVERVIEW: Explains a project before a visitor leaves the portfolio.
function ProjectOverview({ project, onClose }) {
  if (!project) return null

  return (
    <div className="project-modal-backdrop" role="presentation" onClick={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-overview-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close project overview" onClick={onClose}>×</button>
        <p className="project-type">{project.type}</p>
        <h2 id="project-overview-title">{project.title}</h2>
        <p className="modal-overview">{project.overview}</p>
        <h3>Project highlights</h3>
        <ul className="modal-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        {project.liveLink ? (
          <a className="button button-primary" href={project.liveLink} target="_blank" rel="noreferrer">View live project <ArrowIcon /></a>
        ) : (
          <p className="modal-pending">Live link coming soon. The GitHub link will be added when provided.</p>
        )}
      </article>
    </div>
  )
}

// FEATURED PROJECTS: Reusable work cards for proof-of-work.
function WorkSection({ onProjectSelect }) {
  return (
    <section className="work section-wrap" id="work">
      <div className="section-label"><span></span><span>Selected work</span></div>
      <div className="section-heading-row">
        <h2 className="section-title">A few things<br /><em>in motion.</em></h2>
        <p className="heading-aside">A growing collection of platforms, experiments, and systems designed around a simple question: what would make this easier?</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.title}>
            <div className="project-visual" style={{ backgroundImage: `url(${project.image})` }}>
              <span className="project-number">{project.number}</span>
              <span className="project-status">{project.liveLink ? 'Live project' : 'In progress'}</span>
            </div>
            <div className="project-info">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <button className="project-link project-button" type="button" onClick={() => onProjectSelect(project)}>View project <ArrowIcon /></button>
            </div>
          </article>
        ))}
      </div>
      <a className="button button-ghost" href="mailto:afritech@yahoo.com">Request the full project list <ArrowIcon /></a>
    </section>
  )
}

// SKILLS: A readable snapshot of current capabilities and learning direction.
function SkillsSection() {
  return (
    <section className="skills section-wrap" id="skills">
      <div className="section-label"><span></span><span>Skills & direction</span></div>
      <div className="section-heading-row skills-heading">
        <h2 className="section-title">Curious by nature,<br /><em>careful by craft.</em></h2>
        <p className="heading-aside">The toolkit is always evolving. The standard stays the same: thoughtful structure, useful details, and a finished experience.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-column" key={group.title}>
            <span className="skill-index"></span>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}><span className="list-dot"></span>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// CONTACT: Direct, accessible route for prospective collaborators.
function ContactSection() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setSent(false)
    setError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/afritech@yahoo.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      })

      if (!response.ok) throw new Error('Message submission failed')

      event.currentTarget.reset()
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <section className="contact section-wrap" id="contact">
      <div className="section-label"><span></span><span>Let's work together</span></div>
      <div className="contact-layout">
        <div className="contact-intro">
          <h2 className="section-title">Have a good<br /><em>problem?</em></h2>
          <p>Tell me what you’re trying to make, improve, or understand. I’ll bring questions, structure, and a practical next step.</p>
          <div className="contact-links">
            <a className="email-link" href="mailto:afritech@gmail.com"><FaEnvelope className="contact-icon" aria-hidden="true" />afritech@gmail.com</a>
            <a className="contact-link" href="https://wa.me/233546215695" target="_blank" rel="noreferrer"><FaWhatsapp className="contact-icon" aria-hidden="true" />WhatsApp: 0546215695</a>
            <a className="contact-link" href="https://www.tiktok.com/@afr_tech" target="_blank" rel="noreferrer"><FaTiktok className="contact-icon" aria-hidden="true" />TikTok: @afr_tech</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New AFRITECH website enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>Message<textarea required name="message" rows="4" placeholder="What are you working on?"></textarea></label>
          <button className="button button-primary" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send an enquiry'} <FaPaperPlane className="send-icon" aria-hidden="true" /></button>
          {sent && <p className="form-note" role="status">Thanks. Your message was sent successfully.</p>}
          {error && <p className="form-error" role="alert">The message could not be sent. Please email afritech@yahoo.com directly.</p>}
        </form>
      </div>
    </section>
  )
}

// FOOTER: Compact close to the page with direct social routes.
function Footer() {
  return <footer className="footer section-wrap"><span>© 2026 AFRITECH</span><span>Made with care in Ghana</span><a href="#top">Back to top ↑</a></footer>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  return <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection onProjectSelect={setSelectedProject} />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
    <ProjectOverview project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
}
