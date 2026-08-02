import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { projects, featuredProject } from "@/data/projects";
import { skills } from "@/data/skills";
import { experience, education } from "@/data/journey";
import { terminalHelp, motivationalQuotes } from "@/constants/terminal";
import { sectionViewport } from "@/animations/variants";
import { SectionHeading } from "@/sections/Dashboard";

const commandList = terminalHelp.map((h) => h.cmd);

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: "system", content: `devOS terminal v1.0 — type 'help' to see available commands.` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function print(content, type = "output") {
    setLines((prev) => [...prev, { type, content }]);
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [...h, raw]);
    setLines((prev) => [...prev, { type: "input", content: raw }]);

    switch (cmd) {
      case "help":
        terminalHelp.forEach((h) => print(`  ${h.cmd.padEnd(12)} — ${h.desc}`));
        break;
      case "about":
        print(`${profile.name} — ${profile.roles.join(" / ")}`);
        print(profile.bio);
        break;
      case "projects":
        projects.forEach((p) => print(`  ${p.name.padEnd(28)} ${p.tagline}`));
        break;
      case "vendoriq":
        print(`${featuredProject.name} — ${featuredProject.tagline}`);
        print(featuredProject.overview);
        print(`Progress: ${featuredProject.progress}% · Next: ${featuredProject.nextMilestone}`);
        break;
      case "skills":
        print(`Tracking ${skills.length} skills across Frontend, Backend, Databases, Cloud, AI, DevOps, and Languages.`);
        print(`Strongest: ${skills.filter((s) => s.confidence >= 85).map((s) => s.name).join(", ")}`);
        break;
      case "experience":
        experience.forEach((e) => print(`  ${e.period.padEnd(16)} ${e.title} @ ${e.org}`));
        break;
      case "education":
        print(education.degree);
        print(`Coursework: ${education.coursework.join(", ")}`);
        break;
      case "resume":
        print("Opening resume...");
        window.open(profile.resumeUrl, "_blank");
        break;
      case "github":
        print("Opening GitHub...");
        window.open(profile.socials.github, "_blank");
        break;
      case "linkedin":
        print("Opening LinkedIn...");
        window.open(profile.socials.linkedin, "_blank");
        break;
      case "contact":
        print(`Email: ${profile.email}`);
        print(`GitHub: ${profile.socials.github}`);
        print(`LinkedIn: ${profile.socials.linkedin}`);
        break;
      case "history":
        history.forEach((h, i) => print(`  ${i + 1}  ${h}`));
        break;
      case "clear":
        setLines([]);
        break;
      case "sudo hire precious":
        print("Permission Granted.", "system");
        print("Let's build something amazing.", "system");
        break;
      case "coffee":
        print("☕ Productivity Increased.", "system");
        break;
      case "motivate":
        print(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)], "system");
        break;
      default:
        print(`command not found: ${cmd} — type 'help' for a list of commands.`);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
      setHistoryIndex(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = commandList.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  }

  return (
    <section id="terminal" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Terminal" title="Ask the System Directly" description="Type help to see available commands. Try 'sudo hire precious'." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6 }}
        className="glass-panel overflow-hidden"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 border-b border-glass-border px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-xs text-ink-muted">precious@devos:~</span>
        </div>

        <div className="h-80 overflow-y-auto px-5 py-4 font-mono text-sm">
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.type === "input"
                  ? "text-ink"
                  : line.type === "system"
                  ? "text-accent"
                  : "whitespace-pre-wrap text-ink-muted"
              }
            >
              {line.type === "input" ? (
                <span>
                  <span className="text-primary">❯</span> {line.content}
                </span>
              ) : (
                line.content
              )}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-primary">❯</span>
            <input
              ref={inputRef}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full flex-1 bg-transparent text-ink outline-none"
              spellCheck={false}
              aria-label="Terminal input"
            />
            <span className="h-4 w-2 animate-blink bg-accent" />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </section>
  );
}
