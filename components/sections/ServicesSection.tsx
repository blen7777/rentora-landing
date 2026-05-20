'use client'

const features = [
  {
    icon: <CarIcon />,
    iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-primary',
    hoverGlow: 'group-hover:bg-blue-500/5',
    title: 'Control de flota',
    description: 'Visualiza el estado de cada vehículo, su mantenimiento y su disponibilidad en tiempo real.',
  },
  {
    icon: <CalendarIcon />,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
    hoverGlow: 'group-hover:bg-indigo-500/5',
    title: 'Reservas centralizadas',
    description: 'Administra reservas por fecha, sucursal y cliente para evitar duplicidades y sobreventa.',
  },
  {
    icon: <ReceiptIcon />,
    iconBg: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
    hoverGlow: 'group-hover:bg-green-500/5',
    title: 'Facturación DTE',
    description: 'Emite documentos tributarios electrónicos dentro del mismo flujo operativo de la renta.',
  },
  {
    icon: <AnalyticsIcon />,
    iconBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    hoverGlow: 'group-hover:bg-purple-500/5',
    title: 'Reportes ejecutivos',
    description: 'Toma decisiones con métricas claras sobre ingresos, ocupación, mantenimiento y rentabilidad.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="caracteristicas"
      className="border-y border-gray-100 bg-white py-16 dark:border-gray-800 dark:bg-surface-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Qué resuelve Rentora
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            Una plataforma enfocada en la operación real de una rentadora de vehículos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
            Rentora conecta la operación diaria, la flota y la facturación para que el equipo trabaje con más orden, menos errores y menos trabajo manual.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 text-center transition-all duration-300 hover:shadow-card dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
            >
              <div className={`absolute inset-0 opacity-0 ${f.hoverGlow} transition-opacity duration-300`} />
              <div className={`relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-inner ${f.iconBg}`}>
                {f.icon}
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
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
