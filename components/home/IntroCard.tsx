import Image from "next/image";

export default function IntroCard() {
  return (
    <section className="bg-gray-light py-16">
      <div className="section-wrapper">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text content */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-dark leading-snug">
                Innovez au cœur des{" "}
                <em className="not-italic text-brand-dark">
                  Industries Culturelles et Créatives
                </em>
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                Au cœur du campus Georges Méliès, écosystème entièrement dédié
                aux industries culturelles et créatives,{" "}
                <strong className="font-semibold text-gray-dark">
                  Palm Junior Conseil
                </strong>{" "}
                est une association à but pédagogique qui met la créativité de
                ses étudiants au service de votre projet.
              </p>
            </div>

            {/* Photo */}
            <div className="relative min-h-[280px]">
              <Image
                src="/assets/images/intro-card.jpg"
                alt="Étudiants Palm Junior Conseil"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

