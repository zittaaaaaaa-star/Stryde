import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-500/10 via-yellow-500/10 to-teal-500/10 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <span className="text-xl font-semibold" data-testid="text-brand-name">
            STRYDE
          </span>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-benefits"
            >
              Licensing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection("products")}
              data-testid="button-nav-buy"
            >
              Buy
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => scrollToSection("products")}
              data-testid="button-mobile-buy"
            >
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden pb-4 pt-2 space-y-1"
            data-testid="mobile-menu"
          >
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-benefits"
            >
              Licensing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
