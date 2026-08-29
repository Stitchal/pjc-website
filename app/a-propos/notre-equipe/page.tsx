import type { Metadata } from "next";
import Image from "next/image";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Découvrez l'équipe de Palm Junior Conseil, les étudiants et membres qui composent notre association sur le Campus Georges Méliès à Cannes.",
  openGraph: {
    title: "Notre équipe | Palm Junior Conseil",
    description:
      "Les étudiants et membres qui composent Palm Junior Conseil, association étudiante spécialisée dans les Industries Culturelles et Créatives.",
  },
};

export default function NotreEquipePage() {
  return (
    <main>
      {/* ── Section : En-tête ── */}
      <section className="section-wrapper py-16">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-dark">
            Notre{" "}
            <span className="text-brand-dark">équipe</span>
          </h1>
          <div className="flex justify-center mt-3">
            <Image
              src="/assets/icons/title-underline-bordeaux.png"
              alt=""
              width={420}
              height={18}
              className="w-48 md:w-64 h-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Placeholder */}
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4 rounded-3xl border border-gray-200 bg-gray-light">
          <p className="text-gray-dark/50 text-sm font-medium tracking-wider uppercase">
            À venir
          </p>
          <p className="text-gray-dark/40 text-sm max-w-sm">
            La présentation de l&apos;équipe sera bientôt disponible.
          </p>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
