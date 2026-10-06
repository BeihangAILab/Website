import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beihang AI Lab — Algorithm Design & Optimization",
  description:
    "Beihang AI Lab researches automated algorithm design and large-scale combinatorial optimization.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
