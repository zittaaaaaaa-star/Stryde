import BrandNavigation from "@/components/BrandNavigation";
import PatentHero from "@/components/PatentHero";
import FloorTileProducts from "@/components/FloorTileProducts";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import PatentBenefits from "@/components/PatentBenefits";
import LicensingContact from "@/components/LicensingContact";
import BrandFooter from "@/components/BrandFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <PatentHero />
      <FloorTileProducts />
      <TechnologyShowcase />
      <PatentBenefits />
      <LicensingContact />
      <BrandFooter />
    </div>
  );
}
