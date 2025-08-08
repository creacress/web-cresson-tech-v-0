"use client"

import React from "react"
import Link from "next/link"
import { ReactNode } from "react"

type ServiceLinkProps = {
  href: string
  title: string
  text: string
  icon: ReactNode
}

export default function ServiceLink({ href, title, icon, text }: ServiceLinkProps) {
  const handleClick = () => {
    console.log(`Service cliqué : ${title}`)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "service_link_click", {
        event_category: "Navigation",
        event_label: title,
      })
    }
  }

  return (
    <div className="group relative">
      <Link
        href={href}
        onClick={handleClick}
        className="group relative block p-6 border border-[#00e0ff33] rounded-xl bg-[#111] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-[#00e0ff66] hover:shadow-[0_10px_30px_-10px_#00e0ff66]"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="text-[#00e0ff]">{icon}</div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-gray-400 mb-4">{text}</p>
        <span className="inline-block text-sm font-semibold text-[#00e0ff] group-hover:underline transition">
          En savoir plus →
        </span>
      </Link>
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(420px_circle_at_50%_0%,#00e0ff22,transparent_60%)]"></span>
    </div>
  )
}
