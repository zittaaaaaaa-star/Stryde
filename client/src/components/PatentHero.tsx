
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function PatentHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-yellow-50 to-teal-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Piezoelectricity</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">REWOD</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Patent Protected</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none" data-testid="heading-hero">
            STRYDE towards
            <br />
            <span className="text-muted-foreground">
              <span className="sparkle-on-load">a cleaner tomorrow.</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-normal" data-testid="text-hero-description">
            STRYDE develops cutting-edge energy harvesting solutions powered by proprietary Piezoelectric and REWOD technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-base px-8"
              data-testid="button-hero-products"
            >
              Explore Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8"
              data-testid="button-hero-license"
            >
              License Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
