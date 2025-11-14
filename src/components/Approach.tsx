import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Sparkles, HandshakeIcon } from "lucide-react";

const principles = [
  {
    icon: Clock,
    title: "We are in it for the long haul",
    description: "We look to establish long-term business relationships with our clients by providing design, development, operations and improvement services.",
  },
  {
    icon: Sparkles,
    title: "We keep things simple, without compromising on quality",
    description: "We aim to optimise the total cost of ownership by keeping things simple, building quality up front and not over-engineering, which keeps maintenance and extension costs down.",
  },
  {
    icon: HandshakeIcon,
    title: "We focus on what we do best, then partner with other specialists for the rest",
    description: "We are highly skilled in writing quality code; we then partner with other businesses to offer the full suite of software product development services—including UI/UX design and cloud infrastructure.",
  },
];

const techStack = [
  "Domain-driven design",
  "Peer code review",
  "Automated testing",
  "TypeScript",
  "React / React Native",
  "Node.js / JVM",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export const Approach = () => {
  return (
    <section id="approach" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Approach</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className="border-2">
                <CardHeader>
                  <principle.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg leading-tight">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">
                Our preferred development approach and technology stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
