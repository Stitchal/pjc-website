import Image from "next/image";

const services = [
  {
    icon: "/assets/icons/prestations/presta-communication-white-illustration.png",
    title: "Communication",
    description: "Propulsez votre visibilité et votre communication",
  },
  {
    icon: "/assets/icons/prestations/presta-prod-audiovisuelle blanc.png",
    title: "Production audiovisuelle",
    description: "Valorisez vos contenus et vos productions",
  },
  {
    icon: "/assets/icons/prestations/presta-game-design-blanc-illustration.png",
    title: "Game Design",
    description: "Réinventez l'expérience par le jeu",
  },
  {
    icon: "/assets/icons/prestations/presta-evenementiel-white-illustration.png",
    title: "Événementiel",
    description: "Fédérez vos publics par l'événementiel",
  },
  {
    icon: "/assets/icons/prestations/presta-etude-public-white-illustration.png",
    title: "Étude de publics",
    description: "Décryptez l'impact de vos projets et de vos publics",
  },
];

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <div className="rounded-2xl bg-white p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-dark">
        <Image src={service.icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-dark">{service.title}</h3>
      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="section-wrapper">
        <h2 className="text-2xl font-bold text-gray-dark">Nos prestations</h2>

        {/* Ligne 1 — 3 cartes */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s) => <ServiceCard key={s.title} service={s} />)}
        </div>

        {/* Ligne 2 — 2 cartes centrées */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((s) => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  );
}
