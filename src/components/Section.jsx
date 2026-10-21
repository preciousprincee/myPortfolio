export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl border-t border-line px-5 py-16 md:py-24">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {children}
    </section>
  )
}
