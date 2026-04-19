import { AlertTriangle, ShieldCheck } from "lucide-react";

const PhoneAlert = () => {
  return (
    <div className="relative mx-auto w-[230px] sm:w-[260px] animate-float-slow">
      <div className="rounded-[2.5rem] border-[10px] border-foreground/10 bg-background shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.4)] overflow-hidden">
        <div className="bg-gradient-to-b from-card to-background p-4 h-[440px] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/10 rounded-b-2xl" />
          <div className="pt-6 flex items-center justify-between text-[10px] text-muted-foreground mb-4">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>FortizIQ</span>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-destructive/40 p-3 mb-3 animate-fade-up">
            <div className="flex items-center gap-2 mb-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
              <span className="text-[10px] font-bold text-destructive uppercase tracking-wider">Alert</span>
              <span className="text-[10px] text-muted-foreground ml-auto">now</span>
            </div>
            <p className="text-xs text-foreground leading-snug">
              ⚠️ Dark web activity detected — your email was found in a breach. Tap to review.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-primary/30 p-3 mb-3" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Resolved</span>
              <span className="text-[10px] text-muted-foreground ml-auto">2m ago</span>
            </div>
            <p className="text-xs text-foreground/80 leading-snug">
              Credit freeze placed on Equifax. You're protected.
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-primary/10 border border-primary/30 p-2.5 text-center">
            <p className="text-[10px] text-primary font-semibold">Identity Status: Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAlert;
