import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineSquares2X2, HiOutlineCpuChip, HiOutlineCommandLine, HiOutlineEnvelope, HiOutlineCog } from "react-icons/hi2";

const dockItems = [
  { label: "Home", href: "#home", icon: HiOutlineHome },
  { label: "Projects", href: "#projects", icon: HiOutlineSquares2X2 },
  { label: "Skills", href: "#skills", icon: HiOutlineCpuChip },
  { label: "Terminal", href: "#terminal", icon: HiOutlineCommandLine },
  { label: "Contact", href: "#contact", icon: HiOutlineEnvelope },
];

export default function Dock() {
  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="glass fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-2 shadow-glass md:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      {dockItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors active:bg-white/15 active:text-ink"
        >
          <item.icon className="h-5 w-5" />
        </a>
      ))}
      <Link
        to="/settings"
        aria-label="Settings"
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors active:bg-white/15 active:text-ink"
      >
        <HiOutlineCog className="h-5 w-5" />
      </Link>
    </motion.nav>
  );
}
