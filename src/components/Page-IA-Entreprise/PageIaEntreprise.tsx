'use client';
import useScrollSpy from "@/lib/useScrollSpy";

export default function PageIaEntreprise() {
  const activeId = useScrollSpy([
    "#definition",
    "#automatisation",
    "#analyse-financiere",
    "#defis",
    "#applications",
    "#exemples",
    "#innovations",
    "#mise-en-oeuvre",
    "#roi",
    "#tendances",
    "#conclusion"
  ]);
  return (
    <>
      <aside className="hidden lg:block sticky top-20 h-max">
        <nav className="p-4 bg-neutral-900 border-l-4 border-neon rounded">
          <h2 className="text-xl font-bold mb-3">Table des matières</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#definition" className={`block px-2 py-1 rounded ${activeId === "definition" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Introduction</a></li>
            <li><a href="#automatisation" className={`block px-2 py-1 rounded ${activeId === "automatisation" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Qu’est-ce que l’IA...</a></li>
            <li><a href="#analyse-financiere" className={`block px-2 py-1 rounded ${activeId === "analyse-financiere" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Avantages commerciaux</a></li>
            <li><a href="#defis" className={`block px-2 py-1 rounded ${activeId === "defis" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Défis</a></li>
            <li><a href="#applications" className={`block px-2 py-1 rounded ${activeId === "applications" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Applications IA</a></li>
            <li><a href="#exemples" className={`block px-2 py-1 rounded ${activeId === "exemples" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Exemples d'IA</a></li>
            <li><a href="#innovations" className={`block px-2 py-1 rounded ${activeId === "innovations" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Innovations</a></li>
            <li><a href="#mise-en-oeuvre" className={`block px-2 py-1 rounded ${activeId === "mise-en-oeuvre" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Mise en œuvre</a></li>
            <li><a href="#roi" className={`block px-2 py-1 rounded ${activeId === "roi" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>ROI de l’IA</a></li>
            <li><a href="#tendances" className={`block px-2 py-1 rounded ${activeId === "tendances" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Tendances IA</a></li>
            <li><a href="#conclusion" className={`block px-2 py-1 rounded ${activeId === "conclusion" ? "bg-neutral-800 text-neon font-semibold" : "text-white hover:text-neon"}`}>Conclusion</a></li>
          </ul>
        </nav>
      </aside>
      {/* Le reste du contenu de la page */}
    </>
  );
}
