import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Layers3
} from "lucide-react";
import "./styles.css";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "Express.js", "NestJS", "PostgreSQL", "MongoDB",
  "REST APIs", "Git & GitHub", "HTML & CSS", "SQL"
];

const projects = [
  {
    title: "Techie Laptops",
    description:
      "A single-vendor e-commerce platform for managing products, customers and online orders.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    link: "#"
  },
  {
    title: "Real-time Chat API",
    description:
      "A backend service designed around real-time messaging, API endpoints and structured application data.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Weather Monitoring System",
    description:
      "A monitoring application for collecting and displaying temperature and humidity information.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    link: "#"
  },
  {
    title: "Student Information App",
    description:
      "A simple frontend application for displaying and filtering student information using JavaScript.",
    tech: ["React", "JavaScript", "CSS"],
    link: "#"
  }
];

const experience = [
  {
    role: "Software Developer / Instructor",
    company: "CITOM Technologies",
    period: "2025 — Present",
    text:
      "Teach practical programming concepts while building and explaining web development projects using HTML, CSS and JavaScript."
  },
  {
    role: "Backend Engineer",
    company: "Zsoft Solutions Ltd",
    period: "2022 — 2024",
    text:
      "Built backend services and third-party API integrations, improved database queries and worked with Node.js-based applications."
  },
  {
    role: "Design Solution Engineer",
    company: "NASDRA",
    period: "2023 — 2024",
    text:
      "Provided technical support, software configuration, troubleshooting and end-user assistance across internal systems."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo" onClick={closeMenu}>
            KN<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">JavaScript Software Engineer</p>
              <h1>
                I build <span>useful digital products</span> with clean code.
              </h1>
              <p className="hero-text">
                I'm a JavaScript software engineer with 3 years of experience
                building web applications, backend services and REST APIs.
                I enjoy turning ideas into simple, reliable software.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View my work <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  Let's talk
                </a>
              </div>

              <div className="quick-links">
                <a href="https://github.com/Kene10-codes" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/kenechukwunwobodo/" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="code-window">
              <div className="window-top">
                <span></span><span></span><span></span>
              </div>
              <pre>
{`const engineer = {
  name: "Kenechukwu",
  experience: 3,
  role: "Software Engineer",

  stack: [
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL"
  ],

  build: () => {
    return "great products";
  }
};`}
              </pre>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 / About</p>
              <h2>A developer who cares about the details.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p>
                  I work mainly with the JavaScript ecosystem, from React
                  interfaces to Node.js APIs and databases. My approach is
                  practical: understand the problem, keep the architecture
                  simple, write maintainable code and improve it as the
                  product grows.
                </p>
                <p>
                  I have experience working with APIs, database queries,
                  integrations, troubleshooting and technical communication.
                  That mix helps me think beyond just writing code.
                </p>
              </div>

              <div className="stats">
                <div className="stat-card">
                  <strong>3+</strong>
                  <span>Years experience</span>
                </div>
                <div className="stat-card">
                  <strong>12+</strong>
                  <span>Core technologies</span>
                </div>
                <div className="stat-card">
                  <strong>4</strong>
                  <span>Featured projects</span>
                </div>
                <div className="stat-card">
                  <strong>∞</strong>
                  <span>Things still learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section muted-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">02 / Skills</p>
              <h2>My everyday toolkit.</h2>
            </div>

            <div className="skill-grid">
              <div className="skill-category">
                <Code2 />
                <h3>Frontend</h3>
                <p>React, JavaScript, TypeScript, HTML and CSS.</p>
              </div>
              <div className="skill-category">
                <Server />
                <h3>Backend</h3>
                <p>Node.js, Express.js, NestJS and REST APIs.</p>
              </div>
              <div className="skill-category">
                <Database />
                <h3>Data</h3>
                <p>PostgreSQL, MySQL, MongoDB and SQL.</p>
              </div>
              <div className="skill-category">
                <Layers3 />
                <h3>Workflow</h3>
                <p>Git, GitHub, API integrations and debugging.</p>
              </div>
            </div>

            <div className="chips">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">03 / Selected work</p>
                <h2>Projects I've built.</h2>
              </div>
              <p>Replace the demo links with your live projects and repositories.</p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-icon"><Code2 size={20} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <a href={project.link} className="project-link">
                    View project <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">04 / Experience</p>
              <h2>Where I've worked.</h2>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-period">{job.period}</div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card">
            <p className="eyebrow">05 / Contact</p>
            <h2>Have a project in mind?</h2>
            <p>
              I'm open to software engineering opportunities, freelance
              projects and interesting collaborations.
            </p>

            <a className="button primary" href="mailto:hello@example.com">
              <Mail size={18} /> Get in touch
            </a>

            <div className="social-links">
              <a href="https://github.com/Kene10-codes" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kenechukwunwobodo/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hello@example.com">Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <span>© 2026 Kenechukwu Nwobodo</span>
          <span>Built with React & JavaScript.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);