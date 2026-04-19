import { useEffect, useState } from "react";

const CreditScoreGauge = () => {
  const [score, setScore] = useState(580);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(580 + (750 - 580) * eased));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // semicircle: 180deg -> 0deg as score goes 580 -> 750
  const pct = (score - 580) / (750 - 580);
  const angle = 180 - pct * 180; // needle angle in degrees
  const r = 80;
  const cx = 100;
  const cy = 100;
  // arc from (20,100) to (180,100)
  const dashTotal = Math.PI * r;
  const dashFill = dashTotal * pct;

  return (
    <div className="card-tech rounded-2xl p-5 sm:p-6 max-w-xs mx-auto mt-6">
      <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-2">Credit Score</p>
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="gauge-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(var(--destructive))" />
            <stop offset="50%" stopColor="hsl(45 100% 55%)" />
            <stop offset="100%" stopColor="hsl(142 70% 50%)" />
          </linearGradient>
        </defs>
        {/* track */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="hsl(var(--muted))"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        {/* progress */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="url(#gauge-grad)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dashFill} ${dashTotal}`}
          style={{ transition: "stroke-dasharray 0.1s linear" }}
        />
        {/* needle */}
        <g transform={`rotate(${-angle + 180} ${cx} ${cy})`}>
          <line x1={cx} y1={cy} x2={cx + r - 8} y2={cy} stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="6" fill="hsl(var(--primary))" />
        </g>
        <text x="20" y="118" fontSize="10" fill="hsl(var(--muted-foreground))">580</text>
        <text x="170" y="118" fontSize="10" fill="hsl(var(--muted-foreground))">750</text>
      </svg>
      <p className="font-display text-3xl font-bold text-center text-chrome -mt-2">{score}</p>
      <p className="text-xs text-center text-primary mt-1">Track every change in real time</p>
    </div>
  );
};

export default CreditScoreGauge;
