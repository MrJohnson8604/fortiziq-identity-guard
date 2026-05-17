import { useEffect, useRef } from "react";
import { ShieldCheck, Users, BadgeCheck, Headphones, Lock, RefreshCw } from "lucide-react";
import CircuitBackground from "./CircuitBackground";
import ThreatStats from "./ThreatStats";
import shield from "@/assets/fortiziq-shield.png";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

const track = (event: string, params: Record<string, any>) => {
  try {
    window.gtag?.("event", event, params);
    window.dataLayer?.push({ event, ...params });
    window.clarity?.("event", event);
  } catch {}
};

const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

const trustItems = [
  { icon: Users, label: "1M+ Identities Protected" },
  { icon: ShieldCheck, label: "SOC 2 Compliant" },
  { icon: Headphones, label: "US-Based Recovery Specialists" },
  { icon: BadgeCheck, label: "AIG-Backed Insurance" },
];

const microBadges = [
  { icon: ShieldCheck, label: "Independently Verified & Secure" },
  { icon: BadgeCheck, label: "$1M Identity Theft Coverage" },
  { icon: Headphones, label: "Live US-Based Recovery Team" },
  { icon: RefreshCw, label: "Cancel Anytime — No Fees" },
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
          <img src={shield} alt="FortizIQ shield" width={96} height={96} fetchPriority="high" decoding="async" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 drop-shadow-[0_0_30px_hsl(194_100%_50%/0.5)]" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 sm:mb-6 animate-fade-up">
          Your Identity. <span className="text-cyan-glow">Fortified.</span>
        </h1>

        <ThreatStats />

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Real-time monitoring, credit protection, and <span className="text-foreground font-semibold">$1M identity theft coverage</span> — all under one intelligent platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href={PLATINUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow"
          >
            Get Platinum — $28.99/mo
          </a>
          <a
            href={GOLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-primary text-primary text-sm sm:text-base font-semibold hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
          >
            Get Gold — $21.99/mo
          </a>
        </div>

        <div className="flex flex-col items-center mb-4 -mt-2 animate-fade-up px-4" style={{ animationDelay: "0.25s" }}>
          <p className="text-sm sm:text-sm text-muted-foreground text-center mb-1">
            Not ready for a monthly plan?
          </p>
          <div className="text-primary text-xl leading-none animate-arrow-bounce" aria-hidden="true">↓</div>
          <a
            href="https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DoeVI/RgAiaiSO1J1IcIJzmMtIvc0QIthpZP+kEIE0FXu3aNkCY/JI6SUo1eBFXjseoNow040w7j9bgtoDs7+vjMniFsETB+Y+gIZ1IrkH8aXQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex flex-col sm:flex-row w-full sm:w-auto max-w-md sm:max-w-none items-center justify-center text-center px-6 sm:px-7 py-4 sm:py-3.5 rounded-2xl sm:rounded-full border-2 border-primary/70 bg-card/50 backdrop-blur text-base sm:text-base font-semibold text-primary leading-tight hover:bg-primary/10 transition-colors animate-glow-pulse"
          >
            <span className="whitespace-nowrap">3-Bureau Credit Report</span>
            <span className="hidden sm:inline mx-1.5 opacity-60">·</span>
            <span className="whitespace-nowrap mt-0.5 sm:mt-0 text-sm sm:text-base opacity-90 sm:opacity-100">$20, No Subscription →</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-12 sm:mb-14 text-xs">
          {microBadges.map((b) => (
            <div key={b.label} className="inline-flex items-center gap-1.5 text-primary/80">
              <b.icon className="h-3.5 w-3.5" />
              <span>{b.label}</span>
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
