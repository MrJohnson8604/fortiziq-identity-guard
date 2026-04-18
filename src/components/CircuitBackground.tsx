const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-secondary/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(194 100% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(194 100% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(194 100% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={`${i * 18}%`}
            y1="0%"
            x2={`${i * 18 + 30}%`}
            y2="100%"
            stroke="url(#circuit-grad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-circuit"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </svg>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animation: `pulse-glow ${2 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default CircuitBackground;
