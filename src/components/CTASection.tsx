import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const CTASection = () => {
  const whatsappUrl = buildWhatsAppUrl("Hello! I'd like to book a strategic consultation with Orvantis.");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16 border-primary/20">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Strategic Consultation</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the{" "}
              <span className="gradient-text">Future?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need a system built from the ground up or expert technology guidance, Orvantis delivers with authority, precision, and vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Book a Strategic Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact Us
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mt-8">
              Schedule a confidential session to explore your technology needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
