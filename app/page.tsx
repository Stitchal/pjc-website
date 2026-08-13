import HeroSection from "@/components/home/HeroSection";
import IntroCard from "@/components/home/IntroCard";
import StudyProcessSection from "@/components/home/StudyProcessSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import CtaBanner from "@/components/home/CtaBanner";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudyProcessSection />
      <IntroCard />
      <ServicesGrid />
      <CtaBanner />
      <PartnersSection />
    </>
  );
}
