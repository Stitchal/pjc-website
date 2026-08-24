import type { Metadata } from "next";
import { MapPin, Envelope } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Nous contacter",
};

export default function NousContacterPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-stretch">
      <div className="w-full section-wrapper py-0 flex items-stretch">
        <div className="w-full grid lg:grid-cols-2 gap-0 rounded-none lg:rounded-3xl overflow-hidden my-10 shadow-xl">

          {/* ── Colonne gauche — brand dark ── */}
          <div
            className="flex flex-col justify-between p-8 lg:p-12 text-white"
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

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} weight="bold" className="text-white" />
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
                  <Envelope size={18} weight="bold" className="text-white" />
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

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="prenom" label="Prénom" type="text" placeholder="Sophie" />
                <Field id="nom" label="Nom" type="text" placeholder="Martin" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="email" label="Email" type="email" placeholder="sophie@example.com" />
                <Field id="telephone" label="Téléphone" type="tel" placeholder="+33 6 00 00 00 00" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-dark/60 uppercase tracking-wider mb-2" htmlFor="source">
                  Comment nous avez-vous connus ?
                </label>
                <select
                  id="source"
                  defaultValue=""
                  className="w-full border-0 border-b-2 border-gray-200 bg-transparent pb-2 text-sm text-gray-dark outline-none transition-colors focus:border-brand-dark appearance-none cursor-pointer"
                >
                  <option value="" disabled>Sélectionnez une option</option>
                  <option value="Recommandation">Recommandation</option>
                  <option value="Recherche Google">Recherche Google</option>
                  <option value="Réseaux sociaux">Réseaux sociaux</option>
                  <option value="Via le campus Georges Méliès">Via le campus Georges Méliès</option>
                  <option value="Événement / Salon">Événement / Salon</option>
                  <option value="Ancien client">Ancien client</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <Field id="sujet" label="Sujet" type="text" placeholder="Demande de devis, question..." />

              <div>
                <label className="block text-xs font-semibold text-gray-dark/60 uppercase tracking-wider mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet..."
                  className="w-full border-0 border-b-2 border-gray-200 bg-transparent pb-2 text-sm text-gray-dark outline-none transition-colors focus:border-brand-dark resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-brand-dark)" }}
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="block text-xs font-semibold text-gray-dark/60 uppercase tracking-wider mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border-0 border-b-2 border-gray-200 bg-transparent pb-2 text-sm text-gray-dark outline-none transition-colors focus:border-brand-dark placeholder:text-gray-400"
      />
    </div>
  );
}
