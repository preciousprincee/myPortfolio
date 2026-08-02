import { motion } from "framer-motion";
import clsx from "@/utils/clsx";

export default function GlassCard({ children, hover = true, className, ...rest }) {
  return (
    <motion.div
      className={clsx(
        "glass-panel p-6",
        hover && "transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
