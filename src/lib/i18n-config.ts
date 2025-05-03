// lib/i18n-config.ts
export const locales = ['fr', 'pt'] as const
export const defaultLocale = 'fr'

export function isValidLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as any)
}
export function getLocaleFromPath(path: string): (typeof locales)[number] {
  const match = path.match(/\/(fr|pt)(\/|$)/)
  return match ? (match[1] as (typeof locales)[number]) : defaultLocale
}