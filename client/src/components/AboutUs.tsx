import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute top-20 right-20 opacity-10">
        <Zap className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Zap className="h-24 w-24 text-accent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6" data-testid="badge-about-title">
              About Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-about">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-about-description">
              Pioneering the future of sustainable energy through innovation and dedication
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-muted/50 backdrop-blur-sm border border-border shadow-lg mb-12">
            <div className="aspect-video flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-muted-foreground" data-testid="text-video-placeholder">
                  Elevator Pitch Video
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Video placeholder - Update with your YouTube or Vimeo embed
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
