import Logo from "./Logo";

export default function Header({ detail = false }: { detail?: boolean }) {
  return (
    <header className={`header${detail ? " detail-header" : ""}`}>
      <div className="shell nav-shell">
        <Logo />
        <nav className="nav" aria-label="Primary navigation">
          <a href={detail ? "/#about" : "#about"}>About</a>
          <a href={detail ? "/#publications" : "#publications"}>Publications</a>
          <a href={detail ? "/#members" : "#members"}>Members</a>
        </nav>
        <a className="nav-mark" href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
