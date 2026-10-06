import Image from "next/image";
import badge from "@/photos/badge/bfaa04aa99e8c143b52c9116f1af9811.png";

export default function Logo() {
  return (
    <a className="brand" href="/#top" aria-label="Beihang AI Lab home">
      <Image className="brand-badge" src={badge} alt="Beihang AI Lab" priority />
    </a>
  );
}
