"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  Gem,
  FileCheck2,
  Rocket,
  PackageCheck,
} from "lucide-react";
import type { FC, SVGProps } from "react";

type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: number | string }>;

interface Step {
  number: string;
  title: string;
  description: string;
  icon: IconComponent;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Prise de contact",
    description:
      "Compréhension des besoins, objectifs et contraintes. Mise en place d'une compréhension mutuelle.",
    icon: Users as IconComponent,
  },
  {
    number: "02",
    title: "Construction d'une offre sur mesure",
    description:
      "Analyse approfondie des besoins. Description des solutions proposées. Délais et estimation budgétaire.",
    icon: Gem as IconComponent,
  },
  {
    number: "03",
    title: "Convention d'étude",
    description:
      "Définition des termes et conditions du projet afin d'établir un cadre clair pour toutes les parties impliquées.",
    icon: FileCheck2 as IconComponent,
  },
  {
    number: "04",
    title: "Réalisation du projet",
    description:
      "Sélection d'intervenant(s) compétent(s). Concrétisation des solutions convenues. Communication régulière avec le client.",
    icon: Rocket as IconComponent,
  },
  {
    number: "05",
    title: "Clôture et accompagnement",
    description: "Suite à la remise du livrable, Palm Junior Conseil s'engage sur une période de garantie afin de vous assurer la qualité de notre prestation.",
    icon: PackageCheck as IconComponent,
  },
];

export default function StudyProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Observe each step for reveal animation
    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll-driven line progress
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Start growing line when section enters viewport, finish when section is fully scrolled
      const scrolled = viewportHeight - sectionTop;
      const total = sectionHeight + viewportHeight * 0.3;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="study-process"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-gray-light)" }}
    >
      {/* Subtle decorative palm leaf shapes in background */}
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full opacity-[0.04]"
        style={{ backgroundColor: "var(--color-brand-dark)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-32 h-72 w-72 rounded-full opacity-[0.03]"
        style={{ backgroundColor: "var(--color-brand)" }}
      />

      <div className="section-wrapper" ref={sectionRef}>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-brand)" }}
          >
            Notre méthodologie
          </p>
          <h2
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--color-gray-dark)" }}
          >
            Déroulé d&rsquo;une étude
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-500 leading-relaxed">
            Un processus structuré pour transformer votre vision en résultat concret.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line — background track */}
          <div
            className="absolute left-6 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor: "var(--color-brand-dark)",
              opacity: 0.1,
            }}
          />
          {/* Vertical line — animated progress */}
          <div
            className="absolute left-6 top-0 w-0.5 md:left-1/2 md:-translate-x-1/2 transition-none"
            style={{
              backgroundColor: "var(--color-brand-dark)",
              height: `${lineProgress * 100}%`,
              opacity: 0.6,
            }}
          />

          {steps.map((step, index) => {
            const isVisible = visibleSteps.has(index);
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`
                  relative flex items-start gap-6 pb-16 last:pb-0
                  md:gap-0
                  transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${isVisible ? 100 : 0}ms` }}
              >
                {/* ── Mobile layout: icon left, content right ── */}
                {/* ── Desktop layout: alternating sides ── */}

                {/* Content card — desktop left side */}
                <div
                  className={`
                    hidden md:flex md:w-1/2 md:pr-12
                    ${isEven ? "md:justify-end" : "md:invisible"}
                  `}
                >
                  {isEven && (
                    <StepCard
                      step={step}
                      Icon={Icon}
                      align="right"
                      isVisible={isVisible}
                    />
                  )}
                </div>

                {/* Center node */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`
                      flex h-12 w-12 items-center justify-center rounded-full
                      border-[3px] shadow-lg
                      transition-all duration-500
                      ${isVisible ? "scale-100" : "scale-0"}
                    `}
                    style={{
                      backgroundColor: "var(--color-white)",
                      borderColor: "var(--color-brand-dark)",
                    }}
                  >
                    <span
                      className="text-sm font-extrabold"
                      style={{ color: "var(--color-brand-dark)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card — desktop right side */}
                <div
                  className={`
                    hidden md:flex md:w-1/2 md:pl-12
                    ${!isEven ? "md:justify-start" : "md:invisible"}
                  `}
                >
                  {!isEven && (
                    <StepCard
                      step={step}
                      Icon={Icon}
                      align="left"
                      isVisible={isVisible}
                    />
                  )}
                </div>

                {/* Mobile content — always right of the node */}
                <div className="flex-1 md:hidden">
                  <StepCard
                    step={step}
                    Icon={Icon}
                    align="left"
                    isVisible={isVisible}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Step card sub-component ── */
function StepCard({
  step,
  Icon,
  align,
  isVisible,
}: {
  step: Step;
  Icon: IconComponent;
  align: "left" | "right";
  isVisible: boolean;
}) {
  return (
    <div
      className={`
        group relative max-w-sm rounded-2xl bg-white p-6 shadow-md
        border border-transparent
        transition-all duration-500
        hover:shadow-xl hover:-translate-y-1
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${align === "right" ? "text-right" : "text-left"}
      `}
      style={{
        transitionDelay: isVisible ? "200ms" : "0ms",
      }}
    >
      {/* Hover accent border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: "2px solid var(--color-brand-light)",
        }}
      />

      {/* Icon */}
      <div
        className={`
          mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl
          transition-transform duration-300 group-hover:scale-110
          ${align === "right" ? "ml-auto" : ""}
        `}
        style={{ backgroundColor: "var(--color-brand-dark)" }}
      >
        <Icon width={20} height={20} className="text-white" />
      </div>

      <h3
        className="text-base font-bold leading-snug md:text-lg"
        style={{ color: "var(--color-gray-dark)" }}
      >
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        {step.description}
      </p>
    </div>
  );
}
