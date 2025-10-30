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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse-energy" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Piezoelectricity</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-accent/20">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">REWOD</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Patent Protected</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent" data-testid="heading-hero">
            STRYDE your energy.
            <br />
            <span className="text-muted-foreground">Revolutionary Power.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal pt-8" data-testid="text-hero-description">
            STRYDE: Revolutionary energy harvesting patents transforming wasted energy into power through Piezoelectricity and REWOD technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-base px-8 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              data-testid="button-hero-products"
            >
              Explore Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 border-2 border-primary/50 text-primary hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
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