'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Icon } from './shared'
import { VideoPreview } from './VideoPreview'

const stops = ['Santa Ana', 'San Salvador', 'La Libertad']

export function SalvadorJourney({
  videoSource = '',
}: {
  videoSource?: string
}) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [paused, setPaused] = useState(false)
  const [stop, setStop] = useState(1)
  useEffect(() => {
    const element = canvas.current
    const ctx = element?.getContext('2d')
    if (!element || !ctx) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0,
      visible = true,
      start = 0
    const render = (time: number) => {
      const width = element.clientWidth,
        height = element.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      if (
        element.width !== Math.round(width * dpr) ||
        element.height !== Math.round(height * dpr)
      ) {
        element.width = Math.round(width * dpr)
        element.height = Math.round(height * dpr)
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      if (!start) start = time
      const progress =
        paused || reduced.matches
          ? [0.16, 0.5, 0.85][stop]
          : ((time - start) / 18000) % 1
      const y = (t: number) =>
        height * (0.59 + Math.sin(t * Math.PI * 2) * 0.11)
      ctx.beginPath()
      for (let i = 0; i <= 100; i++) {
        const t = i / 100
        if (!i) ctx.moveTo(t * width, y(t))
        else ctx.lineTo(t * width, y(t))
      }
      ctx.strokeStyle = '#ffffff24'
      ctx.lineWidth = 26
      ctx.stroke()
      ctx.setLineDash([8, 12])
      ctx.lineWidth = 2
      ctx.strokeStyle = '#ffffff70'
      ctx.stroke()
      ctx.setLineDash([])
      ;[0.16, 0.5, 0.85].forEach((t, i) => {
        ctx.beginPath()
        ctx.arc(t * width, y(t), 7, 0, Math.PI * 2)
        ctx.fillStyle = i === stop ? '#ff9100' : '#f5f8fc'
        ctx.fill()
        ctx.font = '600 12px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillStyle = '#fff'
        ctx.fillText(stops[i], t * width, y(t) + 34)
      })
      ctx.save()
      ctx.translate(progress * width, y(progress) - 4)
      ctx.fillStyle = '#ff9100'
      ctx.beginPath()
      ctx.roundRect(-19, -10, 38, 18, 5)
      ctx.fill()
      ctx.fillStyle = '#102542'
      ctx.fillRect(-8, -7, 16, 11)
      ctx.fillStyle = '#fff'
      ctx.fillRect(14, -7, 3, 4)
      ctx.fillRect(14, 1, 3, 4)
      ctx.restore()
      if (visible && !paused && !reduced.matches)
        frame = requestAnimationFrame(render)
    }
    const restart = () => {
      cancelAnimationFrame(frame)
      render(performance.now())
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) restart()
      else cancelAnimationFrame(frame)
    })
    observer.observe(element)
    const resize = new ResizeObserver(restart)
    resize.observe(element)
    reduced.addEventListener('change', restart)
    restart()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      resize.disconnect()
      reduced.removeEventListener('change', restart)
    }
  }, [paused, stop])
  return (
    <section className="r-container r-section r-salvador" id="video-demo">
      <div className="r-heading-row">
        <div className="r-section-heading">
          <span className="r-eyebrow">
            <span /> HECHO AQUÍ. LISTO PARA LLEGAR MÁS LEJOS.
          </span>
          <h2>
            El Salvador en movimiento.
            <br />
            <span>Tu rentadora, en control.</span>
          </h2>
          <p>
            Cada ruta comienza con una reserva. Descubre cómo Rentora acompaña
            la operación detrás de cada viaje.
          </p>
        </div>
        <span className="r-country-label">
          <Icon name="pin" size={16} /> El Salvador
        </span>
      </div>
      <div className="r-salvador-scene">
        <Image
          src="/images/salvador-del-mundo.jpg"
          alt="Monumento al Divino Salvador del Mundo en San Salvador"
          fill
          sizes="(max-width: 700px) 100vw, 1240px"
          className="r-salvador-photo"
        />
        <div className="r-salvador-shade" />
        <div className="r-scene-title">
          <span>ORIGEN SALVADOREÑO</span>
          <h3>
            Grandes viajes.
            <br />
            Una operación conectada.
          </h3>
        </div>
        <button
          className="r-animation-control"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          {paused ? 'Reanudar recorrido' : 'Pausar recorrido'}
          <Icon name={paused ? 'play' : 'clock'} size={15} />
        </button>
        <canvas
          ref={canvas}
          className="r-salvador-canvas"
          role="img"
          aria-label="Recorrido ilustrativo animado de Santa Ana a San Salvador y La Libertad"
        />
        <div className="r-destination-buttons">
          {stops.map((name, i) => (
            <button
              key={name}
              onClick={() => {
                setStop(i)
                setPaused(true)
              }}
              aria-pressed={stop === i}
            >
              {name}
            </button>
          ))}
        </div>
        <VideoPreview source={videoSource} />
      </div>
      <p className="r-photo-credit">
        Fotografía:{' '}
        <a
          href="https://commons.wikimedia.org/wiki/File:Monumento_al_Salvador_del_Mundo_1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frankjh / Wikimedia Commons
        </a>{' '}
        ·{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-SA 3.0
        </a>{' '}
        · Recorrido ilustrativo, no cartográfico.
      </p>
    </section>
  )
}
