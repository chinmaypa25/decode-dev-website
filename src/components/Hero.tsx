import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="hero-wrapper container mx-auto px-4">
      {/* Animated gradient glow */}
      <div className="hero-glow" aria-hidden="true" />
      
      {/* Snowplow-style flowing SVG lines */}
      <div className="hero-flow-lines" aria-hidden="true">
        <svg
          className="flow-svg"
          viewBox="0 0 1400 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(225 73% 57%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(225 73% 57%)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="hsl(260 70% 55%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(260 70% 55%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(260 70% 55%)" stopOpacity="0" />
              <stop offset="40%" stopColor="hsl(260 70% 55%)" stopOpacity="0.2" />
              <stop offset="60%" stopColor="hsl(225 73% 57%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(225 73% 57%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(225 73% 67%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(225 73% 67%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(260 70% 65%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flow line 1 */}
          <path
            className="flow-path flow-path-1"
            d="M-200,150 C100,100 300,200 500,180 S800,100 1000,150 S1300,200 1600,120"
            fill="none"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
          />
          
          {/* Flow line 2 */}
          <path
            className="flow-path flow-path-2"
            d="M-200,280 C50,320 250,250 450,300 S700,350 900,280 S1200,220 1600,300"
            fill="none"
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
          />
          
          {/* Flow line 3 */}
          <path
            className="flow-path flow-path-3"
            d="M-200,400 C150,380 350,450 550,420 S850,350 1050,420 S1350,480 1600,400"
            fill="none"
            stroke="url(#flowGradient3)"
            strokeWidth="2.5"
          />
          
          {/* Flow line 4 - subtle upper line */}
          <path
            className="flow-path flow-path-4"
            d="M-200,80 C200,120 400,50 600,90 S900,130 1100,70 S1400,100 1600,60"
            fill="none"
            stroke="url(#flowGradient2)"
            strokeWidth="1"
          />
          
          {/* Flow line 5 - subtle lower line */}
          <path
            className="flow-path flow-path-5"
            d="M-200,500 C100,480 300,530 500,490 S800,450 1000,510 S1300,540 1600,480"
            fill="none"
            stroke="url(#flowGradient1)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] tracking-tight max-w-[760px] mb-12">
            Expanding <span className="text-primary">Access</span>,
            <br />
            Accelerating <span className="text-primary">Learning</span>,
            <br />
            And Saving Lives
            <br />
            With Bespoke Software Products
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[680px] mb-12">
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
