import { Metadata } from 'next';
import NeonTitle from '@/components/ui/NeonTitle';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import FinalCTA from "@/components/Pricing/FinalCTA"

export const metadata: Metadata = {
  title: 'Création de site web | Web Cresson Tech',
  description:
    'Conception de sites web modernes et adaptés à chaque profil : particuliers, TPE, PME, entreprises et associations. Templates personnalisés, solutions sur mesure, gestion de contenus, et plus.',
};

export default function WebCreationPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      <BreadcrumbJsonLd
        overrides={{
          services: 'Création de site web',
        }}
      />

      <ServiceSchema
        serviceName="Création de site web"
        serviceDescription="Sites web responsives et personnalisés pour TPE, PME, grandes entreprises, associations et particuliers. Intégration CMS, e-commerce, portail client, et plus."
        serviceTypes={[
          'Site vitrine',
          'E-commerce',
          'Portail client',
          'Landing page',
          'Blog professionnel',
        ]}
        faq={[
          {
            question: 'Faites-vous des sites pour les petites entreprises ?',
            answer:
              'Oui, nous proposons des packs abordables et évolutifs pour les TPE et auto-entrepreneurs.',
          },
          {
            question: 'Puis-je gérer moi-même mon site une fois livré ?',
            answer:
              'Absolument, nous intégrons des CMS comme WordPress ou Strapi pour une gestion autonome.',
          },
          {
            question: 'Offrez-vous l’hébergement et la maintenance ?',
            answer:
              'Oui, nous proposons des offres avec hébergement, nom de domaine et support inclus.',
          },
        ]}
      />

      <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
        <BreadcrumbNav />
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Création de site web sur mesure
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Sites vitrines, e-commerce ou associatifs, adaptés à tous les profils et 100% responsive.
        </p>
      </section>
      <section className="my-24 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Quels problèmes résolvons-nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Pas de présence en ligne</h3>
            <p className="text-gray-400 text-sm">Vous n’avez pas encore de site ? On vous guide et on le crée pour vous.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Site obsolète</h3>
            <p className="text-gray-400 text-sm">Votre site date de 2012 ? On le rend moderne, rapide, responsive et optimisé SEO.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Trop complexe à gérer</h3>
            <p className="text-gray-400 text-sm">On vous livre un backoffice simple pour une autonomie complète.</p>
          </div>
        </div>
      </section>

      {/* Sections individuelles pour chaque type de profil */}
      <section className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg p-6 mb-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/images/templates/particulier.png"
              alt="Particulier"
              className="rounded shadow object-contain max-h-64 w-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-2">👤 Particulier</h2>
            <p className="text-gray-300 mb-4">Site simple, élégant et personnalisé pour vos projets personnels (portfolio, blog, CV, etc.).</p>
            <button className="px-5 py-2 bg-[#0ea5e9] rounded text-white font-semibold hover:brightness-110 shadow-md hover:shadow-lg transition-all">
              Voir le template
            </button>
          </div>
        </div>
      </section>

      <section className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg p-6 mb-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/images/templates/tpe.png"
              alt="TPE"
              className="rounded shadow object-contain max-h-64 w-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-2">🧑‍💼 TPE</h2>
            <p className="text-gray-300 mb-4">Boostez votre visibilité locale avec un site vitrine moderne et des outils de contact simples pour vos clients.</p>
            <button className="px-5 py-2 bg-[#0ea5e9] rounded text-white font-semibold hover:brightness-110 shadow-md hover:shadow-lg transition-all">
              Voir le template
            </button>
          </div>
        </div>
      </section>

      <section className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg p-6 mb-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/images/templates/PME.png"
              alt="PME"
              className="rounded shadow object-contain max-h-64 w-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-2">🏢 PME</h2>
            <p className="text-gray-300 mb-4">Des solutions évolutives pour présenter votre activité, gérer vos offres et intégrer vos outils métiers.</p>
            <button className="px-5 py-2 bg-[#0ea5e9] rounded text-white font-semibold hover:brightness-110 shadow-md hover:shadow-lg transition-all">
              Voir le template
            </button>
          </div>
        </div>
      </section>

      <section className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg p-6 mb-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/images/templates/entreprise.png"
              alt="Entreprise"
              className="rounded shadow object-contain max-h-64 w-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-2">🏛️ Entreprise</h2>
            <p className="text-gray-300 mb-4">Site corporate, portail client, intégration avancée et sécurité renforcée pour les entreprises exigeantes.</p>
            <button className="px-5 py-2 bg-[#0ea5e9] rounded text-white font-semibold hover:brightness-110 shadow-md hover:shadow-lg transition-all">
              Voir le template
            </button>
          </div>
        </div>
      </section>

      <section className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg p-6 mb-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="/images/templates/association.png"
              alt="Association"
              className="rounded shadow object-contain max-h-64 w-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-2">🤝 Association</h2>
            <p className="text-gray-300 mb-4">Valorisez vos actions, gérez vos membres et facilitez les dons en ligne grâce à un site associatif moderne.</p>
            <button className="px-5 py-2 bg-[#0ea5e9] rounded text-white font-semibold hover:brightness-110 shadow-md hover:shadow-lg transition-all">
              Voir le template
            </button>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-[#0f172a] rounded-lg p-8 shadow-md border border-[#0ea5e9]">
        <h2 className="text-3xl font-bold mb-6 text-center">⚙️ Fonctionnalités disponibles</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-300 list-disc list-inside">
          <li>Application de gestion intégrée</li>
          <li>Formulaire de contact automatisé</li>
          <li>Réservation et paiement en ligne</li>
          <li>Portail sécurisé pour vos clients</li>
          <li>SEO & performance optimisée</li>
        </ul>
      </section>

      < FinalCTA />
    </main>
  );
}