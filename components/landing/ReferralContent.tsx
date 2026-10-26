import type { CSSProperties } from 'react'
import { ButtonLink, Icon, SectionHeading, whatsappUrl } from './shared'
import { LandingFooter } from './ConversionSections'
import { LandingNav } from './LandingNav'
import { WhatsAppFloat } from './WhatsAppFloat'
import { rentoraBrand } from '@/lib/rentora-seo'

export const REFERRAL_PERCENT = 15
export const APP_REFERRALS_URL = 'https://app.rentora-app.com/referrals'

// Precios mensuales en USD sin IVA (los mismos de la sección de planes).
const plans = [
  { name: 'Micro', price: 20 },
  { name: 'Starter', price: 49 },
  { name: 'Pro', price: 99 },
  { name: 'Business', price: 179 },
]

const usd = (value: number) => `$${value.toFixed(2)}`
const commissionFor = (price: number) =>
  Math.round(price * REFERRAL_PERCENT) / 100

const steps = [
  {
    icon: 'shield',
    title: 'Tu código',
    text: 'En Rentora, entra a Referidos. Ahí está tu código: el identificador único de tu empresa en el programa.',
  },
  {
    icon: 'diagonal',
    title: 'Compártelo',
    text: 'Envía tu enlace por WhatsApp o dale tu código a otra rentadora. Lo escribe al crear su cuenta.',
  },
  {
    icon: 'car',
    title: 'Se registra y paga',
    text: 'La rentadora crea su cuenta con tu código. Tu comisión se genera cuando hace su primer pago.',
  },
  {
    icon: 'wallet',
    title: 'Recibes tu comisión',
    text: 'Te pagamos en USD: en dinero o como crédito en tu factura de Rentora. Tú ves cuándo queda pagada.',
  },
]

const rules = [
  'Puede referir cualquier empresa con su suscripción de Rentora pagada y activa.',
  'La rentadora referida debe ser una empresa nueva en Rentora y registrarse con tu código (o enlace).',
  'La comisión es un pago único por cada rentadora referida, no un pago mensual.',
  'Se calcula sobre el precio de un mes del plan que contrate, sin IVA y después de descuentos.',
  'Si su primer pago se reembolsa o se revierte, la comisión se anula.',
  'No se aceptan registros de tu propia empresa ni comisiones duplicadas: cada empresa genera una sola comisión.',
  'No hay límite: puedes referir a todas las rentadoras que quieras.',
]

export const referralFaqs = [
  {
    question: '¿Qué es el código de referido?',
    answer:
      'Es el identificador único de tu empresa dentro del programa (por ejemplo, SUCHIC-AB12). Cuando una rentadora se registra con él, Rentora sabe que llegó por ti y te asigna la comisión.',
  },
  {
    question: '¿Dónde encuentro mi código?',
    answer:
      'Dentro de Rentora, en el menú Referidos. Lo ven los administradores de la empresa, junto con un enlace listo para compartir por WhatsApp.',
  },
  {
    question: '¿El 15% se calcula sobre qué monto?',
    answer:
      'Sobre el precio de un mes del plan que contrate la rentadora que refieras, sin IVA y después de descuentos. Por ejemplo, si contrata el plan Pro (USD $99 al mes), tu comisión es de USD $14.85.',
  },
  {
    question: '¿Y si la rentadora paga varios meses o un año por adelantado?',
    answer:
      'La comisión se calcula igual: sobre el equivalente de un mes de su plan. Si tuvo un descuento por pagar por adelantado, ese descuento se resta.',
  },
  {
    question: '¿Cuándo se genera mi comisión?',
    answer:
      'Cuando la rentadora referida registra su primer pago de Rentora. Mientras esté registrada o en periodo de prueba, la verás en tu lista con su estado, pero todavía sin comisión.',
  },
  {
    question: '¿Cómo y cuándo me pagan?',
    answer:
      'Rentora te paga la comisión en USD, en dinero (transferencia) o como crédito en tu próxima factura de Rentora. En el módulo Referidos verás cada comisión como "Pendiente de pago" y luego como "Pagada", con su fecha.',
  },
  {
    question: '¿Es un pago mensual?',
    answer:
      'No. Es un pago único por cada rentadora que refieras. Mientras más rentadoras refieras, más comisiones ganas.',
  },
  {
    question: '¿Mi empresa tiene que ser cliente de Rentora?',
    answer:
      'Sí. El programa es para empresas con su suscripción pagada y activa. Tu código aparece en cuanto tu suscripción está al día.',
  },
  {
    question: 'La rentadora se registró sin mi código. ¿Qué hago?',
    answer:
      'Escríbenos antes de que registre su primer pago y revisamos el caso para asignarte el referido. Después de su primer pago ya no se puede cambiar.',
  },
  {
    question: '¿Qué pasa si la rentadora cancela?',
    answer:
      'Si su primer pago se reembolsa o se revierte, la comisión se anula. Si la rentadora cancela después de un pago válido, tu comisión se mantiene.',
  },
]

