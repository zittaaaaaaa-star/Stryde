import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      initials: "AJ",
      bio: "Visionary leader with 15+ years in renewable energy innovation",
      image: "",
      linkedin: "#",
      email: "alex@stryde.com"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      initials: "SC",
      bio: "Pioneer in piezoelectric technology and energy harvesting systems",
      image: "",
      linkedin: "#",
      email: "sarah@stryde.com"
    },
    {
      name: "Marcus Williams",
      role: "Head of Engineering",
      initials: "MW",
      bio: "Expert in REWOD technology and sustainable infrastructure",
      image: "",
      linkedin: "#",
      email: "marcus@stryde.com"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Business Development",
      initials: "ER",
      bio: "Strategic partnerships and global market expansion specialist",
      image: "",
      linkedin: "#",
      email: "emily@stryde.com"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
              data-testid={`card-team-member-${index}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative bg-card rounded-lg p-6 border border-card-border hover-elevate h-full flex flex-col">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>

                <div className="flex items-center justify-center gap-2 pt-4 border-t border-border">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => window.open(member.linkedin, '_blank')}
                    data-testid={`button-linkedin-${index}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => window.location.href = `mailto:${member.email}`}
                    data-testid={`button-email-${index}`}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
