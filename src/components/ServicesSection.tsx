import { 
  Cpu, 
  Code2, 
  Wifi, 
  Cog, 
  ShieldCheck, 
  Lightbulb,
  Building2
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "End-to-End Technology Build",
    description: "Complete systems engineering—hardware, software, IoT, automation, and blockchain—delivering performance, reliability, and security at every stage."
  },
  {
    icon: Building2,
    title: "Technology Consultancy",
    description: "Expert advisory across all technology domains. From infrastructure planning to digital transformation, guiding businesses and institutions to adopt the right strategies."
  },
  {
    icon: Cpu,
    title: "Hardware & Embedded Systems",
    description: "Custom electronics and intelligent devices designed for precision, durability, and operational excellence."
  },
  {
    icon: Code2,
    title: "Enterprise & Business Software",
    description: "Secure, scalable software platforms for governments, large enterprises, and growing businesses."
  },
  {
    icon: Wifi,
    title: "IoT & Connected Infrastructure",
    description: "Smart, data-driven systems enabling real-time monitoring, automation, and operational intelligence."
  },
  {
    icon: Cog,
    title: "Automation & Operational Intelligence",
    description: "Advanced automation frameworks that streamline operations, reduce costs, and enhance productivity."
  },
  {
    icon: ShieldCheck,
    title: "Blockchain & Digital Trust",
    description: "Decentralized systems and smart contracts built for security, transparency, and long-term resilience."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(217,91%,60%,0.08)_0%,transparent_60%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Technology{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether your organization requires end-to-end systems or expert guidance, Orvantis delivers secure, scalable, and high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass-card p-8 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
