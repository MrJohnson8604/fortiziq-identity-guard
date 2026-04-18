import logo from "@/assets/fortiziq-shield.png";

const Navbar = () => {
  const links = [
    { href: "#how", label: "How it Works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="FortizIQ shield logo" className="h-9 w-9 rounded-full" />
          <span className="font-display font-bold text-lg tracking-tight text-chrome">FortizIQ</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)] transition-shadow"
        >
          Get Protected
        </a>
      </div>
    </header>
  );
};

export default Navbar;
