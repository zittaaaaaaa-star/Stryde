import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Zap } from "lucide-react";
import cityImage from "@assets/generated_images/Smart_city_walkway_project_c6642101.png";
import eventImage from "@assets/generated_images/Brand_activation_event_project_e9465273.png";

export default function SectorCards() {
  const sectors = [
    {
      title: "Smart Cities and Buildings",
      icon: Building2,
      image: cityImage,
      description: "Sustainable energy solutions for urban environments",
    },
    {
      title: "Brand Activations and Events",
      icon: Zap,
      image: eventImage,
      description: "Create memorable interactive experiences",
    },
  ];

  return (
    <section id="sectors" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium mb-2">
            WHAT SECTOR ARE YOU FROM?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden h-[400px] hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => console.log(`${sector.title} clicked`)}
              data-testid={`card-sector-${index}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${sector.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>

              <div className="relative h-full flex flex-col items-center justify-center text-center p-8 text-white">
                <sector.icon className="h-16 w-16 mb-4 opacity-90" />
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl mb-4">
                  {sector.title}
                </h3>
                <p className="text-white/90 mb-6 max-w-md">{sector.description}</p>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid={`button-explore-sector-${index}`}
                >
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
