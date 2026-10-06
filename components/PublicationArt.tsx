export default function PublicationArt({ type }: { type: "graph" | "route" }) {
  if (type === "graph") {
    return (
      <svg className="publication-art-svg" viewBox="0 0 360 360" role="img" aria-label="Directed graph of modular algorithm operators">
        <defs>
          <linearGradient id="graphBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8067" />
            <stop offset="1" stopColor="#ee492d" />
          </linearGradient>
          <marker id="arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#14231d" />
          </marker>
        </defs>
        <rect width="360" height="360" fill="url(#graphBg)" />
        <g fill="none" stroke="#14231d" strokeWidth="3" markerEnd="url(#arrow)" opacity=".86">
          <path d="M80 178C112 114 142 92 182 92" />
          <path d="M198 101C250 106 276 140 279 176" />
          <path d="M271 195C249 239 220 263 178 269" />
          <path d="M158 265C112 254 84 226 78 193" />
          <path d="M100 184C146 178 194 180 255 185" />
        </g>
        <g stroke="#14231d" strokeWidth="3">
          <circle cx="72" cy="184" r="28" fill="#fff7ea" />
          <circle cx="188" cy="88" r="31" fill="#e8ff9c" />
          <circle cx="285" cy="184" r="28" fill="#fff7ea" />
          <circle cx="168" cy="274" r="32" fill="#d8c9ff" />
        </g>
        <g fill="#14231d" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle">
          <text x="72" y="188">PLAN</text><text x="188" y="92">BUILD</text>
          <text x="285" y="188">TEST</text><text x="168" y="278">EVOLVE</text>
        </g>
        <text x="180" y="330" fill="#14231d" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle" letterSpacing="3">SYSTEM-LEVEL SEARCH</text>
      </svg>
    );
  }

  return (
    <svg className="publication-art-svg" viewBox="0 0 360 360" role="img" aria-label="Compressed routing map expanding into an optimized route">
      <rect width="360" height="360" fill="#c8f163" />
      <g fill="none" stroke="#14231d" strokeWidth="2.5">
        <path d="M57 224C91 105 158 81 205 129C238 163 256 202 305 138" />
        <path d="M43 260C94 287 139 258 154 211C170 159 213 144 308 234" strokeDasharray="6 8" opacity=".48" />
        <circle cx="80" cy="193" r="63" opacity=".18" />
        <circle cx="266" cy="181" r="68" opacity=".18" />
      </g>
      <g fill="#fffdf4" stroke="#14231d" strokeWidth="2.5">
        <circle cx="57" cy="224" r="10" /><circle cx="82" cy="161" r="8" />
        <circle cx="123" cy="112" r="9" /><circle cx="176" cy="104" r="7" />
        <circle cx="216" cy="144" r="10" /><circle cx="253" cy="202" r="8" />
        <circle cx="305" cy="138" r="10" />
      </g>
      <g fill="#14231d" fontFamily="Arial, sans-serif" fontWeight="700">
        <text x="46" y="53" fontSize="14" letterSpacing="3">COMPRESS</text>
        <path d="M142 49h76" stroke="#14231d" strokeWidth="2" />
        <path d="M212 43l9 6-9 6" />
        <text x="231" y="53" fontSize="14" letterSpacing="3">REFINE</text>
        <text x="180" y="325" fontSize="13" textAnchor="middle" letterSpacing="3">1K → 100K NODES</text>
      </g>
    </svg>
  );
}
