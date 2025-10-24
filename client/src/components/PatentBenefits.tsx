import { Badge } from "@/components/ui/badge";
import { Shield, Rocket, Users, TrendingUp, Lightbulb, Globe } from "lucide-react";

export default function PatentBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Protected Innovation",
      description: "Exclusive rights with full patent protection and legal backing."
    },
    {
      icon: Rocket,
      title: "Market Leadership",
      description: "Position your company at the forefront of sustainable energy."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Ongoing technical guidance from energy harvesting specialists."
    },
    {
      icon: TrendingUp,
      title: "Revenue Potential",
      description: "Unlock new revenue streams with proven technology."
    },
    {
      icon: Lightbulb,
      title: "Validated Performance",
      description: "Patents with real-world application success metrics."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide patent coverage and compliance support."
    }
  ];

  return (
    <section id="benefits" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-benefits-title">
            Why License
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-benefits">
            Accelerate your innovation
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-benefits-description">
            Partner with Harness we Technology to bring revolutionary energy harvesting 
            solutions to market faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group"
                data-testid={`card-benefit-${index}`}
              >
                <div className="h-12 w-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-card rounded-3xl p-12 text-center border border-border">
          <h3 className="text-3xl font-semibold mb-4" data-testid="heading-licensing-options">
            Flexible Licensing Options
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Customizable licensing agreements tailored to your business needs, from startups 
            to established corporations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">Exclusive Licenses</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Non-Exclusive Licenses</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Regional Rights</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Custom Agreements</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
