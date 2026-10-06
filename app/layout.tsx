import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beihang AI Lab",
  description:
    "Beihang AI Lab — research in reinforcement learning, foundation models, embodied intelligence, and optimization.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
