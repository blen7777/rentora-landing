import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildFaqJsonLd,
  buildSeoJsonLd,
  rentoraAudience,
  rentoraBenefits,
  rentoraBrand,
  rentoraDescription,
  rentoraFaqs,
  rentoraLatamMessage,
  rentoraModules,
  rentoraSeo,
} from '@/lib/rentora-seo'

const pageUrl = `${rentoraBrand.siteUrl}/que-es-rentora`
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

export const metadata: Metadata = {
  title: '¿Qué es Rentora? | Software para rent a car en Latinoamérica',
  description: rentoraSeo.description,
  keywords: rentoraSeo.keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '¿Qué es Rentora? | Software para rent a car en Latinoamérica',
    description: rentoraSeo.openGraphDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rentora - Software de gestión para rentadoras de vehículos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es Rentora? | Software para rent a car en Latinoamérica',
    description: rentoraSeo.openGraphDescription,
    images: ['/og-image.png'],
  },
}

export default function QueEsRentoraPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_24%),linear-gradient(180deg,_#F8FAFC_0%,_#EFF6FF_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_30%),linear-gradient(180deg,_#0F172A_0%,_#111827_100%)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSeoJsonLd(pageUrl)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(pageUrl)) }}
      />

      <section className="border-b border-white/50 dark:border-slate-800/70">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:border-blue-900/40 dark:bg-slate-900/70 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Software SaaS para rentadoras de vehículos
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              ¿Qué es Rentora?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-text-light dark:text-secondary-text-dark">
              {rentoraDescription}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary-text-light dark:text-secondary-text-dark">
              Automatiza y administra tu rent a car desde una sola plataforma con una experiencia pensada para la operación diaria, la facturación DTE y el crecimiento en Latinoamérica.
            </p>

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
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-slate-900/80 dark:text-gray-200 dark:hover:bg-slate-800"
              >
                Volver a la landing
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {['Flota', 'Reservas', 'Contratos', 'Facturación DTE'].map((label) => (
                <div key={label} className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                    Parte del flujo operativo que Rentora centraliza para eliminar tareas manuales.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft dark:border-gray-700 dark:bg-slate-900/80">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">¿Para quién es?</p>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Diseñado para empresas de rent a car y negocios con flota</h2>
            <div className="mt-6 space-y-4">
              {rentoraAudience.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50/80 p-8 shadow-soft dark:border-blue-900/40 dark:bg-blue-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">¿Qué problema resuelve?</p>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Menos fricción operativa y más control</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              <p>Evita reservas duplicadas, reduce errores manuales y centraliza la información clave de cada vehículo y cliente.</p>
              <p>Integra operación, cobros, documentación y reportes para que el equipo trabaje con procesos más ordenados.</p>
              <p>Mejora el seguimiento de mantenimiento, disponibilidad y facturación electrónica dentro del mismo flujo de trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Módulos</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">¿Qué módulos incluye Rentora?</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rentoraModules.flatMap((group) => group.modules).map((module) => (
            <article key={module.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft dark:border-gray-700 dark:bg-slate-900/80">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{module.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
                {module.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {rentoraBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft dark:border-gray-700 dark:bg-slate-900/80">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Rentora para LATAM</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Software pensado para Latinoamérica</h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              {rentoraLatamMessage}
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
              Su posicionamiento está enfocado en rentadoras de vehículos, empresas con flota y equipos que necesitan una herramienta clara para crecer en la región.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft dark:border-gray-700 dark:bg-slate-900/80">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Resumen</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Qué es</p>
                <p className="mt-1 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">Una plataforma SaaS para gestionar rent a car.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Para quién es</p>
                <p className="mt-1 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">Empresas de alquiler de vehículos y flotas.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Dónde opera</p>
                <p className="mt-1 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">En Latinoamérica, con enfoque regional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Preguntas frecuentes</h2>
        </div>
        <div className="mt-10 grid gap-4">
          {rentoraFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-soft dark:border-gray-700 dark:bg-slate-900/80">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 dark:text-white">
                <span>{faq.question}</span>
                <span className="text-2xl leading-none text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-950 px-6 py-10 text-center shadow-2xl shadow-blue-950/20 sm:px-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">¿Quieres ver Rentora en acción?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100/90">
            Agenda una demo gratuita, revisa los módulos y valida cómo se adapta a la operación de tu rent a car.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50"
            >
              Agendar demo gratuita
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Volver al inicio
            </Link>
          </div>
          <p className="mt-5 text-xs text-blue-100/70">
            {rentoraDescription}
          </p>
        </div>
      </section>
    </main>
  )
}
