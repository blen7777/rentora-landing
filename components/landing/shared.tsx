import type { ReactNode } from 'react'
import Image from 'next/image'

export const demoUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/blen7777/30min'
export const whatsappUrl = (
  message = 'Hola, quiero conocer Rentora y organizar mi rent a car.',
) => `https://wa.me/50376471451?text=${encodeURIComponent(message)}`

export function Icon({
  name = 'arrow',
  size = 20,
  className = '',
}: {
  name?: string
  size?: number
  className?: string
}) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    check: <path d="m5 12 4 4L19 6" />,
    car: (
      <>
        <path d="m5 8 2-4h10l2 4m-16 5V9l2-1h14l2 1v8H3v-4Zm2 4v3m14-3v3M3 12h18" />
        <path d="M6 14h2m8 0h2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 3v4m10-4v4M3 11h18m-14 4h2m4 0h2m-8 3h2" />
      </>
    ),
    document: (
      <>
        <path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="3" />
        <path d="M16 11h5v5h-5a2.5 2.5 0 0 1 0-5ZM5 5V3h12" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v17h17M8 15v-4m5 4V6m5 9V9" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    play: <path d="m9 5 11 7-11 7V5Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chat: (
      <path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z M7 10h10m-10 4h6" />
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  )
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      className={`r-brand ${light ? 'is-light' : ''}`}
      aria-label="Rentora, inicio"
    >
      <Image
        src="/images/rentora-brand-navy.jpeg"
        alt="Rentora"
        width={1600}
        height={800}
        className="r-official-logo"
        priority
      />
    </a>
  )
}

export function ButtonLink({
  children,
  href = demoUrl,
  secondary = false,
  className = '',
  external = true,
}: {
  children: ReactNode
  href?: string
  secondary?: boolean
  className?: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      className={`r-button ${secondary ? 'r-button-secondary' : ''} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon name="arrow" size={18} />
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="r-section-heading">
      <span className="r-eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

// Vector illustration: stays crisp on mobile and supports the fleet animations.
export function CarIllustration({
  color = '#c6ccd7',
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      className={`r-car ${className}`}
      viewBox="0 0 360 160"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="185" cy="134" rx="151" ry="12" fill="#0b1a3314" />
      <path
        d="m42 98 17-14 50-9 45-40c7-6 15-9 26-9h57c12 0 23 5 33 15l34 38 28 11 6 31H30l3-14 9-9Z"
        fill={color}
      />
      <path
        d="m119 73 38-33c4-3 9-5 15-5h23v38h-76Zm85-38h30c10 0 16 4 23 10l23 28h-76V35Z"
        fill="#122b55"
      />
      <path
        d="m159 40-30 27h22l30-27h-22Zm61 0-12 12v16l28-28h-16Z"
        fill="#fff"
        fillOpacity=".14"
      />
      <path
        d="M42 98h66m-73 18h28m245-1h24M115 80l-8 35m95-35v34m80-36 13 27"
        stroke="#0f2346"
        strokeOpacity=".25"
        strokeWidth="2"
      />
      <path
        d="M171 83h14m67 0h14"
        stroke="#0f2346"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="m38 99 17-3 7 9H35l3-6Z" fill="#e1e5ed" />
      <path d="m312 88 15 5 3 10h-12l-6-15Z" fill="#e17e63" />
      <circle cx="91" cy="119" r="25" fill="#0c1c37" />
      <circle cx="91" cy="119" r="15" fill="#7b8aa3" />
      <circle cx="91" cy="119" r="8" fill="#d7dde7" />
      <circle cx="278" cy="119" r="25" fill="#0c1c37" />
      <circle cx="278" cy="119" r="15" fill="#7b8aa3" />
      <circle cx="278" cy="119" r="8" fill="#d7dde7" />
      <path d="M117 122h135" stroke="#17366c" strokeWidth="5" />
      <path
        d="m36 110-3 10h29m248 0h27l-1-10"
        stroke="#17366c"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
