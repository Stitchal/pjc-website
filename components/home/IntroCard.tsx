export default function IntroCard() {
  return (
    <section style={{ backgroundColor: "#f1f1f1", padding: "4rem 0" }}>
      <div className="section-wrapper">
        <div
          style={{
            overflow: "hidden",
            borderRadius: "1rem",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
            className="intro-grid"
          >
            {/* Text content */}
            <div style={{ padding: "2.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#333333",
                  lineHeight: 1.35,
                }}
              >
                Innovez au cœur des{" "}
                <em style={{ fontStyle: "normal", color: "#60042b" }}>
                  Industries Culturelles et Créatives
                </em>
              </h2>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.7 }}>
                Au cœur du campus Georges Méliès, écosystème entièrement dédié
                aux industries culturelles et créatives,{" "}
                <strong style={{ fontWeight: 600, color: "#333333" }}>
                  Palm Junior Conseil
                </strong>{" "}
                est une association à but pédagogique qui met la créativité de
                ses étudiants au service de votre projet.
              </p>
            </div>

            {/* Photo placeholder */}
            <div
              style={{
                backgroundColor: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "280px",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#9ca3af", fontStyle: "italic" }}>
                photo mandat
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
