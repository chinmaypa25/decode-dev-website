import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="hero-wrapper container mx-auto px-4">
      {/* Animated gradient glow */}
      <div className="hero-glow" aria-hidden="true" />
      
      <div className="hero-grid">
        {/* Left column: Hero text */}
        <div className="hero-text animate-fade-in">
          {/* Kicker */}
          <div className="mb-8">
            <p className="text-xs md:text-sm text-muted-foreground/80 font-medium tracking-[0.2em] uppercase">
              Boutique South African Software Studio
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[2.0] tracking-tight max-w-[760px] mb-8">
            Expanding <span className="text-primary">Access</span>,
            <br />
            Accelerating <span className="text-primary">Learning</span>,
            <br />
            And Saving Lives
            <br />
            With Bespoke Software Products
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[680px] mb-10">
            A boutique South African software development company crafting impactful, 
            high-quality technology that frees you to scale — not maintain.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-5">
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
          <p className="text-xs md:text-sm text-muted-foreground/70">
            We reply within 1–2 business days.
          </p>
        </div>

        {/* Right column: Code editor mockup */}
        <div className="hero-mockup">
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot code-dot-red"></span>
              <span className="code-dot code-dot-yellow"></span>
              <span className="code-dot code-dot-green"></span>
              <span className="code-title">app.tsx</span>
            </div>
            <div className="code-body">
              <div className="code-line code-line-faded">import {"{ createApp }"} from "decode";</div>
              <div className="code-line code-line-faded">import stack from "./stack";</div>
              <div className="code-line code-line-active">
                const product = createApp({"{ stack: [\"TypeScript\",\"React\",\"Node.js\",\"PostgreSQL\",\"AWS\"] }"});
              </div>
              <div className="code-line code-line-faded">product.launch();</div>
              <div className="code-line"><span className="code-cursor"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
