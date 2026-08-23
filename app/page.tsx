import Image from "next/image";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "HTML/CSS",
  "Git & GitHub",
  "Vercel",
  "Responsive Design",
  "REST APIs",
  "Data Visualization",
];

const highlights = [
  "CRUD transaction management",
  "Client-side persistence with localStorage",
  "Search, filtering, and sorting",
  "Category-based budgeting",
  "Spending analytics and charts",
  "Responsive component architecture",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">TF.</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-kicker">Computer Science × Design × Product</div>
        <h1>
          I build useful digital products with a strong point of view.
        </h1>
        <p className="hero-copy">
          I’m Trenton Findley Jr., a computer science graduate and master’s student focused on building software that feels clear, intentional, and human.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">View selected work</a>
          <a className="button button-light" href="#contact">Get in touch</a>
        </div>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <span>01</span>
          <h2>Selected Work</h2>
        </div>

        <article className="project-card">
          <div className="project-meta-row">
            <div>
              <p className="eyebrow">Featured Project</p>
              <h3>BudgetFlow</h3>
              <p className="project-subtitle">Personal Finance Dashboard</p>
            </div>
            <div className="project-number">01</div>
          </div>

          <div className="project-hero-image">
            <Image
              src="/projects/budgetflow-3.png"
              alt="BudgetFlow personal finance dashboard"
              width={1920}
              height={1080}
              priority
            />
          </div>

          <div className="project-content-grid">
            <div>
              <p className="project-description">
                BudgetFlow is a responsive personal finance dashboard built to help users manage transactions, track spending, set category budgets, and understand financial behavior through visual insights.
              </p>
              <div className="tag-row">
                {['Next.js', 'React', 'TypeScript', 'CSS', 'Recharts', 'Vercel'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="feature-list">
              {highlights.map((item) => (
                <div key={item} className="feature-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="project-gallery">
            <Image src="/projects/budgetflow-1.png" alt="BudgetFlow spending insights and charts" width={1600} height={900} />
            <Image src="/projects/budgetflow-2.png" alt="BudgetFlow budgets and transactions" width={1600} height={900} />
          </div>

          <div className="project-links">
            <a className="button button-dark" href="https://budgetflow-hyfb-six.vercel.app" target="_blank" rel="noreferrer">Live project ↗</a>
            <span className="muted-note">Add your GitHub repository link here when ready.</span>
          </div>
        </article>

        <div className="coming-soon-grid">
          <article className="coming-card">
            <span>02</span>
            <h3>Next Project</h3>
            <p>Reserve this slot for a project that shows a different technical skill set from BudgetFlow.</p>
          </article>
          <article className="coming-card">
            <span>03</span>
            <h3>Creative Technology</h3>
            <p>Use this space for a visually ambitious project that blends design, product thinking, and engineering.</p>
          </article>
        </div>
      </section>

      <section id="about" className="section-shell section-block split-section">
        <div className="section-heading">
          <span>02</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            I’m interested in the space where technology, design, and real-world problem solving overlap.
          </p>
          <div className="about-copy">
            <p>
              My background in computer science and mathematics gives me the technical foundation to build software, while my creative interests push me to care just as much about how a product feels, communicates, and fits into people’s lives.
            </p>
            <p>
              I’m currently building a portfolio around software development, product thinking, and creative technology, with an emphasis on work that can be explained clearly from problem to solution.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell section-block">
        <div className="section-heading">
          <span>03</span>
          <h2>Capabilities</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
        </div>
      </section>

      <section className="section-shell section-block experience-section">
        <div className="section-heading">
          <span>04</span>
          <h2>Education & Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span>Present</span>
            <div>
              <h3>Master of Science in Computer Science</h3>
              <p>Kentucky State University</p>
            </div>
          </div>
          <div className="timeline-item">
            <span>Completed</span>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Mathematics concentration · Kentucky State University</p>
            </div>
          </div>
          <div className="timeline-item">
            <span>Leadership</span>
            <div>
              <h3>31st Mister Kentucky State University</h3>
              <p>Campus leadership, programming, public speaking, and community engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <p className="eyebrow">Available for opportunities</p>
          <h2>Let’s build something worth remembering.</h2>
          <p>
            I’m open to software, product, technology, and creative opportunities where I can combine technical execution with strong ideas.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:YOUR_EMAIL_HERE">Email me</a>
            <a className="text-link" href="YOUR_LINKEDIN_URL_HERE">LinkedIn ↗</a>
            <a className="text-link" href="YOUR_GITHUB_URL_HERE">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 Trenton Findley Jr.</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
