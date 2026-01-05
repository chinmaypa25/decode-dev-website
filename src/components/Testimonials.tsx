import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Clock, TrendingDown, Users, Zap } from "lucide-react";

const testimonials = [
  {
    quote: "This team completely transformed our operations. Their bespoke software allowed us to automate workflows that previously took days.",
    name: "Sarah M.",
    role: "Operations Manager",
    organization: "Horizon Clinics",
    initials: "SM",
  },
  {
    quote: "The attention to detail and commitment to impact is unmatched. Our learning platform became faster, more scalable, and far easier to maintain.",
    name: "David K.",
    role: "Product Lead",
    organization: "EduStream Labs",
    initials: "DK",
  },
  {
    quote: "We saw measurable improvements from week one. Their ability to translate complex requirements into simple, powerful solutions is outstanding.",
    name: "Aisha P.",
    role: "CTO",
    organization: "Bridgewell Foundation",
    initials: "AP",
  },
  {
    quote: "Reliable, thoughtful, and technically exceptional. We couldn't have asked for a better partner for our digital transformation journey.",
    name: "Marcus L.",
    role: "Director of Technology",
    organization: "NovaCare Group",
    initials: "ML",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm text-muted-foreground/80 font-medium tracking-[0.2em] uppercase mb-4">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our <span className="text-primary">Partners</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We measure our success by the impact we create for our clients. Here's what they have to say about working with us.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Quote */}
                <blockquote className="text-foreground/90 leading-relaxed mb-6 text-base">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.initials}&backgroundColor=4361ee,7209b7&textColor=ffffff`} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Stories Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm text-muted-foreground/80 font-medium tracking-[0.2em] uppercase mb-4">
              Client Stories
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Real <span className="text-primary">Impact</span>, Real Results
            </h3>
          </div>

          {/* Featured Case Study Card */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-elegant overflow-hidden">
            <CardContent className="p-8 md:p-10">
              {/* Client Profile Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Building2 className="h-4 w-4" />
                  B2B SaaS Startup • 25–30 Employees • 150+ Customers
                </span>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">The Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As the startup scaled, customer support requests increased rapidly. The founders wanted to introduce an AI-powered support assistant to reduce response times and operational load. However, enterprise AI solutions proposed by other vendors exceeded the approved budget and required heavy infrastructure and long implementation timelines.
                </p>
              </div>

              {/* Approach */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">Our Approach</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We focused on practical, cost-effective AI rather than overengineering. We identified the most repetitive support queries, trained a lightweight AI assistant using existing documentation and historical support tickets, and integrated it directly into the client's existing support tools. The solution was designed to be modular and scalable for future growth.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">The Solution</h4>
                <p className="text-muted-foreground leading-relaxed">
                  A custom AI-powered support assistant that automatically handled common queries, escalated complex issues to human agents, and required minimal infrastructure and ongoing maintenance.
                </p>
              </div>

              {/* Outcomes Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">The Outcome</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-background/50 rounded-lg p-4 text-center border border-border/50">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">60%</p>
                    <p className="text-xs text-muted-foreground">Queries Automated</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center border border-border/50">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">Hours→Min</p>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center border border-border/50">
                    <TrendingDown className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">35%</p>
                    <p className="text-xs text-muted-foreground">Under Budget</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center border border-border/50">
                    <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">4 Weeks</p>
                    <p className="text-xs text-muted-foreground">Full Deployment</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button asChild size="lg" className="shadow-elegant">
                  <Link to="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
