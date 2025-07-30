import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo IA pour Lisa – Booster une start-up tech",
  description: "Explorez une démo IA adaptée à Lisa, fondatrice de start-up. Chatbot, extraction de données, automatisation des réponses mails et scoring de leads.",
};

export default function LisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
