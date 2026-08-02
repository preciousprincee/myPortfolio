import { motion } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import GlassCard from "@/components/GlassCard";
import { sectionViewport, fadeUp, staggerContainer } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

// Illustrative activity data — connect to the GitHub API for live stats.
const commitActivity = [
  { month: "Feb", commits: 42 },
  { month: "Mar", commits: 68 },
  { month: "Apr", commits: 51 },
  { month: "May", commits: 89 },
  { month: "Jun", commits: 76 },
  { month: "Jul", commits: 104 },
];

const languageUsage = [
  { name: "JavaScript", value: 46 },
  { name: "Python", value: 30 },
  { name: "HTML/CSS", value: 16 },
  { name: "Solidity", value: 8 },
];

const heatmapWeeks = 26;
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Analytics() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Analytics" title="Build Activity" description="A snapshot of coding activity — illustrative data, wire up the GitHub API for live numbers." />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={sectionViewport} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <motion.div variants={fadeUp} custom={0} className="lg:col-span-2">
          <GlassCard hover={false} className="h-full">
            <h3 className="mb-4 font-display text-lg font-semibold">Commit Activity</h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={commitActivity}>
                <defs>
                  <linearGradient id="commitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#B8C1D1" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "#0B0F1F", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12 }}
                  labelStyle={{ color: "#B8C1D1" }}
                />
                <Area type="monotone" dataKey="commits" stroke="#7C3AED" strokeWidth={2} fill="url(#commitGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <GlassCard hover={false} className="h-full">
            <h3 className="mb-4 font-display text-lg font-semibold">Language Usage</h3>
            <div className="space-y-3">
              {languageUsage.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-ink-muted">{lang.name}</span>
                    <span className="text-ink-muted">{lang.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                      style={{ width: `${lang.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={2} className="lg:col-span-2">
          <GlassCard hover={false} className="h-full">
            <h3 className="mb-4 font-display text-lg font-semibold">Contribution Graph</h3>
            <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
              {Array.from({ length: heatmapWeeks * 7 }).map((_, i) => {
                const intensity = seededRandom(i + 1);
                const opacity = intensity > 0.75 ? 1 : intensity > 0.5 ? 0.7 : intensity > 0.3 ? 0.4 : 0.12;
                return (
                  <div
                    key={i}
                    className="h-3 w-3 rounded-sm"
                    style={{ background: `rgba(124, 58, 237, ${opacity})` }}
                  />
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp} custom={3}>
          <GlassCard hover={false} className="h-full">
            <h3 className="mb-4 font-display text-lg font-semibold">Coding Streak</h3>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={commitActivity}>
                <XAxis dataKey="month" stroke="#B8C1D1" fontSize={11} tickLine={false} axisLine={false} />
                <Bar dataKey="commits" radius={[6, 6, 0, 0]} fill="#22D3EE" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
