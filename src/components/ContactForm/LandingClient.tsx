'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function LandingClientWrapper() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan) setSelectedPlan(plan)
  }, [searchParams])

  return <ContactForm selectedPlan={selectedPlan} />
}