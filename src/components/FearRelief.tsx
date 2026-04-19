const without = [
  "Unknown SSN usage going undetected",
  "Dark web exposure with no warning",
  "No real-time credit fraud alerts",
  "No US-based recovery support",
  "No insurance coverage if stolen",
];
const withUs = [
  "24/7 SSN activity monitoring",
  "Continuous dark web scanning",
  "Instant credit fraud alerts",
  "US-based recovery specialists",
  "$1M AIG-backed insurance",
];

const FearRelief = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Difference</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Two realities. <span className="text-cyan-glow">One choice.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Without */}
          <div className="rounded-2xl p-6 sm:p-8 border border-destructive/30 bg-destructive/5">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-5 text-destructive">Without FortizIQ</h3>
            <ul className="space-y-3.5">
              {without.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-destructive/20 border border-destructive/40 flex items-center justify-center text-destructive text-xs font-bold">✕</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          {/* With */}
          <div className="rounded-2xl p-6 sm:p-8 border-2 border-primary/50 bg-primary/5 glow-cyan relative">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-5 text-primary">With FortizIQ</h3>
            <ul className="space-y-3.5">
              {withUs.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-bold">✓</span>
                  {w}
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
