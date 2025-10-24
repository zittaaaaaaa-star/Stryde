import { Zap } from "lucide-react";

export default function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Harness we Technology</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Leading the future of energy harvesting with patented innovations in 
              Piezoelectricity, Thermoelectricity, and REWOD technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#technologies" className="hover:text-foreground transition-colors" data-testid="link-footer-piezo">
                  Piezoelectricity
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-foreground transition-colors" data-testid="link-footer-thermo">
                  Thermoelectricity
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-foreground transition-colors" data-testid="link-footer-rewod">
                  REWOD
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-foreground transition-colors" data-testid="link-footer-benefits">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-footer-licensing">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} Harness we Technology. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
