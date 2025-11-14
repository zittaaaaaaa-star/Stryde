import BrandNavigation from "@/components/BrandNavigation";
import PatentHero from "@/components/PatentHero";
import AboutUs from "@/components/AboutUs";
import MeetTheTeam from "@/components/MeetTheTeam";
import Products from "@/components/Products";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import PavegenInteractive from "@/components/PavegenInteractive";
import PatentBenefits from "@/components/PatentBenefits";
import LicensingContact from "@/components/LicensingContact";
import BrandFooter from "@/components/BrandFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <PatentHero />
      <AboutUs />
      <MeetTheTeam />
      <Products />
      <TechnologyShowcase />
      <PavegenInteractive />
      <PatentBenefits />
      <LicensingContact />
      <BrandFooter />
    </div>
  );
}
