import Link from "next/link"

interface Props {
  title: string
  emoji: string
  description: string
  link: string
  color?: "purple" | "cyan" | "red" | "yellow" | "green" | "orange" | "blue"
}

const colorMap = {
  purple: "from-purple-500 to-fuchsia-600",
  cyan: "from-cyan-500 to-blue-600",
  red: "from-red-500 to-pink-600",
  yellow: "from-yellow-400 to-orange-500",
  green: "from-green-500 to-emerald-600",
  orange: "from-orange-500 to-yellow-500",
  blue: "from-blue-500 to-indigo-600",
}

export default function IAServiceCard({ title, emoji, description, link, color = "cyan" }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-cyan-800 shadow-md hover:shadow-cyan-500/40 transition duration-300">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <Link
        href={link}
        className={`inline-block mt-auto text-white font-semibold py-2 px-4 rounded-md bg-gradient-to-r ${colorMap[color]} hover:scale-105 transition`}
      >
        Découvrir →
      </Link>
    </div>
  )
}