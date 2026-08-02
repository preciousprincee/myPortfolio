import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineTerminal, HiOutlineUserCircle, HiOutlineCog } from "react-icons/hi";
import { useSettings } from "@/hooks/useSettings";

const links = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { settings, toggleRecruiterMode } = useSettings();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block"
    >
      <nav
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "shadow-glass" : ""
        }`}
      >
        <a href="#home" className="mr-2 flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-sm font-semibold">
          <span className="text-accent">⌘</span> devOS
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-white/10 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <div className="mx-1 h-5 w-px bg-white/10" />
        <button
          onClick={toggleRecruiterMode}
          title="Toggle Recruiter Mode"
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
            settings.recruiterMode ? "bg-primary/30 text-ink" : "text-ink-muted hover:bg-white/10 hover:text-ink"
          }`}
        >
          <HiOutlineUserCircle className="h-4 w-4" />
          Recruiter
        </button>
        <a
          href="#terminal"
          className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-ink transition-colors hover:bg-white/20"
        >
          <HiOutlineTerminal className="h-4 w-4" />
        </a>
        <Link
          to="/settings"
          title="Settings"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-white/10 hover:text-ink"
        >
          <HiOutlineCog className="h-4 w-4" />
        </Link>
      </nav>
    </motion.header>
  );
}
