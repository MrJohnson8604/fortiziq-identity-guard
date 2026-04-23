import { Check, Sparkles } from "lucide-react";

const GOLD_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DodLPeCWi7K3sh2I4WOhajBV2Jg0iQyzrXsK/Y4kuZBv6NQIZTRctrZa56RbaJUa4gQQCDdhxGbv5nTaK+wxXkAIcFJQ0DXoZEpYSNz2IVSs9g==";
const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";

const plans = [
  {
    name: "Platinum",
    price: "36.99",
    anchor: "Best value — 3x the coverage",
    tagline: "Maximum protection across all three bureaus.",
    features: [
      "3-Bureau Credit Report & Score",
      "3-Bureau Credit Monitoring (Experian, Equifax, TransUnion)",
      "Identity Bundle (SSN, Bank Accounts, Credit/Debit, Driver's License, Medical ID, Passport, Email, Phone, NCOA, Sex Offender)",
      "US-Based Resolution / $1M Protection",
      "Credit Score Simulator",
    ],
    cta: "Start Platinum Protection",
    url: PLATINUM_URL,
    popular: true,
  },
  {
    name: "Gold",
    price: "26.99",
    anchor: "Less than $1/day",
    tagline: "Essential identity protection for individuals.",
    features: [
      "1-Bureau Credit Monitoring",
      "Single Bureau Credit Report",
      "Identity Bundle (SSN, Bank Accounts, Credit/Debit, Driver's License, Medical ID, Passport, Email, Phone, NCOA, Sex Offender)",
      "US-Based Resolution / $1M Protection",
      "Credit Score Simulator",
    ],
    cta: "Start Gold Protection",
    url: GOLD_URL,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Choose your level of protection</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Cancel anytime. No hidden fees. Backed by AIG.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-6 sm:p-8 md:p-10 ${
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
              <div className="flex items-baseline gap-1.5 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary/15">
                <span className="text-muted-foreground text-xl sm:text-2xl">$</span>
                <span className="font-display text-5xl sm:text-6xl font-bold text-chrome">{p.price}</span>
                <span className="text-muted-foreground text-sm sm:text-base">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
