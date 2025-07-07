export default function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  )
}