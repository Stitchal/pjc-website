"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full border-0 border-b-2 border-gray-200 bg-transparent pb-2 text-sm text-gray-dark outline-none transition-colors focus:border-brand-dark placeholder:text-gray-400";

function Field({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
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
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData(e.currentTarget);

    // Honeypot — si rempli c'est un bot
    if (data.get("botcheck")) {
      setStatus("idle");
      return;
    }

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      name: `${data.get("prenom") ?? ""} ${data.get("nom") ?? ""}`.trim(),
      email: data.get("email"),
      phone: data.get("telephone"),
      subject: data.get("sujet"),
      source: data.get("source"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-6">
        <Field id="prenom" label="Prénom" type="text" placeholder="Votre prénom" required />
        <Field id="nom" label="Nom" type="text" placeholder="Votre nom" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field id="email" label="Email" type="email" placeholder="votre@email.com" required />
        <Field id="telephone" label="Téléphone" type="tel" placeholder="+33 6 00 00 00 00" />
      </div>

      <div>
        <label
          className="block text-xs font-semibold text-gray-dark/60 uppercase tracking-wider mb-2"
          htmlFor="source"
        >
          Comment nous avez-vous connus ?
        </label>
        <select
          id="source"
          name="source"
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

      <Field id="sujet" label="Sujet" type="text" placeholder="Objet de votre demande" required />

      <div>
        <label
          className="block text-xs font-semibold text-gray-dark/60 uppercase tracking-wider mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre projet ou votre demande..."
          required
          className="w-full border-0 border-b-2 border-gray-200 bg-transparent pb-2 text-sm text-gray-dark outline-none transition-colors focus:border-brand-dark resize-none placeholder:text-gray-400"
        />
      </div>

      {status === "success" && (
        <p className="text-sm font-semibold text-green-600">
          Message envoyé ! Nous vous répondrons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-500">
          Une erreur est survenue. Veuillez réessayer ou nous écrire directement par email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "var(--color-brand-dark)" }}
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
