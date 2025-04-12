'use client'

import Link from 'next/link'
import { gtagEvent } from '@/lib/gtag'

export default function CTAButton() {
  const handleClick = () => {
    console.log('CTAButton clicked')
    gtagEvent({
      action: 'cta_click',
      category: 'CTA',
      label: 'Hero Section',
    })
  }

  return (
    <Link
      href="/services/audit-gratuit"
      onClick={handleClick}
      className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
    >
      Obtenir un audit IA gratuit
    </Link>
  )
}
