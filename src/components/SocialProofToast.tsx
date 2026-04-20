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

const ACTIONS = [
  "just subscribed to Platinum",
  "just subscribed to Gold",
  "just upgraded to Platinum",
];

// Shuffled order with min gap of 3 before any name repeats.
// Since each name appears once in a single shuffled pass, gap is naturally satisfied.
// We generate a long sequence by concatenating reshuffles, ensuring last 3 of prev
// pass don't appear in first 3 of next pass.
const buildSequence = (pool: string[], passes = 4): string[] => {
  const shuffle = (arr: string[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  let seq: string[] = shuffle(pool);
  for (let p = 1; p < passes; p++) {
    let next = shuffle(pool);
    const recent = seq.slice(-3);
    let attempts = 0;
    while (next.slice(0, 3).some((n) => recent.includes(n)) && attempts < 50) {
      next = shuffle(pool);
      attempts++;
    }
    seq = seq.concat(next);
  }
  return seq;
};

const SocialProofToast = () => {
  const sequence = useMemo(() => buildSequence(NAMES), []);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);

  const message = useMemo(() => {
    const name = sequence[i % sequence.length];
    const action = ACTIONS[i % ACTIONS.length];
    return `${name} ${action}`;
  }, [i, sequence]);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 6000);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % sequence.length);
        setVisible(true);
      }, 500);
    }, 25000);
    return () => {
      clearTimeout(show);
      clearInterval(cycle);
    };
  }, [sequence.length]);

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-[280px] sm:max-w-xs transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="card-tech rounded-xl px-4 py-3 border-l-4 border-l-primary flex items-start gap-3 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
        <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
          <Lock className="h-3.5 w-3.5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-foreground/90 leading-snug">{message}</p>
          <p className="text-[10px] text-muted-foreground mt-1">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
