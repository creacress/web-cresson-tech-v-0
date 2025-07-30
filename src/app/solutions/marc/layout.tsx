// /solutions/marc/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo IA pour Marc – Optimiser les process d'une PME",
  description: "Découvrez une solution IA sur-mesure pour Marc, dirigeant de PME. Automatisation des tâches répétitives, reporting intelligent et gain de productivité.",
};

export default function MarcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}