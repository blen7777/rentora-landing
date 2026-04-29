'use client'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

export function CTASection() {
  return (
    <section className="relative bg-blue-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6 tracking-tight leading-tight">
          Potencia tu Negocio de <br />
          Renta de Vehículos
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Prueba nuestro software de gestión y facturación electrónica y descubre cómo puede
          ayudarte a cumplir con la normativa y mejorar la rentabilidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-primary font-bold py-4 px-8 rounded-lg shadow-xl shadow-blue-900/30 transform hover:-translate-y-1 transition-all duration-200 text-base"
          >
            Agendar Demo Gratuita
          </a>

        </div>
      </div>
    </section>
  )
}
