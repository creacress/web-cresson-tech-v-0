'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function LandingClientWrapper() {
  useEffect(() => {
    const button = document.getElementById('cta-contact')
    button?.addEventListener('click', () => {
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/label1234',
      })
    })
  }, [])

  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan) setSelectedPlan(plan)
  }, [searchParams])

  return <ContactForm selectedPlan={selectedPlan} />
}