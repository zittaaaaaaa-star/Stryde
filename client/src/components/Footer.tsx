import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary mb-4">
              PowerStep
            </h3>
            <p className="text-muted-foreground mb-4">
              Transforming footsteps into clean energy for a sustainable future.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Facebook")}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Twitter")}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("LinkedIn")}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Instagram")}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => scrollToSection("technology")}
                  data-testid="link-footer-technology"
                >
                  Technology
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => scrollToSection("projects")}
                  data-testid="link-footer-projects"
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => scrollToSection("sectors")}
                  data-testid="link-footer-sectors"
                >
                  Sectors
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => console.log("About")}
                  data-testid="link-footer-about"
                >
                  About Us
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => console.log("Case Studies")}
                  data-testid="link-footer-case-studies"
                >
                  Case Studies
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => console.log("Documentation")}
                  data-testid="link-footer-documentation"
                >
                  Documentation
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => console.log("Blog")}
                  data-testid="link-footer-blog"
                >
                  Blog
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => console.log("Support")}
                  data-testid="link-footer-support"
                >
                  Support
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay updated with our latest innovations
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button
                onClick={() => console.log("Newsletter subscribed")}
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 PowerStep. All rights reserved.</p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="p-0 h-auto text-muted-foreground hover:text-foreground text-sm"
              onClick={() => console.log("Privacy Policy")}
              data-testid="link-privacy"
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              className="p-0 h-auto text-muted-foreground hover:text-foreground text-sm"
              onClick={() => console.log("Terms")}
              data-testid="link-terms"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
