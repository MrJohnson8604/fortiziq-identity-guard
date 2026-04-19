import { useEffect, useState } from "react";
import { ShieldAlert, X } from "lucide-react";

const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";
const KEY = "fortiziq_exit_intent_shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(KEY)) {
        setOpen(true);
        sessionStorage.setItem(KEY, "1");
      }
    };
    // Delay attach so it doesn't fire immediately
    const t = setTimeout(() => document.addEventListener("mouseleave", handler), 3000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", handler);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-2xl bg-card border-2 border-primary glow-cyan p-6 sm:p-8 animate-scale-in">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
            <ShieldAlert className="h-7 w-7 text-primary" />
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3 leading-tight">
          Wait — Is Your Info Already on the <span className="text-cyan-glow">Dark Web?</span>
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-6">
          Thousands of credentials are leaked daily. Don't leave without protecting yourself.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(PLATINUM_URL, "_blank", "noopener,noreferrer");
            setOpen(false);
          }}
          className="space-y-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full bg-input border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 text-sm"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow"
          >
            Protect Me Now
          </button>
        </form>

        <button
          onClick={() => setOpen(false)}
          className="block mx-auto mt-4 text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
        >
          No thanks, I'll take my chances
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
