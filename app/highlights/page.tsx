import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { publications } from "@/data/site";

export const metadata: Metadata = { title: "Highlights — Beihang AI Lab" };

export default function HighlightsPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero highlights-hero">
        <div className="shell"><p className="section-label">HIGHLIGHTS</p><h1>Recent work and<br /><em>milestones.</em></h1></div>
      </section>
      <section className="section highlights-section">
        <div className="shell highlight-list">
          {publications.map((publication) => (
            <Link className="highlight-item" href={`/publications/${publication.slug}`} key={publication.slug}>
              <time>{publication.year}</time>
              <div><p>{publication.category}</p><h2>{publication.title}</h2><span>Read highlight ↗</span></div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
