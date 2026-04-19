import { CreditCard, Globe, Fingerprint, ShieldCheck } from "lucide-react";
import CreditScoreGauge from "./CreditScoreGauge";

const features = [
  { icon: CreditCard, title: "Credit Monitoring", desc: "Track your credit across 1 or 3 bureaus with real-time alerts for any new activity." },
  { icon: Globe, title: "Dark Web & Breach Alerts", desc: "We scan the dark web 24/7 for your personal data, passwords, and credentials." },
  { icon: Fingerprint, title: "SSN Tracking", desc: "Know immediately if your Social Security Number is being used without your knowledge." },
  { icon: ShieldCheck, title: "$1M Identity Theft Insurance", desc: "US-based resolution specialists + up to $1M in coverage if the worst happens." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Built like a vault. Smart like an AI.</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Every layer of your digital identity, protected by intelligent automation.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="card-tech card-tech-hover rounded-2xl p-5 sm:p-7 relative overflow-hidden group">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-primary rounded-r-full shadow-[0_0_18px_hsl(var(--primary)/0.8)]" />
              <div className="flex items-start gap-4 sm:gap-5 pl-2 sm:pl-3">
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
