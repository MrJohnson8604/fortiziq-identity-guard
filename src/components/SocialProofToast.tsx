import { useEffect, useMemo, useState } from "react";
import { Lock, X } from "lucide-react";

const NAMES = [
  "Marcus from Houston",
  "Jennifer from Atlanta",
  "David from Phoenix",
  "Tanya from Chicago",
  "Robert from Dallas",
  "Michelle from Miami",
  "Carlos from San Antonio",
  "Lisa from Charlotte",
  "James from Orlando",
  "Stephanie from Las Vegas",
  "Kevin from Denver",
  "Angela from Nashville",
  "Brian from Seattle",
  "Monica from Philadelphia",
  "Andre from Detroit",
  "Rachel from Austin",
  "Tyler from Jacksonville",
  "Denise from Memphis",
  "Eric from Baltimore",
  "Sandra from Columbus",
];

const buildSequence = () => {
  const MIN_GAP = 3;
  const result: { name: string; plan: string }[] = [];
  const recent: string[] = [];
  const pool = [...NAMES];
  // shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Build a long sequence (4 cycles) respecting min gap
  const target = NAMES.length * 4;
  let plan: "Gold" | "Platinum" = Math.random() > 0.5 ? "Platinum" : "Gold";
  while (result.length < target) {
    const candidates = NAMES.filter((n) => !recent.includes(n));
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    result.push({ name: pick, plan });
    recent.push(pick);
    if (recent.length > MIN_GAP) recent.shift();
    plan = plan === "Gold" ? "Platinum" : "Gold";
  }
  return result;
};

const SocialProofToast = () => {
  const sequence = useMemo(buildSequence, []);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || !visible) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((v) => (v + 1) % sequence.length);
        setVisible(true);
      }, 400);
    }, 25000);
    return () => clearInterval(cycle);
  }, [visible, dismissed, sequence.length]);

  if (dismissed) return null;
  const current = sequence[idx];

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] sm:max-w-sm transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="card-tech rounded-xl pl-4 pr-3 py-3 flex items-center gap-3 border-l-4 border-l-primary shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)]">
        <div className="shrink-0 w-9 h-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
          <Lock className="h-4 w-4 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground truncate">
            {current.name}
          </p>
          <p className="text-xs text-muted-foreground">
            just subscribed to <span className="text-primary font-semibold">{current.plan}</span>
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 text-muted-foreground hover:text-foreground p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;
