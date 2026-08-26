import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Palm Junior Conseil : éditeur, hébergeur, propriété intellectuelle et informations de contact.",
  robots: { index: false },
};

const sections = [
  {
    id: "editeur",
    title: "Éditeur du site",
    content: [
      "Le site est accessible à l'adresse www.palmjuniorconseil.fr et est édité par :",
      "**Palm Junior Conseil (PJC)**",
      "**Forme juridique :** Association régie par la loi du 1er juillet 1901",
      "**Siège social :** 214 avenue Francis Tonner, 06150 Cannes La Bocca",
      "**SIRET :** 10892947200018",
      "**APE :** 94.99Z",
      "**Adresse électronique :** palmjuniorconseil@gmail.com",
      "**Site internet :** www.palmjuniorconseil.fr",
      "**Responsable de la publication :** Madame Ava ROSSET, en sa qualité de Présidente de l'association.",
    ],
  },
  {
    id: "hebergement",
    title: "Hébergement",
    content: [
      "Le site www.palmjuniorconseil.fr est hébergé par : **OVH Cloud**",
      "**Siège social :** 2 rue Kellermann, 59100 Roubaix, France",
      "**Site internet :** https://www.ovhcloud.com/fr/",
    ],
  },
  {
    id: "conception",
    title: "Conception et développement",
    content: [
      "Le site a été conçu et développé par Monsieur [Alexis ROSSET](https://www.linkedin.com/in/alexis-rosset06/).",
    ],
  },
  {
    id: "activite",
    title: "Activité",
    content: [
      "Palm Junior Conseil est une association étudiante loi 1901 spécialisée dans les industries culturelles et créatives, proposant des services en communication, production multimédia, conception ludique, événementiel et étude de publics.",
    ],
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu publié sur ce site, incluant notamment les textes, graphismes, logos, images et logiciels, est la propriété exclusive de Palm Junior Conseil ou fait l'objet d'une autorisation d'usage régulièrement consentie à son profit et est protégé par le droit de la propriété intellectuelle. Toute reproduction, distribution ou modification sans autorisation écrite préalable est strictement interdite.",
    ],
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    content: [
      "Palm Junior Conseil met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut en garantir l'exhaustivité. L'association ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou des liens hypertextes qui y figurent.",
    ],
  },
  {
    id: "contact",
    title: "Informations de contact",
    content: [
      "**Email :** palmjuniorconseil@gmail.com",
      "**Adresse :** Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca",
    ],
  },
];

function renderContent(text: string) {
  return text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).map((part, i) => {
    const link = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (link) return <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-brand-dark underline hover:text-brand">{link[1]}</a>;
    const bold = part.match(/^\*\*(.*?)\*\*$/);
    if (bold) return <strong key={i} className="font-semibold text-gray-dark">{bold[1]}</strong>;
    return part;
  });
}

export default function MentionsLegalesPage() {
  return (
    <div className="section-wrapper py-14 lg:py-20">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
          Mentions légales
        </h1>
        <p className="mt-3 text-sm text-gray-dark/55 leading-relaxed max-w-xl">
          Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
        </p>
      </div>

      {/* Two-column layout: sidebar nav + content */}
      <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">

        {/* Sticky sidebar nav — desktop only */}
        <aside className="hidden lg:block">
          <nav className="sticky top-8 space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm text-gray-dark/50 hover:text-brand-dark py-1.5 transition-colors leading-snug"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`py-8 ${index < sections.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <h2 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-4">
                {section.title}
              </h2>
              <div className="space-y-2.5">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-sm text-gray-dark/75 leading-relaxed">
                    {renderContent(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
