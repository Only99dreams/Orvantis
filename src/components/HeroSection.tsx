import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = buildWhatsAppUrl("Hello! I'd like to book a strategic consultation with Orvantis.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(199,89%,48%,0.15)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-6 animate-fade-up tracking-wider uppercase text-sm">
            Technology Solutions at Scale
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1 leading-tight">
            Building the{" "}
            <span className="gradient-text">Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up-delay-2 max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, we engineer mission-critical technology solutions across hardware, software, IoT, automation, and blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book a Strategic Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
