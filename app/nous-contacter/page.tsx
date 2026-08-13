import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous contacter",
};

export default function NousContacterPage() {
  return (
    <div className="section-wrapper py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-gray-dark leading-relaxed mb-10">
            Vous avez un projet, une question ou souhaitez en savoir plus sur nos prestations ? Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
          </p>

          <div className="space-y-6">
            {[
              { label: "Email", value: "contact@palmjuniorconseil.fr", icon: "✉️" },
              { label: "Localisation", value: "Campus Georges Méliès, Cannes", icon: "📍" },
              { label: "LinkedIn", value: "Palm Junior Conseil", icon: "💼" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-0.5">{label}</p>
                  <p className="text-gray-dark font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">Envoyer un message</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-dark mb-2" htmlFor="prenom">
                  Prénom
                </label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Jean"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-dark outline-none transition-all focus:border-brand focus:ring-2"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-dark mb-2" htmlFor="nom">
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Dupont"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-dark mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jean.dupont@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-dark mb-2" htmlFor="sujet">
                Sujet
              </label>
              <input
                id="sujet"
                type="text"
                placeholder="Demande de devis / Question..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-dark mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-dark outline-none transition-all focus:border-brand resize-none"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-4 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--color-brand-dark)" }}
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
