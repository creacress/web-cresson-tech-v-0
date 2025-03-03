// src/components/ClientWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Charger le CookieModal uniquement côté client
const CookieModal = dynamic(() => import('@/components/CookieModal'), {
  ssr: false,
});

export default function ClientWrapper() {
  return <CookieModal />;
}
