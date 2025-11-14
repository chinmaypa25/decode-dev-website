import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Application Architecture and SDLC Design",
    description: "Empower your product planning and reduce risk with a seasoned software architect to bring the technology lens to the Venn Diagram of business, product and technology strategy.",
  },
  {
    icon: Users,
    title: "Fractional Chief Technology Officer",
    description: "Moving fast in the dynamic product development environment, particularly in the age of AI is fraught with risk. Augment your organisation with a fractional software engineering leader for continuous product, technology and team; performance improvement and risk management.",
  },
  {
    icon: Zap,
    title: "Dedicated AI-Augmented Software Engineering Teams",
    description: "Scale your software product organisation with a dedicated, AI-augmented software engineering team. Increase velocity with a combined team or enable your team to maintain focus with our parallel team.",
  },
  {
    icon: TrendingUp,
    title: "Post Launch Product Evolution and Support",
    description: "Launching your product is just the beginning. Continue to evolve your product with a team who care about your customers, your business and your product as much as you do.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
