import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Palm Junior Conseil (PJC) | Industries Culturelles et Créatives",
  description:
    "Palm Junior Conseil est une Junior-Entreprise étudiante spécialisée dans les Industries Culturelles et Créatives, basée à Cannes. Communication, production audiovisuelle, game design, événementiel et étude de publics à tarifs compétitifs.",
  openGraph: {
    title: "Palm Junior Conseil | Industries Culturelles et Créatives",
    description:
      "Transformez vos idées en réussites culturelles et créatives. Le talent de nos étudiants, au service de votre projet, à tarifs compétitifs.",
    url: "https://www.palmjuniorconseil.fr",
  },
};
import IntroCard from "@/components/home/IntroCard";
import StudyProcessSection from "@/components/home/StudyProcessSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import PartnersSection from "@/components/home/PartnersSection";
import CtaStrip from "@/components/CtaStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudyProcessSection />
      <IntroCard />
      <ServicesGrid />
      <PartnersSection />
      <CtaStrip />
    </>
  );
}
