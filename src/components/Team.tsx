import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import brettImage from "@/assets/brett-ausmeier.jpg";
import trevorImage from "@/assets/trevor-gowing.jpg";
import barryImage from "@/assets/barry-dwyer.jpg";
import dagmarImage from "@/assets/dagmar-timler.jpg";

const team = [
  { name: "Brett Ausmeier", role: "Co-Founder & CTO", image: brettImage },
  { name: "Trevor Gowing", role: "Co-Founder & CEO", image: trevorImage },
  { name: "Barry Dwyer", role: "Lead Full Stack Software Engineer", image: barryImage },
  { name: "Dagmar Timler", role: "Lead Full Stack Software Engineer", image: dagmarImage },
  { name: "Siyasanga Mtshokotsha", role: "Full Stack Software Engineer" },
  { name: "Mfundo Cele", role: "Full Stack Software Engineer" },
  { name: "Marc De Decker", role: "Business Development Specialist" },
  { name: "Jess Verheul", role: "Support Operations Manager" },
  { name: "Inge Heide", role: "Personal Assistant" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet <span className="text-primary">the team</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    ) : null}
                    <AvatarFallback className="bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
