import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayane Singcol — Développeur Fullstack JavaScript",
  description:
    "Je construis des apps web rapides, accessibles et agréables à maintenir — React, Next.js, TypeScript. Freelance remote.",
  keywords: ["Next.js", "React", "TypeScript", "Fullstack", "JavaScript", "Tailwind", "Freelance"],
  authors: [{ name: "Bayane Singcol" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
