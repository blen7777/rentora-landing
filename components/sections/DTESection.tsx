'use client'

import Image from 'next/image'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

const checkItems = [
  'Emite facturas electrónicas válidas y seguras',
  'Genera DTE (Documento Tributario Electrónico)',
  'Mantén un historial ordenado de todas tus facturas',
]

export function DTESection() {
  return (
    <section id="dte" className="py-16 bg-white dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-soft dark:border-gray-700 dark:from-surface-dark dark:to-slate-800/50">
            <div className="pointer-events-none absolute right-4 top-4 select-none opacity-5">
              <div className="text-6xl font-black text-blue-800">SV</div>
            </div>

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Cumple con la normativa
              </h3>
              <p className="mb-6 leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                Rentora integra facturación electrónica para que la operación de tu rent a car avance con documentación ordenada y alineada a los requisitos fiscales de El Salvador.
              </p>

              <div className="mb-6 flex items-start gap-4 rounded-xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-black/20">
                <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary p-2 text-white shadow-lg shadow-blue-500/40">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">
                    Facturación Electrónica DTE
                  </h4>
                  <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                    Compatible con el Ministerio de Hacienda de El Salvador
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft dark:border-gray-700 dark:bg-surface-dark">
            <div className="relative z-10 max-w-xs p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Automatiza y optimiza
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                Optimiza el manejo de flotas, reservas y facturación. Ahorra tiempo y opera con más control desde una sola plataforma.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Solicitar una demostración
              </a>
            </div>

            <div className="pointer-events-none absolute right-0 h-80 w-72 select-none">
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(to bottom, white 0%, transparent 35%)',
                }}
              />
              <div
                className="absolute inset-0 z-10 hidden dark:block"
                style={{
                  background: 'linear-gradient(to bottom, #1E293B 0%, transparent 35%)',
                }}
              />
              <Image
                src="/images/agent.png"
                alt="Agente de soporte de Rentora"
                fill
                className="object-contain object-bottom"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 z-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
