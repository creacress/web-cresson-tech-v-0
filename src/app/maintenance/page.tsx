// src/app/maintenance/page.tsx

export const metadata = {
    title: "Maintenance en cours | WebCressonTech",
    description:
      "Notre site est temporairement en maintenance. Nous revenons très vite !",
    robots: {
      index: false,
      follow: false,
    },
  }
  
  export default function MaintenancePage() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neon mb-4">
          🛠️ WebCressonTech est en maintenance
        </h1>
        <p className="text-gray-400 mb-6 max-w-xl">
          Nous faisons actuellement quelques ajustements techniques pour vous offrir la
          meilleure expérience possible. Le site sera de retour dans quelques instants.
        </p>
  
        <a
          href="mailto:alexis@webcresson.com"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
        >
          Contacter le support
        </a>
  
        <p className="mt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} WebCressonTech • Tous droits réservés
        </p>
      </main>
    )
  }
  