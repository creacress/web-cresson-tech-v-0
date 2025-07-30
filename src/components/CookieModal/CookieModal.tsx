"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);

    if (!window.dataLayer) window.dataLayer = [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-H206EG4TH7");
    gtag("config", "AW-11024728642");

    // 🎯 Tracking événement personnalisé
    gtag("event", "cookie_accept", {
      event_category: "consent",
      event_label: "Utilisateur a accepté les cookies",
    });
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-zinc-900 text-white px-5 py-4 rounded-xl shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
      <p className="text-sm text-center sm:text-left">
        Ce site utilise des cookies pour améliorer votre expérience (Analytics, publicités...). Autorisez-vous ?
      </p>
      <div className="flex gap-2">
        <button
          onClick={decline}
          className="bg-zinc-600 hover:bg-zinc-700 text-sm px-4 py-1.5 rounded"
        >
          Refuser
        </button>
        <button
          onClick={accept}
          className="bg-cyan-600 hover:bg-cyan-500 text-sm px-4 py-1.5 rounded font-medium"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}