export function ReferralContent() {
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
                <span /> PROGRAMA DE REFERIDOS
              </span>
              <h1>
                Recomienda Rentora.
                <br />
                <span>Gana el {REFERRAL_PERCENT}% por cada rentadora.</span>
              </h1>
              <p>
                Si tu empresa ya usa Rentora, comparte tu código con otras
                rentadoras. Cuando una se registra con él y hace su primer pago,
                te pagamos una comisión en USD.
              </p>
              <div className="r-hero-buttons">
                <ButtonLink href={APP_REFERRALS_URL} trackLabel="referidos_ver_codigo">
                  Ver mi código en Rentora
                </ButtonLink>
                <ButtonLink
                  href={whatsappUrl('Hola, tengo dudas sobre el programa de referidos de Rentora.')}
                  secondary
                  trackLabel="referidos_whatsapp"
                >
                  Tengo una pregunta
                </ButtonLink>
              </div>
            </div>
            <div className="r-ref-highlight" aria-label={`Comisión del ${REFERRAL_PERCENT}%`}>
              <span className="r-ref-highlight-label">Tu comisión</span>
              <strong>{REFERRAL_PERCENT}%</strong>
              <p>
                del precio de <b>un mes</b> del plan de la rentadora que
                refieras, en un solo pago.
              </p>
              <ul>
                <li>
                  <Icon name="check" size={16} /> Sin límite de referidos
                </li>
                <li>
                  <Icon name="check" size={16} /> Pagado en USD
                </li>
                <li>
                  <Icon name="check" size={16} /> En dinero o crédito en tu factura
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="r-container r-section" id="como-funciona-referidos">
          <SectionHeading
            eyebrow="CÓMO FUNCIONA"
            title={
              <>
                Cuatro pasos.
                <br />
                <span>Una comisión por cada rentadora.</span>
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
                Depende del plan
                <br />
                <span>que contrate tu referida.</span>
              </>
            }
          >
            {REFERRAL_PERCENT}% del precio mensual del plan, sin IVA. Si contrata
            con descuento, se calcula sobre el precio con descuento.
          </SectionHeading>
          <div className="r-legal-table-wrap">
            <table className="r-ref-table">
              <thead>
                <tr>
                  <th scope="col">Plan de la rentadora</th>
                  <th scope="col">Precio mensual (sin IVA)</th>
                  <th scope="col">Tu comisión</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.name}>
                    <th scope="row">{plan.name}</th>
                    <td>USD {usd(plan.price)}</td>
                    <td>
                      <strong>USD {usd(commissionFor(plan.price))}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="r-ref-example">
            <Icon name="chart" size={18} />
            <span>
              Ejemplo: refieres a 3 rentadoras que contratan el plan Pro. Ganas
              3 × USD {usd(commissionFor(99))} ={' '}
              <strong>USD {usd(commissionFor(99) * 3)}</strong>.
            </span>
          </p>
        </section>

        <section className="r-container r-section" id="condiciones">
          <SectionHeading
            eyebrow="CONDICIONES"
            title={
              <>
                Reglas claras.
                <br />
                <span>Sin letra pequeña.</span>
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

        <section className="r-container r-section r-faq-grid" id="faq-referidos">
          <SectionHeading
            eyebrow="PREGUNTAS FRECUENTES"
            title={
              <>
                Todo sobre referidos.
                <br />
                <span>En un solo lugar.</span>
              </>
            }
          >
            ¿No encuentras tu respuesta? Escríbenos a{' '}
            <a href={`mailto:${rentoraBrand.supportEmail}`}>
              {rentoraBrand.supportEmail}
            </a>
            .
          </SectionHeading>
          <div className="r-faq-items">
            {referralFaqs.map((faq) => (
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
            <span /> ¿CONOCES OTRA RENTADORA?
          </span>
          <h2>
            Ayúdala a organizar su negocio.
            <br />
            <span>Y gana por recomendarnos.</span>
          </h2>
          <p>Tu código te espera en el módulo Referidos de Rentora.</p>
          <ButtonLink href={APP_REFERRALS_URL} trackLabel="referidos_cta_final">
            Ver mi código de referido
          </ButtonLink>
          <span className="r-cta-note">
            <Icon name="check" size={14} /> Comisión única en USD por cada
            rentadora que pague su plan.
          </span>
        </section>
      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </div>
  )
}
