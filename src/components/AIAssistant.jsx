import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiSparkles, HiXMark, HiPaperAirplane } from "react-icons/hi2";
import { profile } from "@/data/profile";
import { projects, featuredProject } from "@/data/projects";
import { skills } from "@/data/skills";

const suggestions = [
  "Who is Precious?",
  "Tell me about VendorIQ.",
  "Show React projects.",
  "Is he available?",
];

function answer(question) {
  const q = question.toLowerCase();

  if (q.includes("who is") || q.includes("about")) {
    return `${profile.name} is a ${profile.roles.join(", ")} based in ${profile.location}. ${profile.bio}`;
  }
  if (q.includes("vendoriq")) {
    return `${featuredProject.name} is ${featuredProject.tagline} It's currently ${featuredProject.progress}% complete, with "${featuredProject.nextMilestone}" as the next milestone.`;
  }
  if (q.includes("react") && q.includes("project")) {
    const matches = projects.filter((p) => p.techStack.includes("React"));
    return matches.length
      ? `Projects built with React: ${matches.map((p) => p.name).join(", ")}.`
      : "No projects tagged with React yet.";
  }
  if (q.includes("technolog") || q.includes("stack") || q.includes("skills")) {
    const top = skills.filter((s) => s.confidence >= 80).map((s) => s.name);
    return `Strongest technologies: ${top.join(", ")}. Full matrix is in the Skills section above.`;
  }
  if (q.includes("available") || q.includes("hire") || q.includes("opportunit")) {
    return `Yes — ${profile.status.toLowerCase()}. Use the Contact section or email ${profile.email} to reach out.`;
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return `You can reach Precious at ${profile.email}, or via the socials linked in the Contact section.`;
  }
  if (q.includes("project")) {
    return `Featured build: ${featuredProject.name}. Other projects: ${projects
      .filter((p) => !p.featured)
      .map((p) => p.name)
      .join(", ")}.`;
  }
  return `I can answer questions about Precious's background, projects, and skills — try asking about VendorIQ, his tech stack, or availability.`;
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hi, I'm the devOS assistant. Ask me anything about ${profile.name.split(" ")[0]}.` },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text) {
    if (!text.trim()) return;
    const userMsg = { role: "user", content: text };
    const reply = { role: "assistant", content: answer(text) };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-glow md:bottom-8 md:right-8"
        animate={{ boxShadow: ["0 0 20px rgba(124,58,237,0.4)", "0 0 40px rgba(34,211,238,0.5)", "0 0 20px rgba(124,58,237,0.4)"] }}
        transition={{ duration: 3, repeat: Infinity }}
        aria-label="Open AI Assistant"
      >
        {open ? <HiXMark className="h-6 w-6 text-white" /> : <HiSparkles className="h-6 w-6 text-white" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel fixed bottom-40 right-5 z-50 flex h-[440px] w-[min(92vw,360px)] flex-col overflow-hidden md:bottom-24 md:right-8"
          >
            <div className="flex items-center gap-2 border-b border-glass-border px-4 py-3">
              <HiSparkles className="h-4 w-4 text-accent" />
              <p className="text-sm font-medium">devOS Assistant</p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
                      m.role === "user" ? "bg-gradient-to-r from-primary to-secondary text-white" : "bg-white/8 text-ink-muted"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-ink-muted hover:text-ink"
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-glass-border px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-muted/60"
              />
              <button type="submit" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <HiPaperAirplane className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
