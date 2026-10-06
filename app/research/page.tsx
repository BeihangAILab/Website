import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Research — Beihang AI Lab" };

const directions = [
  {
    number: "01",
    title: "Optimization",
    text: "We develop scalable methods for complex optimization problems, connecting mathematical structure, intelligent search, and practical solvers.",
    points: ["Combinatorial optimization", "Large-scale routing", "Algorithm design"],
    words: ["MODEL", "SEARCH", "SOLVE", "SCALE"],
    href: "/publications/just-initialize",
  },
  {
    number: "02",
    title: "Reinforcement Learning",
    text: "We study how agents learn effective decisions through interaction, with an emphasis on efficient learning, robust policies, and long-horizon reasoning.",
    points: ["Sequential decisions", "Policy learning", "Generalization"],
    words: ["STATE", "POLICY", "REWARD", "ADAPT"],
    href: "/publications",
  },
  {
    number: "03",
    title: "Embodied AI",
    text: "We explore intelligent systems that perceive, reason, and act in physical environments, linking multimodal understanding with purposeful behavior.",
    points: ["Perception and action", "World understanding", "Interactive agents"],
    words: ["SENSE", "REASON", "ACT", "WORLD"],
    href: "/publications",
  },
  {
    number: "04",
    title: "Self-evolving AI",
    text: "We investigate systems that improve their own strategies, components, and problem-solving processes through evaluation, feedback, and continual adaptation.",
    points: ["Automated improvement", "Feedback-driven search", "Evolving systems"],
    words: ["BUILD", "TEST", "EVOLVE", "REPEAT"],
    href: "/publications/dga2d",
  },
];

export default function ResearchPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero research-hero">
        <div className="shell"><p className="section-label">RESEARCH</p><h1>Four directions.<br /><em>One ambition.</em></h1></div>
      </section>
      <section className="section research-page-section">
        <div className="shell research-list">
          {directions.map((direction) => (
            <article className="research-row" key={direction.number}>
              <div className={`research-visual research-visual-${direction.number}`} aria-hidden="true">
                <span className="research-visual-number">{direction.number}</span>
                <div className="research-word-map">
                  {direction.words.map((word, index) => <span className={`word-${index + 1}`} key={word}>{word}</span>)}
                  <i className="research-core" />
                </div>
              </div>
              <div className="research-copy">
                <p className="research-kicker">Research direction {direction.number}</p>
                <h2>{direction.title}</h2>
                <p>{direction.text}</p>
                <ul>{direction.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link href={direction.href}>Related work <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
