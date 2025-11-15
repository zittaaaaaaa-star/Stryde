import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import elevatorPitchVideo from "@assets/IMG_0507_1763173585760.mp4";

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

          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/50 mb-12">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              data-testid="video-elevator-pitch"
            >
              <source src={elevatorPitchVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
