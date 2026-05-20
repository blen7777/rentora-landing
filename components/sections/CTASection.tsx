'use client'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
          Rentora para Latinoamérica
        </p>
        <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Automatiza tu rent a car desde una sola plataforma
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-xl font-light leading-relaxed text-gray-300">
          Centraliza flota, reservas, clientes, contratos, facturación DTE y reportes en un sistema pensado para rentadoras de vehículos en LATAM.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-primary shadow-xl shadow-blue-900/30 transition duration-200 hover:-translate-y-1 hover:bg-blue-50"
          >
            Agendar demo gratuita
          </a>
          <a
            href="/que-es-rentora"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15"
          >
            Ver qué es Rentora
          </a>
        </div>
      </div>
    </section>
  )
}
