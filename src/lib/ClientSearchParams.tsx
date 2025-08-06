// src/components/utils/ClientSearchParams.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ClientSearchParams({ onExtract }: { onExtract: (model?: string, pipeline?: string) => void }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    onExtract(params.get('model') || undefined, params.get('pipeline') || undefined)
  }, [])

  return null
}