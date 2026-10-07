import Image from "next/image";

const coreSkills = [
  "TypeScript", "React", "Next.js", "Python", "FastAPI", "Supabase", "PostgreSQL",
  "OpenAI API", "REST APIs", "Authentication", "Database Design", "Git & GitHub",
  "Vercel", "Render", "PWA", "Responsive UI", "Product Design", "Agile / Scrum",
];

const becomrFeatures = [
  "Adaptive AI-generated Daily and Weekly Trials",
  "Supabase authentication and cloud-synced user state",
  "Independent per-path progression, Bosses, and Proof history",
  "Dynamic Compass visualization driven by real user progression",
  "Creator Tree marketplace foundation and cross-path Constellations",
  "PWA/mobile app shell, offline-aware persistence, and production deployment",
];

const resumeFeatures = [
  "Resume-to-job semantic matching",
  "Natural language processing and skill extraction",
  "Match scoring and targeted recommendations",
  "REST API architecture with FastAPI",
  "Frontend/backend integration and CSV export",
  "Cloud deployment across Vercel and Render",
];

const budgetFeatures = [
  "CRUD transaction management",
  "Client-side persistence",
  "Search, filtering, and sorting",
  "Category-based budgeting",
  "Spending analytics and charts",
  "Responsive component architecture",
];

const nineShadowsFeatures = [
  "15-question weighted assessment with percentile-based normalization",
  "Primary + secondary Shadow ranking with close-result handling",
  "Responsive quiz, reveal, and personalized result flows",
  "Canvas-generated social share cards",
  "Klaviyo API signup, consent, and profile-property sync",
  "Analytics events and personalized discount-code conversion flow",
];

