import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Research — Beihang AI Lab" };

const directions = [
  {
    number: "01",
    title: "Automated Algorithm Design",
    text: "We study how large language models can compose complete algorithmic systems, evolve reusable operators, and reason over structured search spaces.",
    points: ["LLM-guided design", "Structured program search", "Reusable algorithm operators"],
    words: ["PROMPT", "SEARCH", "CODE", "EVALUATE"],
    href: "/publications/dga2d",
  },
  {
    number: "02",
    title: "Large-scale Routing",
    text: "We build efficient methods for routing problems from thousands to hundreds of thousands of nodes, emphasizing strong initialization, global structure, and fast refinement.",
    points: ["Training-free initialization", "Large problem instances", "Solver-agnostic components"],
    words: ["COMPRESS", "ROUTE", "RECOVER", "REFINE"],
    href: "/publications/just-initialize",
  },
  {
    number: "03",
    title: "Combinatorial Optimization",
    text: "We develop general mechanisms that connect learning, search, and optimization across routing, scheduling, allocation, and graph problems.",
    points: ["Discrete search spaces", "Scalable optimization", "General problem-solving systems"],
    words: ["LEARN", "GRAPH", "OPTIMIZE", "SCALE"],
    href: "/publications",
  },
];

export default function ResearchPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero research-hero">
        <div className="shell"><p className="section-label">RESEARCH</p><h1>Research built around<br /><em>hard problems.</em></h1></div>
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
