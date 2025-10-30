import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footprints, ShoppingCart } from "lucide-react";

export default function FloorTileProducts() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const product = {
    name: "Energy Harvesting Shoe Soles",
    description: "Advanced shoe insoles that generate power from every step while providing exceptional comfort.",
    features: [
      "Antimicrobial breathable mesh top layer",
      "Graphene-infused PU foam for heat conduction",
      "Hydrophobic coating - sweat resistant & easy to clean"
    ],
    applications: "Athletes • Daily Wear • Medical"
  };

  const handleBuyClick = () => {
    // TODO: Integrate with ve hub when ready
    console.log("Buy button clicked - ve hub integration pending");
  };

  return (
    <section id="products" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-products-title">
            Products
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-products">
            Energy Harvesting Shoe Soles
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-products-description">
            Advanced shoe insoles that generate power from every step while providing exceptional comfort and durability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-12 border border-border">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-2xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Footprints className="h-8 w-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Features</h4>
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <span className="text-foreground/80 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground font-medium tracking-wide mb-6">
                  Applications: {product.applications}
                </p>
                <Button
                  size="lg"
                  onClick={handleBuyClick}
                  data-testid="button-buy-shoe-soles"
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
          <h3 className="text-3xl font-semibold mb-4" data-testid="heading-custom-solutions">
            Questions About Our Product?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Have questions about sizing, bulk orders, or custom configurations? 
            Our team is ready to help you find the perfect energy harvesting solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-contact-sales"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
