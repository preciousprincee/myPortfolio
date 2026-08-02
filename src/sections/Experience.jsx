import { motion } from "framer-motion";
import { experience } from "@/data/journey";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer, sectionViewport } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

export default function Experience() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="Experience" title="What I've Built & Shipped" description="Achievements, not job titles." />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={sectionViewport} className="space-y-5">
        {experience.map((entry, i) => (
          <motion.div key={entry.title} variants={fadeUp} custom={i}>
            <GlassCard hover={false}>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">{entry.title}</h3>
                  <p className="text-sm text-ink-muted">
                    {entry.org} · <span className="text-accent">{entry.type}</span>
                  </p>
                </div>
                <span className="font-mono text-xs text-ink-muted">{entry.period}</span>
              </div>
              <ul className="space-y-1.5 text-sm text-ink-muted">
                {entry.achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
