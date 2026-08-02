import { useEffect, useRef } from "react";
import { useSettings } from "@/hooks/useSettings";

export default function CursorGlow() {
  const ref = useRef(null);
  const { settings } = useSettings();

  useEffect(() => {
    if (!settings.cursorGlow) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      el.style.transform = `translate3d(${mouseX - 200}px, ${mouseY - 200}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [settings.cursorGlow]);

  if (!settings.cursorGlow) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] md:block"
      aria-hidden="true"
    />
  );
}
