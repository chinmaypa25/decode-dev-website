import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Globe, Smartphone, MonitorSmartphone, Gamepad2 } from "lucide-react";

const specialities = [
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Agents, intelligent chat, natural language querying, language translation, automated document processing, report generation and more...",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Feature-rich web browser applications, like educational games, point of care systems, or business automation tools.",
  },
  {
    icon: MonitorSmartphone,
    title: "Progressive Web Applications",
    description: "Installable web applications with native features such as offline storage and notifications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross platform mobile applications built using a single technology stack and published to Google Play Store, Apple App Store and more...",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Web and mobile games and gamified applications.",
  },
];

export const Specialities = () => {
  return (
    <section id="specialities" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Specialities</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specialities.map((speciality) => (
            <Card key={speciality.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <speciality.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-lg">{speciality.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {speciality.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
