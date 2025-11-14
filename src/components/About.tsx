import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const highlights = [
  "Managed developer teams",
  "Long-term product ownership",
  "Open source web technologies",
  "Business-focused solutions",
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hello <span className="text-primary">World</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                Welcome to Decode; a boutique South African software development company driven by 
                the vision to craft impactful technology that enhances a business—no matter the industry.
              </p>
              
              <p>
                At Decode, we hold the firm belief that technology should be used to improve and simplify 
                business operations, so that more time can be spent scaling the business instead of maintaining it.
              </p>
              
              <p>
                Our mission is to provide managed software developer teams who take ownership and 
                responsibility of the software products that they build and guide clients on both the 
                technical and business direction of those products.
              </p>
              
              <p className="font-semibold">
                Building technology can seem daunting and complex, but together we can decode the solution.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-xl">Decode Development (Pty) Ltd</h3>
                <p className="text-sm text-muted-foreground">
                  Boutique South African software development company
                </p>
                <div className="space-y-3 pt-2">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
