import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(120deg, #60042b 0%, #7a1540 50%, #3d0018 100%)",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="section-wrapper relative" style={{ zIndex: 10, paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "600px" }}>
          <h1
            className="font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Palm Junior Conseil
            <span style={{ fontWeight: 400 }}>, une Junior spécialisée dans </span>
            les Industries Culturelles et Créatives
          </h1>

          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/plaquette"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                border: "2px solid white",
                backgroundColor: "white",
                padding: "0.75rem 1.75rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#60042b",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Notre plaquette commerciale
            </Link>
          </div>
        </div>
      </div>

      {/* Geometric diagonal cut — bottom */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "auto" }}
          preserveAspectRatio="none"
        >
          <path d="M0 80L1440 0V80H0Z" fill="#f1f1f1" />
        </svg>
      </div>
    </section>
  );
}
