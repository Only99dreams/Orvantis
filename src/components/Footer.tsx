import logo from "@/assets/orvantis-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Orvantis" className="h-8 w-8 rounded-full" />
            <span className="font-display text-lg font-bold gradient-text">Orvantis</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#standard" className="hover:text-foreground transition-colors">Our Standard</a>
            <a href="#clients" className="hover:text-foreground transition-colors">Who We Serve</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Orvantis. All rights reserved.</p>
          <p>Building the future, one system at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
