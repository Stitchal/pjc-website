import Link from "next/link";

export default function CtaStrip() {
  return (
    <section
      className="pt-0 pb-16"
      style={{ backgroundColor: "var(--color-brand-mid)" }}
    >
      {/* Vague décorative en haut */}
      <div className="overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "100px" }}
        >
          <rect width="1440" height="100" fill="white" />
          {/* Couche 1 : vague lente et ample, foncée */}
          <path
            d="M0,60 C180,20 360,90 600,55 C840,20 1080,80 1440,35 L1440,100 L0,100 Z"
            fill="var(--color-brand-mid)"
            opacity="0.85"
          />
          {/* Couche 2 : vague plus rapide, brand-mid au premier plan */}
          <path
            d="M0,80 C120,45 300,100 520,68 C740,36 920,90 1140,58 C1280,38 1380,72 1440,62 L1440,100 L0,100 Z"
            fill="var(--color-brand-mid)"
          />
        </svg>
      </div>
      <div className="section-wrapper text-center text-white py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Prêt à concrétiser votre projet ?
        </h2>
        <p className="text-white/60 mb-8 text-base">
          Notre équipe vous accompagne de A à Z.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/nous-contacter"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold no-underline transition-all hover:bg-white/90 hover:shadow-lg active:scale-95"
            style={{ color: "var(--color-brand-dark)" }}
          >
            Demander un devis gratuit
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Plaquette_PJC.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white no-underline transition-all hover:border-white hover:bg-white/10 active:scale-95"
          >
            Notre plaquette commerciale
          </a>
        </div>
      </div>
    </section>
  );
}
