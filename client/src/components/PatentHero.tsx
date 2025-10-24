import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Droplets } from "lucide-react";

export default function PatentHero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTechnologies = () => {
    const element = document.getElementById("technologies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-sm" data-testid="badge-tagline">
            Revolutionary Energy Harvesting Patents
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" data-testid="heading-hero">
            Transform Wasted Energy Into Power
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-description">
            License our cutting-edge patents in Piezoelectricity, Thermoelectricity, and REWOD technology. 
            Pioneer the future of sustainable energy harvesting.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-hero-license"
            >
              License Our Patents
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToTechnologies}
              data-testid="button-hero-learn"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-3 p-6" data-testid="card-technology-piezo">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Piezoelectricity</h3>
              <p className="text-sm text-muted-foreground text-center">
                Convert mechanical stress into electrical energy
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6" data-testid="card-technology-thermo">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Thermoelectricity</h3>
              <p className="text-sm text-muted-foreground text-center">
                Harness temperature differences for power generation
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6" data-testid="card-technology-rewod">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">REWOD</h3>
              <p className="text-sm text-muted-foreground text-center">
                Reverse electrowetting for energy recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
