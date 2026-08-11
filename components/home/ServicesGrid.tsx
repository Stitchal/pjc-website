"use client";


import { Megaphone, Clapperboard, Gamepad2, PartyPopper, Search } from "lucide-react";
import type { FC, SVGProps } from "react";


type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: number | string }>;

const services: { icon: IconComponent; title: string; description: string }[] = [
  { icon: Megaphone as IconComponent, title: "Communication", description: "Propulsez votre visibilité et votre communication" },
  { icon: Clapperboard as IconComponent, title: "Production audiovisuelle", description: "Valorisez vos contenus et vos productions" },
  { icon: Gamepad2 as IconComponent, title: "Game Design", description: "Réinventez l'expérience par le jeu" },
  { icon: PartyPopper as IconComponent, title: "Événementiel", description: "Fédérez vos publics par l'événementiel" },
  { icon: Search as IconComponent, title: "Étude de publics", description: "Décryptez l'impact de vos projets et de vos publics" },
];

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "4rem 0" }}>
      <div className="section-wrapper">
        <h2 style={{ fontSize: "1.625rem", fontWeight: 700, color: "#333333" }}>
          Nos prestations
        </h2>

        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="services-grid"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ffffff",
                  padding: "1.5rem",
                  border: "1px solid #e5e7eb",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    display: "flex",
                    height: "2.75rem",
                    width: "2.75rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.75rem",
                    backgroundColor: "#60042b",
                    color: "#ffffff",
                  }}
                >
                  <Icon width={20} height={20} />
                </div>

                <h3 style={{ marginTop: "1rem", fontSize: "0.9375rem", fontWeight: 600, color: "#333333" }}>
                  {service.title}
                </h3>
                <p style={{ marginTop: "0.375rem", fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
