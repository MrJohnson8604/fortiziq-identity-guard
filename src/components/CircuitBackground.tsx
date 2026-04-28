const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-secondary/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

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
