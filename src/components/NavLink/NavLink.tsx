"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type NavLinkProps = {
  href: string
  children: ReactNode
  onClick?: () => void
  className?: string
  exact?: boolean // pour "/" seulement
}

export default function NavLink({ href, children, onClick, className = "", exact = false }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition hover:text-[#00e0ff] ${isActive ? "text-[#00e0ff]" : ""} ${className}`}
      aria-current={isActive ? "page" : undefined}
      aria-label={`Lien vers la page ${children}`}
    >
      {children}
    </Link>
  )
}
