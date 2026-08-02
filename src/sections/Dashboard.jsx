import { motion } from "framer-motion";
import { HiOutlineMapPin, HiOutlineRocketLaunch, HiOutlineSignal, HiOutlineAcademicCap } from "react-icons/hi2";
import { profile, primaryStack, currentlyLearning } from "@/data/profile";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer, sectionViewport } from "@/animations/variants";

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Mission Control" title="System Status" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeUp} custom={0}>
          <GlassCard className="h-full">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <HiOutlineSignal className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wide text-ink-muted">Current Status</span>
            </div>
            <p className="flex items-center gap-2 font-medium">
              <span className="h-2 w-2 animate-pulseGlow rounded-full bg-emerald-400" />
              {profile.status}
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <GlassCard className="h-full">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <HiOutlineMapPin className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wide text-ink-muted">Location</span>
            </div>
            <p className="font-medium">{profile.location}</p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <GlassCard className="h-full">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <HiOutlineRocketLaunch className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wide text-ink-muted">Current Mission</span>
            </div>
            <p className="font-medium">{profile.currentMission}</p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={3}>
          <GlassCard className="h-full">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <HiOutlineAcademicCap className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wide text-ink-muted">Education</span>
            </div>
            <p className="font-medium leading-snug">{profile.education}</p>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="sm:col-span-2">
          <GlassCard className="h-full">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-wide text-ink-muted">Years Coding</span>
              <span className="font-display text-4xl text-gradient">{profile.yearsCoding}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-wide text-ink-muted">Projects Built</span>
              <span className="font-display text-4xl text-gradient">{profile.projectsBuilt}</span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={5} className="sm:col-span-2">
          <GlassCard className="h-full">
            <span className="mb-3 block text-xs uppercase tracking-wide text-ink-muted">Primary Stack</span>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-ink">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={6} className="sm:col-span-2 lg:col-span-4">
          <GlassCard className="h-full">
            <span className="mb-3 block text-xs uppercase tracking-wide text-ink-muted">Currently Learning</span>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {topic}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>}
    </motion.div>
  );
}
