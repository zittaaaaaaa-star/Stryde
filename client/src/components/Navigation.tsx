import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-heading font-bold text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-home"
            >
              PowerStep
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("technology")}
              data-testid="link-technology"
            >
              Technology
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              data-testid="link-projects"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sectors")}
              data-testid="link-sectors"
            >
              Sectors
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact"
            >
              Contact
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("technology")}
              data-testid="link-technology-mobile"
            >
              Technology
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("projects")}
              data-testid="link-projects-mobile"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("sectors")}
              data-testid="link-sectors-mobile"
            >
              Sectors
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact-mobile"
            >
              Contact
            </Button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started-mobile"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
