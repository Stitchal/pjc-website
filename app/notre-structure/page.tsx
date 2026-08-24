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
    description: "Compréhension des besoins, objectifs et contraintes. Mise en place d'une compréhension mutuelle.",
  },
  {
    number: "02",
    title: "Construction d'une offre sur mesure",
    description: "Analyse approfondie des besoins. Description des solutions proposées. Délais et estimation budgétaire.",
  },
  {
    number: "03",
    title: "Convention d'étude",
    description: "Définition des termes et conditions du projet afin d'établir un cadre clair pour toutes les parties impliquées.",
  },
  {
    number: "04",
    title: "Réalisation du projet",
    description: "Sélection d'intervenant(s) compétent(s). Concrétisation des solutions convenues. Communication régulière avec le client.",
  },
  {
    number: "05",
    title: "Clôture et accompagnement",
    description: "Suite à la remise du livrable, Palm Junior Conseil s'engage sur une période de garantie afin de vous assurer la qualité de notre prestation.",
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
      <section className="bg-gray-light py-16 lg:py-24">
        <div className="section-wrapper">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Notre méthodologie
          </h2>
          <p className="text-gray-dark/60 mb-12 max-w-xl">
            Un processus structuré pour transformer votre vision en résultat concret.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-200 group hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white mb-4"
                  style={{ backgroundColor: "var(--color-brand-dark)" }}
                >
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-dark/60 leading-relaxed">{step.description}</p>
              </div>
            ))}

            {/* Suivi constant — full width */}
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl p-6 text-white text-center"
              style={{ backgroundColor: "var(--color-brand-dark)" }}
            >
              <p className="text-base font-medium">
                Un <strong>suivi constant</strong> est maintenu avec les chefs de projet, à travers des{" "}
                <strong>points réguliers</strong>, afin de garantir le bon déroulement de la mission.
              </p>
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
