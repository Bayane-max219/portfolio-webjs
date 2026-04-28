"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const stack = [
  { label: "React / Next.js 14+", level: 90 },
  { label: "TypeScript / JavaScript", level: 88 },
  { label: "Java / Spring Boot 3", level: 84 },
  { label: "Node.js / NestJS", level: 83 },
  { label: "Angular", level: 78 },
  { label: "PostgreSQL / MySQL", level: 85 },
  { label: "Docker / CI-CD", level: 80 },
  { label: "Tailwind CSS", level: 88 },
];

const projets = [
  {
    num: "01",
    name: "talanty-mg",
    desc: "Marketplace de services freelance Madagascar — architecture 3 couches : Spring Boot (API données) + Node.js (logique métier) + Next.js (frontend). PostgreSQL + Docker.",
    tags: ["Next.js", "Spring Boot", "Node.js", "PostgreSQL", "Docker"],
    href: "https://github.com/Bayane-max219/talanty-mg",
  },
  {
    num: "02",
    name: "Gestion_Parking_Spring_Boot_Angular",
    desc: "Application de gestion de parkings et réservations — Spring Boot 3 + Angular avec authentification JWT et rôles ADMIN / OWNER / CLIENT.",
    tags: ["Spring Boot 3", "Angular", "JWT", "PostgreSQL", "REST API"],
    href: "https://github.com/Bayane-max219/Gestion_Parking_Spring_Boot_-_Angular",
  },
  {
    num: "03",
    name: "IT-Project-Management-System",
    desc: "Système de gestion de projets IT — React, Django REST, PostgreSQL. Dashboard multi-rôles, task management, time tracking et statistiques en temps réel.",
    tags: ["React", "Django", "PostgreSQL", "REST API", "Multi-role"],
    href: "https://github.com/Bayane-max219/IT-Project-Management-System",
  },
  {
    num: "04",
    name: "outage-alerts-mg",
    desc: "Plateforme de suivi des coupures (eau / électricité) — NestJS + Angular 17 + JWT + rôles + cron + Swagger. Espace public, agent et admin. Conteneurisé Docker.",
    tags: ["NestJS", "Angular 17", "TypeScript", "JWT", "Docker"],
    href: "https://github.com/Bayane-max219/outage-alerts-mg",
  },
  {
    num: "05",
    name: "Gestion-universitaire-ERP",
    desc: "Mini-ERP de gestion universitaire — Java EE, JPA, JSF. Gestion des étudiants, cours, inscriptions et notes avec interfaces d'administration complètes.",
    tags: ["Java EE", "JPA", "JSF", "ERP", "Hibernate"],
    href: "https://github.com/Bayane-max219/Gestion-universitaire-ERP",
  },
  {
    num: "06",
    name: "Alerte-Communautaire-Cyclone",
    desc: "Application d'alerte cyclone et sécurité communautaire — Express + Angular 21 + MySQL + Socket.IO temps réel. Rôles contributeur / modérateur / admin, JWT.",
    tags: ["Express", "Angular 21", "Socket.IO", "MySQL", "JWT"],
    href: "https://github.com/Bayane-max219/Alerte_Communautaire_Cyclone_Securite",
  },
];

const tools = [
  "Next.js", "React", "TypeScript", "Spring Boot", "Angular",
  "NestJS", "Express", "Node.js", "PostgreSQL", "MySQL",
  "Hibernate", "Docker", "JWT", "Socket.IO",
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Spring Boot", "Angular",
  "NestJS", "Node.js", "PostgreSQL", "Docker", "JWT",
  "Java", "Hibernate", "Tailwind CSS", "REST API",
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
            {["Stack", "Projets", "Contact"].map((s) => (
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
              Bayane Miguel
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
                  Développeur Fullstack — JavaScript & Java
                </h2>
                <p className="text-base text-ink-muted max-w-xl leading-relaxed">
                  Je développe des applications web complètes — React / Next.js côté frontend,
                  Spring Boot / NestJS côté backend. Attention particulière à l'architecture,
                  la sécurité et la maintenabilité du code.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href="#contact" className="btn-primary">
                  Travaillons ensemble
                </a>
                <a href="#projets" className="btn-outline text-center">
                  Voir les projets
                </a>
              </div>
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="flex-shrink-0 flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              <div className="absolute top-3 left-3 w-full h-full bg-yellow-vivid" />
              <div className="relative w-48 md:w-56 border-2 border-ink overflow-hidden"
                   style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/profile.png"
                  alt="Bayane Miguel Singcol"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
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
              Full stack JavaScript et Java — du composant React à l'API Spring Boot,
              en passant par PostgreSQL et Docker.
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

      {/* PROJETS */}
      <section id="projets" className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-yellow-dark mb-2">
          Open Source · GitHub
        </p>
        <h2 className="font-black text-4xl md:text-5xl text-ink mb-4">
          Projets
        </h2>
        <p className="text-ink-muted mb-12 max-w-2xl">
          6 projets full stack JavaScript et Java — code vérifiable sur GitHub.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projets.map((p) => (
            <a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-black text-surface-border group-hover:text-yellow-vivid transition-colors duration-200 leading-none">
                  {p.num}
                </span>
                <span className="text-xs font-bold text-ink-muted mt-2 group-hover:text-yellow-dark transition-colors">
                  GitHub →
                </span>
              </div>
              <h3 className="font-bold text-lg text-ink mb-3 group-hover:text-yellow-dark transition-colors duration-200 break-all">
                {p.name}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-semibold bg-yellow-soft/60 text-yellow-dark border border-yellow-dark/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
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
            Bayane Miguel Singcol · Fullstack JavaScript & Java · 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
