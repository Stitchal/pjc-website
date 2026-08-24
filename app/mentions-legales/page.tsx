import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const sections = [
  {
    title: "1. Éditeur du site",
    content: [
      "Le présent site est édité par l'association **Palm Junior Conseil**, Junior-Conseil de l'École Supérieure des Arts et Techniques (ESAT) — Campus Georges Méliès.",
      "**Dénomination sociale :** Palm Junior Conseil",
      "**Statut juridique :** Association loi 1901",
      "**Adresse du siège social :** Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca",
      "**Email :** palmjuniorconseil@gmail.com",
    ],
  },
  {
    title: "2. Directeur de la publication",
    content: [
      "Le directeur de la publication est le Président en exercice de Palm Junior Conseil.",
      "Pour toute question relative au contenu du site, vous pouvez le contacter à l'adresse suivante : palmjuniorconseil@gmail.com",
    ],
  },
  {
    title: "3. Hébergement",
    content: [
      "Le site est hébergé par /",
      "**Adresse :** /",
      "**Site web :** /",
    ],
  },
  {
    title: "4. Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de Palm Junior Conseil ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des contenus du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable et écrite de Palm Junior Conseil.",
      "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient est considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.",
    ],
  },
  {
    title: "5. Données personnelles",
    content: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés (loi « Informatique et Libertés »), vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données personnelles vous concernant.",
      "Pour exercer ces droits ou pour toute question relative au traitement de vos données, vous pouvez contacter Palm Junior Conseil à l'adresse : palmjuniorconseil@gmail.com",
      "Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre Politique de confidentialité.",
    ],
  },
  {
    title: "6. Cookies",
    content: [
      "Le site Palm Junior Conseil peut être amené à utiliser des cookies afin d'améliorer l'expérience utilisateur. Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site.",
      "Vous pouvez à tout moment désactiver l'utilisation des cookies en sélectionnant les paramètres appropriés de votre navigateur. Toutefois, cette désactivation pourrait empêcher l'utilisation de certaines fonctionnalités du site.",
    ],
  },
  {
    title: "7. Liens hypertextes",
    content: [
      "Le site peut contenir des liens vers des sites tiers. Palm Junior Conseil n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leur accessibilité.",
      "La création de liens hypertextes vers le site de Palm Junior Conseil est soumise à l'accord préalable et écrit de l'association.",
    ],
  },
  {
    title: "8. Limitation de responsabilité",
    content: [
      "Palm Junior Conseil s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, l'association ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
      "En conséquence, Palm Junior Conseil décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site, ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ou d'un accès non autorisé aux systèmes d'information.",
    ],
  },
  {
    title: "9. Droit applicable",
    content: [
      "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents sont ceux du ressort du siège social de Palm Junior Conseil, à savoir les juridictions de Nice (Alpes-Maritimes), sauf disposition légale contraire.",
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
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), voici les informations légales relatives au site de Palm Junior Conseil.
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
