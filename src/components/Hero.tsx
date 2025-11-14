import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          expanding <span className="text-primary">access</span>,{" "}
          <br className="hidden sm:block" />
          accelerating <span className="text-primary">learning</span>
          <br className="hidden sm:block" />
          and saving <span className="text-primary">lives</span>
          <br className="hidden sm:block" />
          with bespoke <span className="text-primary">software</span> products
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A boutique South African software development company driven by the vision to craft 
          impactful technology that enhances business—no matter the industry. We believe technology 
          should improve and simplify operations, freeing you to scale instead of maintain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="text-base px-8"
            asChild
          >
            <a href="mailto:domicilium@decodedev.co.za">
              Start a conversation
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-8"
            asChild
          >
            <Link to="/services">
              Explore services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
