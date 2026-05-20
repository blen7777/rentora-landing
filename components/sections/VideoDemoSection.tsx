import Link from 'next/link'

const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL?.trim() ?? '/rentora.mp4'
const DEMO_VIDEO_POSTER = process.env.NEXT_PUBLIC_DEMO_VIDEO_POSTER?.trim() ?? '/rentora-demo-poster.svg'
const DEMO_VIDEO_TITLE = process.env.NEXT_PUBLIC_DEMO_VIDEO_TITLE?.trim() ?? 'Demo de Rentora'

export function VideoDemoSection() {
  const media = buildMedia(DEMO_VIDEO_URL)

  return (
    <section id="demo" className="overflow-hidden border-y border-gray-100 bg-white py-20 dark:border-gray-800 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Video demo
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              Mira cómo funciona Rentora en una operación real
            </h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              Esta sección permite mostrar un video de producto para que los usuarios entiendan rápidamente cómo se ven la flota, las reservas, los contratos y la facturación dentro de Rentora.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Recorrido visual por la plataforma',
                'Explicación del flujo operativo',
                'Demostración de módulos clave',
                'Ideal para conversión y soporte comercial',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-secondary-text-light dark:text-secondary-text-dark">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/que-es-rentora"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Ver la explicación completa
              </a>
              <Link
                href="/#precios"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Revisar planes
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-3 shadow-2xl shadow-blue-950/20 dark:border-gray-700">
              <div className="overflow-hidden rounded-2xl bg-black">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/70">
                  <span>{DEMO_VIDEO_TITLE}</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5">Rentora Demo</span>
                </div>

                <div className="aspect-video w-full bg-slate-950">
                  {media.type === 'iframe' ? (
                    <iframe
                      className="h-full w-full"
                      src={media.src}
                      title={DEMO_VIDEO_TITLE}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : media.type === 'video' ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      poster={DEMO_VIDEO_POSTER}
                      playsInline
                    >
                      <source src={media.src} />
                    </video>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white shadow-lg shadow-blue-950/30">
                        <PlayIcon />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">
                          Espacio listo para tu video demo
                        </p>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                          Define `NEXT_PUBLIC_DEMO_VIDEO_URL` para mostrar aquí un video de YouTube, Vimeo o un archivo MP4/WebM.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl dark:border-blue-900/40 dark:bg-slate-900">
              <p className="mt-1 text-sm text-secondary-text-light dark:text-secondary-text-dark">
                Usa un video de 60 a 120 segundos para mostrar el flujo principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function buildMedia(url: string): { type: 'iframe' | 'video' | 'placeholder'; src?: string } {
  if (!url) {
    return { type: 'placeholder' }
  }

  if (isVideoFile(url)) {
    return { type: 'video', src: url }
  }

  const embedUrl = toEmbedUrl(url)
  return embedUrl ? { type: 'iframe', src: embedUrl } : { type: 'iframe', src: url }
}

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

function toEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v')
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }

    if (parsed.hostname === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '')
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }

    if (parsed.hostname.includes('vimeo.com')) {
      const videoId = parsed.pathname.split('/').filter(Boolean).pop()
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`
      }
    }
  } catch {
    return ''
  }

  return ''
}

function PlayIcon() {
  return (
    <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
