'use client'

import Image from 'next/image'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

const checkItems = [
  'Emite facturas electrónicas validas y seguras',
  'Genera DTE (Documento Tributario Electrónico)',
  'Mantén un historial ordenado de todas tus facturas',
]

export function DTESection() {
  return (
    <section id="dte" className="py-16 bg-white dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left: Compliance card ── */}
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-surface-dark dark:to-slate-800/50 rounded-3xl p-8 shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-5 pointer-events-none select-none">
              <div className="text-6xl font-black text-blue-800">SV</div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cumple con la Normativa
              </h3>
              <p className="text-secondary-text-light dark:text-secondary-text-dark mb-6 leading-relaxed">
                Nuestro software de facturación electrónica está diseñado para asegurar el
                cumplimiento con las normativas fiscales de El Salvador, permitiendo emitir
                facturas DTE (Documento Tributario Electrónico) válidas según la legislación vigente.
              </p>

              <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl flex items-start gap-4 mb-6 border border-blue-100 dark:border-blue-900/30 shadow-sm">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg shadow-blue-500/40 mt-0.5 flex-shrink-0">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">
                    Facturación Electrónica DTE
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Compatible con Ministerio de Hacienda El Salvador
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Automate card ── */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col justify-between overflow-hidden relative min-h-[380px]">

            {/* Text content */}
            <div className="relative z-10 p-8 max-w-xs">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Automatiza y Optimiza
              </h3>
              <p className="text-secondary-text-light dark:text-secondary-text-dark mb-8 leading-relaxed text-sm">
                Optimiza el proceso de manejo de flotas, reservas y facturación. Ahorra tiempo y
                valida en orden con nuestra plataforma automatizada.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 duration-200 text-sm"
              >
                Solicitar una Demostración
              </a>
            </div>

            <div className="absolute right-0 w-72 h-80 pointer-events-none select-none">
              {/* Fade mask from transparent (top) to visible (bottom) */}
              <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: 'linear-gradient(to bottom, white 0%, transparent 35%)',
                  }}
              />
              {/* Dark mode fade */}
              <div
                  className="absolute inset-0 z-10 hidden dark:block"
                  style={{
                    background: 'linear-gradient(to bottom, #1E293B 0%, transparent 35%)',
                  }}
              />
              <Image
                  src="/images/agent.png"
                  alt="Agente de soporte Tu Rentadora"
                  fill
                  className="object-contain object-bottom"
                  priority
              />
            </div>

            {/* Glow blob */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl z-0" />
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
