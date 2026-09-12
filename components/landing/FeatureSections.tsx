'use client'

import { useState, type KeyboardEvent } from 'react'
import { ButtonLink, CarIllustration, Icon, SectionHeading } from './shared'
import { ModuleDetailsModal, type ModuleKey } from './ModuleDetailsModal'

const steps = [
  {
    number: '01',
    title: 'Reserva sin enredos.',
    description:
      'Consulta la disponibilidad y convierte cada reservación en una renta. Todo conectado desde el principio.',
    label: 'Reserva confirmada',
    detail: 'Toyota RAV4 · 12–15 sep',
    icon: 'calendar',
  },
  {
    number: '02',
    title: 'Entrega con confianza.',
    description:
      'Genera el contrato y registra fotos, combustible, kilometraje y firmas. Cada entrega queda documentada.',
    label: 'Inspección completada',
    detail: 'Fotos, kilometraje y firma registrados',
    icon: 'document',
  },
  {
    number: '03',
    title: 'Cierra y sigue creciendo.',
    description:
      'Registra la devolución, revisa cargos y gestiona el cobro. Tus reportes quedan listos para la siguiente decisión.',
    label: 'Renta completada',
    detail: 'Vehículo disponible para su próxima ruta',
    icon: 'wallet',
  },
]

export function FeatureSections() {
  return (
    <>
      <ModulesOverview />
      <RentalWorkflow />
      <CustomerPortalSection />
    </>
  )
}

