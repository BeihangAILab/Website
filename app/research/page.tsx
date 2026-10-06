import type { Metadata } from "next";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Research — Beihang AI Lab" };

const directions = [
  { number: "01", title: "Automated Algorithm Design", text: "We study how large language models can compose complete algorithmic systems, evolve reusable operators, and reason over structured search spaces." },
  { number: "02", title: "Large-scale Routing", text: "We build efficient methods for routing problems from thousands to hundreds of thousands of nodes, with an emphasis on strong initialization and fast refinement." },
  { number: "03", title: "Combinatorial Optimization", text: "We develop general mechanisms that connect learning, search, and optimization across scheduling, routing, allocation, and graph problems." },
];

export default function ResearchPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero research-hero">
        <div className="shell"><p className="section-label">RESEARCH</p><h1>Structure, search,<br />and <em>scale.</em></h1></div>
      </section>
      <section className="section research-page-section">
        <div className="shell research-page-grid">
          {directions.map((direction) => (
            <article className="direction-card" key={direction.number}>
              <span>{direction.number}</span><h2>{direction.title}</h2><p>{direction.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
