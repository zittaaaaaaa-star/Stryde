import BrandNavigation from "@/components/BrandNavigation";
import PatentBenefits from "@/components/PatentBenefits";
import LicensingContact from "@/components/LicensingContact";
import BrandFooter from "@/components/BrandFooter";

export default function LicensingPage() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <PatentBenefits />
      <LicensingContact />
      <BrandFooter />
    </div>
  );
}
