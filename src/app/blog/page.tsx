import { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";

const articles_professionnels = [
  {
    title: "L'IA en entreprise : principaux cas d'utilisation à connaître",
    image: "/blog/ia-entreprise.png",
    href: "/blog/ia-entreprise",
    category: "Entreprise"
  },
  {
    title: "L'IA dans la finance et la comptabilité : principaux cas d'utilisation à connaître",
    image: "/blog/ia-finance.png",
    href: "/blog/ia-finance",
    category: "Finance"
  },
  {
    title: "L'IA dans l'industrie manufacturière : principaux cas d'utilisation à connaître",
    image: "/blog/ia-industrie.png",
    href: "/blog/ia-industrie",
    category: "Industrie"
  },
  {
    title: "L'IA dans les opérations : gains d'efficacité et exemples",
    image: "/blog/ia-operations.png",
    href: "/blog/ia-operations",
    category: "Opérations"
  },
  {
    title: "L'IA dans l’éducation : comment elle transforme l'apprentissage",
    image: "/blog/ia-education.png",
    href: "/blog/ia-education",
    category: "Éducation"
  },
  {
    title: "L'IA dans les services : automatisation et relation client",
    image: "/blog/ia-services.png",
    href: "/blog/ia-services",
    category: "Services"
  },
];

export const metadata: Metadata = {
  title: "Blog IA — Cas d’usage & Guides pour TPE/PME | Web Cresson Tech",
  description:
    "Articles clairs sur l’IA pour l’entreprise : cas d’usage par secteur, guides débutants, bonnes pratiques et ROI. Sélection TPE/PME.",
  alternates: { canonical: "https://webcresson.com/blog" },
  openGraph: {
    title: "Blog IA — Web Cresson Tech",
    description:
      "Cas d’usage, guides débutants et bonnes pratiques IA pour TPE/PME.",
    url: "https://webcresson.com/blog",
    images: [
      { url: "https://webcresson.com/images/og-blog.webp", width: 1200, height: 630, alt: "Blog IA — Web Cresson Tech" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog IA — Web Cresson Tech",
    description: "Cas d’usage et guides IA pour TPE/PME.",
    images: ["https://webcresson.com/images/og-blog.webp"],
  },
  robots: { index: true, follow: true },
}
const articles_débutants = [
  {
    title: "L’intelligence artificielle expliquée simplement",
    video: "/blog/ia-debutant.mp4",
    href: "/blog/debutant/ia-simplement",
    category: "Débutant"
  },
  {
    title: "Différences entre IA, machine learning et deep learning",
    video: "/blog/ia-vs-machine-learning-vs-deep-learning.mp4",
    href: "/blog/debutant/ia-vs-machine-learning",
    category: "Débutant"
  },
  {
    title: "5 usages quotidiens de l’IA sans que vous le sachiez",
    video: "/blog/ia-dans-votre-vie.mp4",
    href: "/blog/debutant/ia-dans-votre-vie",
    category: "Débutant"
  },
  {
    title: "Les limites et dangers de l’intelligence artificielle",
    image: "/blog/dangers-de-lia.webp",
    href: "/blog/debutant/dangers-de-lia",
    category: "Débutant"
  },
  {
    title: "Faut-il avoir peur de l’IA ? Décryptage",
    image: "/blog/peur-de-lia.webp",
    href: "/blog/debutant/peur-ia",
    category: "Débutant"
  },
  {
    title: "Comment débuter dans l’IA ? Les étapes simples",
    image: "/blog/debuter-ia.webp",
    href: "/blog/debutant/debuter-ia",
    category: "Débutant"
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white px-4 sm:px-6 lg:px-12 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://webcresson.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://webcresson.com/blog' },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Blog',
          name: 'Blog IA — Web Cresson Tech',
          url: 'https://webcresson.com/blog',
          inLanguage: 'fr',
          publisher: { '@type': 'Organization', name: 'Web Cresson Tech' },
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'ItemList',
          itemListElement: [...(
            [...articles_débutants, ...articles_professionnels]
          ).map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.title, url: `https://webcresson.com${a.href}` }))],
        }) }}
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
        Blog IA — Cas d’usage & Guides
      </h1>

      <section aria-label="Articles pour débutants" className="mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white/90">Pour les débutants</h2>
        <div className="mb-2 flex justify-center">
          <input
            id="blog-search"
            type="text"
            placeholder="Rechercher un article…"
            className="w-full max-w-xs text-black px-3 py-2 rounded border border-[#1f1f1f] bg-white/80 focus:outline-none focus:border-[#00e0ff55] transition"
          />
        </div>
        <p className="text-xs text-center text-white/60 mb-2">
          Astuce : recherchez par mot-clé ou filtrez par catégorie.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-4" id="blog-cats">
          {['Tous','Débutant','Entreprise','Finance','Industrie','Opérations','Éducation','Services'].map((c) => (
            <button key={c} data-cat={c.toLowerCase()} className="px-3 py-1 rounded-full border border-[#1f1f1f] text-xs hover:border-[#00e0ff55]">
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {articles_débutants.map((articles_débutant, index) => (
            <Link
              key={index}
              href={`${articles_débutants[index].href}?utm_source=blog&utm_medium=grid&utm_campaign=debutants`}
              data-title={articles_débutants[index].title.toLowerCase()}
              data-cat={(articles_débutants[index].category || 'Débutant').toLowerCase()}
              className="blog-card rounded-xl overflow-hidden shadow transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-12px_#00e0ff88] bg-transparent backdrop-blur-sm border border-[#1f1f1f] hover:border-[#00e0ff55]"
            >
              <div className="relative w-full h-60">
                {articles_débutants[index].video ? (
                  <video
                    src={articles_débutants[index].video}
                    className="w-full h-full object-contain object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={articles_débutants[index].image as string}
                    alt={articles_débutants[index].title}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{articles_débutants[index].title}</h3>
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
              href={`${article.href}?utm_source=blog&utm_medium=grid&utm_campaign=pro`}
              data-title={article.title.toLowerCase()}
              data-cat={(article.category || 'Pro').toLowerCase()}
              className="blog-card rounded-xl overflow-hidden shadow transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-12px_#00e0ff88] bg-transparent backdrop-blur-sm border border-[#1f1f1f] hover:border-[#00e0ff55]"
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
      <script dangerouslySetInnerHTML={{ __html: `
  (function(){
    var input = document.getElementById('blog-search');
    var bar = document.getElementById('blog-cats');
    var activeCat = (new URLSearchParams(location.search).get('cat') || 'tous').toLowerCase();
    function apply(){
      var q = (input && input.value || '').toLowerCase();
      document.querySelectorAll('.blog-card').forEach(function(card){
        var t = (card.getAttribute('data-title') || '').toLowerCase();
        var c = (card.getAttribute('data-cat') || '').toLowerCase();
        var matchText = t.indexOf(q) !== -1;
        var matchCat = activeCat === 'tous' || c === activeCat;
        card.style.display = (matchText && matchCat) ? '' : 'none';
      });
      // update active state
      if (bar) {
        bar.querySelectorAll('button').forEach(function(btn){
          var isActive = (btn.getAttribute('data-cat')||'') === activeCat;
          btn.classList.toggle('bg-[#00e0ff]', isActive);
          btn.classList.toggle('text-black', isActive);
        });
      }
    }
    if (input) input.addEventListener('input', apply);
    if (bar) bar.addEventListener('click', function(e){
      var t = e.target;
      if (t && t.matches('button[data-cat]')){
        activeCat = t.getAttribute('data-cat');
        var url = new URL(location.href); url.searchParams.set('cat', activeCat); history.replaceState({}, '', url.toString());
        apply();
      }
    });
    apply();
  })();
` }} />
    </main>
  );
}