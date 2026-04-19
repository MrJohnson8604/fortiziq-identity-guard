import { Radar, BellRing, ShieldCheck } from "lucide-react";
import PhoneAlertMockup from "./PhoneAlertMockup";

const steps = [
  { icon: Radar, title: "We Monitor", desc: "Continuous surveillance across the dark web, all three credit bureaus, and SSN activity — 24/7." },
  { icon: BellRing, title: "We Alert", desc: "Real-time notifications the moment something changes, so you can act before damage is done." },
  { icon: ShieldCheck, title: "We Restore", desc: "US-based recovery specialists handle the entire restoration process end to end on your behalf." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 sm:py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it Works</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Protection in three intelligent steps</h2>
          <p className="text-muted-foreground text-base sm:text-lg">A complete identity defense system, working silently in the background.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <div key={s.title} className="card-tech card-tech-hover rounded-2xl p-6 sm:p-8 relative">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                </div>
                <span className="font-display text-4xl sm:text-5xl font-bold text-chrome opacity-40">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-20 flex flex-col items-center">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-6">Real Alert. Real Time.</p>
          <PhoneAlertMockup />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
