import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo IA pour Julie – Automatiser sa TPE",
  description: "Découvrez une solution IA sur-mesure pour Julie, dirigeante de TPE. Automatisation de la facturation, CRM intelligent, suivi client automatisé.",
};

export default function JulieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}