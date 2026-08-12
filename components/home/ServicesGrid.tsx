"use client";

import { Megaphone, Clapperboard, Gamepad2, PartyPopper, Search } from "lucide-react";
import type { FC, SVGProps } from "react";

type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: number | string }>;

const services: { icon: IconComponent; title: string; description: string }[] = [
  { icon: Megaphone as IconComponent, title: "Communication", description: "Propulsez votre visibilité et votre communication" },
  { icon: Clapperboard as IconComponent, title: "Production audiovisuelle", description: "Valorisez vos contenus et vos productions" },
  { icon: Gamepad2 as IconComponent, title: "Game Design", description: "Réinventez l'expérience par le jeu" },
  { icon: PartyPopper as IconComponent, title: "Événementiel", description: "Fédérez vos publics par l'événementiel" },
  { icon: Search as IconComponent, title: "Étude de publics", description: "Décryptez l'impact de vos projets et de vos publics" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="section-wrapper">
        <h2 className="text-2xl font-bold text-gray-dark">
          Nos prestations
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Icon badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <Icon width={20} height={20} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-dark">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

