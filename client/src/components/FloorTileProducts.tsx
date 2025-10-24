import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Footprints, Building2, Factory } from "lucide-react";

export default function FloorTileProducts() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      icon: Building2,
      name: "Commercial Series",
      description: "High-traffic energy harvesting floor tiles for retail spaces, airports, and transit hubs.",
      features: [
        "Up to 5W per square meter",
        "500,000+ step durability",
        "Seamless integration"
      ],
      applications: "Retail • Airports • Transit"
    },
    {
      icon: Footprints,
      name: "Residential Series",
      description: "Elegant floor tiles that generate power from everyday movement in homes and offices.",
      features: [
        "Quiet operation",
        "Premium finishes",
        "Easy installation"
      ],
      applications: "Homes • Offices • Hotels"
    },
    {
      icon: Factory,
      name: "Industrial Series",
      description: "Heavy-duty energy harvesting tiles designed for warehouses and manufacturing facilities.",
      features: [
        "Extreme durability",
        "High load capacity",
        "Weather resistant"
      ],
      applications: "Warehouses • Factories • Logistics"
    },
    {
      icon: Layers,
      name: "Smart Building Series",
      description: "IoT-enabled floor tiles with real-time monitoring and analytics capabilities.",
      features: [
        "Real-time analytics",
        "Wireless connectivity",
        "Predictive maintenance"
      ],
      applications: "Smart Cities • Corporate • Research"
    }
  ];

  return (
    <section id="products" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-products-title">
            Products
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-products">
            Energy Harvesting Floor Tiles
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-products-description">
            Transform every step into sustainable energy. Our patented floor tiles capture kinetic energy 
            from footsteps and convert it into usable electricity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-10 border border-border hover:shadow-lg transition-all duration-300"
                data-testid={`card-product-${index}`}
              >
                <div className="flex flex-col gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <Icon className="h-7 w-7 text-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground font-medium tracking-wide">
                      {product.applications}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-3xl p-12 text-center border border-border">
          <h3 className="text-3xl font-semibold mb-4" data-testid="heading-custom-solutions">
            Custom Solutions Available
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Need a specialized solution? We offer custom floor tile designs tailored to your specific 
            requirements, integrating our patented technologies with your unique specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-contact-sales"
            >
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              data-testid="button-request-demo"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
