"use client";

import { UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";
import { FileTextIcon } from "@phosphor-icons/react/dist/ssr/FileText";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { WrenchIcon } from "@phosphor-icons/react/dist/ssr/Wrench";
import { SealCheckIcon } from "@phosphor-icons/react/dist/ssr/SealCheck";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Prise de contact",
    description: "Compréhension des besoins, objectifs et contraintes. Mise en place d'une compréhension mutuelle.",
    Icon: UsersIcon,
  },
  {
    number: "02",
    title: "Construction d'une offre sur mesure",
    description: "Analyse approfondie des besoins. Description des solutions proposées. Délais et estimation budgétaire.",
    Icon: FileTextIcon,
  },
  {
    number: "03",
    title: "Convention d'étude",
    description: "Définition des termes et conditions du projet afin d'établir un cadre clair pour toutes les parties impliquées.",
    Icon: HandshakeIcon,
  },
  {
    number: "04",
    title: "Réalisation du projet",
    description: "Sélection d'intervenant(s) compétent(s). Concrétisation des solutions convenues. Communication régulière avec le client.",
    Icon: WrenchIcon,
  },
  {
    number: "05",
    title: "Clôture et accompagnement",
    description: "Suite à la remise du livrable, Palm Junior Conseil s'engage sur une période de garantie afin de vous assurer la qualité de notre prestation.",
    Icon: SealCheckIcon,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function StudyProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="study-process"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-gray-light)" }}
    >
      <div className="section-wrapper">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Notre méthodologie
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl text-gray-dark">
            Déroulé d&rsquo;une étude
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-dark/55 leading-relaxed">
            Un processus structuré pour transformer votre vision en résultat concret.
          </p>
        </div>

        {/* Steps — timeline verticale centrée desktop, liste mobile */}
        <div className="relative mx-auto max-w-3xl">
          {/* Ligne verticale décorative */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ backgroundColor: "var(--color-brand-dark)", opacity: 0.1 }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const { Icon } = step;

              return (
                <motion.div
                  key={step.number}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease }}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Contenu gauche — desktop pair */}
                  <div className={`hidden md:flex md:w-1/2 md:pr-10 ${isEven ? "md:justify-end" : "md:invisible"}`}>
                    {isEven && <StepCard step={step} Icon={Icon} align="right" />}
                  </div>

                  {/* Nœud central */}
                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-sm"
                      style={{ borderColor: "var(--color-brand-dark)" }}
                    >
                      <span className="text-sm font-extrabold text-brand-dark">{step.number}</span>
                    </div>
                  </div>

                  {/* Contenu droit — desktop impair */}
                  <div className={`hidden md:flex md:w-1/2 md:pl-10 ${!isEven ? "md:justify-start" : "md:invisible"}`}>
                    {!isEven && <StepCard step={step} Icon={Icon} align="left" />}
                  </div>

                  {/* Mobile — toujours à droite du nœud */}
                  <div className="flex-1 md:hidden">
                    <StepCard step={step} Icon={Icon} align="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  Icon,
  align,
}: {
  step: (typeof steps)[number];
  Icon: React.ElementType;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group max-w-sm rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${align === "right" ? "text-right" : "text-left"}`}
    >
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark ${align === "right" ? "ml-auto" : ""}`}>
        <Icon size={18} weight="duotone" className="text-white" />
      </div>
      <h3 className="text-sm font-bold text-gray-dark leading-snug mb-1.5">{step.title}</h3>
      <p className="text-xs text-gray-dark/55 leading-relaxed">{step.description}</p>
    </div>
  );
}
