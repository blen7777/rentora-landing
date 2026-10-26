import type { CSSProperties } from 'react'
import { ButtonLink, Icon, SectionHeading, whatsappUrl } from './shared'
import { LandingFooter } from './ConversionSections'
import { LandingNav } from './LandingNav'
import { ProgramSwitcher } from './ProgramSwitcher'
import { WhatsAppFloat } from './WhatsAppFloat'
import { rentoraBrand } from '@/lib/rentora-seo'

// Política de comisiones comerciales de Rentora (la misma de su equipo de ventas).
export const ALLY_RATE_FIRST_YEAR = 15
export const ALLY_RATE_AFTER = 10
export const ALLY_ENTERPRISE_FLAT = 100

const JOIN_MESSAGE =
  'Hola, quiero ser aliado de Rentora y referir rentadoras. ¿Cómo me registro?'

// Precios mensuales en USD sin IVA (los mismos de la sección de planes).
const plans = [
  { name: 'Micro', price: 20 },
  { name: 'Starter', price: 49 },
  { name: 'Pro', price: 99 },
  { name: 'Business', price: 179 },
]

const usd = (value: number) => `$${value.toFixed(2)}`
const pct = (price: number, rate: number) => Math.round(price * rate) / 100

const steps = [
  {
    icon: 'chat',
    title: 'Regístrate como aliado',
    text: 'Escríbenos por WhatsApp. Revisamos tu solicitud y te damos acceso a tu panel de aliado en Rentora.',
  },
  {
    icon: 'document',
    title: 'Registra tus prospectos',
    text: 'Antes de presentarnos una rentadora, regístrala en tu panel con sus datos de contacto. Así queda a tu nombre.',
  },
  {
    icon: 'calendar',
    title: 'La acompañamos juntos',
    text: 'Coordinamos la demo y el cierre contigo. Tú presentas, nosotros te apoyamos con todo el proceso.',
  },
  {
    icon: 'wallet',
    title: 'Ganas cada mes',
    text: `Cuando la rentadora paga su plan, ganas el ${ALLY_RATE_FIRST_YEAR}% de cada mensualidad el primer año y el ${ALLY_RATE_AFTER}% después.`,
  },
]

const rules = [
  'La comisión se calcula sobre el precio del plan sin IVA y después de descuentos. No incluye cargos extra como facturas DTE adicionales.',
  `Ganas el ${ALLY_RATE_FIRST_YEAR}% durante los primeros 12 meses pagados y el ${ALLY_RATE_AFTER}% a partir del mes 13, mientras la rentadora siga pagando.`,
  `Plan Enterprise: comisión única de USD $${ALLY_ENTERPRISE_FLAT} cuando hace su primer pago.`,
  'Solo se comisionan pagos realmente recibidos. El periodo de prueba gratis no genera comisión.',
  'Si la rentadora paga varios meses por adelantado, ganas la comisión de cada mes cubierto.',
  'La rentadora debe ser nueva en Rentora y estar registrada a tu nombre antes de contratar. Si ya es cliente, ya la trabaja otro aliado o llegó con el código de un cliente, no genera comisión.',
  'Si un pago se reembolsa o se revierte, la comisión de ese pago se anula.',
  'Las comisiones se pagan en USD, aunque la rentadora opere en otra moneda.',
]

