'use client'
import { useSearchParams } from 'next/navigation'
import ContactForm from '../ContactForm/ContactForm'

interface ContactSectionProps {
  model?: string
  pipeline?: string
}

export default function ContactSection({ model, pipeline }: ContactSectionProps) {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  return <ContactForm plan={plan || undefined} model={model} pipeline={pipeline} />
}