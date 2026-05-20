'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { rentoraAudience, rentoraBenefits, rentoraDescription, rentoraLatamMessage } from '@/lib/rentora-seo'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

export function RentoraOverviewSection() {
  return (
    <section id="que-es" className="py-20 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Plataforma SaaS para rent a car
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              ¿Qué es Rentora?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              {rentoraDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              La plataforma está pensada para rentadoras de vehículos y empresas con flota que necesitan una
              operación más clara, ordenada y escalable en Latinoamérica.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {rentoraBenefits.slice(0, 4).map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-surface-dark">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Agendar demo gratuita
              </a>
              <Link
                href="/que-es-rentora"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Ver página SEO
              </Link>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-soft dark:border-gray-700 dark:from-slate-900 dark:to-slate-800"
            >
              <p className="text-sm font-semibold text-primary">¿Para quién es?</p>
              <ul className="mt-4 space-y-3">
                {rentoraAudience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 dark:border-blue-900/40 dark:bg-blue-950/20"
            >
              <p className="text-sm font-semibold text-primary">Problemas que resuelve</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                <li>Evita reservas duplicadas y conflictos de disponibilidad.</li>
                <li>Reduce errores manuales en contratos, cobros y DTE.</li>
                <li>Mejora el control de flota, mantenimiento y estados operativos.</li>
                <li>Conecta operación, facturación y reporting en un solo sistema.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-card dark:border-gray-700 dark:bg-surface-dark"
            >
              <p className="text-sm font-semibold text-primary">Rentora para LATAM</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                {rentoraLatamMessage}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
