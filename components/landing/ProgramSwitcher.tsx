import { Icon } from './shared'

const programs = [
  {
    key: 'referidos',
    href: '/referidos',
    title: 'Ya soy cliente de Rentora',
    text: 'Refiere con el código de tu empresa: 15% de un mes del plan, en un solo pago.',
    icon: 'car',
  },
  {
    key: 'aliados',
    href: '/aliados',
    title: 'No soy cliente, pero conozco rentadoras',
    text: 'Hazte aliado: 15% cada mes durante el primer año y 10% después, mientras la rentadora pague.',
    icon: 'wallet',
  },
] as const

// Las dos formas de ganar recomendando Rentora, enlazadas entre sí.
export function ProgramSwitcher({ current }: { current: 'referidos' | 'aliados' }) {
  return (
    <section className="r-container r-ref-switcher" aria-label="Programas para recomendar Rentora">
      <p className="r-ref-switcher-title">¿Cuál programa es para ti?</p>
      <div className="r-ref-switcher-grid">
        {programs.map((program) => {
          const active = program.key === current
          return (
            <a
              key={program.key}
              href={active ? '#contenido' : program.href}
              className={`r-ref-switcher-card ${active ? 'is-active' : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              <Icon name={program.icon} size={22} />
              <span>
                <strong>{program.title}</strong>
                <small>{program.text}</small>
              </span>
              {active ? (
                <em>Estás aquí</em>
              ) : (
                <Icon name="arrow" size={18} className="r-ref-switcher-arrow" />
              )}
            </a>
          )
        })}
      </div>
    </section>
  )
}
