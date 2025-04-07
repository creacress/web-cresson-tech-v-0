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
    <Link
      href={href}
      onClick={handleClick}
      className="group block p-6 border border-[#00e0ff33] rounded-lg bg-[#111] hover:bg-[#1a1a1a] transition"
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
  )
}
