export default function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-sm">Products</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-foreground transition-colors" data-testid="link-footer-commercial">
                  Commercial Series
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors" data-testid="link-footer-residential">
                  Residential Series
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors" data-testid="link-footer-industrial">
                  Industrial Series
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Technologies</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#technologies" className="hover:text-foreground transition-colors" data-testid="link-footer-piezo">
                  Piezoelectricity
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
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-foreground transition-colors" data-testid="link-footer-licensing">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Stryde. All rights reserved.
          </p>
          <p className="text-sm font-semibold text-foreground">
            Stryde
          </p>
        </div>
      </div>
    </footer>
  );
}
