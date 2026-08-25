import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const sections = [
  {
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
    title: "Hébergement",
    content: [
      "Le site www.palmjuniorconseil.fr est hébergé par : **OVH Cloud**",
      "**Siège social :** 2 rue Kellermann, 59100 Roubaix, France",
      "**Site internet :** https://www.ovhcloud.com/fr/",
    ],
  },
  {
    title: "Conception et développement",
    content: [
      "Le site a été conçu et développé par Monsieur Alexis ROSSET.",
    ],
  },
  {
    title: "Activité",
    content: [
      "Palm Junior Conseil est une association étudiante loi 1901 spécialisée dans les industries culturelles et créatives, proposant des services en communication, production multimédia, conception ludique, événementiel et étude de publics.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu publié sur ce site, incluant notamment les textes, graphismes, logos, images et logiciels, est la propriété exclusive de Palm Junior Conseil ou fait l'objet d'une autorisation d'usage régulièrement consentie à son profit et est protégé par le droit de la propriété intellectuelle. Toute reproduction, distribution ou modification sans autorisation écrite préalable est strictement interdite.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "Palm Junior Conseil met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut en garantir l'exhaustivité. L'association ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou des liens hypertextes qui y figurent.",
    ],
  },
  {
    title: "Informations de contact",
    content: [
      "**Email :** palmjuniorconseil@gmail.com",
      "**Adresse :** Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca",
    ],
  },
];

function renderContent(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-brand-dark">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="section-wrapper py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
          Mentions légales
        </h1>
        <p className="text-gray-dark leading-relaxed">
          Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
        </p>
        <p className="text-sm text-gray-dark/60 mt-4">
          Dernière mise à jour : août 2026
        </p>
      </div>

      {/* Sections */}
      <div className="divide-y divide-gray-200">
        {sections.map((section) => (
          <div key={section.title} className="py-8 first:pt-0">
            <h2 className="text-lg font-bold text-brand-dark mb-3">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-sm text-gray-dark leading-relaxed">
                  {renderContent(paragraph)}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
