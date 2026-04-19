import { useEffect, useState } from "react";

const CreditScoreGauge = () => {
  const [score, setScore] = useState(580);
  useEffect(() => {
    const t = setInterval(() => {
      setScore((s) => (s >= 750 ? 580 : s + 5));
    }, 80);
    return () => clearInterval(t);
  }, []);

  // semicircle arc
  const min = 580;
  const max = 750;
  const pct = Math.min(1, Math.max(0, (score - min) / (max - min)));
  const angle = -180 + pct * 180; // -180 to 0
  const r = 80;
  const cx = 100;
  const cy = 100;
  const rad = (angle * Math.PI) / 180;
  const nx = cx + r * Math.cos(rad);
  const ny = cy + r * Math.sin(rad);

  // arc path full
  const arc = (start: number, end: number) => {
    const s = (start * Math.PI) / 180;
    const e = (end * Math.PI) / 180;
    return `M ${cx + r * Math.cos(s)} ${cy + r * Math.sin(s)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(e)} ${cy + r * Math.sin(e)}`;
  };

  return (
    <div className="card-tech rounded-2xl p-5 sm:p-6 max-w-sm mx-auto">
      <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-2">Live Credit Score</p>
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <defs>
          <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 84% 60%)" />
            <stop offset="50%" stopColor="hsl(45 100% 55%)" />
            <stop offset="100%" stopColor="hsl(150 80% 50%)" />
          </linearGradient>
        </defs>
        <path d={arc(-180, 0)} fill="none" stroke="hsl(var(--muted))" strokeWidth="14" strokeLinecap="round" />
        <path d={arc(-180, angle)} fill="none" stroke="url(#gauge-grad)" strokeWidth="14" strokeLinecap="round" />
        <circle cx={nx} cy={ny} r="7" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="3" />
        <text x="100" y="95" textAnchor="middle" className="fill-foreground font-display font-bold" fontSize="28">{score}</text>
        <text x="30" y="115" textAnchor="middle" className="fill-muted-foreground" fontSize="10">580</text>
        <text x="170" y="115" textAnchor="middle" className="fill-muted-foreground" fontSize="10">750</text>
      </svg>
      <p className="text-center text-xs text-muted-foreground mt-1">Visualized improvement with active monitoring</p>
    </div>
  );
};

export default CreditScoreGauge;
