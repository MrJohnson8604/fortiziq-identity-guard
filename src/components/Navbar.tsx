import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fortiziq-shield.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#how", label: "How it Works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-primary/20 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.3)] animate-slide-down"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="FortizIQ shield logo" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full" />
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-chrome">FortizIQ</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)] transition-shadow"
          >
            Get Protected
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="sm:hidden mt-2 inline-flex items-center justify-center px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              Get Protected
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
