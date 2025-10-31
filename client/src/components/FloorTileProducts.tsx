import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid3x3, ShoppingCart } from "lucide-react";

export default function FloorTileProducts() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const product = {
    name: "Energy Harvesting Floor Tiles",
    description: "Revolutionary hexagonal floor tiles that convert footsteps into electrical power using REWOD technology.",
    dimensions: "10 inches × 10 inches, Hexagonal",
    mechanicalStructure: [
      {
        component: "Top Plate",
        specs: "Recycled PVC sheet 12×12 (ex. Vinyl flooring)",
        purpose: "Durable foot surface"
      },
      {
        component: "Layering",
        specs: "EVA or neoprene foam pad 12×12",
        purpose: "Cushioning and energy transfer layer"
      },
      {
        component: "Base Plate",
        specs: "Aluminum sheet 12×12",
        purpose: "Support and holds electrodes"
      },
      {
        component: "Springs",
        specs: "4 medium-tension compression springs",
        purpose: "Adds mechanical return force"
      },
      {
        component: "Rubber Gaskets",
        specs: "Seals the liquid microcell",
        purpose: "Prevents leaks from the REWOD"
      },
      {
        component: "Fasteners",
        specs: "Bolts, Nuts, Spacers",
        purpose: "Holds layers together securely while allowing small vertical motion"
      }
    ],
    applications: "Smart Buildings • Public Spaces • High Traffic Areas"
  };

  const handleBuyClick = () => {
    // TODO: Integrate with ve hub when ready
    console.log("Buy button clicked - ve hub integration pending");
  };

  return (
    <section id="products" className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-tiles-title">
            Floor Tiles
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-tiles">
            Energy Harvesting Floor Tiles
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-tiles-description">
            Hexagonal tiles engineered to transform every step into clean energy using advanced REWOD technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-12 border border-border">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-2xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Grid3x3 className="h-8 w-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-sm font-medium text-foreground/70">
                    Dimensions: {product.dimensions}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-lg">Mechanical & Structural Components</h4>
                <div className="grid gap-4">
                  {product.mechanicalStructure.map((item, idx) => (
                    <div key={idx} className="bg-muted/20 rounded-lg p-4 border border-border/50">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground mb-1">
                            {item.component}
                          </h5>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.specs}
                          </p>
                          <p className="text-xs text-foreground/60 italic">
                            {item.purpose}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground font-medium tracking-wide mb-6">
                  Applications: {product.applications}
                </p>
                <Button
                  size="lg"
                  onClick={handleBuyClick}
                  data-testid="button-buy-tiles"
                  className="w-full sm:w-auto"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-3xl p-12 text-center border border-border">
          <h3 className="text-3xl font-semibold mb-4" data-testid="heading-tiles-custom-solutions">
            Custom Installation Solutions
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Need help with large-scale deployments, custom configurations, or technical specifications? 
            Our engineering team is ready to design the perfect energy harvesting solution for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-contact-tiles"
            >
              Contact Engineering Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
