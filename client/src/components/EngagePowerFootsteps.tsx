import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import elevatorPitchVideo from "@assets/IMG_0507_1763173585760.mp4";

export default function EngagePowerFootsteps() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.05),transparent_50%)]" />
      <div className="absolute top-20 right-10 opacity-10 rotate-45">
        <Zap className="h-32 w-32 text-accent" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 -rotate-45">
        <Zap className="h-24 w-24 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-6" data-testid="badge-engage-title">
            Interactive Energy
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-white" data-testid="heading-engage">
            Engage with the power of footsteps
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12" data-testid="text-engage-description">
            STRYDE tiles convert human footsteps into electricity. Harness that energy to{" "}
            <span className="text-accent font-medium">capture attention</span>,{" "}
            <span className="text-accent font-medium">drive footfall</span> and{" "}
            <span className="text-accent font-medium">share your message</span>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-border/50" data-testid="video-elevator-pitch">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src={elevatorPitchVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-white/70 mt-6" data-testid="text-video-caption">
            Watch our elevator pitch to see STRYDE in action
          </p>
        </div>
      </div>
    </section>
  );
}
