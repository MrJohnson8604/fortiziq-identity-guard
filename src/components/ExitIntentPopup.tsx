import { useEffect, useState } from "react";
import { X, ShieldAlert } from "lucide-react";

const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("fortiziq_exit_shown")) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem("fortiziq_exit_shown", "1");
        setOpen(true);
        document.removeEventListener("mouseout", handler);
      }
    };
    const t = setTimeout(() => document.addEventListener("mouseout", handler), 3000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", handler);
    };
  }, []);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(PLATINUM_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-up">
      <div className="relative max-w-md w-full rounded-3xl bg-card border-2 border-primary glow-cyan p-7 sm:p-8">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/40 inline-flex items-center justify-center"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/40 flex items-center justify-center">
            <ShieldAlert className="h-7 w-7 text-primary" />
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
          Wait — Is Your Info Already on the <span className="text-cyan-glow">Dark Web?</span>
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-6">
          Thousands of credentials are leaked daily. Don't leave without protecting yourself.
        </p>

        <form onSubmit={submit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full bg-input border border-primary/25 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow"
          >
            Protect Me Now
          </button>
        </form>

        <button
          onClick={() => setOpen(false)}
          className="block mx-auto mt-4 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
        >
          No thanks, I'll take my chances
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
