"use client";

import AppImage from "@/components/AppImage";
import Link from "next/link";
import NavBar from "@/components/NavBar";
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

  const fadeDown = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "var(--color-brand-dark)", minHeight: "100svh" }}
    >
      {/* Background image — subtle zoom-in on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <AppImage
          src="/assets/images/campus-hero.png"
          alt="Campus Georges Méliès"
          fill
          loading="eager"
          className="object-cover object-right-bottom"
          style={{ opacity: 0.75 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
      </motion.div>

      {/* Navbar — slides down */}
      <motion.div className="relative z-50" {...fadeDown(0.1)}>
        <NavBar variant="hero" />
      </motion.div>

      {/* Hero content */}
      <div
        className="relative z-10 section-wrapper py-16 flex items-center"
        style={{ minHeight: "calc(100svh - 80px)" }}
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
              href="/nous-contacter"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white no-underline transition-all hover:bg-brand-light hover:shadow-lg active:scale-95"
            >
              Démarrer un projet
            </Link>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Plaquette_PJC.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold no-underline transition-all hover:bg-white/90 hover:shadow-lg active:scale-95"
              style={{ color: "var(--color-brand-dark)" }}
            >
              Notre plaquette commerciale
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
