"use client";

import Image from "next/image";

const partners = [
  { name: "Campus des Métiers et des Qualifications d'Excellence", src: "/assets/partners/cmqe.png", width: 160, height: 64 },
  { name: "Université Côte d'Azur", src: "/assets/partners/universite-cote-azur.png", width: 160, height: 64 },
  { name: "Pépite Méditerranée", src: "/assets/partners/pepite.png", width: 160, height: 64 },
  { name: "Junior-Entreprises", src: "/assets/partners/cnje.png", width: 120, height: 64 },
];

export default function PartnersSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", padding: "3rem 0" }}>
      <div className="section-wrapper">
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#333333" }}>
          Ils nous soutiennent
        </h2>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={partner.name}
              style={{ opacity: 0.6, filter: "grayscale(100%)", transition: "all 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.6";
                (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)";
              }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
