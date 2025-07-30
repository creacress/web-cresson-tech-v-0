'use client'
import { useSearchParams } from 'next/navigation'
import ContactForm from '../ContactForm/ContactForm'

export default function ContactSection() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  return <ContactForm plan={plan || undefined} />
}