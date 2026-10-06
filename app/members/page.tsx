import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { coreMembers, participants } from "@/data/site";
import jiale from "@/photos/members/lead/Jiale Zhao.jpg";
import sirui from "@/photos/members/co-author/Sirui Mao.jpg";
import zimu from "@/photos/members/co-author/Zimu Chen.jpg";
import wentao from "@/photos/members/co-author/Wentao Yang.jpg";

export const metadata: Metadata = { title: "Members — Beihang AI Lab" };

const memberImages: Record<string, StaticImageData> = {
  "Jiale Zhao": jiale,
  "Sirui Mao": sirui,
  "Zimu Chen": zimu,
  "Wentao Yang": wentao,
};

export default function MembersPage() {
  return (
    <main id="top" className="inner-page">
      <Header detail />
      <section className="inner-hero">
        <div className="shell">
          <p className="section-label">MEMBERS</p>
          <h1>People who turn<br /><em>questions</em> into work.</h1>
        </div>
      </section>
      <section className="section members-section standalone-members">
        <div className="shell">
          <div className="member-group lead-group">
            <div className="member-group-heading"><span>01</span><h3>Lead</h3></div>
            <article className="member-card lead-card">
              <a
                className="member-profile-link"
                href="https://peterzhao225.github.io/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Jiale Zhao's personal website"
              >
                <div className="member-photo lead-photo"><Image src={memberImages[coreMembers.lead.name]} alt={coreMembers.lead.name} /></div>
              </a>
              <h4>{coreMembers.lead.name}</h4>
            </article>
          </div>
          <div className="member-group coauthors">
            <div className="member-group-heading"><span>02</span><h3>Co-authors</h3></div>
            <div className="coauthor-grid">
              {coreMembers.coauthors.map((member) => (
                <article className="member-card" key={member.name}>
                  <div className="member-photo"><Image src={memberImages[member.name]} alt={member.name} /></div>
                  <h4>{member.name}</h4>
                </article>
              ))}
            </div>
          </div>
          <div className="member-group participants">
            <div className="participants-heading">
              <div className="member-group-heading"><span>03</span><h3>Participants</h3></div>
              <span>{String(participants.length).padStart(2, "0")} people</span>
            </div>
            <div className="participant-list">
              {participants.map((name, index) => (
                <div className="participant-name" key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
