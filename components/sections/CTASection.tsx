'use client'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

export function CTASection() {
  return (
    <section className="relative bg-background-dark py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-0" />

      {/* Blue accent blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

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
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-blue-900/30 transform hover:-translate-y-1 transition-all duration-200 text-base"
          >
            Agendar Demo Gratuita
          </a>
          <a
            href="mailto:hola@turentadora.sv"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-4 px-8 rounded-lg backdrop-blur-sm transition-all duration-200 text-base"
          >
            Contactar Ventas
          </a>
        </div>
      </div>
    </section>
  )
}
