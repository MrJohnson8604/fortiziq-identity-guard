import { useEffect, useState } from "react";

const stats = [
  "16 Billion credentials leaked in 2025",
  "FBI reports $16B in cybercrime losses last year",
  "1 in 3 Americans have experienced identity theft",
];

const ThreatStats = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % stats.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mx-auto mb-6 sm:mb-8 max-w-xl h-7 flex items-center justify-center">
      <div key={i} className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground animate-fade-up">
        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse shadow-[0_0_10px_hsl(var(--destructive))]" />
        <span className="font-medium">{stats[i]}</span>
      </div>
    </div>
  );
};

export default ThreatStats;
