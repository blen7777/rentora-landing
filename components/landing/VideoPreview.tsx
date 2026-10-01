'use client'

import { useRef, useState } from 'react'
import { ButtonLink, Icon } from './shared'
import { trackPixelCustom } from '@/lib/meta-pixel'

function mediaSource(raw: string) {
  if (!raw) return null
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(raw)) return { type: 'video', url: raw }
  try {
    const url = new URL(raw)
    if (['youtube.com', 'www.youtube.com', 'youtu.be'].includes(url.hostname)) {
      const id =
        url.hostname === 'youtu.be'
          ? url.pathname.slice(1)
          : url.searchParams.get('v') || url.pathname.split('/').pop()
      if (id && /^[\w-]+$/.test(id))
        return {
          type: 'embed',
          url: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        }
    }
    if (
      ['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'].includes(url.hostname)
    ) {
      const id = url.pathname.split('/').pop()
      if (id && /^\d+$/.test(id))
        return {
          type: 'embed',
          url: `https://player.vimeo.com/video/${id}?autoplay=1`,
        }
    }
  } catch {
    /* An unavailable source is handled in the dialog. */
  }
  return null
}

export function VideoPreview({
  source = '',
  compact = false,
}: {
  source?: string
  compact?: boolean
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)
  const media = mediaSource(source)
  function show() {
    trackPixelCustom('VideoDemoOpen', { placement: compact ? 'hero' : 'salvador' })
    setFailed(false)
    setOpen(true)
    dialog.current?.showModal()
  }
  function close() {
    dialog.current?.close()
    setOpen(false)
    trigger.current?.focus()
  }
  return (
    <>
      <button
        ref={trigger}
        className={
          compact
            ? 'r-button r-button-secondary r-video-inline'
            : 'r-video-trigger'
        }
        onClick={show}
        aria-haspopup="dialog"
      >
        <span className="r-video-play">
          <Icon name="play" size={compact ? 16 : 27} />
        </span>
        <span>
          {compact ? 'Ver video demo' : 'Conoce Rentora en acción'}
          {!compact && (
            <small>Flota, reservas y contratos en un recorrido.</small>
          )}
        </span>
        {!compact && <Icon name="diagonal" />}
      </button>
      <dialog
        ref={dialog}
        className="r-video-dialog"
        aria-labelledby="video-dialog-title"
        onCancel={() => {
          setOpen(false)
          trigger.current?.focus()
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        <div className="r-video-dialog-header">
          <h2 id="video-dialog-title">Demo de Rentora</h2>
          <button onClick={close} aria-label="Cerrar video" autoFocus>
            <Icon name="close" />
          </button>
        </div>
        {open && media && !failed ? (
          media.type === 'video' ? (
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
              src={media.url}
            />
          ) : (
            <iframe
              src={media.url}
              title="Video demo de Rentora"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )
        ) : (
          <div className="r-video-unavailable">
            <Icon name="play" size={35} />
            <h3>Conoce la plataforma con nuestro equipo.</h3>
            <p>
              El video no está disponible por el momento. Podemos mostrarte el
              recorrido completo en una demo personalizada.
            </p>
            <ButtonLink>Agendar demo gratuita</ButtonLink>
          </div>
        )}
      </dialog>
    </>
  )
}
