'use client';

import Link from "next/link";

export default function BlogEnCours() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-neutral-900 text-white p-8">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-neon">🛠 Article en cours d’écriture</h1>
                <p className="text-lg md:text-xl text-gray-300">
                    Ce blog est encore en train d’être préparé. Reviens bientôt pour le découvrir ✨
                </p>
                <Link href="/blog">
                    <button className="mt-4 px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:brightness-110 transition">
                        Voir les autres articles
                    </button>
                </Link>
            </div>
            <div className="mt-10 text-center">
                <a
                    href="https://webcresson.com/solutions"
                    className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    Découvrez nos solutions IA sur WebCressonTech.com 🚀
                </a>
            </div>
        </main>
    );
}
