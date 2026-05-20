'use client'

const features = [
  {
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-primary',
    icon: <CommuteIcon />,
    title: 'Control de vehículos',
    description: 'Monitorea kilometraje, mantenimientos preventivos y disponibilidad en tiempo real.',
  },
  {
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    icon: <EventIcon />,
    title: 'Reservas centralizadas',
    description: 'Administra reservas y ocupación desde un solo panel para evitar overbooking.',
  },
  {
    iconBg: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    icon: <ShieldIcon />,
    title: 'Facturación electrónica DTE',
    description: 'Emite facturas DTE al cerrar una renta y mantén tu operación ordenada y trazable.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="overflow-hidden bg-gray-50 py-20 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-14 lg:mb-0">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Por qué Rentora
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Automatización y cumplimiento para rentadoras de vehículos
            </h2>
            <p className="mb-10 leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              Rentora reduce tareas manuales, evita errores operativos y unifica flota, reservas y facturación en una sola plataforma pensada para LATAM.
            </p>

            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full shadow-sm ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-800">
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-3xl opacity-70 transform translate-x-1/4 -translate-y-1/4 dark:bg-blue-900/10" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-50/60 blur-3xl opacity-70 transform -translate-x-1/4 translate-y-1/4 dark:bg-indigo-900/10" />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
              <div className="relative mx-auto h-[420px] w-full max-w-md">
                <div className="glass-panel absolute -left-4 top-10 z-20 w-60 rounded-xl p-4 shadow-xl transition-transform duration-300 hover:scale-105 sm:-left-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Resumen de flota</h3>
                    <DotsIcon />
                  </div>
                  <div className="relative mb-3 flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-600">
                    <svg className="h-12 w-16 text-blue-300 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" />
                    </svg>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">142</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">vehículos disponibles</span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
                      <span>32 rentados</span>
                      <span>18 taller</span>
                    </div>
                  </div>
                </div>

                <div className="glass-panel absolute -right-4 top-4 z-30 w-60 rounded-xl p-5 shadow-xl translate-y-8 sm:-right-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Renta #1756
                      </div>
                      <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">Javier Torres</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">Total</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">$420.00</div>
                    </div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-100 dark:bg-gray-700" />
                    <div className="h-2 w-2/3 rounded bg-gray-100 dark:bg-gray-700" />
                  </div>
                  <div className="flex justify-end">
                    <span className="rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Pagado
                    </span>
                  </div>
                </div>

                <div className="glass-panel absolute left-1/2 top-[230px] z-10 w-72 -translate-x-1/2 rounded-xl p-4 shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Reservas</h3>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="mb-2 flex justify-between px-1 text-[10px] font-medium text-gray-500 dark:text-gray-400">
                    {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                  <div className="relative h-24 space-y-2">
                    <div className="absolute bottom-0 top-0 left-1/3 w-px border-l border-dashed border-gray-200 dark:border-gray-600" />
                    <div className="absolute bottom-0 top-0 left-2/3 w-px border-l border-dashed border-gray-200 dark:border-gray-600" />
                    {[
                      { width: 'w-3/4', color: 'bg-blue-100/80 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-200', label: 'Juan Pérez - Corolla', ml: '' },
                      { width: 'w-2/3', color: 'bg-orange-100/80 dark:bg-orange-900/40 border-orange-200 dark:border-orange-700/50 text-orange-800 dark:text-orange-200', label: 'Maria L. - Kia Rio', ml: 'ml-auto' },
                      { width: 'w-1/2', color: 'bg-indigo-100/80 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700/50 text-indigo-800 dark:text-indigo-200', label: 'Carlos R. - Hilux', ml: 'mx-auto' },
                    ].map((r) => (
                      <div key={r.label} className={`relative z-10 flex h-6 items-center rounded border px-2 ${r.width} ${r.ml} ${r.color}`}>
                        <span className="truncate text-[9px] font-medium">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommuteIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" /></svg> }
function EventIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> }
function ShieldIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
function DotsIcon() { return <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg> }