function ModulesOverview() {
  const [selectedModule, setSelectedModule] = useState<ModuleKey | null>(null)
  const openModule = (module: ModuleKey) => setSelectedModule(module)
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, module: ModuleKey) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openModule(module)
    }
  }
  return (
    <>
      <section className="r-section r-container" id="modulos">
      <div className="r-heading-row">
        <SectionHeading
          eyebrow="MENOS TAREAS. MÁS CONTROL."
          title={
            <>
              Todo lo que importa.
              <br />
              <span>Justo donde lo necesitas.</span>
            </>
          }
        >
          Herramientas que trabajan juntas para que tú puedas enfocarte en tus
          clientes.
        </SectionHeading>
        <a className="r-text-link" href="/que-es-rentora">
          Conoce más sobre Rentora <Icon name="diagonal" size={17} />
        </a>
      </div>
      <div className="r-feature-grid">
        <article className="r-feature r-feature-fleet" role="button" tabIndex={0} aria-haspopup="dialog" aria-label="Explorar módulo de flota" onClick={() => openModule('fleet')} onKeyDown={(event) => handleCardKeyDown(event, 'fleet')}>
          <div className="r-feature-top">
            <span className="r-feature-icon">
              <Icon name="car" />
            </span>
            <span className="r-feature-number">01 / FLOTA</span>
          </div>
          <h3>
            Cada vehículo.
            <br />
            Una vista completa.
          </h3>
          <p>
            Disponibilidad, tarifas y mantenimientos. Conoce el estado de tu
            flota antes de entregar las llaves.
          </p>
          <div className="r-feature-fleet-art">
            <div className="r-art-label">
              <i /> Lista para salir
            </div>
            <CarIllustration color="#c0cede" />
            <div className="r-fleet-art-footer">
              <strong>Toyota RAV4</strong>
              <span>
                <Icon name="pin" size={14} /> Sucursal central
              </span>
            </div>
          </div>
        </article>
        <article className="r-feature r-feature-reservations" role="button" tabIndex={0} aria-haspopup="dialog" aria-label="Explorar módulo de reservas" onClick={() => openModule('reservations')} onKeyDown={(event) => handleCardKeyDown(event, 'reservations')}>
          <div className="r-feature-top">
            <span className="r-feature-icon">
              <Icon name="calendar" />
            </span>
            <span className="r-feature-number">02 / RESERVAS</span>
          </div>
          <h3>
            Una agenda.
            <br />
            Cero confusiones.
          </h3>
          <p>
            Organiza tus reservas y detecta conflictos de fechas. Convierte una
            reserva en renta sin duplicar trabajo.
          </p>
          <div className="r-mini-calendar">
            <div>
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                <span key={i}>{day}</span>
              ))}
            </div>
            <div>
              {[12, 13, 14, 15, 16, 17, 18].map((day) => (
                <span
                  className={day > 12 && day < 17 ? 'is-booked' : ''}
                  key={day}
                >
                  {day}
                </span>
              ))}
            </div>
            <span className="r-reservation-bar">
              <Icon name="car" size={15} /> Toyota Corolla · Ana M.
            </span>
            <span className="r-reservation-bar is-second">
              <Icon name="car" size={15} /> Kia Sportage · Carlos R.
            </span>
          </div>
        </article>
        <article className="r-feature r-feature-contract" role="button" tabIndex={0} aria-haspopup="dialog" aria-label="Explorar módulo de contratos" onClick={() => openModule('contracts')} onKeyDown={(event) => handleCardKeyDown(event, 'contracts')}>
          <div className="r-feature-top">
            <span className="r-feature-icon">
              <Icon name="document" />
            </span>
            <span className="r-feature-number">03 / CONTRATOS</span>
          </div>
          <h3>
            Menos papel.
            <br />
            Más tranquilidad.
          </h3>
          <p>
            Contratos PDF e inspecciones con fotos y firmas. Evidencia clara de
            cómo sale y cómo vuelve cada auto.
          </p>
          <div className="r-paper">
            <div>
              <span>RENTORA / CONTRATO DE RENTA</span>
              <Icon name="document" size={18} />
            </div>
            <i />
            <i />
            <i />
            <div className="r-paper-signature">
              Ana Martínez{' '}
              <span>
                <Icon name="check" size={13} /> Firmado
              </span>
            </div>
          </div>
        </article>
        <article className="r-feature r-feature-money" role="button" tabIndex={0} aria-haspopup="dialog" aria-label="Explorar módulo de finanzas" onClick={() => openModule('finance')} onKeyDown={(event) => handleCardKeyDown(event, 'finance')}>
          <div className="r-feature-top">
            <span className="r-feature-icon">
              <Icon name="wallet" />
            </span>
            <span className="r-feature-number">04 / FINANZAS</span>
          </div>
          <h3>
            Las cuentas claras.
            <br />
            Las decisiones también.
          </h3>
          <p>
            Controla lo que cobras, lo que gastas y lo que queda pendiente.
            Exporta reportes y conecta tu facturación DTE.*
          </p>
          <div className="r-money-bars">
            <div>
              <span>Cobrado</span>
              <i style={{ width: '87%' }} />
            </div>
            <div>
              <span>Por cobrar</span>
              <i style={{ width: '40%' }} />
            </div>
            <div>
              <span>Gastos</span>
              <i style={{ width: '24%' }} />
            </div>
          </div>
          <small>*DTE sujeto a configuración del proveedor fiscal.</small>
        </article>
      </div>
      <p className="r-feature-footnote">
        Y espacio para crecer: <span>clientes</span>
        <i>·</i>
        <span>sucursales</span>
        <i>·</i>
        <span>usuarios y permisos</span>
        <i>·</i>
        <span>recordatorios por WhatsApp*</span>
      </p>
      <p className="r-provider-note">
        *Los envíos requieren un proveedor de mensajería configurado.
      </p>
      </section>
      <ModuleDetailsModal moduleKey={selectedModule} onClose={() => setSelectedModule(null)} />
    </>
  )
}

