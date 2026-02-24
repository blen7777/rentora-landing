'use client'

const features = [
  {
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-primary',
    icon: <CommuteIcon />,
    title: 'Control de Vehículos',
    description: 'Monitorea kilometraje, mantenimientos preventivos y disponibilidad en tiempo real.',
  },
  {
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    icon: <EventIcon />,
    title: 'Reservas Centralizadas',
    description: 'Administra reservas y ocupación de manera eficiente, evitando overbooking.',
  },
  {
    iconBg: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    icon: <ShieldIcon />,
    title: 'Facturación Electrónica DTE',
    description: 'Emite facturas DTE automáticamente al cerrar un contrato y cumple con la normativa.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 overflow-hidden bg-gray-50 dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="mb-14 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Automatización y Cumplimiento <br className="hidden sm:block" />
              para Rentadoras de Vehículos
            </h2>
            <p className="text-secondary-text-light dark:text-secondary-text-dark mb-10 leading-relaxed">
              Simplifica la operación diaria de tu negocio con herramientas diseñadas para
              ahorrar tiempo y evitar errores.
            </p>

            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">{f.title}</h4>
                    <p className="text-secondary-text-light dark:text-secondary-text-dark mt-1 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Floating cards mockup ── */}
          <div className="relative min-h-[520px] bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden shadow-2xl dark:bg-slate-800 dark:border-slate-700">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 transform translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/60 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center">
              <div className="relative w-full max-w-md mx-auto h-[420px]">

                {/* Fleet summary card */}
                <div className="absolute top-10 -left-4 sm:-left-6 w-60 glass-panel rounded-xl p-4 z-20 shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-gray-800 dark:text-white text-sm font-semibold">Resumen de Flota</h5>
                    <DotsIcon />
                  </div>
                  <div className="relative h-20 mb-3 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-12 text-blue-300 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" />
                    </svg>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">142</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Vehículos Disp.</span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
                      <span>32 Rentados</span>
                      <span>18 Taller</span>
                    </div>
                  </div>
                </div>

                {/* Invoice card */}
                <div className="absolute top-4 -right-4 sm:-right-6 w-60 glass-panel rounded-xl p-5 z-30 shadow-xl translate-y-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Factura #1756</div>
                      <div className="text-gray-900 dark:text-white font-bold mt-1 text-sm">Javier Torres</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">Total</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">$420.00</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded" />
                    <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                      Pagado
                    </span>
                  </div>
                </div>

                {/* Reservations calendar card */}
                <div className="absolute top-[230px] left-1/2 transform -translate-x-1/2 w-72 glass-panel rounded-xl p-4 z-10 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-gray-800 dark:text-white text-sm font-semibold">Reservas</h5>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="flex text-[10px] text-gray-500 dark:text-gray-400 justify-between mb-2 px-1 font-medium">
                    {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                  <div className="space-y-2 relative h-24">
                    {/* Grid lines */}
                    <div className="absolute left-1/3 top-0 bottom-0 w-px border-l border-dashed border-gray-200 dark:border-gray-600" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px border-l border-dashed border-gray-200 dark:border-gray-600" />
                    {[
                      { width: 'w-3/4', color: 'bg-blue-100/80 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-200', label: 'Juan Pérez - Corolla', ml: '' },
                      { width: 'w-2/3', color: 'bg-orange-100/80 dark:bg-orange-900/40 border-orange-200 dark:border-orange-700/50 text-orange-800 dark:text-orange-200', label: 'Maria L. - Kia Rio', ml: 'ml-auto' },
                      { width: 'w-1/2', color: 'bg-indigo-100/80 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700/50 text-indigo-800 dark:text-indigo-200', label: 'Carlos R. - Hilux', ml: 'mx-auto' },
                    ].map((r) => (
                      <div key={r.label} className={`h-6 ${r.width} ${r.ml} border rounded flex items-center px-2 relative z-10 ${r.color}`}>
                        <span className="text-[9px] font-medium truncate">{r.label}</span>
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
