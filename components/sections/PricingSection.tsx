'use client'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/tu-usuario/demo'

const plans = [
  {
    name: 'Básico',
    description: 'Para pequeñas flotas',
    price: '$29',
    period: '/mes',
    features: [
      'Hasta 5 vehículos',
      'Facturación DTE básica',
      'Gestión de reservas simple',
      'Soporte por email',
    ],
    cta: 'Elegir Plan',
    ctaHref: CALENDLY_URL,
    highlighted: false,
    checkColor: 'text-green-500',
    checkIcon: 'check',
  },
  {
    name: 'Pro',
    description: 'Para flotas medianas',
    price: '$79',
    period: '/mes',
    features: [
      'Hasta 25 vehículos',
      'Gestión de flota completa',
      'Facturación DTE ilimitada',
      'Reportes avanzados',
      'Soporte prioritario',
    ],
    cta: 'Elegir Plan',
    ctaHref: CALENDLY_URL,
    highlighted: true,
    checkColor: 'text-primary',
    checkIcon: 'check_circle',
  },
  {
    name: 'Enterprise',
    description: 'Para grandes agencias',
    price: 'Custom',
    period: '',
    features: [
      'Flota ilimitada',
      'DTE Ilimitado + Multi-sucursal',
      'Integraciones API a medida',
      'Gestor de cuenta dedicado',
      'SLA de soporte garantizado',
    ],
    cta: 'Contactar Ventas',
    ctaHref: '#',
    highlighted: false,
    checkColor: 'text-green-500',
    checkIcon: 'check',
  },
]

export function PricingSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-surface-dark rounded-2xl p-8 flex flex-col relative transition-transform hover:-translate-y-1 duration-300 ${
                plan.highlighted
                  ? 'shadow-xl shadow-blue-500/10 border-2 border-primary scale-105 z-10'
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
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`w-full block text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary border border-gray-200 dark:border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
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
