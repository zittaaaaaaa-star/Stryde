import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function BrandNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" data-testid="icon-logo" />
            <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">
              Harness we Technology
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-license"
            >
              License Patents
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2" data-testid="mobile-menu">
            <button
              onClick={() => scrollToSection("technologies")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2"
              data-testid="button-mobile-license"
            >
              License Patents
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
