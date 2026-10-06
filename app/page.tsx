import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PublicationArt from "@/components/PublicationArt";
import { coreMembers, participants, publications } from "@/data/site";
import jiale from "@/photos/members/lead/Jiale Zhao.jpg";
import sirui from "@/photos/members/co-author/Sirui Mao.jpg";
import zimu from "@/photos/members/co-author/Zimu Chen.jpg";
import wentao from "@/photos/members/co-author/Wentao Yang.jpg";

const memberImages: Record<string, StaticImageData> = {
  "Jiale Zhao": jiale,
  "Sirui Mao": sirui,
  "Zimu Chen": zimu,
  "Wentao Yang": wentao,
};

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="shell hero-inner">
          <p className="eyebrow">BEIHANG UNIVERSITY · BEIJING</p>
          <h1>
            We design intelligence
            <span>for hard problems.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              An open research team exploring automated algorithm design and large-scale combinatorial optimization.
            </p>
            <a className="round-link" href="#publications" aria-label="Explore publications">
              <span>EXPLORE</span><strong>↓</strong>
            </a>
          </div>
        </div>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-dot dot-one" aria-hidden="true" />
        <div className="hero-dot dot-two" aria-hidden="true" />
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div>
            <p className="section-label">01 / ABOUT</p>
            <p className="micro-copy">Learning · Search · Optimization</p>
          </div>
          <div>
            <h2>Structure first.<br /><em>Scale</em> follows.</h2>
            <p className="about-copy">
              We study how intelligent systems can discover, compose, and refine algorithms. Our current work spans LLM-guided algorithm design and fast, training-free methods for routing problems at scale.
            </p>
          </div>
        </div>
      </section>

      <section id="publications" className="section publications-section">
        <div className="shell">
          <div className="section-intro">
            <p className="section-label">02 / PUBLICATIONS</p>
            <h2>Selected research</h2>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <Link className="publication-row" href={`/publications/${publication.slug}`} key={publication.slug}>
                <div className={`publication-visual publication-${publication.accent}`}>
                  <PublicationArt type={publication.art} />
                </div>
                <div className="publication-copy">
                  <div className="publication-meta">
                    <span>{publication.number}</span>
                    <span>{publication.category}</span>
                    <span>{publication.year}</span>
                  </div>
                  <h3>{publication.shortTitle}</h3>
                  <p>{publication.summary}</p>
                  <div className="publication-footer">
                    <span>{publication.authors.split(",").slice(0, 4).join(", ")}{publication.authors.split(",").length > 4 ? ", et al." : ""}</span>
                    <strong>Read paper <i aria-hidden="true">↗</i></strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="members" className="section members-section">
        <div className="shell">
          <div className="members-heading">
            <div>
              <p className="section-label">03 / MEMBERS</p>
              <h2>The people behind<br />the questions.</h2>
            </div>
            <p>Small, collaborative, and focused on turning ambitious ideas into rigorous research.</p>
          </div>

          <div className="member-group lead-group">
            <div className="member-group-heading">
              <span>01</span>
              <h3>Lead</h3>
            </div>
            <article className="member-card lead-card">
              <div className="member-photo lead-photo">
                <Image src={memberImages[coreMembers.lead.name]} alt={coreMembers.lead.name} sizes="(max-width: 760px) 54vw, 250px" />
              </div>
              <h4>{coreMembers.lead.name}</h4>
            </article>
          </div>

          <div className="member-group coauthors">
            <div className="member-group-heading">
              <span>02</span>
              <h3>Co-authors</h3>
            </div>
            <div className="coauthor-grid">
              {coreMembers.coauthors.map((member) => (
                <article className="member-card" key={member.name}>
                  <div className="member-photo">
                    <Image src={memberImages[member.name]} alt={member.name} sizes="(max-width: 760px) 40vw, 220px" />
                  </div>
                  <h4>{member.name}</h4>
                </article>
              ))}
            </div>
          </div>

          <div className="member-group participants">
            <div className="participants-heading">
              <div className="member-group-heading">
                <span>03</span>
                <h3>Participants</h3>
              </div>
              <span>{String(participants.length).padStart(2, "0")} people</span>
            </div>
            <div className="participant-list">
              {participants.map((name, index) => (
                <div className="participant-name" key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <p className="section-label">BEIHANG AI LAB</p>
          <h2>Let&apos;s solve the<br /><em>hard part.</em></h2>
          <a href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">Visit GitHub ↗</a>
        </div>
        <div className="shell footer-base">
          <span>© 2026 Beihang AI Lab</span><span>Beijing, China</span><a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
