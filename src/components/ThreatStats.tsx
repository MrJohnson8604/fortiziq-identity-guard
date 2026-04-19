import { useEffect, useState } from "react";

const stats = [
  "16 Billion credentials leaked in 2025",
  "FBI reports $16B in cybercrime losses last year",
  "1 in 3 Americans have experienced identity theft",
];

const ThreatStats = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % stats.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 text-xs sm:text-sm">
        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse shrink-0" />
        <span key={i} className="text-foreground/85 font-medium animate-fade-in">
          {stats[i]}
        </span>
      </div>
    </div>
  );
};

export default ThreatStats;
