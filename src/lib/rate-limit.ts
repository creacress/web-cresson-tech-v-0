// lib/rate-limit.ts
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 2

const ipStore = new Map<string, { count: number; timer: NodeJS.Timeout }>()

export function checkRateLimit(ip: string): boolean {
  const entry = ipStore.get(ip)

  if (!entry) {
    // Première requête
    const timer = setTimeout(() => {
      ipStore.delete(ip)
    }, RATE_LIMIT_WINDOW_MS)

    ipStore.set(ip, { count: 1, timer })
    return true
  }

  if (entry.count >= MAX_REQUESTS) {
    return false
  }

  entry.count++
  return true
}
