# devOS — Precious Ogbonnaya

A portfolio built as a fictional "operating system" — a boot sequence, a Mission
Control dashboard, a searchable project database, a live terminal, and a local
AI assistant, all wrapped in a dark, glass, neon-accented UI.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. Production build:

```bash
npm run build
npm run preview
```

## Editing your content

Everything you'd want to change lives in `src/data/`, as plain JavaScript objects
— no CMS, no backend:

- `src/data/profile.ts` — name, roles, location, bio, socials, resume path
- `src/data/projects.ts` — every project, including the featured VendorIQ
  case study (overview, problem, solution, architecture, stack, features,
  challenges, lessons, roadmap, metrics)
- `src/data/skills.ts` — the skills matrix (category, years, confidence, used-in)
- `src/data/journey.ts` — the journey timeline, education, and experience entries

The Terminal (`src/components/Terminal.jsx`) and AI Assistant
(`src/components/AIAssistant.jsx`) both read from these same files, so editing
your data updates every surface at once.

## Replace before shipping

- `public/resume.pdf` is a placeholder — drop your real PDF in at the same path.
- Social links, email, and demo/GitHub URLs in `src/data/profile.ts` and
  `src/data/projects.ts` are placeholders — update them.
- `src/sections/Analytics.jsx` uses illustrative commit/language/contribution
  data. Wire it up to the GitHub REST API (or a small serverless function, to
  keep your token off the client) for live numbers.
- `src/sections/Contact.jsx`'s form currently only shows a local "sent" state.
  Connect it to a form service (Formspree, Resend, etc.) to actually receive
  messages — this project intentionally ships with no backend.

## Structure

```
src/
 ├── assets/        static images/icons you add
 ├── components/    shared UI: navbar, dock, terminal, AI assistant, glass card...
 ├── sections/      one file per OS "module": hero, dashboard, projects, skills...
 ├── pages/         route-level screens: Home, ProjectDetail, SettingsPage
 ├── layouts/        RootLayout — navbar/dock/background chrome around every page
 ├── animations/     shared Framer Motion variants
 ├── hooks/          useLenis (smooth scroll), useSettings (visitor preferences)
 ├── utils/          small helpers (clsx, localStorage)
 ├── constants/      terminal commands, boot sequence lines, easter eggs
 ├── data/           all portfolio content — edit here
```

## Notes

- Settings (particles, reduced motion, cursor glow, accent color, recruiter
  mode) persist to `localStorage` per visitor.
- Recruiter Mode simplifies the experience — it hides the floating AI
  assistant and shows a top banner with a direct CV download.
- Terminal easter eggs: `sudo hire precious`, `coffee`, `motivate`.
- Respects `prefers-reduced-motion` automatically, in addition to the manual
  toggle in Settings.
