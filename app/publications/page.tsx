import type { Metadata } from "next";
import Header from "@/components/Header";
import PublicationList from "@/components/PublicationList";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Publications — Beihang AI Lab" };

export default function PublicationsPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero dark-inner-hero">
        <div className="shell"><p className="section-label">PUBLICATIONS</p><h1>Ideas, tested<br />in the <em>open.</em></h1></div>
      </section>
      <section className="section publications-section standalone-publications">
        <div className="shell">
          <PublicationList />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
