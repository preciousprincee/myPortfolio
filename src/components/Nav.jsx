import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile, nav } from '../data.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          {profile.initials}<span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm transition-colors hover:text-white">{n.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="-mr-2 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 py-2 md:hidden">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base text-white">{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
