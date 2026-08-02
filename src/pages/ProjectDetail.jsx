import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiOutlineArrowTopRightOnSquare, HiOutlineCodeBracket } from "react-icons/hi2";
import { projects } from "@/data/projects";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer } from "@/animations/variants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-display text-2xl">Project not found</p>
        <Link to="/" className="text-accent hover:underline">
          Back to devOS
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-24">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
        <HiArrowLeft className="h-4 w-4" />
        Back to devOS
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {project.categories.map((c) => (
            <span key={c} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-accent">
              {c}
            </span>
          ))}
        </div>
        <h1 className="mb-3 font-display text-4xl font-semibold">{project.name}</h1>
        <p className="mb-8 max-w-2xl text-ink-muted">{project.tagline}</p>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white"
            >
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4" /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
              <HiOutlineCodeBracket className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Section title="Overview" i={0}>{project.overview}</Section>
        <Section title="Problem" i={1}>{project.problem}</Section>
        <Section title="Solution" i={2}>{project.solution}</Section>
        <Section title="Architecture" i={3}>
          <List items={project.architecture} />
        </Section>
        <Section title="Tech Stack" i={4}>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Features" i={5}>
          <List items={project.features} />
        </Section>
        <Section title="Challenges" i={6}>
          <List items={project.challenges} />
        </Section>
        <Section title="Lessons Learned" i={7}>
          <List items={project.lessonsLearned} />
        </Section>
        <Section title="Roadmap" i={8}>
          <div className="flex flex-wrap gap-2">
            {project.roadmap.map((r) => (
              <span key={r} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-muted">
                {r}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Metrics" i={9}>
          <div className="flex flex-wrap gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-2xl text-gradient">{m.value}</p>
                <p className="text-xs uppercase tracking-wide text-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </motion.div>
    </div>
  );
}

function Section({ title, i, children }) {
  return (
    <motion.div variants={fadeUp} custom={i}>
      <GlassCard className="h-full">
        <h2 className="mb-3 font-display text-lg font-semibold">{title}</h2>
        {typeof children === "string" ? <p className="text-sm text-ink-muted">{children}</p> : children}
      </GlassCard>
    </motion.div>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-2 text-sm text-ink-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
