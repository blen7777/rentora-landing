'use client'

import Link from 'next/link'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

const vehicles = [
  { name: 'Toyota Corolla 2023', plate: 'P-123-456', status: 'Disponible', statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { name: 'Kia Sportage 2022', plate: 'P-987-654', status: 'Rentado', statusClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  { name: 'Hyundai H1', plate: 'P-456-789', status: 'Mantenimiento', statusClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-light pb-20 pt-32 dark:bg-background-dark lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-100 opacity-50 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-indigo-100 opacity-50 blur-3xl dark:bg-indigo-900/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="mb-16 text-center lg:col-span-5 lg:mb-0 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Rentora para rent a car
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Automatiza y administra tu <br />
              <span className="text-primary">rent a car</span> desde <br />
              una sola plataforma
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              Rentora es una plataforma SaaS para empresas de renta de vehículos en Latinoamérica.
              Centraliza flota, reservas, clientes, contratos, pagos, reportes y facturación DTE para operar con menos fricción y más control.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:bg-primary-hover"
              >
                Agendar demo gratuita
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#demo"
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Ver demo
              </a>
              <Link
                href="/que-es-rentora"
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              >
                ¿Qué es Rentora?
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-gray-500 dark:text-gray-400 lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>Facturación DTE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>Control de flota</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>Reservas centralizadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <span>En Latinoamérica</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative rotate-1 overflow-visible rounded-xl border border-gray-200 bg-surface-light p-1 shadow-2xl transition duration-500 hover:rotate-0 dark:border-gray-700 dark:bg-surface-dark">
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900/50">
                <div className="flex h-8 items-center space-x-2 border-b border-gray-200 bg-gray-100 px-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="flex flex-1 justify-center">
                    <div className="rounded-md bg-white px-3 py-0.5 text-[10px] text-gray-400 dark:bg-gray-700">
                      https://app.rentora-app.com/dashboard
                    </div>
                  </div>
                </div>

                <div className="grid min-h-[400px] grid-cols-12">
                  <div className="col-span-2 hidden flex-col border-r border-gray-200 bg-white p-3 space-y-4 dark:border-gray-700 dark:bg-surface-dark sm:flex">
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-glow">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div
                          key={i}
                          className={`flex justify-center rounded-lg p-2 transition-colors ${item.active ? 'bg-blue-50 text-primary dark:bg-blue-900/30' : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex justify-center border-t border-gray-100 pt-3 dark:border-gray-800">
                      <div className="flex h-4 w-6 items-center justify-center rounded-sm bg-blue-600 text-[6px] font-bold text-white opacity-70">
                        SV
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 bg-gray-50/50 p-5 dark:bg-gray-900/50 sm:col-span-10">
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      {[
                        { icon: <VehicleStatIcon />, iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600', value: '24', label: 'Vehículos activos', badge: '+12%' },
                        { icon: <PaymentIcon />, iconBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600', value: '$4.2k', label: 'Ingresos mes', badge: '+5%' },
                        { icon: <ReceiptStatIcon />, iconBg: 'bg-green-100 dark:bg-green-900/40 text-green-600', value: '18', label: 'DTE emitidos', badge: null },
                      ].map((stat, i) => (
                        <div key={i} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                          <div className="mb-2 flex items-start justify-between">
                            <div className={`rounded-md p-1.5 ${stat.iconBg}`}>{stat.icon}</div>
                            {stat.badge && (
                              <span className="rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-semibold text-green-600 dark:bg-green-900/20">
                                {stat.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                          <div className="text-[10px] text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                      <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-sm font-bold text-gray-800 dark:text-white">Estado de flota</h2>
                        <button className="rounded bg-primary px-2 py-1 text-[10px] font-medium text-white">Nuevo</button>
                      </div>
                      <div className="space-y-2">
                        {vehicles.map((v) => (
                          <div key={v.plate} className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" />
                              </svg>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-[11px] font-bold text-gray-800 dark:text-gray-200">{v.name}</div>
                              <div className="text-[10px] text-gray-500">{v.plate}</div>
                            </div>
                            <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium ${v.statusClass}`}>
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

            <div className="animate-float absolute -bottom-10 -right-4 z-20 w-60 rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-600 dark:bg-gray-800 sm:-right-8">
              <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircleIcon className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">DTE aprobado</span>
                </div>
                <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  CCFE: 32A4...
                </span>
              </div>
              <div className="space-y-2">
                {[70, 50].map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="h-2 rounded bg-gray-200" style={{ width: `${w}%` }} />
                    <div className="h-2 w-8 rounded bg-gray-200" />
                  </div>
                ))}
                {[80, 60].map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="h-2 rounded bg-gray-100 dark:bg-gray-700" style={{ width: `${w}%` }} />
                    <div className="h-2 w-10 rounded bg-gray-100 dark:bg-gray-700" />
                  </div>
                ))}
                <div className="flex items-end justify-between border-t border-dashed border-gray-200 pt-2 dark:border-gray-600">
                  <span className="text-[10px] text-gray-400">Total a pagar</span>
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

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'h-4 w-4'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function DashboardIcon() {
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
}

function CalendarIcon() {
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
}

function ReceiptIcon() {
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
}

function GroupIcon() {
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
}

function VehicleStatIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM1 1h4l2.68 13.39a2 2 0 001.96 1.61h9.72a2 2 0 001.95-1.55L23 6H6" /></svg>
}

function PaymentIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
}

function ReceiptStatIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
}
