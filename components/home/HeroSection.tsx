import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "var(--color-brand-dark)", minHeight: "100svh" }}
    >
      {/* Background image — bottom-right, visible with text protection */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/campus-hero.png"
          alt="Campus Georges Méliès"
          fill
          priority
          className="object-cover object-right-bottom"
          style={{ opacity: 0.75 }}
        />
        {/* Soft left gradient fade for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent"
        />
      </div>

      {/* ── Embedded Navbar ── */}
      <div className="relative z-50">
        <NavBar variant="hero" />
      </div>

      {/* ── Hero content ── */}
      <div
        className="relative z-10 section-wrapper py-16 flex items-center"
        style={{ minHeight: "calc(100svh - 80px)" }}
      >
        <div className="max-w-2xl">
          <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="font-bold">Transformez vos idées</span>{" "}
            <span className="font-normal">en réussites culturelles et créatives à </span>{" "}
            <span className="font-bold">tarifs compétitifs</span>{" "}
            <span className="font-normal">grâce à</span>{" "}
            <span className="font-bold">Palm Junior Conseil</span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