function RentalWorkflow() {
  const [step, setStep] = useState(0)
  return (
    <section className="r-workflow-section" id="como-funciona">
      <div className="r-container r-workflow-grid">
        <div>
          <SectionHeading
            eyebrow="UNA OPERACIÓN QUE FLUYE"
            title={
              <>
                De la reserva a la devolución.
                <br />
                <span>Todo sigue su curso.</span>
              </>
            }
          />
          <div className="r-steps">
            {steps.map((item, index) => (
              <button
                key={item.number}
                className={`r-step ${step === index ? 'is-active' : ''}`}
                onClick={() => setStep(index)}
                aria-pressed={step === index}
                aria-controls="workflow-preview"
              >
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <Icon name="arrow" size={18} />
              </button>
            ))}
          </div>
        </div>
        <div className="r-journey-art" id="workflow-preview" aria-live="polite">
          <span className="r-journey-eyebrow">
            CADA RENTA, UN CAMINO MÁS SIMPLE
          </span>
          <div className="r-route-map">
            <svg viewBox="0 0 440 230" fill="none" aria-hidden="true">
              <path
                d="M-20 57H175c85 0 85 120 0 120H91c-45 0-45-71 0-71h380"
                stroke="#d5dbe6"
                strokeWidth="35"
              />
              <path
                className="r-road-dashes"
                d="M-20 57H175c85 0 85 120 0 120H91c-45 0-45-71 0-71h380"
                stroke="#fff"
                strokeWidth="2"
                strokeDasharray="9 8"
              />
            </svg>
            <span className="r-route-pin">
              <Icon name="pin" size={25} />
            </span>
            <div className={`r-route-car step-${step}`}>
              <CarIllustration color="#ff9100" />
            </div>
          </div>
          <div className="r-journey-card" key={step}>
            <span className="r-notice-icon">
              <Icon name={steps[step].icon} />
            </span>
            <div>
              <strong>{steps[step].label}</strong>
              <span>{steps[step].detail}</span>
            </div>
            <Icon name="check" size={18} />
          </div>
          <div className="r-journey-progress">
            {steps.map((item, index) => (
              <span
                key={item.number}
                className={index <= step ? 'is-complete' : ''}
              />
            ))}
            <span>{step + 1} / 3</span>
          </div>
          <p>Selecciona un paso para explorar el recorrido.</p>
        </div>
      </div>
    </section>
  )
}

function CustomerPortalSection() {
  return (
    <section className="r-container r-section" id="caracteristicas">
      <div className="r-portal-section">
        <div className="r-portal-copy">
          <span className="r-eyebrow">
            <span /> TU RENTADORA, MÁS CERCA
          </span>
          <h2>
            Tu próximo cliente
            <br />
            ya está en línea.
            <br />
            <em>Tu flota también.</em>
          </h2>
          <p>
            Un portal con la identidad de tu negocio donde tus clientes
            consultan vehículos, revisan disponibilidad y solicitan una reserva.
            Incluso cuando tu oficina ya cerró.
          </p>
          <ul>
            <li>
              <Icon name="check" size={17} /> Catálogo de vehículos y sucursales
            </li>
            <li>
              <Icon name="check" size={17} /> Reservas e historial para cada
              cliente
            </li>
            <li>
              <Icon name="check" size={17} /> Una experiencia cómoda desde el
              celular
            </li>
          </ul>
          <ButtonLink>Quiero verlo en una demo</ButtonLink>
        </div>
        <div className="r-portal-art">
          <span className="r-portal-orbit" />
          <div className="r-phone">
            <div className="r-phone-camera" />
            <div className="r-phone-top">
              <strong>
                Tu rentadora<span>.</span>
              </strong>
              <Icon name="menu" size={15} />
            </div>
            <span className="r-phone-label">TU SIGUIENTE DESTINO</span>
            <h3>
              El viaje empieza
              <br />
              con las llaves.
            </h3>
            <div className="r-phone-search">
              <Icon name="calendar" size={14} />
              <span>12 sep — 15 sep</span>
              <Icon name="arrow" size={14} />
            </div>
            <div className="r-phone-car">
              <span className="r-status">
                <i /> Disponible
              </span>
              <CarIllustration color="#c6d2e0" />
              <strong>Toyota RAV4</strong>
              <span>SUV · Automático · 5 pasajeros</span>
              <div>
                <b>
                  $45 <small>/ día</small>
                </b>
                <span className="r-phone-cta">
                  Reservar <Icon name="arrow" size={12} />
                </span>
              </div>
            </div>
            <span className="r-phone-caption">
              Vista ilustrativa del portal
            </span>
          </div>
          <div className="r-portal-float">
            <span>
              <Icon name="globe" size={21} />
            </span>
            <div>
              <strong>Tu negocio, sin fronteras.</strong>
              <p>Disponible desde cualquier navegador.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