const shadowPairs = [
  ["Pride", "Humility"],
  ["Greed", "Generosity"],
  ["Lust", "Devotion"],
  ["Envy", "Gratitude"],
  ["Gluttony", "Temperance"],
  ["Wrath", "Forgiveness"],
  ["Sloth", "Diligence"],
  ["Deceit", "Truth"],
  ["Apathy", "Compassion"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">TF.</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-kicker">Software Engineering × AI × Product</div>
        <h1>I build products from idea to production.</h1>
        <p className="hero-copy">
          I’m Trenton Findley Jr., a computer science graduate and master’s student building full-stack products that combine engineering, artificial intelligence, thoughtful UX, and real-world utility.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">View selected work</a>
          <a className="button button-light" href="https://becomr-ten.vercel.app" target="_blank" rel="noreferrer">Open BECOMR ↗</a>
        </div>
        <div className="hero-proof">
          <span><b>04</b> shipped products</span>
          <span><b>Full-stack</b> frontend + backend</span>
          <span><b>Production</b> auth, AI, database, cloud</span>
        </div>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <span>01</span>
          <h2>Selected Work</h2>
        </div>

        <article className="project-card featured-project">
          <div className="project-meta-row">
            <div>
              <p className="eyebrow">Featured Product · Live</p>
              <h3>BECOMR</h3>
              <p className="project-subtitle">AI-Powered Real-Life Capability Progression Platform</p>
            </div>
            <div className="project-number">01</div>
          </div>

          <div className="becomr-showcase" aria-label="BECOMR product preview">
            <div className="becomr-topbar"><strong>BECOMR</strong><span>BECOME CAPABLE.</span></div>
            <div className="becomr-stage">
              <div className="becomr-copy">
                <small>COMPASS / YOUR CAPABILITY MAP</small>
                <h4>Proof changes the <em>tree.</em></h4>
                <p>Choose what you want to become capable of. BECOMR turns that direction into adaptive Trials, measurable Proof, Weekly Bosses, and a living record of growth.</p>
                <div className="becomr-stats"><span>AI FORGE</span><span>PROOF</span><span>WEEKLY BOSSES</span></div>
              </div>
              <div className="compass-art">
                <i className="orbit orbit-one"/><i className="orbit orbit-two"/><i className="orbit orbit-three"/>
                <div className="tree-trunk"/><div className="tree-crown">✦</div>
                <span className="node n1">◇</span><span className="node n2">◇</span><span className="node n3">◇</span>
              </div>
            </div>
          </div>

          <div className="project-content-grid">
            <div>
              <p className="project-description">
                BECOMR is the most complete product I’ve built: a progression system where users level up by proving real capability instead of simply checking off habits. I designed the product architecture, progression engine, adaptive AI flows, authentication and persistence model, responsive interface, PWA experience, and production deployment.
              </p>
              <div className="tag-row">
                {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "PWA", "Vercel", "Product Design"].map(tag => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="feature-list">
              {becomrFeatures.map(item => <div className="feature-item" key={item}>{item}</div>)}
            </div>
          </div>

          <div className="case-study-strip">
            <div><small>PROBLEM</small><p>Traditional habit trackers reward repetition, not demonstrated ability.</p></div>
            <div><small>SYSTEM</small><p>Orient → Act → Prove → Grow → Reflect → Reorient.</p></div>
            <div><small>ENGINEERING</small><p>Local-first state, Supabase cloud sync, AI adaptation, PWA delivery.</p></div>
            <div><small>PRODUCT</small><p>Dynamic skill paths, Weekly campaigns, Marks, Constellations, Creator Trees.</p></div>
          </div>

          <div className="project-links">
            <a className="button button-dark" href="https://becomr-ten.vercel.app" target="_blank" rel="noreferrer">Launch BECOMR ↗</a>
            <a className="text-link dark-link" href="https://github.com/tfindleyjr/becomr" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-meta-row">
            <div>
              <p className="eyebrow">AI / NLP · Full Stack</p>
              <h3>AI Resume & Job Matcher</h3>
              <p className="project-subtitle">Intelligent Resume Analysis Platform</p>
            </div>
            <div className="project-number">02</div>
          </div>
          <div className="project-hero-image">
            <Image src="/projects/ai-resume-1.png" alt="AI Resume and Job Matcher application" width={1920} height={1080}/>
          </div>
          <div className="project-content-grid">
            <div>
              <p className="project-description">A full-stack application that analyzes resumes against job descriptions using NLP, similarity scoring, and automated skill extraction. It identifies matching skills, missing qualifications, generates match scores, and produces targeted resume recommendations.</p>
              <div className="tag-row">{["Python","FastAPI","Next.js","TypeScript","NLP","REST APIs","Render","Vercel"].map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="feature-list">{resumeFeatures.map(item=><div className="feature-item" key={item}>{item}</div>)}</div>
          </div>
          <div className="project-gallery">
            <Image src="/projects/ai-resume-2.png" alt="Resume matcher analysis results" width={1920} height={1080}/>
            <Image src="/projects/ai-resume-3.png" alt="Resume matcher recommendations" width={1920} height={1080}/>
          </div>
          <div className="project-links">
            <a className="button button-dark" href="https://airesume-ten-opal.vercel.app/" target="_blank" rel="noreferrer">Live Project ↗</a>
            <a className="text-link dark-link" href="https://github.com/tfindleyjr/ai-resume-job-matcher" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-meta-row">
            <div>
              <p className="eyebrow">Frontend Product Engineering</p>
              <h3>BudgetFlow</h3>
              <p className="project-subtitle">Personal Finance Dashboard</p>
            </div>
            <div className="project-number">03</div>
          </div>
          <div className="project-hero-image">
            <Image src="/projects/budgetflow-3.png" alt="BudgetFlow personal finance dashboard" width={1920} height={1080}/>
          </div>
          <div className="project-content-grid">
            <div>
              <p className="project-description">A responsive personal finance dashboard for managing transactions, tracking spending, setting category budgets, and understanding financial behavior through visual insights.</p>
              <div className="tag-row">{["Next.js","React","TypeScript","Recharts","Responsive Design","Vercel"].map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="feature-list">{budgetFeatures.map(item=><div className="feature-item" key={item}>{item}</div>)}</div>
          </div>
          <div className="project-gallery">
            <Image src="/projects/budgetflow-1.png" alt="BudgetFlow insights" width={1600} height={900}/>
            <Image src="/projects/budgetflow-2.png" alt="BudgetFlow transactions" width={1600} height={900}/>
          </div>
          <div className="project-links">
            <a className="button button-dark" href="https://budgetflow-hyfb-six.vercel.app" target="_blank" rel="noreferrer">Live Project ↗</a>
            <a className="text-link dark-link" href="https://github.com/tfindleyjr/budgetflow" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </article>

        <article className="project-card nine-shadows-project">
          <div className="project-meta-row">
            <div>
              <p className="eyebrow">Interactive Brand Experience · Live</p>
              <h3>Nine Shadows</h3>
              <p className="project-subtitle">Self-Reflection Quiz for Lovers Studio</p>
            </div>
            <div className="project-number">04</div>
          </div>

          <div className="nine-shadows-showcase" aria-label="Nine Shadows quiz preview">
            <div className="nine-shadows-logo">LOVERS STUDIO</div>
            <p className="nine-shadows-kicker">An introspective experience</p>
            <h4>THE NINE<br/>SHADOWS</h4>
            <p className="nine-shadows-question">Which part of yourself needs the most love?</p>
            <div className="shadow-heart-grid">
              {shadowPairs.map(([shadow, heart]) => (
                <div className="shadow-heart" key={shadow}>
                  <span>♥</span>
                  <small>{shadow}</small>
                  <strong>{heart}</strong>
                </div>
              ))}
            </div>
            <div className="nine-shadows-meta"><span>15 QUESTIONS</span><span>~3 MINUTES</span><span>9 RESULT PATHS</span></div>
          </div>

          <div className="project-content-grid">
            <div>
              <p className="project-description">
                A branded self-reflection experience built for Lovers Studio that turns 15 multiple-choice responses into a primary and secondary Shadow, a paired Heart practice, a personalized result narrative, a social share card, and a product/discount path. I designed the scoring model and the full quiz-to-conversion experience.
              </p>
              <div className="tag-row">{["JavaScript","HTML/CSS","Vercel","Klaviyo API","Canvas API","Product Design"].map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="feature-list">{nineShadowsFeatures.map(item=><div className="feature-item" key={item}>{item}</div>)}</div>
          </div>

          <div className="project-links">
            <a className="button button-dark" href="https://quiz.lovers-studio.com" target="_blank" rel="noreferrer">Launch Quiz ↗</a>
            <a className="text-link dark-link" href="https://github.com/tfindleyjr/nine-shadows-quiz" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </article>
      </section>

      <section id="process" className="section-shell section-block">
        <div className="section-heading"><span>02</span><h2>How I Build Now</h2></div>
        <div className="process-grid">
          <article><span>01</span><h3>Define the system</h3><p>I start with the user problem, core loop, data model, and what success must feel like before I write the interface.</p></article>
          <article><span>02</span><h3>Build end to end</h3><p>I connect UI, APIs, authentication, persistence, data, and external services instead of treating the frontend as the entire product.</p></article>
          <article><span>03</span><h3>Design for failure</h3><p>I use fallback states, loading feedback, local persistence, error handling, and progressive enhancement so the product remains useful when services fail.</p></article>
          <article><span>04</span><h3>Ship and observe</h3><p>I use Git/GitHub, production builds, cloud deployment, environment configuration, and live runtime checks to move work beyond localhost.</p></article>
        </div>
      </section>

      <section id="about" className="section-shell section-block">
        <div className="section-heading"><span>03</span><h2>About</h2></div>
        <div className="about-grid">
          <p className="about-lead">I’m interested in becoming the kind of engineer who can understand the product, build the system, and care about the person using it.</p>
          <div className="about-copy">
            <p>My background in computer science and mathematics gives me a technical foundation, while my experience in leadership and creative work has made communication, visual thinking, and user experience just as important to me as implementation.</p>
            <p>My recent work has moved from standalone frontend projects into full-stack applications with AI, authentication, databases, cloud deployment, production state, and product architecture. I’m especially interested in software engineering, product engineering, AI-enabled applications, and teams where I can keep growing across disciplines.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell section-block">
        <div className="section-heading"><span>04</span><h2>Capabilities</h2></div>
        <div className="skills-grid">{coreSkills.map(skill=><div className="skill" key={skill}>{skill}</div>)}</div>
      </section>

      <section className="section-shell section-block experience-section">
        <div className="section-heading"><span>05</span><h2>Education & Leadership</h2></div>
        <div className="timeline">
          <div className="timeline-item"><span>Present</span><div><h3>Master of Science in Computer Science</h3><p>Kentucky State University</p></div></div>
          <div className="timeline-item"><span>Completed</span><div><h3>Bachelor of Science in Computer Science</h3><p>Mathematics concentration · Kentucky State University</p></div></div>
          <div className="timeline-item"><span>Leadership</span><div><h3>31st Mister Kentucky State University</h3><p>Campus leadership, programming, public speaking, and community engagement.</p></div></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <p className="eyebrow">Open to software & product opportunities</p>
          <h2>Let’s build something people can actually use.</h2>
          <p>I’m looking for opportunities where I can contribute as an engineer, learn from strong teams, and keep building products from problem to production.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:tfindleyjr@gmail.com">Email me</a>
            <a className="text-link" href="https://www.linkedin.com/in/trenton-findley-jr-019439309/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="text-link" href="https://github.com/tfindleyjr" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell"><span>© 2026 Trenton Findley Jr.</span><span>Designed & built with Next.js</span></footer>
    </main>
  );
}
