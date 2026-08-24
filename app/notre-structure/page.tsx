import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre structure",
};

const steps = [
  {
    number: "01",
    title: "Prise de contact",
    description: "Compréhension des besoins, objectifs et contraintes.",
  },
  {
    number: "02",
    title: "Offre sur mesure",
    description: "Analyse approfondie, solutions proposées, délais et budget.",
  },
  {
    number: "03",
    title: "Convention d'étude",
    description: "Cadre clair et conditions définies pour toutes les parties.",
  },
  {
    number: "04",
    title: "Réalisation",
    description: "Intervenant(s) sélectionné(s), communication régulière.",
  },
  {
    number: "05",
    title: "Clôture",
    description: "Livrable remis, période de garantie qualité assurée.",
  },
];

const strengths = [
  {
    icon: "/assets/icons/des-intervenants-de-qualite.png",
    title: "Des intervenants de qualité",
    description:
      "Nos étudiants sont rigoureusement sélectionnés selon leurs compétences pour donner vie à votre projet. L'étudiant travaille sous l'encadrement et le suivi régulier de l'équipe de la junior.",
  },
  {
    icon: "/assets/icons/une-equipe-competente.png",
    title: "Une équipe compétente",
    description:
      "L'association est composée d'une équipe d'élèves issus des différentes formations du campus. Nous avons pour missions les relations clients, l'implication auprès des étudiants, ainsi que le développement et la pérennisation de la structure.",
  },
];

export default function NotreJuniorPage() {
  return (
    <main>

      {/* ── Section 1 : Présentation ── */}
      <section className="section-wrapper py-16 lg:py-24">
        {/* Headline */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-dark">
            Le talent de{" "}
            <span className="text-brand-dark">nos étudiants,</span>
            <br />
            au service de{" "}
            <span className="text-brand-dark">votre projet.</span>
          </h1>
          <div className="flex justify-center mt-3">
            <Image
              src="/assets/icons/title-underline-bordeaux.png"
              alt=""
              width={420}
              height={18}
              className="w-64 md:w-80 lg:w-96 h-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/assets/images/photo-mandat.jpeg"
              alt="Membres de Palm Junior Conseil"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
          </div>

          {/* Text */}
          <div className="space-y-5 text-gray-dark leading-relaxed">
            <p>
              Créée en 2025 en tant qu'association loi 1901,{" "}
              <strong className="text-brand-dark">Palm Junior Conseil</strong>{" "}
              représente les formations de l'Université Côte d'Azur basées sur le campus Georges Méliès à Cannes.
            </p>
            <p>
              Au coeur d'un écosystème unique réunissant 1200 étudiants, chercheurs et professionnels, nous sommes la seule Junior du département spécialisée dans les Industries Culturelles et Créatives.
            </p>
            <p>
              Grâce à cette{" "}
              <strong className="text-brand-dark">synergie de talents</strong>,
              nos étudiants mettent toute leur créativité et leur expertise à votre service pour concrétiser vos projets avec des solutions sur-mesure et des tarifs attractifs.
            </p>
            <p className="text-sm text-gray-dark/70">
              Les enseignements de notre école, à la pointe des dernières nouveautés en matière de recherche, grâce à l'accompagnement de nos professeurs-chercheurs et les équipements techniques de niveau professionnel mis à notre disposition, permettent à notre équipe de vous fournir les meilleures prestations.
            </p>
            <div className="pt-2">
              <a
                href="/Plaquette_PJC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-dark px-6 py-3 text-sm font-bold text-brand-dark no-underline transition-all hover:bg-brand-dark hover:text-white"
              >
                Notre plaquette commerciale
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 : Méthodologie ── */}
      <section className="bg-gray-light py-16 lg:py-20">
        <div className="section-wrapper">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-2">
            Notre méthodologie
          </h2>
          <p className="text-gray-dark/60 mb-12 max-w-xl">
            Un processus structuré pour transformer votre vision en résultat concret.
          </p>

          {/* Steps — horizontal scroll on mobile, row on desktop */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block absolute top-6 left-0 right-0 h-px"
              style={{ backgroundColor: "var(--color-brand-dark)", opacity: 0.15 }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col gap-3">
                  {/* Number bubble */}
                  <div
                    className="relative z-10 h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: "var(--color-brand-dark)" }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <p className="font-bold text-gray-dark text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-gray-dark/55 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3 : Atouts ── */}
      <section className="section-wrapper py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-brand-dark)" }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-dark/70 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas de page */}
        <div className="mt-16 text-center rounded-3xl p-10"
          style={{ backgroundColor: "var(--color-gray-light)" }}
        >
          <p className="text-lg font-medium text-gray-dark mb-6">
            Un projet en tête ? Nos équipes sont à votre écoute pour{" "}
            <strong className="text-brand-dark">vous accompagner</strong>
          </p>
          <Link
            href="/nous-contacter"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white no-underline transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-brand-dark)" }}
          >
            Contactez-nous
          </Link>
        </div>
      </section>

    </main>
  );
}
