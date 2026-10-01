const rawPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || ''

// The ID is interpolated into an inline script, so only numeric IDs are accepted.
export const META_PIXEL_ID = /^\d+$/.test(rawPixelId) ? rawPixelId : ''

type PixelParams = Record<string, string | number>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function trackPixel(event: string, params?: PixelParams) {
  if (!META_PIXEL_ID || typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', event, params)
}

export function trackPixelCustom(event: string, params?: PixelParams) {
  if (!META_PIXEL_ID || typeof window === 'undefined' || !window.fbq) return
  window.fbq('trackCustom', event, params)
}
