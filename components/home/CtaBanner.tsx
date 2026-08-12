import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-white py-12">
      <div className="section-wrapper">
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 sm:p-12 text-center">
          <p className="text-lg text-gray-dark leading-relaxed max-w-xl mx-auto">
            Un projet en tête ? Nos{" "}
            <strong className="font-bold text-brand-dark">équipes</strong> sont à votre
            écoute pour vous accompagner
          </p>

          <div className="mt-7">
            <Link
              href="/nous-contacter"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-dark px-7 py-3 text-sm font-semibold text-brand-dark no-underline transition-all hover:bg-brand-dark hover:text-white"
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

