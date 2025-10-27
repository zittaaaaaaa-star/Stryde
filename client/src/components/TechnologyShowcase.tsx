import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Droplets } from "lucide-react";

export default function TechnologyShowcase() {
  const technologies = [
    {
      icon: Zap,
      name: "Piezoelectricity",
      tagline: "Mechanical energy into electrical power",
      description: "Our piezoelectric patent converts mechanical stress, vibrations, and pressure into usable electrical energy with unprecedented efficiency. This technology transforms everyday movements and forces into clean power.",
      applications: [
        "Smart flooring systems",
        "Wearable devices",
        "Industrial machinery",
        "Infrastructure monitoring"
      ]
    },
    {
      icon: Droplets,
      name: "REWOD Technology",
      tagline: "Liquid manipulation for power generation",
      description: "Revolutionary Reverse Electrowetting on Dielectric technology that generates electrical power from fluid movement and surface interactions. A groundbreaking approach to energy harvesting through liquid dynamics.",
      applications: [
        "Microfluidic devices",
        "Lab-on-chip systems",
        "Rainwater capture",
        "Ocean energy"
      ]
    }
  ];

  return (
    <section id="technologies" className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-technologies-title">
            Patent Portfolio
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-technologies">
            Two revolutionary technologies
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-technologies-description">
            Each patent represents breakthrough innovations in energy harvesting, 
            ready for commercial licensing and integration.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                data-testid={`section-technology-${index}`}
              >
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="h-16 w-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8">
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  
                  <h3 className="text-4xl font-semibold mb-3 tracking-tight">{tech.name}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {tech.tagline}
                  </p>
                  <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                    {tech.description}
                  </p>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">
                      KEY APPLICATIONS
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {tech.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                          <span className="text-sm text-foreground/80">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
