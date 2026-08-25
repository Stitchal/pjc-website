import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

const sections = [
  {
    id: "responsable",
    title: "Responsable du traitement",
    content: [
      "Le responsable du traitement des données personnelles collectées sur ce site est :",
      "**Palm Junior Conseil (PJC)**",
      "**Adresse :** 214 avenue Francis Tonner, 06150 Cannes La Bocca",
      "**Email :** palmjuniorconseil@gmail.com",
    ],
  },
  {
    id: "donnees",
    title: "Type de données collectées",
    content: [
      "Nous collectons uniquement les informations nécessaires à la prise de contact (nom, adresse email, téléphone, message).",
    ],
  },
  {
    id: "finalite",
    title: "Finalité de la collecte des données",
    content: [
      "Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux messages envoyés par les utilisateurs. Aucune autre exploitation commerciale n'est effectuée avec ces données.",
    ],
  },
  {
    id: "base-legale",
    title: "Base légale du traitement",
    content: [
      "Le traitement des données se base sur le consentement explicite de l'utilisateur. En soumettant le formulaire de contact, l'utilisateur accepte que ses données soient utilisées pour répondre à sa demande.",
    ],
  },
  {
    id: "conservation",
    title: "Durée de conservation des données",
    content: [
      "Les données collectées via le formulaire de contact sont conservées le temps nécessaire pour traiter la demande et au maximum 1 an après l'échange.",
    ],
  },
  {
    id: "droits",
    title: "Droits des utilisateurs",
    content: [
      "Conformément au RGPD, les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de leurs données. Pour exercer ces droits, ils peuvent envoyer un email à palmjuniorconseil@gmail.com.",
    ],
  },
  {
    id: "destinataires",
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
      <strong key={i} className="font-semibold text-gray-dark">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section-wrapper py-14 lg:py-20">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-sm text-gray-dark/55 leading-relaxed max-w-xl">
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
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
