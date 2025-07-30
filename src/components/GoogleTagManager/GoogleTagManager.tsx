'use client'
import { useEffect } from 'react'

export const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5SG8GNR8'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return null
}

export const GTMNoScript = () => (
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-5SG8GNR8"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
)