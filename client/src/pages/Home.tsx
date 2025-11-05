import BrandNavigation from "@/components/BrandNavigation";
import PatentHero from "@/components/PatentHero";
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
      <Products />
      <TechnologyShowcase />
      <PavegenInteractive />
      <PatentBenefits />
      <LicensingContact />
      <BrandFooter />
    </div>
  );
}
