import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare, HiOutlineCodeBracket, HiOutlineDocumentText } from "react-icons/hi2";
import { featuredProject } from "@/data/projects";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer, sectionViewport } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

export default function FeaturedProject() {
  const p = featuredProject;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Featured Build" title={p.name} description={p.tagline} />

      {/* Live build widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <GlassCard hover={false} className="border-primary/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="eyebrow mb-1">Current Build</p>
              <p className="font-display text-xl font-semibold">{p.name}</p>
            </div>
            <div className="flex items-center  gap-3">
              <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 75 }}
                  whileInView={{ width: `${p.progress}%` }}
                  viewport={sectionViewport}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-sm text-accent">{p.progress}%</span>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs uppercase tracking-wide text-ink-muted">Next Milestone</p>
              <p className="text-sm">{p.nextMilestone}</p>
            </div>
         <div>
  <p className="mb-2 text-xs uppercase tracking-wide text-ink-muted">
    Upcoming Features
  </p>

  <div className="flex flex-wrap gap-2">
    {p.upcoming?.map((u) => (
      <span
        key={u}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-muted transition-colors hover:border-primary/40 hover:text-white"
      >
        {u}
      </span>
    ))}
  </div>
</div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="grid grid-cols-1 gap-5 lg:grid-cols-3"
      >
        <Block title="Overview" i={0}>{p.overview}</Block>
        <Block title="Problem" i={1}>{p.problem}</Block>
        <Block title="Solution" i={2}>{p.solution}</Block>

        <motion.div variants={fadeUp} custom={3} className="lg:col-span-2">
          <GlassCard className="h-full">
            <h3 className="mb-3 font-display text-lg font-semibold">Architecture</h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              {p.architecture.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <GlassCard className="h-full">
            <h3 className="mb-3 font-display text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <Block title="Features" i={5}>
          <ul className="space-y-2 text-sm text-ink-muted">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Challenges" i={6}>
          <ul className="space-y-2 text-sm text-ink-muted">
            {p.challenges.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Lessons Learned" i={7}>
          <ul className="space-y-2 text-sm text-ink-muted">
            {p.lessonsLearned.map((l) => (
              <li key={l} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {l}
              </li>
            ))}
          </ul>
        </Block>

        <motion.div variants={fadeUp} custom={8} className="lg:col-span-3">
          <GlassCard className="h-full">
            <h3 className="mb-4 font-display text-lg font-semibold">Metrics & Roadmap</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-wrap gap-6">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl text-gradient">{m.value}</p>
                    <p className="text-xs uppercase tracking-wide text-ink-muted">{m.label}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-ink-muted">Roadmap</p>
                <div className="flex flex-wrap gap-2">
                  {p.roadmap.map((r) => (
                    <span key={r} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-muted">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href={p.links.demo}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
        >
          <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
          Live Demo
        </a>
        <a
          href={p.links.github}
          className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/15"
        >
          <HiOutlineCodeBracket className="h-4 w-4" />
          GitHub
        </a>
        <Link
          to={`/projects/${p.id}`}
          className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          <HiOutlineDocumentText className="h-4 w-4" />
          Case Study
        </Link>
      </motion.div>
    </section>
  );
}

function Block({ title, i, children }) {
  return (
    <motion.div variants={fadeUp} custom={i}>
      <GlassCard className="h-full">
        <h3 className="mb-3 font-display text-lg font-semibold">{title}</h3>
        {typeof children === "string" ? <p className="text-sm text-ink-muted">{children}</p> : children}
      </GlassCard>
    </motion.div>
  );
}
