import { Building, Landmark, Briefcase, Rocket } from "lucide-react";

const clients = [
  {
    icon: Landmark,
    title: "Governments & Public Institutions",
    description: "Secure, compliant solutions for national-scale infrastructure and digital transformation."
  },
  {
    icon: Building,
    title: "Large Enterprises",
    description: "Enterprise-grade platforms that scale with your organization's growth and complexity."
  },
  {
    icon: Briefcase,
    title: "Small & Medium Businesses",
    description: "Right-sized technology solutions that drive efficiency and competitive advantage."
  },
  {
    icon: Rocket,
    title: "Startups & Tech Organizations",
    description: "Agile development and innovation partnerships that accelerate time-to-market."
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(199,89%,48%,0.06)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Who We Serve</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Partners Across{" "}
            <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From governments to startups, we deliver technology solutions that meet the unique demands of every organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div 
              key={client.title}
              className="group text-center p-8 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {client.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
