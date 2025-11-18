import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="relative container mx-auto px-4 py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-[820px] mx-auto text-center space-y-12 animate-fade-in">
        {/* Kicker */}
        <div className="inline-block">
          <p className="text-xs md:text-sm text-muted-foreground/80 font-medium tracking-[0.2em] uppercase">
            Boutique South African Software Studio
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[2.0] tracking-tight max-w-[760px] mx-auto">
          Expanding <span className="text-primary">Access</span>,
          <br />
          Accelerating <span className="text-primary">Learning</span>,
          <br />
          And Saving Lives
          <br />
          With Bespoke Software Products
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[680px] mx-auto">
          A boutique South African software development company crafting impactful, 
          high-quality technology that frees you to scale — not maintain.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10">
          <Button 
            size="lg" 
            className="text-base px-10 py-6 w-full sm:w-auto shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:domicilium@decodedev.co.za">
              Start a Conversation
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-10 py-6 w-full sm:w-auto border-2 hover:bg-primary/5 transition-all duration-300"
            asChild
          >
            <Link to="/services">
              Explore Services
            </Link>
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-xs md:text-sm text-muted-foreground/70 pt-5">
          We reply within 1–2 business days.
        </p>
      </div>
    </section>
  );
};
