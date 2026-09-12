import 'server-only'

export function getDemoVideoSource() {
  return process.env.NEXT_PUBLIC_DEMO_VIDEO_URL?.trim() || '/rentora.mp4'
}
