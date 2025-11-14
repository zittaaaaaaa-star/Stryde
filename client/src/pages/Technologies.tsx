import BrandNavigation from "@/components/BrandNavigation";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import BrandFooter from "@/components/BrandFooter";

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <TechnologyShowcase />
      <BrandFooter />
    </div>
  );
}
