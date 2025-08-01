import Image from "next/image";
import Link from "next/link";

const articles_professionnels = [
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

const articles_débutants = [
  {
    title: "L’intelligence artificielle expliquée simplement",
    video: "/blog/ia-debutant.mp4",
    href: "/blog/debutant/ia-simplement",
  },
  {
    title: "Différences entre IA, machine learning et deep learning",
    video: "/blog/ia-vs-machine-learning-vs-deep-learning.mp4",
    href: "/blog/debutant/ia-vs-machine-learning",
  },
  {
    title: "5 usages quotidiens de l’IA sans que vous le sachiez",
    video: "/blog/ia-dans-votre-vie.mp4",
    href: "/blog/debutant/ia-dans-votre-vie",
  },
  {
    title: "Les limites et dangers de l’intelligence artificielle",
    image: "/blog/dangers-de-lia.webp",
    href: "/blog/debutant/dangers-de-lia",
  },
  {
    title: "Faut-il avoir peur de l’IA ? Décryptage",
    image: "/blog/peur-de-lia.webp",
    href: "/blog/debutant/peur-ia",
  },
  {
    title: "Comment débuter dans l’IA ? Les étapes simples",
    image: "/blog/debuter-ia.webp",
    href: "/blog/debutant/debuter-ia",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white px-4 sm:px-6 lg:px-12 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-12">
        Réflexion sur l’IA : Cas d’usage
      </h1>

      <section aria-label="Articles pour débutants" className="mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white/90">Pour les débutants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles_débutants.map((articles_débutant, index) => (
            <Link
              key={index}
              href={articles_débutant.href}
              className="rounded-xl overflow-hidden shadow transform transition-all duration-300 hover:scale-105 hover:shadow-neon bg-transparent backdrop-blur-sm"
            >
              <div className="relative w-full h-60">
                {articles_débutant.video ? (
                  <video
                    src={articles_débutant.video}
                    className="w-full h-full object-contain object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={articles_débutant.image as string}
                    alt={articles_débutant.title}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{articles_débutant.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Articles professionnels">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white/90">Pour les professionnels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles_professionnels.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="rounded-xl overflow-hidden shadow transform transition-all duration-300 hover:scale-105 hover:shadow-neon bg-transparent backdrop-blur-sm"
            >
              <div className="relative w-full h-60">
                <Image
                  src={article.image as string}
                  alt={article.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}