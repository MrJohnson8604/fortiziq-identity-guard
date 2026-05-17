import { useEffect, useRef, useState } from "react";
import { Check, Sparkles, ShieldCheck, Lock, RefreshCw } from "lucide-react";
import { track, getDevice, getViewportWidth } from "@/lib/analytics";

const GOLD_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DodLPeCWi7K3sh2I4WOhajBV2Jg0iQyzrXsK/Y4kuZBv6NQIZTRctrZa56RbaJUa4gQQCDdhxGbv5nTaK+wxXkAIcFJQ0DXoZEpYSNz2IVSs9g==";
const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";
const REPORT_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DoeVI/RgAiaiSO1J1IcIJzmMtIvc0QIthpZP+kEIE0FXu3aNkCY/JI6SUo1eBFXjseoNow040w7j9bgtoDs7+vjMniFsETB+Y+gIZ1IrkH8aXQ==";

const plans = [
  {
    id: "platinum",
    name: "Platinum",
    price: "28.99",
    anchor: "Best value — 3x the coverage",
    tagline: "Maximum protection across all three bureaus.",
    features: [
      "3-Bureau Credit Report & Score",
      "3-Bureau Credit Monitoring (Experian, Equifax, TransUnion)",
      "Identity Bundle (Social Security Number, Bank Accounts, Credit/Debit Cards, Driver's License, Medical Identification, Passport, Email, Phone, National Change of Address, Sex Offender)",
      "United States-Based Resolution / $1 Million Protection",
      "Credit Score Simulator",
    ],
    cta: "Start Platinum Protection",
    url: PLATINUM_URL,
    popular: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: "21.99",
    anchor: "Less than $1/day",
    tagline: "Essential identity protection for individuals.",
    features: [
      "1-Bureau Credit Monitoring",
      "Single Bureau Credit Report",
      "Identity Bundle (Social Security Number, Bank Accounts, Credit/Debit Cards, Driver's License, Medical Identification, Passport, Email, Phone, National Change of Address, Sex Offender)",
      "United States-Based Resolution / $1 Million Protection",
      "Credit Score Simulator",
    ],
    cta: "Start Gold Protection",
    url: GOLD_URL,
    popular: false,
  },
];

const REPORT_PLAN = {
  id: "credit_report_3bureau",
  name: "Credit Report",
  price: "20",
  url: REPORT_URL,
};

const ANNUAL_DISCOUNT = 0.2; // 20% off when paid annually

const Pricing = () => {
  const ctaRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const impressionsFiredRef = useRef<Record<string, boolean>>({});
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const computePrice = (monthly: string) => {
    const n = parseFloat(monthly);
    if (billing === "annual") {
      const discounted = n * (1 - ANNUAL_DISCOUNT);
      return discounted.toFixed(2);
    }
    return monthly;
  };

  const annualSavings = (monthly: string) => {
    const n = parseFloat(monthly);
    return Math.round(n * 12 * ANNUAL_DISCOUNT);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    Object.entries(ctaRefs.current).forEach(([id, el]) => {
      if (!el || impressionsFiredRef.current[id]) return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.5 &&
              !impressionsFiredRef.current[id]
            ) {
              impressionsFiredRef.current[id] = true;
              track("cta_impression", {
                cta_id: id,
                cta_location: "pricing",
                device: getDevice(),
                viewport_width: getViewportWidth(),
              });
              observer.disconnect();
            }
          }
        },
        { threshold: [0.5] }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleCtaClick = (id: string, destination: string, price: string) => {
    track("cta_click", {
      cta_id: id,
      cta_location: "pricing",
      destination,
      price,
      device: getDevice(),
      viewport_width: getViewportWidth(),
    });
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Choose your level of protection</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Cancel anytime. No hidden fees. Backed by AIG.</p>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            Need a monthly plan? Choose Platinum or Gold. Just want to check your credit right now? The one-time Credit Report option has you covered — no subscription required.
          </p>

          {/* Billing toggle */}
          <div className="mt-7 inline-flex items-center p-1 rounded-full border border-primary/30 bg-card/60 backdrop-blur text-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                billing === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors inline-flex items-center gap-2 ${
                billing === "annual" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={billing === "annual"}
            >
              Annual
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${billing === "annual" ? "bg-primary-foreground/20" : "bg-primary/15 text-primary"}`}>
                Save 20%
              </span>
            </button>
          </div>

          {/* Guarantee badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-xs sm:text-sm text-primary font-semibold">
            <ShieldCheck className="h-4 w-4" />
            30-Day Money-Back Guarantee
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col ${
                p.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary animate-pulse-border"
                  : "card-tech"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_hsl(var(--primary)/0.6)]">
                    <Sparkles className="h-3.5 w-3.5" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-5 sm:mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                  {p.name} <span className="text-muted-foreground font-normal text-lg sm:text-xl">Plan</span>
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">{p.tagline}</p>
              </div>

              <p className="text-xs text-primary font-semibold mb-1">{p.anchor}</p>
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary/15">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-muted-foreground text-xl sm:text-2xl">$</span>
                  <span className="font-display text-5xl sm:text-6xl font-bold text-chrome">{computePrice(p.price)}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/month</span>
                </div>
                {billing === "annual" ? (
                  <p className="mt-2 text-xs text-primary font-semibold">
                    Billed annually · Save ${annualSavings(p.price)}/yr
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-muted-foreground">Billed monthly · Cancel anytime</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-foreground/90 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { ctaRefs.current[p.id] = el; }}
                onClick={() => handleCtaClick(p.id, p.url, p.price)}
                data-analytics-id={p.id}
                className={`block text-center px-6 py-4 rounded-full font-semibold transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)]"
                    : "border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                }`}
              >
                {p.cta}
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                No contracts. Cancel anytime. Instant activation.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 text-[10px] text-muted-foreground/80">
                <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> 256-bit SSL</span>
                <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> SOC 2</span>
                <span className="inline-flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Cancel anytime</span>
              </div>
            </div>
          ))}

          {/* One-time Credit Report card */}
          <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 card-tech flex flex-col">
            <div className="mb-5 sm:mb-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">Credit Report</h3>
              <p className="text-muted-foreground text-sm sm:text-base">One-time purchase. No monthly fee.</p>
            </div>

            <p className="text-xs text-primary font-semibold mb-1">Just need a snapshot? Start here.</p>
            <div className="flex items-baseline gap-1.5 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary/15">
              <span className="text-muted-foreground text-xl sm:text-2xl">$</span>
              <span className="font-display text-5xl sm:text-6xl font-bold text-chrome">20</span>
              <span className="text-muted-foreground text-sm sm:text-base">one-time</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Experian Credit Report + Score",
                "Equifax Credit Report + Score",
                "TransUnion Credit Report + Score",
                "All 3 scores included — not just the reports",
                "Delivered instantly once your identity is confirmed",
                "One charge only — no renewal, no subscription",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-foreground/90 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={REPORT_PLAN.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { ctaRefs.current[REPORT_PLAN.id] = el; }}
              onClick={() => handleCtaClick(REPORT_PLAN.id, REPORT_PLAN.url, REPORT_PLAN.price)}
              data-analytics-id={REPORT_PLAN.id}
              className="block text-center px-6 py-4 rounded-full font-semibold transition-all border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              Get My Reports + Scores
            </a>
            <p className="text-center text-xs text-muted-foreground mt-3">
              One-time charge only. No subscription. No renewal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
