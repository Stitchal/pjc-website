import type { Metadata } from "next";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Découvrez l'équipe de Palm Junior Conseil, les étudiants et membres qui composent notre association sur le Campus Georges Méliès à Cannes.",
  openGraph: {
    title: "Notre équipe | Palm Junior Conseil",
    description:
      "Les étudiants et membres qui composent Palm Junior Conseil, association étudiante spécialisée dans les Industries Culturelles et Créatives.",
  },
};

type Member = {
  firstName: string;
  lastName: string;
  role: string;
  image: string | null;
  linkedin: string | null;
};

const members: Member[] = [
  { firstName: "Ava", lastName: "ROSSET", role: "Présidente", image: null, linkedin: "https://www.linkedin.com/in/ava-rosset-897a71257/" },
  { firstName: "Audrey", lastName: "REQUIER", role: "Trésorière", image: null, linkedin: "https://www.linkedin.com/in/audrey-requier/" },
  { firstName: "Noélyne", lastName: "JOURDAN", role: "Secrétaire générale", image: null, linkedin: "https://www.linkedin.com/in/noelyne-jourdan/" },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Photo */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200">
        {member.image && (
          <Image
            src={member.image}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            className="object-cover object-top"
          />
        )}
      </div>

      {/* Infos */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-gray-dark text-base leading-tight">
            {member.firstName} {member.lastName}
          </p>
          <p className="text-sm text-gray-dark/55 mt-1">{member.role}</p>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.firstName} ${member.lastName}`}
            className="text-[#0A66C2] hover:opacity-75 transition-opacity shrink-0 mt-0.5"
          >
            <FaLinkedin size={22} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function NotreEquipePage() {
  return (
    <main>
      <section className="section-wrapper py-16">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-dark">
            Notre{" "}
            <span className="text-brand-dark">équipe</span>
          </h1>
          <div className="flex justify-center mt-3">
            <Image
              src="/assets/icons/title-underline-bordeaux.png"
              alt=""
              width={420}
              height={18}
              className="w-48 md:w-64 h-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
