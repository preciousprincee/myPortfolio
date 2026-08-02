import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { education } from "@/data/journey";
import GlassCard from "@/components/GlassCard";
import { sectionViewport } from "@/animations/variants";

export default function Education() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6 }}
      >
        <GlassCard hover={false}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <HiOutlineAcademicCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-accent">
                {education.institution} · {education.period}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{education.goal}</p>

              <p className="mb-2 mt-5 text-xs uppercase tracking-wide text-ink-muted">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {course}
                  </span>
                ))}
              </div>

              {education.priorEducation && (
                <>
                  <p className="mb-2 mt-5 text-xs uppercase tracking-wide text-ink-muted">Prior Education</p>
                  <ul className="space-y-1.5 text-sm text-ink-muted">
                    {education.priorEducation.map((p) => (
                      <li key={p.degree} className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-ink">{p.degree}</span>
                        <span className="text-xs">
                          — {p.institution} · {p.period}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
