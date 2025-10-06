import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import StatsSection from "@/components/StatsSection";
import ProjectGallery from "@/components/ProjectGallery";
import ClientLogos from "@/components/ClientLogos";
import SectorCards from "@/components/SectorCards";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <StatsSection />
      <ProjectGallery />
      <ClientLogos />
      <SectorCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
