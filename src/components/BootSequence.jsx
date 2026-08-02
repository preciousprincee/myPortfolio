import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bootLines } from "@/constants/terminal";

export default function BootSequence({ onComplete, skip = false }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(skip);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }
    if (lineIndex >= bootLines.length) {
      const t = setTimeout(() => {
        setDone(true);
        onComplete();
      }, 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 280);
    return () => clearTimeout(t);
  }, [lineIndex, skip, onComplete]);

  if (skip) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative w-[min(90vw,520px)] font-mono text-sm text-accent">
            <div className="mb-4 flex items-center gap-2 text-ink-muted">
              <span className="h-2 w-2 animate-pulseGlow rounded-full bg-accent" />
              devOS boot sequence
            </div>
            <div className="space-y-2">
              {bootLines.slice(0, lineIndex).map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={i === bootLines.length - 1 ? "text-ink" : "text-ink-muted"}
                >
                  <span className="text-primary">{">"}</span> {line}
                </motion.div>
              ))}
            </div>
            <motion.span
              className="mt-2 inline-block h-4 w-2 bg-accent align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
