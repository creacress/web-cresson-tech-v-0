import Image from "next/image"
import Link from "next/link"

type LivreBlancProps = {
  title: string
  description: string
  downloadLink: string
  imageUrl?: string
}

export default function LivreBlancComponent({
  title,
  description,
  downloadLink,
  imageUrl,
}: LivreBlancProps) {
  return (
    <div className="bg-[#111] border border-[#00e0ff33] rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {imageUrl && (
        <div className="relative w-full h-56">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <Link
          href={downloadLink}
          download
          className="inline-block bg-[#00e0ff] text-black font-semibold px-5 py-2 rounded hover:scale-105 transition text-center"
        >
          Télécharger le Livre Blanc
        </Link>
      </div>
    </div>
  )
}
