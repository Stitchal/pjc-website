import type { Metadata } from "next";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import { EnvelopeIcon } from "@phosphor-icons/react/dist/ssr/Envelope";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contactez Palm Junior Conseil pour démarrer votre projet. Notre équipe basée sur le Campus Georges Méliès à Cannes vous répond rapidement.",
  openGraph: {
    title: "Nous contacter | Palm Junior Conseil",
    description:
      "Vous avez un projet dans les Industries Culturelles et Créatives ? Contactez Palm Junior Conseil, notre équipe vous répond rapidement.",
  },
};

export default function NousContacterPage() {
  return (
    <>
      <div className="py-10">
        <div className="w-full section-wrapper py-0">
          <div className="w-full grid lg:grid-cols-2 gap-0 rounded-none lg:rounded-3xl overflow-hidden shadow-xl border border-gray-200">

            {/* ── Colonne gauche — brand dark ── */}
            <div
              className="flex flex-col p-8 lg:p-12 text-white"
              style={{ backgroundColor: "var(--color-brand-dark)" }}
            >
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Parlons de<br />votre projet
                </h1>
                <p className="text-white/70 text-base leading-relaxed max-w-sm">
                  Vous avez un projet ou une question ? Notre équipe vous répond rapidement.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPinIcon size={18} weight="bold" className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Adresse</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Campus Georges Méliès<br />
                      214 avenue Francis Tonner<br />
                      06150 Cannes La Bocca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <EnvelopeIcon size={18} weight="bold" className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Email</p>
                    <a
                      href="mailto:palmjuniorconseil@gmail.com"
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      palmjuniorconseil@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Colonne droite — formulaire ── */}
            <div className="bg-white flex flex-col justify-center p-8 lg:p-12">
              <h2 className="text-xl font-bold text-brand-dark mb-8">Prise de contact</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>

      {/* ── Carte pleine largeur ── */}
      <div className="section-wrapper pb-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-dark">Rencontrez notre équipe à Cannes</h2>
          <p className="text-sm text-gray-dark/50 mt-1">Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.7!2d7.0089!3d43.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce81b6b0e97f25%3A0x4e6e8e2e2e2e2e2e!2s214%20Avenue%20Francis%20Tonner%2C%2006150%20Cannes!5e0!3m2!1sfr!2sfr!4v1700000000000"
            width="100%"
            height="320"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Palm Junior Conseil"
          />
        </div>
      </div>
    </>
  );
}
