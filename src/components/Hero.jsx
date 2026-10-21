import { Download, MapPin } from 'lucide-react'
import { profile } from '../data.js'

const btn = 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors'

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.4fr_1fr] md:items-center md:pb-28 md:pt-40">
      <div>
        {profile.photoUrl && (
          <img src={profile.photoUrl} alt={profile.name} className="mb-6 h-20 w-20 rounded-full border border-line object-cover md:hidden" />
        )}
        <p className="flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-accent" aria-hidden="true" />{profile.location}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-lg font-medium text-accent">{profile.title}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed">{profile.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className={`${btn} bg-accent text-bg hover:bg-white`}>View my projects</a>
          <a href="#contact" className={`${btn} border border-line text-white hover:border-accent`}>Contact me</a>
          {profile.cvUrl && (
            <a href={profile.cvUrl} download className={`${btn} text-white hover:text-accent`}><Download size={16} aria-hidden="true" />Download CV</a>
          )}
        </div>
      </div>

      <aside aria-label="At a glance" className="rounded-lg border border-line bg-surface p-6">
        {profile.photoUrl && (
          <img src={profile.photoUrl} alt={profile.name} className="mb-6 hidden aspect-square w-full rounded-md object-cover md:block" />
        )}
        <dl className="space-y-5 text-sm">
          <div><dt>Builds</dt><dd className="mt-1 text-white">Frontends, REST APIs, databases, authentication and AI integrations</dd></div>
          <div><dt>Main stack</dt><dd className="mt-1 text-white">React, Django, Node.js, PostgreSQL, Supabase</dd></div>
          <div><dt>Studying</dt><dd className="mt-1 text-white">B.Sc. Information Technology, FUNAAB</dd></div>
          <div><dt>Looking for</dt><dd className="mt-1 text-white">Software engineering and full-stack roles</dd></div>
        </dl>
      </aside>
    </section>
  )
}
