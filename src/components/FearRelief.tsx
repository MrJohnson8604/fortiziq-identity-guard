import { X, Check } from "lucide-react";

const without = [
  "Unknown SSN usage going undetected",
  "Dark web exposure you'll never see",
  "No credit fraud alerts when accounts open",
  "No recovery support when fraud strikes",
  "No insurance to cover stolen funds",
];

const withUs = [
  "Real-time SSN activity monitoring",
  "24/7 dark web & breach scanning",
  "Instant credit fraud alerts across bureaus",
  "US-based recovery specialists on call",
  "Up to $1M in identity theft insurance",
];

const FearRelief = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 relative">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Difference</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Two paths. <span className="text-cyan-glow">One choice.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Without */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-destructive/10 to-card border border-destructive/30 relative">
            <div className="absolute inset-0 rounded-3xl bg-destructive/5 pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-1 text-destructive">Without FortizIQ</h3>
              <p className="text-sm text-muted-foreground mb-6">You're exposed. Quietly.</p>
              <ul className="space-y-3.5">
                {without.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-destructive/20 border border-destructive/40 flex items-center justify-center">
                      <X className="h-3 w-3 text-destructive" strokeWidth={3} />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-primary/10 to-card border-2 border-primary glow-cyan relative">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-1 text-cyan-glow">With FortizIQ</h3>
            <p className="text-sm text-muted-foreground mb-6">You're fortified. Always.</p>
            <ul className="space-y-3.5">
              {withUs.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearRelief;
