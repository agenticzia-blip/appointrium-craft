import { useMemo } from "react";

const ParticlesBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 10 + 6,
        opacity: Math.random() * 0.45 + 0.2,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-foreground animate-float"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.left + "%",
            top: p.top + "%",
            animationDelay: p.delay + "s",
            animationDuration: p.duration + "s",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