export const allyFaqs = [
  {
    question: '¿Quién puede ser aliado de Rentora?',
    answer:
      'Cualquier persona o empresa que conozca rentadoras de vehículos: consultores, contadores, agencias, proveedores del sector o emprendedores. No necesitas ser cliente de Rentora.',
  },
  {
    question: '¿Cuánto gano por cada rentadora?',
    answer: `El ${ALLY_RATE_FIRST_YEAR}% de cada mensualidad que pague durante su primer año y el ${ALLY_RATE_AFTER}% a partir del mes 13, mientras siga siendo cliente. Por ejemplo, con el plan Pro (USD $99 al mes) ganas USD $14.85 cada mes el primer año y USD $9.90 al mes después.`,
  },
  {
    question: '¿La comisión se calcula con o sin IVA?',
    answer:
      'Sin IVA y después de descuentos: sobre el precio del plan que realmente paga la rentadora. Los cargos extra (por ejemplo, facturas DTE adicionales) no comisionan.',
  },
  {
    question: '¿Cuándo se genera mi comisión?',
    answer:
      'Cada vez que Rentora registra un pago de la rentadora que referiste. Mientras esté en prueba gratis o no pague, no se genera comisión.',
  },
  {
    question: '¿Cómo me pagan?',
    answer:
      'En USD, mediante liquidaciones de tus comisiones acumuladas. En tu panel de aliado ves cada comisión, lo que está pendiente y lo que ya se te pagó.',
  },
  {
    question: '¿Cómo me aseguro de que la rentadora quede a mi nombre?',
    answer:
      'Regístrala en tu panel de aliado antes de que contrate. Rentora revisa cada prospecto: si la rentadora ya es cliente o ya la está trabajando otro aliado, no se puede asignar.',
  },
  {
    question: 'Ya soy cliente de Rentora. ¿Este programa es para mí?',
    answer:
      'Para los clientes existe el programa de referidos con el código de tu empresa (15% de un mes del plan, en un solo pago), en rentora-app.com/referidos. Una misma rentadora solo genera una comisión: la de quien la trajo.',
  },
  {
    question: '¿Qué pasa si la rentadora deja de pagar o cancela?',
    answer:
      'Dejas de generar comisión desde ese momento. Las comisiones de pagos ya recibidos se mantienen, salvo que el pago se reembolse.',
  },
  {
    question: '¿Hay un límite de rentadoras?',
    answer:
      'No. Puedes referir a todas las rentadoras que quieras, en cualquier país donde opere Rentora.',
  },
]

