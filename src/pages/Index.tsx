
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import MissionValuesSection from "../components/sections/MissionValuesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ResourcesSection from "../components/sections/ResourcesSection";
import CTASection from "../components/sections/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionValuesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
