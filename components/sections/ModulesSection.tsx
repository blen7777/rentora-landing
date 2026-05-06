'use client'

import { motion } from 'framer-motion'

const moduleGroups = [
  {
    title: 'Operación diaria',
    accent: 'bg-blue-500',
    modules: [
      { name: 'Dashboard', description: 'Indicadores de ocupación, ingresos, alertas y actividad reciente.' },
      { name: 'Reservaciones', description: 'Agenda visual para separar vehículos, fechas, clientes y sucursales.' },
      { name: 'Rentas', description: 'Contratos activos, entregas, cobros, extensiones y cierres.' },
      { name: 'Check-in / Check-out', description: 'Inspección, evidencia, combustible, kilometraje y firma del cliente.' },
      { name: 'Viajes', description: 'Seguimiento de rutas, historial operativo y control de movimientos.' },
    ],
  },
  {
    title: 'Flota y mantenimiento',
    accent: 'bg-emerald-500',
    modules: [
      { name: 'Vehículos', description: 'Ficha completa por unidad, documentos, placas, pólizas y disponibilidad.' },
      { name: 'Estado de flota', description: 'Disponible, reservado, rentado, taller, lavado o fuera de servicio.' },
      { name: 'Mantenimientos', description: 'Preventivos, correctivos, kilometraje, vencimientos y costos.' },
      { name: 'Conductores', description: 'Licencias, validaciones, historial y asignaciones por renta.' },
    ],
  },
  {
    title: 'Clientes y finanzas',
    accent: 'bg-amber-500',
    modules: [
      { name: 'Clientes', description: 'Datos, documentos, historial de rentas y comunicación centralizada.' },
      { name: 'Gastos', description: 'Registro por vehículo, sucursal, categoría y periodo contable.' },
      { name: 'Reportes', description: 'Rentabilidad, utilización, vencimientos, ingresos y desempeño de flota.' },
      { name: 'Facturación electrónica DTE', description: 'Emisión de documentos tributarios electrónicos conectada al flujo de renta.' },
    ],
  },
  {
    title: 'Administración',
    accent: 'bg-indigo-500',
    modules: [
      { name: 'Usuarios', description: 'Roles, permisos y trazabilidad de acciones del equipo.' },
      { name: 'Sucursales', description: 'Operación multi-sucursal con inventario y reservas por ubicación.' },
      { name: 'Ajustes / Configuración', description: 'Parámetros comerciales, impuestos, plantillas y reglas internas.' },
      { name: 'Papelera', description: 'Recuperación y control de registros eliminados por seguridad operativa.' },
      { name: 'Portal del cliente', description: 'Acceso para solicitudes, documentación, estado de reservas y comunicación.' },
    ],
  },
]

const highlightedFlow = ['Reserva', 'Check-in', 'Renta activa', 'DTE emitido']

export function ModulesSection() {
  return (
    <section id="modulos" className="py-20 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                Todos los módulos clave para operar una rentadora profesional
              </h2>
              <p className="mt-5 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                Rentora centraliza la operación comercial, la flota, la administración y la facturación DTE en un flujo conectado desde la reserva hasta el cierre de la renta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
              className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-soft dark:border-gray-700 dark:bg-surface-dark"
            >
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Flujo operativo conectado</p>
                  <p className="mt-1 text-xs text-secondary-text-light dark:text-secondary-text-dark">
                    La información avanza entre módulos sin duplicar trabajo.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  En tiempo real
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlightedFlow.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: 0.18 + index * 0.08 }}
                    className="rounded-xl border border-gray-200 bg-white p-3 text-center dark:border-gray-700 dark:bg-gray-900"
                  >
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-primary dark:bg-blue-950/50 dark:text-blue-300">
                      {index + 1}
                    </div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-200 bg-gray-950 p-3 shadow-2xl dark:border-gray-700"
          >
            <div className="rounded-xl bg-white p-4 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Dashboard operativo</p>
                  <p className="mt-1 text-xs text-secondary-text-light dark:text-secondary-text-dark">Vista ejecutiva de flota, rentas y facturación</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['76%', 'Ocupación'],
                  ['18', 'Rentas activas'],
                  ['$12.4K', 'Ingresos mes'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-slate-800">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                    <p className="mt-1 text-xs text-secondary-text-light dark:text-secondary-text-dark">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-gray-100 dark:border-gray-800">
                {[
                  ['Toyota Hilux', 'Check-out hoy', 'Reservada'],
                  ['Kia Rio', 'Mantenimiento 5,000 km', 'Taller'],
                  ['Hyundai Accent', 'DTE pendiente', 'Renta activa'],
                ].map(([vehicle, task, status]) => (
                  <div key={vehicle} className="grid grid-cols-[1fr_auto] gap-3 border-b border-gray-100 px-4 py-3 last:border-b-0 dark:border-gray-800">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{vehicle}</p>
                      <p className="mt-1 text-xs text-secondary-text-light dark:text-secondary-text-dark">{task}</p>
                    </div>
                    <span className="self-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary dark:bg-blue-950/40 dark:text-blue-300">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {moduleGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-gray-700 dark:bg-surface-dark"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`h-10 w-1.5 rounded-full ${group.accent}`} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.modules.map((module) => (
                  <div key={module.name} className="group/module">
                    <div className="flex items-start gap-3">
                      <ModuleIcon />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{module.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors group-hover/module:bg-blue-50 group-hover/module:text-primary dark:bg-gray-800 dark:text-gray-400 dark:group-hover/module:bg-blue-950/40 dark:group-hover/module:text-blue-300">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </span>
  )
}
