// lib/i18n-config.ts

export const locales = ['fr', 'pt'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'fr'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPath(path: string): Locale {
  const match = path.match(/^\/(fr|pt)(\/|$)/)
  return match ? (match[1] as Locale) : defaultLocale
}
