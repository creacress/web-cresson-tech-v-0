export const dynamic = 'force-dynamic'
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav'
import ContactSection from '@/components/ContactSection/ContactSection'

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema />
      <ServiceSchema
        serviceName="Contactez-nous | WebCressonTech"
        serviceDescription="Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques."
        serviceTypes={['Contact', 'Support Client', 'Services Technologiques']}
        faq={[
          {
            question: 'Comment puis-je contacter WebCressonTech ?',
            answer: (
              <>
                Vous pouvez nous contacter via ce formulaire ou par téléphone au{' '}
                <a href="tel:+33766029632" className="text-[#00e0ff] underline hover:text-white">
                  +33 7 66 02 96 32
                </a>
                .
              </>
            ),
          },
          {
            question: 'Quels services propose WebCressonTech ?',
            answer: (
              <>
                Nous proposons des solutions en IA, RPA, automatisation et technologies sur mesure. Découvrez nos services sur{' '}
                <a href="https://www.webcresson.com/services" className="text-[#00e0ff] underline hover:text-white">
                  cette page.
                </a>
              </>
            ),
          },
        ]}
      />
      <main className="max-w-4xl mx-auto px-6 py-24 text-white">
        <BreadcrumbNav />
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Prenez Rendez-vous</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Réservez un appel avec notre équipe via notre agenda en ligne ci-dessous.
          </p>
        </section>



        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Une question ? Un besoin ? Laissez-nous un message et nous vous répondrons rapidement.
          </p>
        </section>

        <section>
          <ContactSection />
        </section>

        <section className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Ou écrivez-nous à{' '}
            <a href="mailto:contact@webcresson.com" className="text-[#00e0ff] underline hover:text-white">
              contact@webcresson.com
            </a>{' '}
            – Nous répondons sous 24h.
          </p>
        </section>
      </main>
    </>
  )
}
