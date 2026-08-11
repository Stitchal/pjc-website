import Link from "next/link";

export default function CtaBanner() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "3rem 0" }}>
      <div className="section-wrapper">
        <div
          style={{
            borderRadius: "1.25rem",
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.1875rem", color: "#333333", lineHeight: 1.55, maxWidth: "540px", margin: "0 auto" }}>
            Un projet en tête ? Nos{" "}
            <strong style={{ fontWeight: 700 }}>équipes</strong>, sont à votre
            écoute pour vous accompagner
          </p>

          <div style={{ marginTop: "1.75rem" }}>
            <Link
              href="/nous-contacter"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                border: "2px solid #60042b",
                padding: "0.75rem 1.75rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#60042b",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Contactez-nous
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
