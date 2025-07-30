

"use client"
import { useEffect } from "react";

export default function AnalyticsScripts() {
  useEffect(() => {
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-H206EG4TH7', {
        page_path: window.location.pathname,
      });
      gtag('config', 'AW-11024728642');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}