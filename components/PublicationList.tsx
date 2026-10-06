import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { publications } from "@/data/site";
import dga2dOverview from "@/photos/pub/DGA2D/overview.png";
import justInitializeOverview from "@/photos/pub/Just Initialize/overview.png";

const publicationImages: Record<string, StaticImageData> = {
  dga2d: dga2dOverview,
  "just-initialize": justInitializeOverview,
};

export default function PublicationList() {
  return (
    <div className="publication-list">
      {publications.map((publication) => (
        <article className="publication-row" key={publication.slug}>
          <Link
            className="publication-figure"
            href={`/publications/${publication.slug}`}
            aria-label={`Read ${publication.title}`}
          >
            <Image
              src={publicationImages[publication.slug]}
              alt={`${publication.shortTitle} method overview`}
              sizes="(max-width: 720px) calc(100vw - 56px), (max-width: 1100px) 42vw, 560px"
            />
          </Link>

          <div className="publication-copy">
            <Link className="publication-title-link" href={`/publications/${publication.slug}`}>
              <h3>{publication.title}</h3>
            </Link>
            <p className="publication-authors">{publication.authors}</p>
            <div className="publication-links" aria-label={`${publication.shortTitle} links`}>
              <strong>arXiv {publication.year}</strong>
              <span aria-hidden="true">|</span>
              <a href={publication.arxiv} target="_blank" rel="noreferrer">Paper ↗</a>
              {"code" in publication && publication.code ? (
                <>
                  <span aria-hidden="true">|</span>
                  <a href={publication.code} target="_blank" rel="noreferrer">Code ↗</a>
                </>
              ) : null}
            </div>
            <ul className="publication-highlights">
              <li>{publication.summary}</li>
            </ul>
            <Link className="publication-detail-link" href={`/publications/${publication.slug}`}>
              View details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
