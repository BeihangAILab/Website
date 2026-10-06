import Header from "@/components/Header";
import NeuralField from "@/components/NeuralField";
import { news, principles, researchAreas, works } from "@/data/site";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <NeuralField />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow glow-a" aria-hidden="true" />
        <div className="hero-glow glow-b" aria-hidden="true" />

        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> BEIHANG AI LAB · BEIJING</div>
            <h1>
              Intelligence,
              <span> engineered to scale.</span>
            </h1>
            <p className="hero-lede">
              We study learning, reasoning, agents, and optimization — building AI systems that can learn from experience, reason about difficult problems, and act effectively in the world.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#research">Explore research <Arrow /></a>
              <a className="button secondary" href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
          </div>

          <div className="hero-side" aria-label="Research signal visualization">
            <div className="signal-card">
              <div className="signal-top">
                <span>BEIHANG / AI SYSTEMS</span>
                <span className="signal-live">● ACTIVE</span>
              </div>
              <div className="signal-visual" aria-hidden="true">
                <div className="signal-orbit orbit-a" />
                <div className="signal-orbit orbit-b" />
                <div className="signal-orbit orbit-c" />
                <span className="node node-1" /><span className="node node-2" />
                <span className="node node-3" /><span className="node node-4" />
                <span className="node node-5" /><span className="node node-6" />
                <span className="signal-core">AI</span>
              </div>
              <div className="signal-meta">
                <span>LEARN</span><span>REASON</span><span>ACT</span><span>OPTIMIZE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="shell hero-foot">
          <span>BEIHANG UNIVERSITY</span>
          <span className="hero-scroll">SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell split-intro">
          <p className="section-kicker">01 / ABOUT</p>
          <div>
            <h2 className="statement">We work at the boundary of <em>learning</em>, <em>reasoning</em>, and <em>optimization</em>.</h2>
            <p className="body-large">
              Beihang AI Lab is an open research group focused on capable AI systems and the principles behind them. Our work ranges from reinforcement learning and foundation models to embodied intelligence and large-scale combinatorial optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="principles-strip" aria-label="Lab principles">
        <div className="shell principles-grid">
          {principles.map(([index, title, text]) => (
            <div className="principle" key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="section dark-section">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">02 / RESEARCH</p>
              <h2>Research directions</h2>
            </div>
            <p>Four connected directions, one goal: building more capable and useful intelligent systems.</p>
          </div>

          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.index}>
                <div className="card-index">{area.index}</div>
                <div className="mini-network" aria-hidden="true"><i /><i /><i /><i /></div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div className="tag-row">
                  {area.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / SELECTED RESEARCH</p>
              <h2>What we are building</h2>
            </div>
            <a className="text-link" href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">All projects <Arrow /></a>
          </div>

          <div className="work-list">
            {works.map((work, idx) => (
              <article className="work-row" key={work.title}>
                <div className="work-art" aria-hidden="true">
                  <div className={`art-artifact artifact-${idx + 1}`}>
                    <div className="artifact-grid" />
                    <span className="art-code">{work.code}</span>
                    <span className="art-ring ring-a" />
                    <span className="art-ring ring-b" />
                    <span className="art-node art-node-a" />
                    <span className="art-node art-node-b" />
                    <span className="art-node art-node-c" />
                  </div>
                </div>
                <div className="work-copy">
                  <div className="work-topline">
                    <p className="work-eyebrow">{work.eyebrow}</p>
                    <span className="status-chip">{work.status}</span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-meta">{work.meta}</div>
                  <a href={work.href} target={work.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {work.cta} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section news-section">
        <div className="shell news-layout">
          <div>
            <p className="section-kicker">04 / NEWS</p>
            <h2>Latest from the lab</h2>
            <p className="news-intro">Research releases, open-source updates, and lab milestones.</p>
          </div>
          <div className="news-list">
            {news.map((item, index) => (
              <div className="news-item" key={item.date + item.text}>
                <time>{item.date}</time>
                <div>
                  <span className="news-index">0{index + 1}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="section people-section">
        <div className="shell people-panel">
          <div className="people-copy">
            <p className="section-kicker">05 / PEOPLE</p>
            <h2>Small team.<br />Big questions.</h2>
            <p>
              We are building an open and ambitious research community at Beihang University. We welcome collaborators interested in reinforcement learning, foundation models, embodied intelligence, and optimization.
            </p>
            <div className="people-tags"><span>Students</span><span>Collaborators</span><span>Open Source</span></div>
          </div>
          <div className="people-visual" aria-hidden="true">
            <div className="people-axis axis-x" /><div className="people-axis axis-y" />
            <span className="person-point p1" /><span className="person-point p2" /><span className="person-point p3" /><span className="person-point p4" />
            <span className="people-label label-a">LEARN</span><span className="people-label label-b">BUILD</span><span className="people-label label-c">DISCOVER</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-grid">
          <div>
            <p className="section-kicker">06 / CONNECT</p>
            <h2>Let&apos;s build what&apos;s next.</h2>
          </div>
          <div className="contact-actions">
            <a href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><strong>BEIHANG AI LAB</strong><p>Learning · Reasoning · Acting · Optimizing</p></div>
          <div className="footer-links">
            <a href="#research">Research</a><a href="#work">Work</a><a href="#news">News</a><a href="#people">People</a>
          </div>
          <div className="footer-end">© 2026 Beihang AI Lab<br />Beijing, China</div>
        </div>
      </footer>
    </main>
  );
}
