import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

const sections = [
  {
    title: "Responsable du traitement",
    content: [
      "Le responsable du traitement des données personnelles collectées sur ce site est :",
      "**Palm Junior Conseil (PJC)**",
      "**Adresse :** 214 avenue Francis Tonner, 06150 Cannes La Bocca",
      "**Email :** palmjuniorconseil@gmail.com",
    ],
  },
  {
    title: "Type de données collectées",
    content: [
      "Nous collectons uniquement les informations nécessaires à la prise de contact (nom, adresse email, téléphone, message).",
    ],
  },
  {
    title: "Finalité de la collecte des données",
    content: [
      "Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux messages envoyés par les utilisateurs. Aucune autre exploitation commerciale n'est effectuée avec ces données.",
    ],
  },
  {
    title: "Base légale du traitement",
    content: [
      "Le traitement des données se base sur le consentement explicite de l'utilisateur. En soumettant le formulaire de contact, l'utilisateur accepte que ses données soient utilisées pour répondre à sa demande.",
    ],
  },
  {
    title: "Durée de conservation des données",
    content: [
      "Les données collectées via le formulaire de contact sont conservées le temps nécessaire pour traiter la demande et au maximum 1 an après l'échange.",
    ],
  },
  {
    title: "Droits des utilisateurs",
    content: [
      "Conformément au RGPD, les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de leurs données. Pour exercer ces droits, ils peuvent envoyer un email à palmjuniorconseil@gmail.com.",
    ],
  },
  {
    title: "Destinataires des données",
    content: [
      "Les données collectées sont accessibles uniquement aux membres de Palm Junior Conseil responsables de répondre aux demandes via le formulaire de contact. Aucune donnée n'est partagée avec des tiers sans l'accord préalable des utilisateurs.",
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

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section-wrapper py-16 lg:py-24">
      <div className="mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-gray-dark leading-relaxed">
          Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
        </p>
        <p className="text-sm text-gray-dark/60 mt-4">
          Dernière mise à jour : août 2026
        </p>
      </div>

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
