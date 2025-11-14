import { Button } from "@/components/ui/button";
import decodeLogo from "@/assets/decode-logo.webp";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Specialities", href: "/specialities" },
  { label: "Hello World", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img 
            src={decodeLogo} 
            alt="Decode Development" 
            className="h-8 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button 
          variant="ghost" 
          size="sm"
          asChild
        >
          <a href="mailto:domicilium@decodedev.co.za">Get in touch</a>
        </Button>
      </div>
    </header>
  );
};
