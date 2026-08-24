"use client";

import AppImage from "@/components/AppImage";

const partners = [
  { name: "Campus des Métiers et des Qualifications d'Excellence", src: "/assets/partners/cmqe.png", width: 160, height: 64 },
  { name: "Université Côte d'Azur", src: "/assets/partners/universite-cote-azur.png", width: 160, height: 64 },
  { name: "Pépite Méditerranée", src: "/assets/partners/pepite.png", width: 160, height: 64 },
  { name: "Junior-Entreprises", src: "/assets/partners/cnje.png", width: 120, height: 64 },
];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-gray-200 py-12">
      <div className="section-wrapper">
        <h2 className="text-2xl font-bold text-gray-dark">
          Ils nous font confiance
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={partner.name}
              className="opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <AppImage
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

