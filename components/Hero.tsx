'use client'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

const vehicles = [
  { name: 'Toyota Corolla 2023', plate: 'P-123-456', status: 'Disponible', statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { name: 'Kia Sportage 2022', plate: 'P-987-654', status: 'Rentado', statusClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  { name: 'Hyundai H1', plate: 'P-456-789', status: 'Mantenimiento', statusClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="lg:col-span-5 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Automatiza tu <br />
              <span className="text-primary">Rent a Car</span> en <br />
              Latinoamérica
            </h1>
            <p className="text-lg text-secondary-text-light dark:text-secondary-text-dark mb-8 leading-relaxed">
              Software de gestión integral y facturación electrónica diseñado específicamente
              para rentadoras de vehículos. Controla tu flota, gestiona reservas y cumple con Hacienda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-base font-semibold transition shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group"
              >
                Agendar Demo Gratuita
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#caracteristicas"
                className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-base font-semibold transition flex items-center justify-center"
              >
                Ver Características
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>Facturación DTE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>Soporte Local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>Sin contratos</span>
              </div>
            </div>
          </div>

          {/* ── Right: Dashboard mockup ── */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-1 overflow-visible transform rotate-1 hover:rotate-0 transition duration-500">

              {/* Browser chrome */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden">
                <div className="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-0.5 text-[10px] text-gray-400">
                      https://platform.rentora-app.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-12 min-h-[400px]">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden sm:flex flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-3 space-y-4">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2 shadow-glow">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" />
                      </svg>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { icon: <DashboardIcon />, active: true },
                        { icon: <CalendarIcon />, active: false },
                        { icon: <ReceiptIcon />, active: false },
                        { icon: <GroupIcon />, active: false },
                      ].map((item, i) => (
                        <div key={i} className={`p-2 rounded-lg flex justify-center transition-colors ${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-primary' : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                          {item.icon}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-center">
                      <div className="w-6 h-4 bg-blue-600 rounded-sm opacity-70 text-white text-[6px] flex items-center justify-center font-bold">SV</div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="col-span-12 sm:col-span-10 p-5 bg-gray-50/50 dark:bg-gray-900/50">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { icon: <VehicleStatIcon />, iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600', value: '24', label: 'Vehículos Activos', badge: '+12%' },
                        { icon: <PaymentIcon />, iconBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600', value: '$4.2k', label: 'Ingresos Mes', badge: '+5%' },
                        { icon: <ReceiptStatIcon />, iconBg: 'bg-green-100 dark:bg-green-900/40 text-green-600', value: '18', label: 'DTE Emitidos', badge: null },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex justify-between items-start mb-2">
                            <div className={`p-1.5 rounded-md ${stat.iconBg}`}>
                              {stat.icon}
                            </div>
                            {stat.badge && (
                              <span className="text-[10px] font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
                                {stat.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                          <div className="text-[10px] text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Fleet list */}
                    <div className="bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-bold text-gray-800 dark:text-white">Estado de Flota</h3>
                        <button className="text-[10px] bg-primary text-white px-2 py-1 rounded font-medium">Nuevo</button>
                      </div>
                      <div className="space-y-2">
                        {vehicles.map((v) => (
                          <div key={v.plate} className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] font-bold text-gray-800 dark:text-gray-200 truncate">{v.name}</div>
                              <div className="text-[10px] text-gray-500">{v.plate}</div>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${v.statusClass}`}>
                              {v.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating DTE card */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 w-60 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-600 p-4 z-20 animate-float">
              <div className="flex justify-between items-center mb-3 border-b border-gray-100 dark:border-gray-700 pb-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">DTE Aprobado</span>
                </div>
                <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-[10px] px-2 py-0.5 rounded font-mono">
                  CCFE: 32A4...
                </span>
              </div>
              <div className="space-y-2">
                {[70, 50].map((w, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className={`h-2 bg-gray-200 dark:bg-gray-600 rounded`} style={{ width: `${w}%` }} />
                    <div className="h-2 w-8 bg-gray-200 dark:bg-gray-600 rounded" />
                  </div>
                ))}
                {[80, 60].map((w, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded" style={{ width: `${w}%` }} />
                    <div className="h-2 w-10 bg-gray-100 dark:bg-gray-700 rounded" />
                  </div>
                ))}
                <div className="pt-2 border-t border-dashed border-gray-200 dark:border-gray-600 flex justify-between items-end">
                  <span className="text-[10px] text-gray-400">Total a Pagar</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">$150.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Icon helpers ── */
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'w-4 h-4'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function DashboardIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
}
function CalendarIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
}
function ReceiptIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
}
function GroupIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
}
function VehicleStatIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" /></svg>
}
function PaymentIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
}
function ReceiptStatIcon() {
  return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
}
