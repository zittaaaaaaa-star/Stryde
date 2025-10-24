import BrandNavigation from "@/components/BrandNavigation";
import PatentHero from "@/components/PatentHero";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import PatentBenefits from "@/components/PatentBenefits";
import LicensingContact from "@/components/LicensingContact";
import BrandFooter from "@/components/BrandFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <PatentHero />
      <TechnologyShowcase />
      <PatentBenefits />
      <LicensingContact />
      <BrandFooter />
    </div>
  );
}
