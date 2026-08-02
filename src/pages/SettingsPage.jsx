import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi2";
import { useSettings } from "@/hooks/useSettings";
import GlassCard from "@/components/GlassCard";

const accentOptions = [
  { label: "Cyan", value: "#22D3EE" },
  { label: "Violet", value: "#7C3AED" },
  { label: "Blue", value: "#3B82F6" },
  { label: "Emerald", value: "#34D399" },
];

export default function SettingsPage() {
  const { settings, update } = useSettings();

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-28">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
        <HiArrowLeft className="h-4 w-4" />
        Back to devOS
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="eyebrow mb-3">System</p>
        <h1 className="mb-8 font-display text-3xl font-semibold">Settings</h1>

        <GlassCard hover={false} className="space-y-6">
          <Toggle
            label="Particles"
            description="Ambient floating particles in the background."
            checked={settings.particles}
            onChange={(v) => update({ particles: v })}
          />
          <Toggle
            label="Reduce Animations"
            description="Minimizes motion across the whole site."
            checked={settings.reducedAnimations}
            onChange={(v) => update({ reducedAnimations: v })}
          />
          <Toggle
            label="Cursor Glow"
            description="A soft glow that follows your cursor on desktop."
            checked={settings.cursorGlow}
            onChange={(v) => update({ cursorGlow: v })}
          />
          <Toggle
            label="Recruiter Mode"
            description="Simplified, distraction-free view for reviewing quickly."
            checked={settings.recruiterMode}
            onChange={(v) => update({ recruiterMode: v })}
          />

          <div>
            <p className="mb-1 font-medium">Accent Color</p>
            <p className="mb-3 text-sm text-ink-muted">Personalize the system accent used across highlights.</p>
            <div className="flex gap-3">
              {accentOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update({ accentColor: opt.value })}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform hover:scale-110"
                  style={{
                    background: opt.value,
                    borderColor: settings.accentColor === opt.value ? "#fff" : "transparent",
                  }}
                  aria-label={opt.label}
                  title={opt.label}
                />
              ))}
            </div>
          </div>
        </GlassCard>

        <p className="mt-4 text-xs text-ink-muted">Preferences are saved locally in your browser.</p>
      </motion.div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-ink-muted">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${
          checked ? "border-primary/50 bg-primary" : "border-white/20 bg-white/15"
        }`}
      >
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
