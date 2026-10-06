import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PublicationArt from "@/components/PublicationArt";
import { publications } from "@/data/site";

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  return publication
    ? { title: `${publication.shortTitle} — Beihang AI Lab`, description: publication.summary }
    : {};
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  if (!publication) notFound();

  return (
    <main className={`paper-page paper-${publication.accent}`}>
      <Header detail />
      <section className="paper-hero">
        <div className="shell paper-hero-grid">
          <div className="paper-heading">
            <Link className="back-link" href="/#publications">← All publications</Link>
            <p className="section-label">{publication.category} · {publication.year}</p>
            <h1>{publication.title}</h1>
            <p className="paper-authors">{publication.authors}</p>
            <div className="paper-actions">
              <a href={publication.arxiv} target="_blank" rel="noreferrer">Read on arXiv ↗</a>
              {"code" in publication && publication.code ? (
                <a href={publication.code} target="_blank" rel="noreferrer">View code ↗</a>
              ) : null}
            </div>
          </div>
          <div className="paper-art"><PublicationArt type={publication.art} /></div>
        </div>
      </section>

      <section className="paper-body">
        <div className="shell paper-content-grid">
          <div className="paper-index">
            <span>ABSTRACT</span>
            <span>{publication.number}</span>
          </div>
          <div className="abstract-copy">
            <h2>Abstract</h2>
            <p>{publication.abstract}</p>
          </div>
        </div>

        <div className="shell stats-row">
          {publication.stats.map(([value, label]) => (
            <div className="paper-stat" key={label}>
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>

        <div className="shell next-paper">
          <span>Continue exploring</span>
          <Link href={`/publications/${publications.find((item) => item.slug !== publication.slug)?.slug}`}>
            {publications.find((item) => item.slug !== publication.slug)?.shortTitle} <i>→</i>
          </Link>
        </div>
      </section>
    </main>
  );
}
