import logo from "@/assets/orvantis-logo.jpg";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = buildWhatsAppUrl("Hello! I'd like to book a consultation with Orvantis.");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Orvantis" className="h-10 w-10 rounded-full" />
          <span className="font-display text-xl font-bold gradient-text">Orvantis</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("standard")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Our Standard
          </button>
          <button 
            onClick={() => scrollToSection("clients")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Who We Serve
          </button>
          <Button 
            variant="hero" 
            size="sm"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
