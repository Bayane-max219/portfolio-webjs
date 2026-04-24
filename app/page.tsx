"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const stack = [
  { label: "TypeScript", level: 90 },
  { label: "React / Next.js 14+", level: 92 },
  { label: "Node.js", level: 85 },
  { label: "Tailwind CSS", level: 90 },
  { label: "Prisma / Drizzle", level: 82 },
  { label: "tRPC / REST", level: 80 },
  { label: "Vercel / Edge", level: 85 },
  { label: "Playwright (tests)", level: 75 },
];

const missions = [
  {
    num: "01",
    client: "Linéa Studio",
    sector: "Agence créative · Paris",
    period: "Jan. 2026 — Mar. 2026",
    tech: ["Next.js 14", "tRPC", "Drizzle", "Stripe", "Vercel"],
    bullets: [
      "Plateforme e-commerce Next.js 14 (App Router, RSC) : panier Zustand, paiement Stripe, ISR sur 3 800 produits.",
      "Backend tRPC + Drizzle ORM sur Neon Postgres. Tests Playwright e2e sur les parcours critiques.",
      "Core Web Vitals : LCP 0,9 s, CLS 0, INP <120 ms. Déploiement Vercel Edge.",
    ],
  },
  {
    num: "02",
    client: "Poolside Travel",
    sector: "Voyage premium · Lisbonne",
    period: "Oct. 2025 — Déc. 2025",
    tech: ["Next.js", "Sanity", "Mapbox", "Framer Motion"],
    bullets: [
      "Moteur de réservation React + Next.js : filtres composables, carte Mapbox, recherche sémantique via embeddings.",
      "CMS headless (Sanity) avec preview live et édition en place (visual editing).",
      "Animations Framer Motion respectueuses de prefers-reduced-motion.",
    ],
  },
  {
    num: "03",
    client: "Pocket Ledger",
    sector: "SaaS finance perso · Londres",
    period: "Juil. 2025 — Sep. 2025",
    tech: ["Next.js", "Clerk", "Prisma", "D3", "A/B Testing"],
    bullets: [
      "App SaaS multi-tenant Next.js + Clerk (auth) + Prisma. Graphiques D3 + Recharts pour reporting.",
      "Feature flags via Vercel + A/B testing sur onboarding (+18% d'activation).",
      "Accessibilité AA : navigation clavier complète, contrastes validés, tests axe-core en CI.",
    ],
  },
  {
    num: "04",
    client: "Tilde Community",
    sector: "Plateforme communautaire · Berlin",
    period: "Avr. 2025 — Juin 2025",
    tech: ["Next.js", "Supabase", "shadcn/ui", "tRPC", "Storybook"],
    bullets: [
      "Forum temps réel (Next.js + Supabase Realtime) avec modération IA intégrée.",
      "Design system Tailwind + shadcn/ui, 42 composants documentés sur Storybook.",
      "Migration REST → tRPC : ÷3 sur le temps de dev de nouvelles features.",
    ],
  },
];

const tools = [
  "Next.js", "TypeScript", "Tailwind", "Prisma",
  "Drizzle", "Vercel", "Supabase", "Stripe", "Framer Motion",
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "tRPC", "Prisma", "Vercel", "Supabase", "Playwright",
  "Framer Motion", "shadcn/ui", "Storybook",
];

