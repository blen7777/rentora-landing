'use client'

const plans = [
  {
    name: 'Free Trial',
    description: 'Acceso temporal por 14 dias',
    price: '$0',
    period: '/ 14 dias',
    features: [
      'Prueba gratuita de 14 dias',
      'Acceso temporal por 14 dias',
      'Hasta 5 vehiculos',
      '1 sucursal',
      'Prueba guiada del producto',
    ],
    cta: 'Comenzar Gratis',
    ctaHref: 'https://platform.rentora-app.com/signup',
    highlighted: false,
    checkColor: 'text-green-500',
  },
  {
    name: 'Starter',
    description: 'Para agencias pequeñas',
    price: '$49',
    period: '+ IVA /mes',
    features: [
      '1–5 vehículos',
      'Hasta 100 DTE / mes',
      'DTE adicional: $0.15 c/u',
      '1 sucursal',
      'Control de usuarios',
      'Gestión de reservas básica',
      'Contratos PDF automáticos',
      'Soporte por email, respuesta en 24–48h hábiles',
    ],
    cta: 'Elegir Plan',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
  },
  {
    name: 'Pro',
    description: 'Para flotas medianas',
    price: '$99',
    period: '+ IVA /mes',
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
    cta: 'Elegir Plan',
    ctaHref: '#',
    highlighted: true,
    checkColor: 'text-primary',
  },
  {
    name: 'Business',
    description: 'Para agencias en crecimiento',
    price: '$179',
    period: '+ IVA /mes',
    features: [
      '21–60 vehículos',
      'Hasta 700 DTE / mes',
      'DTE adicional: $0.08 c/u',
      'Reportes ejecutivos',
      '3 sucursales',
      'Control de usuarios',
      'Soporte prioritario avanzado, respuesta en 4–8h hábiles',
    ],
    cta: 'Elegir Plan',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
  },
  {
    name: 'Enterprise',
    description: 'Para grandes agencias',
    price: '$299+',
    period: '+ IVA /mes',
    features: [
      'Flota ilimitada',
      'DTE ilimitado',
      'Multi-sucursal',
      'Integraciones API',
      'Gestor de cuenta dedicado',
      'SLA garantizado, respuesta desde 1h',
    ],
    cta: 'Contactar Ventas',
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
      `Hola 👋 Estoy interesado en el plan ${plan.name} de Rentora. ¿Podrían enviarme más información y detalles de implementación?`
    )}`
  }

  return (
    <section id="precios" className="py-20 bg-gray-50 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Planes y Precios
          </h2>
          <p className="text-lg text-secondary-text-light dark:text-secondary-text-dark max-w-2xl mx-auto">
            Elige el plan que mejor se adapte al tamaño de tu flota y necesidades de facturación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-surface-dark rounded-2xl p-8 flex flex-col relative transition-transform hover:-translate-y-1 duration-300 ${
                plan.highlighted
                  ? 'shadow-xl border-2 border-primary z-10'
                  : 'shadow-card border border-gray-100 dark:border-gray-700'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">{plan.period}</span>}
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckSmallIcon
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.checkColor}`}
                      filled={plan.highlighted}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-600 dark:text-gray-300 font-medium' : 'text-gray-600 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={getPlanHref(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3 rounded-lg font-semibold transition ${
                  plan.name === 'Enterprise'
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                    : plan.highlighted
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary border border-gray-200 dark:border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-secondary-text-light dark:text-secondary-text-dark max-w-3xl mx-auto">
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
