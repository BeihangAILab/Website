import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PublicationArt from "@/components/PublicationArt";
import SiteFooter from "@/components/SiteFooter";
import { publications } from "@/data/site";

export const metadata: Metadata = { title: "Publications — Beihang AI Lab" };

export default function PublicationsPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero dark-inner-hero">
        <div className="shell"><p className="section-label">PUBLICATIONS</p><h1>Ideas, tested<br />in the <em>open.</em></h1></div>
      </section>
      <section className="section publications-section standalone-publications">
        <div className="shell publication-list">
          {publications.map((publication) => (
            <Link className="publication-row" href={`/publications/${publication.slug}`} key={publication.slug}>
              <div className={`publication-visual publication-${publication.accent}`}><PublicationArt type={publication.art} /></div>
              <div className="publication-copy">
                <div className="publication-meta"><span>{publication.number}</span><span>{publication.category}</span><span>{publication.year}</span></div>
                <h3>{publication.shortTitle}</h3><p>{publication.summary}</p>
                <div className="publication-footer"><span>{publication.authors}</span><strong>Read paper <i>↗</i></strong></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
