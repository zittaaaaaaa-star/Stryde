import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Rocket, Users, TrendingUp, Lightbulb, Globe } from "lucide-react";

export default function PatentBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Protected Innovation",
      description: "Gain exclusive rights to use cutting-edge technology with full patent protection and legal backing."
    },
    {
      icon: Rocket,
      title: "Market Leadership",
      description: "Position your company at the forefront of sustainable energy innovation with proven technology."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Receive ongoing technical support and guidance from our team of energy harvesting specialists."
    },
    {
      icon: TrendingUp,
      title: "Revenue Potential",
      description: "Unlock new revenue streams by integrating our technology into your products and services."
    },
    {
      icon: Lightbulb,
      title: "Proven Technology",
      description: "License patents with validated performance metrics and real-world application success."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand into international markets with worldwide patent coverage and compliance support."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4" data-testid="badge-benefits-title">
            Why License Our Patents
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-benefits">
            Accelerate Your Innovation
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-benefits-description">
            Partner with Harness we Technology to bring revolutionary energy harvesting solutions to market faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold" data-testid="heading-licensing-options">
                  Flexible Licensing Options
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We offer customizable licensing agreements tailored to your business needs, 
                  whether you're a startup seeking innovation or an established corporation 
                  expanding your technology portfolio.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <Badge variant="secondary">Exclusive Licenses</Badge>
                  <Badge variant="secondary">Non-Exclusive Licenses</Badge>
                  <Badge variant="secondary">Regional Rights</Badge>
                  <Badge variant="secondary">Custom Agreements</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
