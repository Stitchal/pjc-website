import HeroSection from "@/components/home/HeroSection";
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
