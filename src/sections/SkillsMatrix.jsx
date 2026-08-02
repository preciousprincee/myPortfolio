import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import GlassCard from "@/components/GlassCard";
import { fadeUp, staggerContainer, sectionViewport } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

const categoryOrder = ["Frontend", "Backend", "Databases", "Cloud", "AI", "DevOps", "Languages"];

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hovered, setHovered] = useState(null);

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Skills Matrix" title="What I Work With" description="Hover a skill to see confidence and where it's been used." />

      <div className="mb-8 flex flex-wrap gap-2">
        {categoryOrder.map((cat) => (
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

      <motion.div
        key={activeCategory}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={fadeUp}
            custom={i}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <GlassCard className="h-full">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-medium">{skill.name}</p>
                <span className="font-mono text-xs text-ink-muted">{skill.years}y</span>
              </div>
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
  initial={{ width: 0 }}
  animate={{ width: `${skill.confidence}%` }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    delay: i * 0.08,
  }}
/>
              </div>
              <motion.div
                initial={false}
                animate={{ height: hovered === skill.name ? "auto" : 0, opacity: hovered === skill.name ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pt-1 text-xs text-ink-muted">Used in: {skill.usedIn.join(", ")}</p>
              </motion.div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
