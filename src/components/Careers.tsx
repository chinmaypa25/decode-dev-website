import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Careers = () => {
  return (
    <section id="careers" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Careers</span>
            </h2>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                Decode is a passionate team of technology professionals dedicated to crafting 
                impactful software using open source web technologies. If you are fascinated by 
                the power of the web and looking for an opportunity to join a diligent and dynamic 
                team, then Decode is the place for you.
              </p>

              <Button 
                size="lg" 
                className="text-base px-8"
                asChild
              >
                <a href="mailto:domicilium@decodedev.co.za">
                  Check in with us
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
