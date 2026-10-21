import { Mail, Phone, Globe, Github, Linkedin, Twitter, MapPin } from 'lucide-react'
import Section from './Section.jsx'
import { profile } from '../data.js'

const items = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Globe, label: profile.portfolio, href: `https://${profile.portfolio}` },
  { icon: Github, label: profile.github, href: `https://${profile.github}` },
  { icon: Linkedin, label: profile.linkedin, href: `https://www.${profile.linkedin}` },
  { icon: Twitter, label: profile.x, href: `https://${profile.x}` },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-white">
        Interested in working together? I'm open to software development opportunities where I can contribute, learn, and build useful products with a team.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex min-h-[56px] items-center gap-3 rounded-md border border-line bg-surface px-4 text-white transition-colors hover:border-accent"
            >
              <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="break-all text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 flex items-center gap-2 text-sm"><MapPin size={14} aria-hidden="true" />{profile.location}</p>
    </Section>
  )
}
