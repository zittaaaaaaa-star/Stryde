import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footprints, Grid3x3, ShoppingCart, Battery, Package, Zap } from "lucide-react";
import BrandNavigation from "@/components/BrandNavigation";
import BrandFooter from "@/components/BrandFooter";

export default function ProductsPage() {
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
    {
      id: "holder",
      name: "Holder",
      icon: Package,
      description:
        "Advanced holder that generates power from every step while providing exceptional comfort.",
      features: [
        "Antimicrobial breathable mesh top layer",
        "Graphene-infused PU foam for heat conduction",
        "Hydrophobic coating - sweat resistant & easy to clean",
      ],
      applications: "Athletes • Daily Wear • Medical",
      buyUrl: "#",
    },
  ];

  const bundleBuyUrl = "https://portal.veinternational.org/buybuttons/us0110240/btn/shoe-insoles-power-bank-25/";

  return (
    <div className="min-h-screen">
      <BrandNavigation />
      <section className="relative py-16 sm:py-20 bg-muted/20 overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Zap className="h-24 w-24 text-primary" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 rotate-45">
          <Zap className="h-16 w-16 text-accent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <Badge
              variant="outline"
              className="mb-3"
              data-testid="badge-products-title"
            >
              Products
            </Badge>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 tracking-tight"
              data-testid="heading-products"
            >
              Energy Harvesting Solutions
            </h2>
            <p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              data-testid="text-products-description"
            >
              Transform everyday movement into clean, sustainable energy with our
              innovative products.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg p-4 border border-border flex flex-col w-full max-w-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <product.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 break-words">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {product.description}
                </p>

                {product.dimensions && (
                  <p className="text-xs font-medium text-foreground/70 mb-2">
                    Dimensions: {product.dimensions}
                  </p>
                )}

                {product.features && (
                  <div className="space-y-1.5 mb-3 flex-1">
                    <h4 className="font-semibold text-xs">Key Features</h4>
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5"
                        data-testid={`feature-${product.id}-${idx}`}
                      >
                        <div className="h-1 w-1 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                        <span
                          className="text-xs text-foreground/80 leading-relaxed"
                          data-testid={`text-feature-${product.id}-${idx}`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-border/50 mt-auto">
                  <p className="text-xs text-muted-foreground font-medium tracking-wide mb-3">
                    {product.applications}
                  </p>
                  <Button
                    size="sm"
                    onClick={() => handleBuyClick(product.buyUrl)}
                    data-testid={`button-buy-${product.id}`}
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-3 w-3" />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-8 sm:mt-12">
            <div className="text-center mb-6">
              <Badge
                variant="outline"
                className="mb-3"
                data-testid="badge-bundle-title"
              >
                Bundle Deal
              </Badge>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2" data-testid="heading-bundle">
                Shoe Insoles + Power Bank Bundle
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
                Get the complete energy harvesting experience with our exclusive bundle.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card rounded-lg p-5 sm:p-6 border border-border">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Shoe Insoles + Power Bank
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      The perfect combination for on-the-go energy generation and storage. 
                      Generate power with every step and store it for when you need it most.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-semibold text-sm">Bundle Includes</h5>
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-foreground/80 leading-relaxed">
                      1x Shoe Insoles with energy harvesting technology
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-foreground/80 leading-relaxed">
                      1x High-capacity Power Bank
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1 w-1 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-foreground/80 leading-relaxed">
                      Seamless integration for maximum efficiency
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground font-medium tracking-wide mb-3">
                    Personal Energy Independence • Long-distance Travel • Emergency Preparedness
                  </p>
                  <Button
                    size="sm"
                    onClick={() => handleBuyClick(bundleBuyUrl)}
                    data-testid="button-buy-bundle"
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-3 w-3" />
                    Buy Bundle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandFooter />
    </div>
  );
}
