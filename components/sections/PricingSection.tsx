'use client'

const plans = [
  {
    name: 'Micro',
    description: 'Para emprendedores',
    price: 'USD $20.00',
    period: '+ IVA / mes',
    features: [
      'Hasta 7 vehículos',
      'Hasta 30 DTE / mes',
      'DTE adicional: $0.15 c/u',
      '1 sucursal',
      '2 usuarios',
      'Contratos PDF automáticos',
      'Soporte por email, respuesta en 24–48h hábiles',
    ],
    cta: 'Elegir plan',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
  },
  {
    name: 'Starter',
    description: 'Para agencias pequeñas',
    price: 'USD $49.00',
    period: '+ IVA / mes',
    features: [
      'Hasta 10 vehículos',
      'Hasta 100 DTE / mes',
      'DTE adicional: $0.15 c/u',
      '1 sucursal',
      'Control de usuarios',
      'Gestión de reservas básica',
      'Contratos PDF automáticos',
      'Soporte por email, respuesta en 24–48h hábiles',
    ],
    cta: 'Elegir plan',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
  },
  {
    name: 'Pro',
    description: 'Para flotas medianas',
    price: 'USD $99.00',
    period: '+ IVA / mes',
    features: [
      '6–20 vehículos',
      'Hasta 400 DTE / mes',
      'DTE adicional: $0.12 c/u',
      'Gestión de flota completa',
      '2 sucursales',
      'Control de usuarios',
      'Reportes financieros avanzados',
      'Soporte prioritario, respuesta en 12–24h hábiles',
    ],
    cta: 'Elegir plan',
    ctaHref: '#',
    highlighted: true,
    checkColor: 'text-primary',
  },
  {
    name: 'Business',
    description: 'Para agencias en crecimiento',
    price: 'USD $179.00',
    period: '+ IVA / mes',
    features: [
      '21–60 vehículos',
      'Hasta 700 DTE / mes',
      'DTE adicional: $0.08 c/u',
      'Reportes ejecutivos',
      '3 sucursales',
      'Control de usuarios',
      'Soporte prioritario avanzado, respuesta en 4–8h hábiles',
    ],
    cta: 'Elegir plan',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
  },
]

export function PricingSection() {
  const getPlanHref = (plan: (typeof plans)[number]) => {
    if (plan.ctaHref !== '#') {
      return plan.ctaHref
    }

    return `https://wa.me/50376471451?text=${encodeURIComponent(
      `Hola, estoy interesado en el plan ${plan.name} de Rentora. ¿Podrían enviarme más información e indicarme cómo implementar la plataforma en mi rent a car?`
    )}`
  }

  return (
    <section id="precios" className="bg-gray-50 py-20 dark:bg-background-dark/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Planes
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            Elige el plan que mejor se adapte al tamaño de tu flota
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-text-light dark:text-secondary-text-dark">
            Diseñado para rentadoras que quieren crecer con una operación ordenada y una facturación más eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'z-10 border-2 border-primary shadow-xl'
                  : 'border border-gray-100 shadow-card dark:border-gray-700'
              } bg-white dark:bg-surface-dark`}
            >
              {plan.highlighted && (
                <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-primary px-3 py-1 text-xs font-bold text-white">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-secondary-text-light dark:text-secondary-text-dark">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckSmallIcon
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.checkColor}`}
                      filled={plan.highlighted}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'font-medium text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={getPlanHref(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-lg py-3 text-center font-semibold transition ${
                  plan.highlighted
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30 hover:bg-primary-hover'
                    : 'border border-gray-200 bg-gray-50 text-primary hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-secondary-text-light dark:text-secondary-text-dark">
          Precios mensuales expresados en dólares estadounidenses. No incluyen IVA; se añadirá el 13% al momento de facturar.
          <br />
          La integración del módulo DTE con el Ministerio de Hacienda tiene un costo adicional de pago único.
        </p>
      </div>
    </section>
  )
}

function CheckSmallIcon({ className, filled }: { className?: string; filled?: boolean }) {
  if (filled) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}
