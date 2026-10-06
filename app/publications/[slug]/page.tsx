import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { publications, type Publication } from "@/data/site";
import dga2dOverview from "@/photos/pub/DGA2D/overview.png";
import justInitializeOverview from "@/photos/pub/Just Initialize/overview.png";

const publicationImages: Record<Publication["slug"], StaticImageData> = {
  dga2d: dga2dOverview,
  "just-initialize": justInitializeOverview,
};

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
    <main id="top" className={`paper-page paper-${publication.accent}`}>
      <Header detail />
      <section className="paper-hero">
        <div className="shell">
          <Link className="back-link" href="/publications">← All publications</Link>
          <div className="paper-hero-grid">
            <div className="paper-overview">
              <Image
                src={publicationImages[publication.slug]}
                alt={`${publication.shortTitle} method overview`}
                sizes="(max-width: 720px) calc(100vw - 64px), (max-width: 1100px) 44vw, 560px"
                priority
              />
            </div>
            <div className="paper-heading">
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
          </div>
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

        <div className="shell paper-results">
          <div className="paper-index"><span>KEY RESULTS</span><span>{publication.number}</span></div>
          <div className="result-copy">
            {publication.stats.map(([value, label]) => (
              <p key={label}><strong>{value}</strong> {label}</p>
            ))}
          </div>
        </div>

        <div className="shell next-paper">
          <span>Continue exploring</span>
          <Link href={`/publications/${publications.find((item) => item.slug !== publication.slug)?.slug}`}>
            {publications.find((item) => item.slug !== publication.slug)?.shortTitle} <i>→</i>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
