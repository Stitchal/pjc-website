import type { Metadata } from "next";
import AppImage from "@/components/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos prestations",
};

const prestations = [
  {
    slug: "communication",
    title: "Communication",
    tagline: "Propulsez votre visibilité et votre communication",
    image: "/assets/images/prest-communication.jpg",
    icon: "/assets/icons/prestations/presta-communication-bordeaux-illustration.png",
    iconWhite: "/assets/icons/prestations/presta-communication-white-illustration.png",
    items: [
      "Conception plans de communication",
      "Déploiement communication interne",
      "Création graphique & identité visuelle",
    ],
    dark: false,
  },
  {
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    tagline: "Valorisez vos contenus et vos productions",
    image: "/assets/images/prest-audiovisuel.jpg",
    icon: "/assets/icons/prestations/presta-prod-audiovisuelle violet.png",
    iconWhite: "/assets/icons/prestations/presta-prod-audiovisuelle blanc.png",
    items: [
      "Production audiovisuelle & montage",
      "Production et réalisation de reportages écrits ou multimédias",
      "Production de contenus audio/podcasts",
      "Rédaction web et storytelling",
    ],
    dark: true,
  },
  {
    slug: "game-design",
    title: "Game Design",
    tagline: "Réinventez l'expérience par le jeu",
    image: "/assets/images/prest-gamedesign.jpeg",
    icon: "/assets/icons/prestations/presta-game-design-bordeaux-illustration.png",
    iconWhite: "/assets/icons/prestations/presta-game-design-blanc-illustration.png",
    items: [
      "Conception de jeux de société",
      "Conception de jeux vidéo",
      "Prototypage",
      "Création d'un GDD",
    ],
    dark: false,
  },
  {
    slug: "evenementiel",
    title: "Événementiel",
    tagline: "Fédérez vos publics par l'événementiel",
    image: "/assets/images/prest-evenementiel.jpg",
    icon: "/assets/icons/prestations/presta-evenementiel-bordeaux-illustration.png",
    iconWhite: "/assets/icons/prestations/presta-evenementiel-white-illustration.png",
    items: [
      "Conception, direction artistique & management de projet",
      "Coordination logistique & animation",
    ],
    dark: true,
  },
  {
    slug: "etude-de-publics",
    title: "Étude de publics",
    tagline: "Décryptez l'impact de vos projets et de vos publics",
    image: "/assets/images/prest-etudes.jpg",
    icon: "/assets/icons/prestations/presta-etude-public-bordeaux-illustration.png",
    iconWhite: "/assets/icons/prestations/presta-etude-public-white-illustration.png",
    items: [
      "Étude des publics (enquêtes & questionnaires)",
      "Réalisation d'interviews & enquêtes de terrain",
    ],
    dark: false,
  },
];

export default function NosPrestation() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section-wrapper py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight">
          Découvrez nos <span className="text-brand-dark">prestations</span>
        </h1>
        <div className="flex justify-center mt-3">
          <AppImage
            src="/assets/icons/title-underline-bordeaux.png"
            alt=""
            width={420}
            height={18}
            className="w-64 md:w-80 lg:w-96 h-auto"
            aria-hidden="true"
          />
        </div>
        <p className="mt-6 text-gray-dark/60 max-w-xl mx-auto text-base leading-relaxed">
          Des étudiants spécialisés dans les Industries Culturelles et Créatives, au service de vos projets.
        </p>
      </section>

      {/* ── Prestations ── */}
      {prestations.map((p, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={p.slug}
            className={p.dark ? "py-16 lg:py-20" : "py-16 lg:py-20"}
            style={p.dark ? { backgroundColor: "var(--color-brand-dark)" } : { backgroundColor: "#fff" }}
          >
            <div className="section-wrapper">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!imageLeft ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
                  <AppImage
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Icon + title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: p.dark ? "rgba(255,255,255,0.15)" : "var(--color-brand-dark)" }}
                    >
                      <AppImage
                        src={p.dark ? p.iconWhite : p.iconWhite}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h2 className={`text-2xl md:text-3xl font-bold ${p.dark ? "text-white" : "text-gray-dark"}`}>
                        {p.title}
                      </h2>
                      <p className={`text-sm italic ${p.dark ? "text-white/60" : "text-gray-dark/50"}`}>
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="mt-6 space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: p.dark ? "rgba(255,255,255,0.5)" : "var(--color-brand-dark)" }}
                        />
                        <span className={`text-sm leading-relaxed ${p.dark ? "text-white/80" : "text-gray-dark/70"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-gray-light py-16">
        <div className="section-wrapper text-center">
          <p className="text-lg font-medium text-gray-dark mb-6">
            Un projet en tête ? Nos équipes sont à votre écoute pour{" "}
            <strong className="text-brand-dark">vous accompagner</strong>
          </p>
          <Link
            href="/nous-contacter"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white no-underline transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "var(--color-brand-dark)" }}
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </main>
  );
}
