import { Button } from "@/components/ui/button";

export default function PatentHero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none" data-testid="heading-hero">
            Stryde towards
            <br />
            <span className="text-muted-foreground">a cleaner tomorrow.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal" data-testid="text-hero-description">
            Revolutionary energy harvesting patents transforming wasted energy into power through 
            Piezoelectricity and REWOD technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="text-base px-8"
              data-testid="button-hero-products"
            >
              Explore Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
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
