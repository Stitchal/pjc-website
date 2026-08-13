import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous contacter",
};

export default function NousContacterPage() {
  return (
    <div className="section-wrapper py-6 lg:py-10 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left: info */}
        <div className="space-y-6 lg:space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 lg:mb-6 leading-tight">
              Parlons de votre projet
            </h1>
            <p className="text-base lg:text-lg text-gray-dark leading-relaxed">
              Vous avez un projet, une question ou souhaitez en savoir plus sur nos prestations ? Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <div
            className="rounded-3xl border border-gray-200 p-6 lg:p-8 shadow-sm"
            style={{ backgroundColor: "var(--color-gray-light)" }}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-brand-dark mb-2">Besoin d'aide ?</h2>
            <p className="text-gray-dark mb-5 text-sm">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>

            <div className="space-y-3.5 lg:space-y-4">
              <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-brand shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                    ADRESSE
                  </p>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    Campus Georges Méliès<br />
                    214 avenue Francis Tonner<br />
                    06150 Cannes La Bocca
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-brand shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                    EMAIL
                  </p>
                  <a
                    href="mailto:palmjuniorconseil@gmail.com"
                    className="text-brand hover:underline text-sm font-medium block"
                  >
                    palmjuniorconseil@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-bold text-brand-dark mb-5 lg:mb-6">Prise de contact</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="prenom">
                  Prénom
                </label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Votre prénom"
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="nom">
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre.email@example.com"
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="telephone">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="+33 X XX XX XX XX"
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                  style={{ backgroundColor: "var(--color-gray-light)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="source">
                Comment avez-vous connu Palm Junior Conseil ?
              </label>
              <select
                id="source"
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="Recommandation">Recommandation</option>
                <option value="Recherche Google">Recherche Google</option>
                <option value="Réseaux sociaux">Réseaux sociaux</option>
                <option value="Via le campus Georges Méliès">Via le campus Georges Méliès</option>
                <option value="Événement / Salon">Événement / Salon</option>
                <option value="Ancien client">Ancien client</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="sujet">
                Sujet
              </label>
              <input
                id="sujet"
                type="text"
                placeholder="Demande de devis / Question..."
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-dark mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-dark outline-none transition-all focus:border-brand resize-none"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--color-brand-dark)" }}
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
