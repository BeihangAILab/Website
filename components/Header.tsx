"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navigation = [
  ["Home", "/"],
  ["Members", "/members"],
  ["Publications", "/publications"],
  ["Research", "/research"],
  ["Highlights", "/highlights"],
] as const;

export default function Header({ detail = false }: { detail?: boolean }) {
  const pathname = usePathname();

  return (
    <header className={`header${detail ? " detail-header" : ""}`}>
      <div className="shell nav-shell">
        <Logo />
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <a className={active ? "active" : undefined} href={href} key={href}>{label}</a>;
          })}
        </nav>
        <a className="nav-mark" href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
