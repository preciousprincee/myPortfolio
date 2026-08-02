import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from "react-icons/hi2";
import { profile } from "@/data/profile";
import GlassCard from "@/components/GlassCard";
import { sectionViewport } from "@/animations/variants";
import { SectionHeading } from "./Dashboard";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // No backend — wire this up to an email service (e.g. Formspree, Resend) when ready.
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Contact" title="Let's Build Something" description="Have a role, a project, or just want to talk shop? Reach out." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <GlassCard hover={false}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <p className="mb-2 font-display text-xl">Message sent.</p>
              <p className="text-sm text-ink-muted">Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink-muted">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink-muted">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink-muted">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
              >
                Send Message
                <HiOutlinePaperAirplane className="h-4 w-4" />
              </button>
            </form>
          )}
        </GlassCard>

        <GlassCard hover={false} className="flex flex-col justify-between">
          <div>
            <p className="mb-1 text-xs uppercase tracking-wide text-ink-muted">Direct</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm hover:text-accent">
              <HiOutlineEnvelope className="h-4 w-4" />
              {profile.email}
            </a>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-wide text-ink-muted">Elsewhere</p>
            <div className="flex gap-3">
              <SocialLink href={profile.socials.github} icon={<FaGithub className="h-5 w-5" />} />
              <SocialLink href={profile.socials.linkedin} icon={<FaLinkedin className="h-5 w-5" />} />
              <SocialLink href={profile.socials.x} icon={<FaXTwitter className="h-5 w-5" />} />
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/15 hover:text-accent"
    >
      {icon}
    </a>
  );
}
