import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMagnifyingGlass, HiOutlineArrowTopRightOnSquare, HiOutlineCodeBracket } from "react-icons/hi2";
import { projects } from "@/data/projects";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

const categories = ["Web Apps", "AI", "Backend", "Blockchain", "Data"];

export default function ProjectsGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.categories.includes(activeCategory);
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Project Database" title="Things I've Built" description="Searchable and filterable — like a real database, because it is one." />

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5 sm:w-72">
          <HiOutlineMagnifyingGlass className="h-4 w-4 text-ink-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, stack..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-ink-muted/60"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === cat ? "bg-gradient-to-r from-primary to-secondary text-white" : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeCategory + query}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div key={p.id} variants={fadeUp} custom={i} layout exit={{ opacity: 0, scale: 0.95 }}>
              <GlassCard className="flex h-full flex-col">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {p.categories.map((c) => (
                    <span key={c} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-accent">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mb-4 flex-1 text-sm text-ink-muted">{p.tagline}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  {p.links.demo && (
                    <a href={p.links.demo} className="flex items-center gap-1.5 text-accent hover:underline">
                      <HiOutlineArrowTopRightOnSquare className="h-3.5 w-3.5" /> Demo
                    </a>
                  )}
                  {p.links.github && (
                    <a href={p.links.github} className="flex items-center gap-1.5 text-ink-muted hover:text-ink">
                      <HiOutlineCodeBracket className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  <Link to={`/projects/${p.id}`} className="ml-auto text-ink-muted hover:text-ink">
                    Open →
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <p className="col-span-full py-12 text-center text-ink-muted">No projects match that search. Try a different keyword or category.</p>
        )}
      </motion.div>
    </section>
  );
}
