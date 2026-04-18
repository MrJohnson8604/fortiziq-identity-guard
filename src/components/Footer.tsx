import logo from "@/assets/fortiziq-shield.png";

const Footer = () => {
  return (
    <footer className="border-t border-primary/15 py-14 mt-12 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <img src={logo} alt="FortizIQ" className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-display font-bold text-xl text-chrome leading-none">FortizIQ</p>
                <p className="text-xs text-primary mt-1 tracking-wider">MONITOR • PROTECT • EMPOWER</p>
              </div>
            </div>
          </div>

          <nav className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-primary/10 text-center space-y-3">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FortizIQ is a licensed reseller of identity protection services. Identity theft insurance underwritten by AIG.
          </p>
          <p className="text-xs text-muted-foreground">© 2025 FortizIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
