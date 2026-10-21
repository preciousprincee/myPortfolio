import Section from './Section.jsx'
import { experience, education, certifications } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white">{e.role}</h3>
            <p className="text-sm">{e.org} &middot; {e.period}</p>
            <ul className="mt-3 max-w-prose list-disc space-y-1 pl-5 text-sm marker:text-muted">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Education</h3>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school}>
                <p className="text-white">{e.award}</p>
                <p className="text-sm">{e.school}, {e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Certifications</h3>
          <ul className="space-y-3 text-sm">
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between gap-4 border-b border-line pb-3">
                <span className="text-white">{c.name}</span>
                <span className="shrink-0">{c.issuer}, {c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
