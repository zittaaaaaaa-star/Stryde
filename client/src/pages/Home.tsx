import BrandNavigation from "@/components/BrandNavigation";
import PatentHero from "@/components/PatentHero";
import AboutUs from "@/components/AboutUs";
import MeetTheTeam from "@/components/MeetTheTeam";
import PavegenInteractive from "@/components/PavegenInteractive";
import BrandFooter from "@/components/BrandFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <PatentHero />
      <AboutUs />
      <PavegenInteractive />
      <MeetTheTeam />
      <BrandFooter />
    </div>
  );
}
