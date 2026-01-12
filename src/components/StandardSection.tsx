import { Check } from "lucide-react";

const standards = [
  "Full ownership of system design and execution",
  "Security-first, compliance-ready architecture",
  "Solutions built for scale, reliability, and longevity",
  "Measurable, accountable outcomes",
  "Technology engineered for the future"
];

const StandardSection = () => {
  return (
    <section id="standard" className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              Our Commitment
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The Orvantis{" "}
              <span className="gradient-text">Standard</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every solution we deliver is held to the highest standards of engineering excellence, security, and operational performance.
            </p>
            
            <ul className="space-y-4">
              {standards.map((standard, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-lg">{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-3xl p-10 border-primary/20">
              <div className="mb-8">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary/40">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl font-display text-foreground mb-8 leading-relaxed">
                At Orvantis, we build the future. We focus on execution, precision, and responsibility. Every system we deliver is designed to perform securely and reliably at scale.
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="text-foreground font-semibold">Co-Founder</p>
                <p className="text-muted-foreground">Orvantis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardSection;