export function AllyContent() {
  const pro = plans.find((plan) => plan.name === 'Pro')!
  const proFirstYear = pct(pro.price, ALLY_RATE_FIRST_YEAR) * 12
  return (
    <div className="rentora-landing r-ref" id="inicio">
      <a className="r-skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <LandingNav />
      <main id="contenido">
        <section className="r-ref-hero">
          <div className="r-container r-ref-hero-grid">
            <div>
              <a href="/" className="r-about-back">
                ← Volver al inicio
              </a>
              <span className="r-eyebrow">
                <span /> PROGRAMA DE ALIADOS
              </span>
              <h1>
                ¿Conoces rentadoras?
                <br />
                <span>Gana cada mes recomendando Rentora.</span>
              </h1>
              <p>
                No necesitas ser cliente. Preséntanos rentadoras de vehículos y
                gana una comisión por cada mensualidad que paguen: el{' '}
                {ALLY_RATE_FIRST_YEAR}% el primer año y el {ALLY_RATE_AFTER}%
                después.
              </p>
              <div className="r-hero-buttons">
                <ButtonLink href={whatsappUrl(JOIN_MESSAGE)} trackLabel="aliados_unirme">
                  Quiero ser aliado
                </ButtonLink>
                <ButtonLink href="#cuanto-ganas" secondary external={false} trackLabel="aliados_ver_ganancias">
                  Ver cuánto puedo ganar
                </ButtonLink>
              </div>
            </div>
            <div className="r-ref-highlight" aria-label="Comisiones del programa de aliados">
              <span className="r-ref-highlight-label">Tu comisión mensual</span>
              <strong>{ALLY_RATE_FIRST_YEAR}%</strong>
              <p>
                de cada mensualidad durante el <b>primer año</b>, y el{' '}
                <b>{ALLY_RATE_AFTER}%</b> a partir del mes 13.
              </p>
              <ul>
                <li>
                  <Icon name="check" size={16} /> Ingreso recurrente mientras pague
                </li>
                <li>
                  <Icon name="check" size={16} /> Panel propio para tus prospectos
                </li>
                <li>
                  <Icon name="check" size={16} /> Pagado en USD
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ProgramSwitcher current="aliados" />

        <section className="r-container r-section" id="como-funciona-aliados">
          <SectionHeading
            eyebrow="CÓMO FUNCIONA"
            title={
              <>
                Tú conectas.
                <br />
                <span>Nosotros te acompañamos.</span>
              </>
            }
          />
          <div className="r-ref-steps">
            {steps.map((step, i) => (
              <article
                key={step.title}
                style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
              >
                <Icon name={step.icon} size={26} />
                <span>0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="r-container r-section r-ref-earn" id="cuanto-ganas">
          <SectionHeading
            eyebrow="CUÁNTO PUEDES GANAR"
            title={
              <>
                Por cada rentadora,
                <br />
                <span>cada mes que pague.</span>
              </>
            }
          >
            Comisión sobre el precio mensual del plan, sin IVA y después de
            descuentos.
          </SectionHeading>
          <div className="r-legal-table-wrap">
            <table className="r-ref-table">
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Precio mensual (sin IVA)</th>
                  <th scope="col">Meses 1 a 12 ({ALLY_RATE_FIRST_YEAR}%)</th>
                  <th scope="col">Desde el mes 13 ({ALLY_RATE_AFTER}%)</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.name}>
                    <th scope="row">{plan.name}</th>
                    <td>USD {usd(plan.price)}</td>
                    <td>
                      <strong>USD {usd(pct(plan.price, ALLY_RATE_FIRST_YEAR))}</strong>
                      <small> /mes</small>
                    </td>
                    <td>
                      <strong>USD {usd(pct(plan.price, ALLY_RATE_AFTER))}</strong>
                      <small> /mes</small>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Enterprise</th>
                  <td>A la medida</td>
                  <td colSpan={2}>
                    <strong>USD {usd(ALLY_ENTERPRISE_FLAT)}</strong>
                    <small> en un solo pago</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="r-ref-example">
            <Icon name="chart" size={18} />
            <span>
              Ejemplo: refieres a 3 rentadoras con plan Pro. Durante el primer
              año ganas 3 × USD {usd(pct(pro.price, ALLY_RATE_FIRST_YEAR))} al
              mes = <strong>USD {usd(proFirstYear * 3)} en el año</strong>, y
              luego USD {usd(pct(pro.price, ALLY_RATE_AFTER) * 3)} cada mes
              mientras sigan siendo clientes.
            </span>
          </p>
        </section>

        <section className="r-container r-section" id="condiciones-aliados">
          <SectionHeading
            eyebrow="CONDICIONES"
            title={
              <>
                Reglas claras.
                <br />
                <span>Para que ganes tranquilo.</span>
              </>
            }
          />
          <ul className="r-ref-rules">
            {rules.map((rule) => (
              <li key={rule}>
                <Icon name="check" size={18} />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <p className="r-provider-note">
            Rentora puede actualizar las condiciones del programa. Las
            comisiones ya generadas se respetan con las condiciones vigentes
            cuando se generaron.
          </p>
        </section>

        <section className="r-container r-section r-faq-grid" id="faq-aliados">
          <SectionHeading
            eyebrow="PREGUNTAS FRECUENTES"
            title={
              <>
                Todo sobre aliados.
                <br />
                <span>En un solo lugar.</span>
              </>
            }
          >
            ¿Tienes otra duda? Escríbenos a{' '}
            <a href={`mailto:${rentoraBrand.supportEmail}`}>
              {rentoraBrand.supportEmail}
            </a>
            .
          </SectionHeading>
          <div className="r-faq-items">
            {allyFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="r-container r-final-cta">
          <div className="r-cta-road" aria-hidden="true" />
          <span className="r-eyebrow">
            <span /> SÚMATE COMO ALIADO
          </span>
          <h2>
            Tus contactos valen.
            <br />
            <span>Conviértelos en ingresos cada mes.</span>
          </h2>
          <p>Escríbenos y te explicamos cómo empezar hoy.</p>
          <ButtonLink href={whatsappUrl(JOIN_MESSAGE)} trackLabel="aliados_cta_final">
            Quiero ser aliado
          </ButtonLink>
          <span className="r-cta-note">
            <Icon name="check" size={14} /> Sin costo para unirte. Comisiones en
            USD.
          </span>
        </section>
      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </div>
  )
}
