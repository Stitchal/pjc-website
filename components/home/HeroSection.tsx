"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section
      className="relative overflow-hidden text-white -mt-20"
      style={{ backgroundColor: "var(--color-brand-dark)", minHeight: "100svh" }}
    >
      {/* Background image — subtle zoom-in on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <Image
          src="/assets/images/campus-hero.png"
          alt="Campus Georges Méliès"
          fill
          loading="eager"
          className="object-cover object-right-bottom"
          style={{ opacity: 0.75 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
      </motion.div>

      {/* Hero content */}
      <div
        className="relative z-10 section-wrapper py-16 flex items-center"
        style={{ minHeight: "100svh" }}
      >
        <div className="max-w-2xl">

          {/* Headline — staggered line groups */}
          <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl mb-4">
            <motion.span className="block" {...fadeUp(0.25)}>
              <span className="font-bold">Transformez vos idées</span>{" "}
              <span className="font-normal">en réussites</span>
            </motion.span>
            <motion.span className="block" {...fadeUp(0.4)}>
              <span className="font-normal">culturelles et créatives</span>
            </motion.span>
            <motion.span className="block" {...fadeUp(0.55)}>
              <span className="font-normal">à </span>
              <span className="font-bold">tarifs compétitifs</span>
              <span className="font-normal"> grâce à </span>
              <span className="font-bold">Palm&nbsp;Junior&nbsp;Conseil</span>
            </motion.span>
          </h1>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            {...fadeUp(0.65)}
          >
            <Link
              href="/Plaquette_PJC.pdf"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white no-underline transition-all hover:bg-brand-light hover:shadow-lg active:scale-95"
            >
              Notre plaquette commerciale
            </Link>
            <a
              href="/nous-contacter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold no-underline transition-all hover:bg-white/90 hover:shadow-lg active:scale-95"
              style={{ color: "var(--color-brand-dark)" }}
            >
              Démarrer un projet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
