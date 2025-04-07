"use client"
import NeonTitle from "@/components/ui/NeonTitle"
import { useEffect, useState } from "react"

export default function CookieModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent")
    if (!consent) {
      setIsVisible(true)

      // Fermeture automatique après 10 secondes
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies_consent", "true")
    setIsVisible(false)

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cookies_accept", {
        event_category: "User Consent",
        event_label: "Cookies strictement analytiques",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-[#111] border border-[#00e0ff33] text-white p-4 sm:p-5 rounded-lg shadow-lg max-w-3xl mx-auto animate-fade-in-up"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <NeonTitle as="h3" className="text-5xl font-extrabold mb-4">
            Cookies analytiques
          </NeonTitle>
          <p id="cookie-desc" className="text-sm text-gray-400">
            Ce site utilise uniquement des cookies analytiques. Aucune donnée personnelle n’est collectée.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="self-end sm:self-auto bg-[#00e0ff] text-black font-semibold px-5 py-2 rounded hover:scale-105 transition"
        >
          J’accepte
        </button>
      </div>
    </div>
  )
}
