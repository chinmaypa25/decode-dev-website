import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      </div>
    </section>
  );
};
