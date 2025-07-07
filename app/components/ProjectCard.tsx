

export default function ProjectCard({ title, link }) {
  return (
    <div className="p-5 bg-white shadow-lg rounded-xl border hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-red-800 underline text-sm"
      >
        View on Play Store →
      </a>
    </div>
  )
}
