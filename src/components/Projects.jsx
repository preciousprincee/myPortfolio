import { ExternalLink, Github } from 'lucide-react'
import Section from './Section.jsx'
import { projects } from '../data.js'

const href = (u) => (u.startsWith('http') ? u : `https://${u}`)
const link = 'inline-flex min-h-[44px] items-center gap-2 rounded-md border border-line px-4 text-sm text-white transition-colors hover:border-accent'

function Project({ p }) {
  return (
    <article className="grid gap-6 border-b border-line py-10 first:pt-0 last:border-b-0 md:grid-cols-5 md:gap-10">
      <div
        className="flex min-h-[160px] flex-col justify-between rounded-lg border p-6 md:col-span-2 md:min-h-[260px]"
        style={{ borderColor: `${p.color}40`, backgroundColor: `${p.color}0D` }}
        aria-hidden="true"
      >
        <span className="text-sm" style={{ color: p.color }}>{p.category}</span>
        <span className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: p.color }}>{p.name}</span>
      </div>

      <div className="md:col-span-3">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-white">{p.name}</h3>
          <span className="text-sm" style={{ color: p.color }}>{p.status}</span>
        </div>
        <p className="sr-only">{p.category}</p>
        <p className="mt-3 max-w-prose leading-relaxed">{p.description}</p>

        {p.contributions.length > 0 && (
          <div className="mt-5">
            <h4 className="text-sm font-medium text-white">What I did</h4>
            <ul className="mt-2 max-w-prose list-disc space-y-1 pl-5 text-sm marker:text-muted">
              {p.contributions.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        )}

        {p.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <li key={t} className="rounded border border-line px-2.5 py-1 text-xs text-white">{t}</li>
            ))}
          </ul>
        )}

        {(p.liveUrl || p.repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {p.liveUrl && <a className={link} href={href(p.liveUrl)} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" />View live</a>}
            {p.repoUrl && <a className={link} href={href(p.repoUrl)} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub</a>}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.map((p) => <Project key={p.name} p={p} />)}
    </Section>
  )
}
