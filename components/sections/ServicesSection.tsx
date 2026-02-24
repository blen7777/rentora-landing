'use client'

const features = [
  {
    icon: <CarIcon />,
    iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-primary',
    hoverGlow: 'group-hover:bg-blue-500/5',
    title: 'Flota',
    description: 'Monitorea y gestiona tu flota en tiempo real. Control de mantenimiento y estado.',
  },
  {
    icon: <CalendarIcon />,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
    hoverGlow: 'group-hover:bg-indigo-500/5',
    title: 'Reservas',
    description: 'Administra reservas y ocupación de manera eficiente. Calendario visual.',
  },
  {
    icon: <ReceiptIcon />,
    iconBg: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
    hoverGlow: 'group-hover:bg-green-500/5',
    title: 'Facturación Electrónica',
    description: 'Emite facturas DTE automatizadas y cumple con la normativa salvadoreña.',
  },
  {
    icon: <AnalyticsIcon />,
    iconBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    hoverGlow: 'group-hover:bg-purple-500/5',
    title: 'Reportes',
    description: 'Genera reportes detallados para analizar el desempeño de tu negocio.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="caracteristicas"
      className="py-16 bg-white dark:bg-surface-dark border-t border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:shadow-card transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className={`absolute inset-0 opacity-0 ${f.hoverGlow} transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner relative z-10 ${f.iconBg}`}>
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                {f.title}
              </h3>
              <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark relative z-10 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CarIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" /></svg>
}
function CalendarIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
}
function ReceiptIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
}
function AnalyticsIcon() {
  return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
}
