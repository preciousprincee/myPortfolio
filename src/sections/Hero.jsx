import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineArrowDownTray } from "react-icons/hi2";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/animations/variants";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-0 mt-0">
      {/* Liquid orb + gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-primary/30 blur-[140px]" />
        <div className="absolute right-1/4 top-1/4 h-[360px] w-[360px] animate-float rounded-full bg-secondary/25 blur-[120px]" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] animate-float rounded-full bg-accent/20 blur-[110px]" style={{ animationDelay: "3s" }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          System Ready · {profile.location}
        </motion.p>

        <motion.h1 variants={fadeUp} className="font-display text-4xl font-semibold leading-[1.1] sm:text-6xl md:text-7xl">
          Hello, I'm
          <br />
          <span className="text-gradient text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-7xl">{profile.name}</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-accent sm:text-base">
          {profile.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-2">
              {i > 0 && <span className="text-ink-muted/50">·</span>}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
          {profile.bio}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#dashboard"
            className="glow-border rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
          >
            Explore System
          </a>
          <a
            href="#projects"
            className="glass rounded-full px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/15"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <HiOutlineArrowDownTray className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#dashboard"
        aria-label="Scroll to dashboard"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
