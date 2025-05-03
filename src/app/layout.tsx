// src/app/layout.tsx

import '@/globals.css' // ou '@/styles/globals.css' si tu ranges tes fichiers

import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  )
}
