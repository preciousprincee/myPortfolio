import { motion } from "framer-motion";
import { journey } from "@/data/journey";
import { sectionViewport } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Journey" title="How I Got Here" />

      <div className="relative border-l border-white/10 pl-8">
        {journey.map((event, i) => (
          <motion.div
            key={`${event.year}-${event.title}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bg">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
            </span>
            <p className="eyebrow mb-1">{event.year}</p>
            <h3 className="mb-1 font-display text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-ink-muted">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