function SkillRow({ label, level }: { label: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="skill-pill group">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="flex items-center gap-3">
        <div className="w-24 h-1 bg-surface-border rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-vivid rounded-full transition-all duration-700 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
        <span className="text-xs font-bold text-ink-muted w-8 text-right">
          {level}
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-sm border-b border-surface-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-black text-ink text-lg tracking-tighter">
            B<span className="text-yellow-vivid">.</span>S
          </span>
          <div className="hidden md:flex items-center gap-10">
            {["Stack", "Missions", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">
                {s}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary py-2 px-5 text-xs">
            Me contacter
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          {/* TEXT */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-ink-muted border border-surface-border px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-yellow-vivid" />
                Freelance · Remote · Disponible
              </span>
            </div>

            <h1 className="font-black text-ink leading-none mb-6"
                style={{ fontSize: "clamp(3rem,9vw,7rem)" }}>
              Bayane
              <br />
              <span className="relative inline-block">
                Singcol
                <span
                  className="absolute bottom-2 left-0 w-full h-4 bg-yellow-vivid -z-10"
                />
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-end gap-8 mb-12">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-ink-soft mb-4">
                  Développeur Fullstack JavaScript
                </h2>
                <p className="text-base text-ink-muted max-w-xl leading-relaxed">
                  Je construis des apps web rapides, accessibles et agréables à
                  maintenir — React, Next.js, TypeScript. Attention particulière à
                  la DX, l'accessibilité et les Core Web Vitals.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href="#contact" className="btn-primary">
                  Travaillons ensemble
                </a>
                <a href="#missions" className="btn-outline text-center">
                  Voir les missions
                </a>
              </div>
            </div>
          </div>

          {/* PORTRAIT — neo-brutalist : ombre portée jaune */}
          <div className="flex-shrink-0 flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              {/* Ombre portée jaune décalée */}
              <div className="absolute top-3 left-3 w-full h-full bg-yellow-vivid" />
              {/* Cadre noir */}
              <div className="relative w-48 md:w-56 border-2 border-ink overflow-hidden"
                   style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/profile.png"
                  alt="Bayane Singcol"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge disponibilité */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-vivid border-2 border-ink px-3 py-1.5 shadow-[2px_2px_0px_#111]">
                <span className="text-[10px] font-black tracking-widest uppercase text-ink">
                  OPEN TO WORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="border-y border-surface-border py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-6 text-sm font-semibold text-ink-muted uppercase tracking-widest">
                {item}
                <span className="ml-6 text-yellow-vivid">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-yellow-dark mb-2">
              Compétences
            </p>
            <h2 className="font-black text-4xl md:text-5xl text-ink mb-8 leading-tight">
              Stack
              <br />
              technique
            </h2>
            <p className="text-ink-muted leading-relaxed">
              TypeScript-first. J'écris du code lisible, testé et performant —
              de l'API au composant.
            </p>
          </div>
          <div>
            {stack.map((s) => (
              <SkillRow key={s.label} label={s.label} level={s.level} />
            ))}
            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-surface-border">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium border border-surface-border text-ink-muted hover:border-yellow-vivid hover:text-ink hover:bg-yellow-soft/40 transition-all duration-150"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section id="missions" className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-yellow-dark mb-2">
          Expérience
        </p>
        <h2 className="font-black text-4xl md:text-5xl text-ink mb-12">
          Missions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {missions.map((m) => (
            <div key={m.client} className="project-card group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-black text-surface-border group-hover:text-yellow-vivid transition-colors duration-200 leading-none">
                  {m.num}
                </span>
                <span className="text-xs font-medium text-ink-faint mt-2">
                  {m.period}
                </span>
              </div>
              <h3 className="font-bold text-xl text-ink mb-0.5">{m.client}</h3>
              <p className="text-xs font-medium text-ink-muted mb-4">
                {m.sector}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-semibold bg-yellow-soft/60 text-yellow-dark border border-yellow-dark/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {m.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-ink-muted leading-relaxed"
                  >
                    <span className="text-yellow-vivid shrink-0 font-bold">
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-ink text-surface p-12 md:p-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-yellow-vivid mb-4">
              Contact
            </p>
            <h2 className="font-black text-4xl md:text-5xl mb-6 leading-tight">
              Un projet ?
              <br />
              <span className="text-yellow-vivid">Parlons-en.</span>
            </h2>
            <p className="text-surface/60 mb-10 leading-relaxed">
              Disponible pour missions freelance remote. Réponse sous 24h,
              garanti.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Email", value: "baymi312@gmail.com", href: "mailto:baymi312@gmail.com" },
                { label: "Téléphone", value: "+261 34 83 498 86", href: "tel:+261348349886" },
                { label: "GitHub", value: "Bayane-max219", href: "https://github.com/Bayane-max219" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "GitHub" ? "_blank" : undefined}
                  rel={c.label === "GitHub" ? "noopener noreferrer" : undefined}
                  className="block p-4 border border-surface/20 hover:border-yellow-vivid hover:bg-yellow-vivid/5 transition-all duration-150"
                >
                  <div className="text-[10px] font-bold tracking-widest uppercase text-surface/40 mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-surface/80">
                    {c.value}
                  </div>
                </a>
              ))}
            </div>
            <a
              href="mailto:baymi312@gmail.com"
              className="inline-block px-10 py-4 bg-yellow-vivid text-ink font-black text-sm tracking-wide shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-150"
            >
              Envoyer un message →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-surface-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-black text-sm">
            B<span className="text-yellow-vivid">.</span>S
          </span>
          <span className="text-xs text-ink-faint">
            Bayane Singcol · Fullstack JavaScript · 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
