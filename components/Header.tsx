import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="shell nav-shell">
        <Logo />
        <nav className="nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Publications</a>
          <a href="#people">People</a>
          <a href="#news">News</a>
        </nav>
        <a className="nav-cta" href="https://github.com/BeihangAILab" target="_blank" rel="noreferrer">
          GitHub <span>↗</span>
        </a>
      </div>
    </header>
  );
}
