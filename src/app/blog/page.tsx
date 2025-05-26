import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "L'IA en entreprise : principaux cas d'utilisation à connaître",
    image: "/blog/ia-entreprise.png",
    href: "/blog/ia-entreprise"
  },
  {
    title: "L'IA dans la finance et la comptabilité : principaux cas d'utilisation à connaître",
    image: "/blog/ia-finance.png",
    href: "/blog/ia-finance"
  },
  {
    title: "L'IA dans l'industrie manufacturière : principaux cas d'utilisation à connaître",
    image: "/blog/ia-industrie.png",
    href: "/blog/ia-industrie"
  },
  {
    title: "L'IA dans les opérations : gains d'efficacité et exemples",
    image: "/blog/ia-operations.png",
    href: "/blog/ia-operations"
  },
  {
    title: "L'IA dans l’éducation : comment elle transforme l'apprentissage",
    image: "/blog/ia-education.png",
    href: "/blog/ia-education"
  },
  {
    title: "L'IA dans les services : automatisation et relation client",
    image: "/blog/ia-services.png",
    href: "/blog/ia-services"
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white px-4 sm:px-6 lg:px-12 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-12">Réflexion sur l’IA : Cas d’usage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className="bg-gray-900/50 rounded-xl overflow-hidden shadow transform transition-all duration-300 hover:scale-105 hover:shadow-neon"
          >
            <div className="relative w-full h-60">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">{article.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}