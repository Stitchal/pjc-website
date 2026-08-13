import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "var(--color-brand-dark)", minHeight: "100svh" }}
    >
      {/* Background image — bottom-right, blended */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/campus-hero.png"
          alt="Campus Georges Méliès"
          fill
          priority
          className="object-cover object-right-bottom"
          style={{ opacity: 0.38 }}
        />
        {/* Left fade so text area stays clean */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, var(--color-brand-dark) 38%, transparent 72%)",
          }}
        />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, var(--color-brand-dark) 0%, var(--color-brand-mid) 50%, var(--color-brand-deep) 100%)",
            opacity: 0.45,
          }}
        />
      </div>

      {/* ── Embedded Navbar ── */}
      <div className="relative z-50">
        <NavBar variant="hero" />
      </div>

      {/* ── Hero content ── */}
      <div
        className="relative z-10 section-wrapper pb-32 pt-10 flex items-end"
        style={{ minHeight: "calc(100svh - 96px)" }}
      >
        <div className="max-w-xl">
          <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="font-bold">Palm Junior Conseil,</span>{" "}
            <span className="font-normal">une Junior spécialisée dans </span>
            <span className="font-bold">les Industries Culturelles et Créatives</span>
          </h1>

          <div className="mt-8">
            <Link
              href="/plaquette"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold no-underline transition-all hover:bg-white/90 hover:shadow-lg"
              style={{ color: "var(--color-brand-dark)" }}
            >
              Notre plaquette commerciale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
