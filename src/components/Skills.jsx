import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="text-base font-medium text-white">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded border border-line bg-surface px-3 py-1.5 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
