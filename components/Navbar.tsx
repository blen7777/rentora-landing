'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/blen7777/30min'

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav className={`fixed w-full z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
              <Image
                  src="/images/logo.png"
                  alt="Rentora"
                  width={180}
                  height={60}
                  className="dark:invert-0 invert"
              />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-1">
            {[
              { label: 'Características', href: '#caracteristicas' },
              { label: 'Facturación DTE', href: '#dte' },
              { label: 'Precios', href: '#precios' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary dark:hover:text-white transition px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition"
              aria-label="Cambiar tema"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-blue-500/30"
            >
              Acceder
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1h6l2-1zM5 16V8h7v8M13 6l2 4h4l1 1v5h-2" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}
