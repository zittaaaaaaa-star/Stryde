import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap } from "lucide-react";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Alejandra Paredes",
      role: "CEO",
      initials: "AP",
      image: ""
    },
    {
      name: "Kailey Huang",
      role: "CCO",
      initials: "KH",
      image: ""
    },
    {
      name: "Nishat Tasnim",
      role: "CHRO",
      initials: "NT",
      image: ""
    },
    {
      name: "Elie Krugolets",
      role: "COO",
      initials: "EK",
      image: ""
    },
    {
      name: "Kasper Lu",
      role: "CFO",
      initials: "KL",
      image: ""
    },
    {
      name: "Arian Moula",
      role: "CMO",
      initials: "AM",
      image: ""
    },
    {
      name: "Salma Benzriouil",
      role: "OM",
      initials: "SB",
      image: ""
    }
  ];

  return (
    <section id="team" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.05),transparent_50%)]" />
      <div className="absolute top-40 left-10 opacity-10 rotate-12">
        <Zap className="h-40 w-40 text-accent" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-10 -rotate-12">
        <Zap className="h-28 w-28 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-6" data-testid="badge-team-title">
            Our Team
          </Badge>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-team">
            Meet the innovators
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-team-description">
            A diverse team of experts committed to revolutionizing sustainable energy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
              data-testid={`card-team-member-${index}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative bg-card rounded-lg p-4 border border-card-border hover-elevate h-full flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-3 ring-2 ring-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-semibold mb-1" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-medium" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
