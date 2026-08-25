"use client";

import { MegaphoneIcon } from "@phosphor-icons/react/dist/ssr/Megaphone";
import { FilmSlateIcon } from "@phosphor-icons/react/dist/ssr/FilmSlate";
import { GameControllerIcon } from "@phosphor-icons/react/dist/ssr/GameController";
import { ConfettiIcon } from "@phosphor-icons/react/dist/ssr/Confetti";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import Link from "next/link";

const services = [
  {
    icon: MegaphoneIcon,
    title: "Communication",
    description: "Propulsez votre visibilité et votre communication",
    href: "/nos-prestations#communication",
  },
  {
    icon: FilmSlateIcon,
    title: "Production audiovisuelle",
    description: "Valorisez vos contenus et vos productions",
    href: "/nos-prestations#production-audiovisuelle",
  },
  {
    icon: GameControllerIcon,
    title: "Game Design",
    description: "Réinventez l'expérience par le jeu",
    href: "/nos-prestations#game-design",
  },
  {
    icon: ConfettiIcon,
    title: "Événementiel",
    description: "Fédérez vos publics par l'événementiel",
    href: "/nos-prestations#evenementiel",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Étude de publics",
    description: "Décryptez l'impact de vos projets et de vos publics",
    href: "/nos-prestations#etude-de-publics",
  },
];

export default function ServicesGrid() {
  const [first, ...rest] = services;
  const FirstIcon = first.icon;

  return (
    <section className="bg-white py-16">
      <div className="section-wrapper">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-dark">Nos prestations</h2>
          <Link
            href="/nos-prestations"
            className="text-sm font-semibold text-brand-dark hover:text-brand transition-colors shrink-0"
          >
            Voir tout
          </Link>
        </div>

        {/* Grille asymétrique : 1 grande carte + 4 petites */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Carte principale — occupe 2 colonnes sur desktop */}
          <Link
            href={first.href}
            className="lg:col-span-2 group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between min-h-[180px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "var(--color-brand-dark)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <FirstIcon size={32} weight="duotone" className="text-white/90 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/30">01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{first.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{first.description}</p>
            </div>
          </Link>

          {/* 4 cartes secondaires */}
          {rest.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between min-h-[160px] no-underline transition-all duration-300 hover:border-brand-dark/20 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-light">
                    <Icon size={20} weight="duotone" className="text-brand-dark" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-dark/20">
                    0{i + 2}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-dark mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-dark/55 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
