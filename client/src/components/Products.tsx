import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footprints, Grid3x3, ShoppingCart, Battery, Package } from "lucide-react";

export default function Products() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBuyClick = (buyUrl: string) => {
    if (buyUrl && buyUrl !== "#") {
      window.open(buyUrl, "_blank");
    }
  };

  const products = [
    {
      id: "floor-tiles-led",
      name: "Hexagon Floor Tiles (LED)",
      icon: Grid3x3,
      description:
        "Revolutionary hexagonal floor tiles that convert footsteps into electrical power using REWOD technology.",
      dimensions: "10 inches × 10 inches, Hexagonal",
      features: [
        "Recycled PVC Top Plate - Durable, eco-friendly surface repurposed from vinyl flooring; resists wear and provides stable foot traction.",
        "EVA / Neoprene Foam Layer - High-resilience cushioning for shock absorption and smooth energy transfer.",
        "Aluminum Base Plate - Lightweight structural backbone that anchors components and houses the electrode array.",
        "Tension Compression Springs - Adds mechanical return force, enhancing tactile feedback and motion responsiveness.",
        "Rubber Gasket System - Fully seals the liquid microcell chamber, preventing leaks and maintaining pressure consistency",
        "Precision Fastener Assembly - Rigid yet flexible connection allowing controlled vertical movement between layers.",
      ],
      applications: "Smart Buildings • Public Spaces • High Traffic Areas",
      buyUrl: "https://portal.veinternational.org/buybuttons/us0110240/btn/hexagon-floor-tiles-led-21/",
    },
    {
      id: "floor-tiles",
      name: "Hexagon Floor Tiles (Solar)",
      icon: Grid3x3,
      description:
        "Revolutionary hexagonal floor tiles that convert footsteps into electrical power using REWOD technology.",
      dimensions: "10 inches × 10 inches, Hexagonal",
      features: [
        "Recycled PVC Top Plate - Durable, eco-friendly surface repurposed from vinyl flooring; resists wear and provides stable foot traction.",
        "EVA / Neoprene Foam Layer - High-resilience cushioning for shock absorption and smooth energy transfer.",
        "Aluminum Base Plate - Lightweight structural backbone that anchors components and houses the electrode array.",
        "Tension Compression Springs - Adds mechanical return force, enhancing tactile feedback and motion responsiveness.",
        "Rubber Gasket System - Fully seals the liquid microcell chamber, preventing leaks and maintaining pressure consistency",
        "Precision Fastener Assembly - Rigid yet flexible connection allowing controlled vertical movement between layers.",
      ],
      applications: "Smart Buildings • Public Spaces • High Traffic Areas",
      buyUrl: "https://portal.veinternational.org/buybuttons/us0110240/btn/hexagon-floor-tiles-solar-41/",
    },
    {
      id: "power-bank",
      name: "Power Bank",
      icon: Battery,
      description:
        "Compact and efficient power storage solution that pairs perfectly with our energy harvesting products.",
      features: [
        "High-capacity lithium-ion battery",
        "Fast charging capabilities",
        "Multiple device compatibility",
        "Portable and lightweight design",
      ],
      applications: "Mobile Charging • Emergency Backup • Outdoor Activities",
      buyUrl: "https://portal.veinternational.org/buybuttons/us0110240/btn/power-bank-66/",
    },
    {
      id: "shoe-insoles",
      name: "Shoe Insoles",
      icon: Footprints,
      description:
        "Advanced shoe insoles that generate power from every step while providing exceptional comfort.",
      features: [
        "Antimicrobial breathable mesh top layer",
        "Graphene-infused PU foam for heat conduction",
        "Hydrophobic coating - sweat resistant & easy to clean",
      ],
      applications: "Athletes • Daily Wear • Medical",
      buyUrl: "https://portal.veinternational.org/buybuttons/us0110240/btn/shoe-insoles-69/",
    },
  ];

  const bundleBuyUrl = "https://portal.veinternational.org/buybuttons/us0110240/btn/shoe-insoles-power-bank-25/";

  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6"
            data-testid="badge-products-title"
          >
            Products
          </Badge>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-tight"
            data-testid="heading-products"
          >
            Energy Harvesting Solutions
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            data-testid="text-products-description"
          >
            Transform everyday movement into clean, sustainable energy with our
            innovative products.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl p-6 sm:p-8 border border-border flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <product.icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 break-words">
                    {product.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>

              {product.dimensions && (
                <p className="text-xs sm:text-sm font-medium text-foreground/70 mb-4">
                  Dimensions: {product.dimensions}
                </p>
              )}

              {product.features && (
                <div className="space-y-2 mb-4 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Key Features</h4>
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2"
                      data-testid={`feature-${product.id}-${idx}`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm text-foreground/80 leading-relaxed"
                        data-testid={`text-feature-${product.id}-${idx}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-border/50 mt-auto">
                <p className="text-xs text-muted-foreground font-medium tracking-wide mb-4">
                  {product.applications}
                </p>
                <Button
                  size="default"
                  onClick={() => handleBuyClick(product.buyUrl)}
                  data-testid={`button-buy-${product.id}`}
                  className="w-full"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-24">
          <div className="text-center mb-8 sm:mb-12">
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6"
              data-testid="badge-bundle-title"
            >
              Bundle Deal
            </Badge>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4" data-testid="heading-bundle">
              Shoe Insoles + Power Bank Bundle
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">
              Get the complete energy harvesting experience with our exclusive bundle.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 sm:p-8 lg:p-12 border border-border">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Package className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
                    Shoe Insoles + Power Bank
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    The perfect combination for on-the-go energy generation and storage. 
                    Generate power with every step and store it for when you need it most.
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h5 className="font-semibold text-base sm:text-lg">Bundle Includes</h5>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    1x Shoe Insoles with energy harvesting technology
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    1x High-capacity Power Bank
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Seamless integration for maximum efficiency
                  </span>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-border/50">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide mb-4 sm:mb-6">
                  Personal Energy Independence • Long-distance Travel • Emergency Preparedness
                </p>
                <Button
                  size="default"
                  onClick={() => handleBuyClick(bundleBuyUrl)}
                  data-testid="button-buy-bundle"
                  className="w-full"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Bundle
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-border mt-12 sm:mt-16">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4"
            data-testid="heading-custom-solutions"
          >
            Questions About Our Products?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
            Have questions about sizing, bulk orders, or custom configurations?
            Our team is ready to help you find the perfect energy harvesting
            solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              size="default"
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
