import { ShieldCheck, Users, BadgeCheck, Headphones, Check, X as XIcon } from "lucide-react";
import CircuitBackground from "./CircuitBackground";
import ThreatStats from "./ThreatStats";
import shield from "@/assets/fortiziq-shield.png";

const trustItems = [
  { icon: Users, label: "1M+ Identities Protected" },
  { icon: ShieldCheck, label: "SOC 2 Compliant" },
  { icon: Headphones, label: "US-Based Recovery Specialists" },
  { icon: BadgeCheck, label: "AIG-Backed Insurance" },
];

const microTrust = [
  { icon: ShieldCheck, label: "SOC 2 Compliant" },
  { icon: BadgeCheck, label: "AIG-Backed Insurance" },
  { icon: Headphones, label: "US-Based Recovery" },
  { icon: Check, label: "Cancel Anytime" },
];

const GOLD_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DodLPeCWi7K3sh2I4WOhajBV2Jg0iQyzrXsK/Y4kuZBv6NQIZTRctrZa56RbaJUa4gQQCDdhxGbv5nTaK+wxXkAIcFJQ0DXoZEpYSNz2IVSs9g==";
const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <CircuitBackground />

      <div className="container relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] sm:text-xs font-medium text-primary mb-6 sm:mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Monitor • Protect • Empower
        </div>

        <div className="flex justify-center mb-6 animate-float-slow">
          <img src={shield} alt="FortizIQ shield" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 drop-shadow-[0_0_30px_hsl(194_100%_50%/0.5)]" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 sm:mb-6 animate-fade-up">
          Your Identity. <span className="text-cyan-glow">Fortified.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Real-time monitoring, credit protection, and <span className="text-foreground font-semibold">$1M identity theft coverage</span> — all under one intelligent platform.
        </p>

        <ThreatStats />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-5 sm:mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href={GOLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-primary text-primary text-sm sm:text-base font-semibold hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
          >
            Get Gold — $26.99/mo
          </a>
          <a
            href={PLATINUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow"
          >
            Get Platinum — $36.99/mo
          </a>
        </div>

        {/* Micro-trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-12 sm:mb-14 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          {microTrust.map((m) => (
            <div key={m.label} className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-primary/70">
              <m.icon className="h-3.5 w-3.5" />
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {trustItems.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-primary/15 bg-card/40 backdrop-blur">
              <t.icon className="h-5 w-5 text-primary" />
              <span className="text-xs md:text-sm text-muted-foreground text-center font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
