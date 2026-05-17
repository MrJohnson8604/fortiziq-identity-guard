import { Check, X } from "lucide-react";

const rows: { label: string; fortiziq: boolean | string; lifelock: boolean | string; identityforce: boolean | string }[] = [
  { label: "3-Bureau Credit Monitoring", fortiziq: true, lifelock: "Top tier only", identityforce: true },
  { label: "3-Bureau Report + Scores (one-time)", fortiziq: "$20", lifelock: false, identityforce: false },
  { label: "$1M Identity Theft Insurance", fortiziq: true, lifelock: true, identityforce: true },
  { label: "US-Based Recovery Specialists", fortiziq: true, lifelock: true, identityforce: true },
  { label: "Dark Web Monitoring", fortiziq: true, lifelock: true, identityforce: true },
  { label: "No Long-Term Contract", fortiziq: true, lifelock: "Annual only", identityforce: "Annual only" },
  { label: "Starting Price", fortiziq: "$21.99/mo", lifelock: "$29.99/mo", identityforce: "$29.90/mo" },
];

const Cell = ({ value, highlight }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-center">
        {value ? (
          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${highlight ? "bg-primary/20 border border-primary/50" : "bg-muted/40"}`}>
            <Check className={`h-4 w-4 ${highlight ? "text-primary" : "text-foreground/70"}`} strokeWidth={3} />
          </div>
        ) : (
          <div className="w-7 h-7 rounded-full bg-muted/30 flex items-center justify-center">
            <X className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </div>
    );
  }
  return (
    <span className={`block text-center text-xs sm:text-sm ${highlight ? "text-primary font-semibold" : "text-foreground/80"}`}>
      {value}
    </span>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="container max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why FortizIQ</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How we compare</h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            More features. Lower price. No annual contract trap.
          </p>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-card/40 backdrop-blur overflow-hidden">
          <div className="grid grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr] sm:grid-cols-[1.6fr_1fr_1fr_1fr] text-[11px] sm:text-sm">
            {/* Header */}
            <div className="p-2 sm:p-5 bg-muted/20 text-muted-foreground font-semibold break-words">Feature</div>
            <div className="p-2 sm:p-5 bg-primary/10 text-center font-display font-bold text-primary border-x border-primary/20 break-words">
              FortizIQ
            </div>
            <div className="p-2 sm:p-5 bg-muted/20 text-center font-semibold text-muted-foreground break-words">LifeLock</div>
            <div className="p-2 sm:p-5 bg-muted/20 text-center font-semibold text-muted-foreground break-words leading-tight">IdentityForce</div>

            {rows.map((r, i) => (
              <div key={r.label} className="contents">
                <div className={`p-2 sm:p-5 text-foreground/90 break-words ${i % 2 === 0 ? "bg-background/30" : ""}`}>{r.label}</div>
                <div className={`p-2 sm:p-5 flex items-center justify-center bg-primary/5 border-x border-primary/20 ${i % 2 === 0 ? "bg-primary/10" : ""}`}>
                  <Cell value={r.fortiziq} highlight />
                </div>
                <div className={`p-2 sm:p-5 flex items-center justify-center ${i % 2 === 0 ? "bg-background/30" : ""}`}>
                  <Cell value={r.lifelock} />
                </div>
                <div className={`p-2 sm:p-5 flex items-center justify-center ${i % 2 === 0 ? "bg-background/30" : ""}`}>
                  <Cell value={r.identityforce} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Comparison based on publicly listed plans as of 2026. Competitor names belong to their respective owners.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
