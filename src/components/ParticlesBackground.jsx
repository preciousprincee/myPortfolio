import { useMemo } from "react";
import { useSettings } from "@/hooks/useSettings";

const colors = ["#7C3AED", "#3B82F6", "#22D3EE"];

export default function ParticlesBackground() {
  const { settings } = useSettings();

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 10,
        color: colors[i % colors.length],
      })),
    []
  );

  if (!settings.particles) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full opacity-40"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-110vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
