import { Button } from "@/components/ui/button";
import decodeLogo from "@/assets/decode-logo.webp";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Specialities", href: "/specialities" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Our Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center">
          <img 
            src={decodeLogo} 
            alt="Decode Development" 
            className="h-8 w-auto"
          />
        </NavLink>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
              activeClassName="text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
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
