import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white min-h-[calc(100vh-68px)] min-h-[calc(100dvh-68px)] flex items-center"
      style={{
        background: "linear-gradient(120deg, var(--color-brand-dark) 0%, var(--color-brand-mid) 50%, var(--color-brand-deep) 100%)",
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
      <div className="section-wrapper relative z-10 pt-20 pb-24">
        <div className="max-w-2xl">
          <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl">
            Palm Junior Conseil
          </h1>
          <h2 className="font-normal leading-tight text-xl sm:text-2xl md:text-3xl">
            La Junior-Conseil spécialisée dans les Industries Culturelles et Créatives
          </h2>

          <div className="mt-10">
            <Link
              href="/plaquette"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-7 py-3 text-sm font-semibold text-brand-dark no-underline transition-all hover:bg-white/90"
            >
              Notre plaquette commerciale
            </Link>
          </div>
        </div>
      </div>

      {/* Geometric diagonal cut — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0 80L1440 0V80H0Z" className="fill-gray-light" />
        </svg>
      </div>
    </section>
  );
}

