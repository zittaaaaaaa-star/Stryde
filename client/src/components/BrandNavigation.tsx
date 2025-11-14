import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo_1763158009536.png";

export default function BrandNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navigateToPage = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => navigateToPage("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity" 
            data-testid="brand-logo"
          >
            <img 
              src={logoImage} 
              alt="STRYDE Logo" 
              className="h-12 w-12 rounded-full"
            />
            <span className="text-xl font-bold text-white" data-testid="text-brand-name">
              STRYDE
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateToPage("/products")}
              className="text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-nav-products"
            >
              Products
            </button>
            <button
              onClick={() => navigateToPage("/technologies")}
              className="text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-nav-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => navigateToPage("/interactive")}
              className="text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-nav-interactive"
            >
              Interactive
            </button>
            <button
              onClick={() => navigateToPage("/licensing")}
              className="text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-nav-licensing"
            >
              Licensing
            </button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => navigateToPage("/products")}
              data-testid="button-nav-buy"
            >
              Buy
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => navigateToPage("/products")}
              data-testid="button-mobile-buy"
            >
              Buy
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
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
              onClick={() => navigateToPage("/products")}
              className="block w-full text-left py-3 text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-mobile-products"
            >
              Products
            </button>
            <button
              onClick={() => navigateToPage("/technologies")}
              className="block w-full text-left py-3 text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-mobile-technologies"
            >
              Technologies
            </button>
            <button
              onClick={() => navigateToPage("/interactive")}
              className="block w-full text-left py-3 text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-mobile-interactive"
            >
              Interactive
            </button>
            <button
              onClick={() => navigateToPage("/licensing")}
              className="block w-full text-left py-3 text-sm text-white/80 hover:text-white transition-colors"
              data-testid="button-mobile-licensing"
            >
              Licensing
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
