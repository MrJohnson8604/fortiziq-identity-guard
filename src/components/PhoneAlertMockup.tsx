import { AlertTriangle } from "lucide-react";

const PhoneAlertMockup = () => {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[260px] animate-float-slow">
      <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" aria-hidden />
      <div className="relative rounded-[2.5rem] border-[10px] border-card bg-background shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.4)] p-3">
        {/* notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-2xl" />
        <div className="rounded-[1.75rem] bg-gradient-to-b from-card to-background min-h-[420px] p-4 pt-10">
          <p className="text-[10px] text-muted-foreground text-center mb-3">9:41 AM</p>
          <div className="card-tech rounded-2xl p-4 border-l-4 border-l-primary animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center">
                <AlertTriangle className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-primary">FortizIQ</p>
                <p className="text-[9px] text-muted-foreground">now</p>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-foreground mb-1">⚠️ Dark web activity detected</p>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Your email was found in a breach. Tap to review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAlertMockup;
