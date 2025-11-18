import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="relative max-w-[820px] mx-auto text-center space-y-8">
        {/* Kicker */}
        <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
          Boutique South African Software Studio
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] tracking-tight">
          Expanding <span className="text-primary">Access</span>, Accelerating <span className="text-primary">Learning</span>,
          <br className="hidden sm:block" />
          And Saving Lives With Bespoke Software Products
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[700px]">
          A boutique South African software development company crafting impactful, 
          high-quality technology that frees you to scale — not maintain.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="text-base px-8 w-full sm:w-auto"
            asChild
          >
            <a href="mailto:domicilium@decodedev.co.za">
              Start a Conversation
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-8 w-full sm:w-auto"
            asChild
          >
            <Link to="/services">
              Explore Services
            </Link>
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground/80 pt-2">
          We reply within 1–2 business days.
        </p>
      </div>
    </section>
  );
};
