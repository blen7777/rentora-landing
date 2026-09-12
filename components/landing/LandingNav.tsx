'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Brand, ButtonLink, Icon } from './shared'

const links = [
  { href: '#modulos', label: 'Soluciones' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#precios', label: 'Planes' },
  { href: '#faq', label: 'Preguntas frecuentes' },
]

export function LandingNav() {
  const pathname = usePathname()
  const anchorHref = (href: string) => (pathname === '/' ? href : `/${href}`)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    if (open) document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])
  return (
    <header className="r-header">
      <nav className="r-container r-nav" aria-label="Navegación principal">
        <Brand />
        <div className="r-desktop-links">
          {links.map((link) => (
            <a key={link.href} href={anchorHref(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="r-nav-actions">
          <ButtonLink>Agendar demo</ButtonLink>
          <button
            ref={toggleRef}
            className="r-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
        {open && (
          <div id="mobile-navigation" className="r-mobile-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={anchorHref(link.href)}
                onClick={() => setOpen(false)}
              >
                {link.label}
                <Icon name="diagonal" size={16} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
