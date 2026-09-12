import { Brand, ButtonLink, Icon, SectionHeading, whatsappUrl } from './shared'

export const landingFaqs = [
  {
    question: '¿Rentora es para mi rent a car, aunque tenga pocos vehículos?',
    answer:
      'Sí. Puedes empezar con Micro, que admite hasta 7 vehículos, y cambiar de plan a medida que tu rentadora crece. En la demo revisamos el tamaño de tu flota y cómo trabaja tu equipo.',
  },
  {
    question: '¿Necesito instalar algún programa?',
    answer:
      'No. Rentora funciona desde el navegador de tu computadora, tablet o celular con conexión a internet. Cada persona de tu equipo entra con su propio usuario.',
  },
  {
    question: '¿Mis clientes pueden hacer reservaciones en línea?',
    answer:
      'Sí. Tu empresa dispone de un portal donde los clientes pueden explorar vehículos, consultar disponibilidad, solicitar reservaciones y revisar su historial.',
  },
  {
    question: '¿Cómo funciona la facturación electrónica DTE?',
    answer:
      'Rentora permite emitir DTE desde una renta, consultar documentos y reintentar envíos con error. La emisión en El Salvador requiere configurar un proveedor fiscal y sus credenciales. La integración tiene un costo adicional de pago único.',
  },
  {
    question: '¿Puedo administrar varias sucursales y mi equipo?',
    answer:
      'Sí. Los planes Pro y Business incluyen 2 y 3 sucursales, respectivamente. Puedes asignar vehículos y usuarios por sucursal y definir permisos según las responsabilidades de cada persona.',
  },
  {
    question: '¿Qué veremos en la demo gratuita?',
    answer:
      'Recorreremos la operación de una rentadora: flota, reserva, contrato, entrega, devolución y cobro. También podrás conocer el portal del cliente y resolver dudas sobre los planes y la implementación.',
  },
]

const plans = [
  {
    name: 'Micro',
    description: 'Un gran comienzo para tu flota.',
    price: 20,
    vehicles: 7,
    users: 2,
    branches: 1,
    dte: 30,
    extra: '0.15',
  },
  {
    name: 'Starter',
    description: 'Más espacio para tu operación.',
    price: 49,
    vehicles: 10,
    users: 3,
    branches: 1,
    dte: 100,
    extra: '0.15',
  },
  {
    name: 'Pro',
    description: 'Tu negocio toma velocidad.',
    price: 99,
    vehicles: 20,
    users: 8,
    branches: 2,
    dte: 400,
    extra: '0.12',
  },
  {
    name: 'Business',
    description: 'Conecta una flota en crecimiento.',
    price: 179,
    vehicles: 60,
    users: 20,
    branches: 3,
    dte: 700,
    extra: '0.08',
  },
]

export function ConversionSections() {
  return (
    <>
      <LandingPricing />
      <LandingFAQ />
      <DemoCallToAction />
    </>
  )
}

function LandingPricing() {
  return (
    <section className="r-pricing-section r-section" id="precios">
      <div className="r-container">
        <div className="r-centered-heading">
          <SectionHeading
            eyebrow="UN PLAN PARA CADA ETAPA"
            title={
              <>
                Empieza a tu ritmo.
                <br />
                <span>Crece sin perder el control.</span>
              </>
            }
          >
            Elige según tu flota. Nosotros te mostramos cómo dar el siguiente
            paso.
          </SectionHeading>
          <span className="r-billing-pill">
            <Icon name="calendar" size={14} /> Planes mensuales · USD
          </span>
        </div>
        <div className="r-plans">
          {plans.map((plan) => (
            <article
              className={`r-plan ${plan.name === 'Pro' ? 'r-plan-featured' : ''}`}
              key={plan.name}
            >
              {plan.name === 'Pro' && (
                <span className="r-plan-badge">
                  PARA DAR EL SIGUIENTE PASO <Icon name="diagonal" size={13} />
                </span>
              )}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="r-plan-price">
                <span>$</span>
                {plan.price}
                <small>/ mes</small>
              </div>
              <span className="r-plan-tax">USD + IVA</span>
              <ButtonLink
                href={whatsappUrl(
                  `Hola, me interesa el plan ${plan.name} de Rentora. Mi rentadora necesita más información sobre la implementación.`,
                )}
                secondary={plan.name !== 'Pro'}
              >
                Elegir {plan.name}
              </ButtonLink>
              <ul>
                {[
                  `Hasta ${plan.vehicles} vehículos`,
                  `${plan.users} usuarios`,
                  `${plan.branches} ${plan.branches === 1 ? 'sucursal' : 'sucursales'}`,
                  `${plan.dte} DTE incluidos / mes`,
                  'Contratos PDF',
                  'Gestión de reservas',
                ].map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <small>DTE adicional: ${plan.extra} por documento.</small>
            </article>
          ))}
        </div>
        <div className="r-enterprise">
          <div>
            <strong>¿Tu flota necesita más espacio?</strong>
            <span>
              Conoce Enterprise y las opciones para operaciones más grandes.
            </span>
          </div>
          <a
            href={whatsappUrl(
              'Hola, quiero conocer el plan Enterprise de Rentora.',
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos de tu negocio <Icon name="arrow" size={18} />
          </a>
        </div>
        <p className="r-pricing-note">
          Precios mensuales en USD, sin IVA. Se agrega 13% al facturar. La
          integración DTE tiene un costo adicional de pago único.
        </p>
      </div>
    </section>
  )
}

function LandingFAQ() {
  return (
    <section id="faq" className="r-container r-section r-faq-grid">
      <div>
        <SectionHeading
          eyebrow="HABLEMOS CLARO"
          title={
            <>
              Buenas preguntas.
              <br />
              <span>Respuestas simples.</span>
            </>
          }
        />
        <p className="r-faq-intro">
          Elegir una herramienta para tu negocio es importante. Estamos aquí
          para ayudarte.
        </p>
        <a
          className="r-text-link"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="chat" size={18} /> Escríbenos por WhatsApp{' '}
          <Icon name="diagonal" size={16} />
        </a>
      </div>
      <div className="r-faq-items">
        {landingFaqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function DemoCallToAction() {
  return (
    <section id="contact" className="r-container r-final-cta">
      <div className="r-cta-road" aria-hidden="true" />
      <span className="r-eyebrow">
        <span /> MENOS COMPLICACIONES. MÁS CAMINO.
      </span>
      <h2>
        Tu rentadora tiene un gran futuro.
        <br />
        <span>Pongámosla en movimiento.</span>
      </h2>
      <p>
        Descubre lo que Rentora puede hacer por tu operación en una demo
        personalizada.
      </p>
      <ButtonLink>Agendar mi demo gratuita</ButtonLink>
      <span className="r-cta-note">
        <Icon name="check" size={14} /> Sin compromiso. Con todas tus preguntas.
      </span>
    </section>
  )
}

export function LandingFooter() {
  return (
    <footer className="r-footer-shell">
      <div className="r-container r-footer">
        <div className="r-footer-top">
          <div>
            <Brand />
            <p>
              La forma más simple de poner
              <br />
              tu rentadora en movimiento.
            </p>
          </div>
          <div>
            <span>PLATAFORMA</span>
            <a href="/#modulos">Soluciones</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="/#precios">Planes</a>
          </div>
          <div>
            <span>CONOCE RENTORA</span>
            <a href="/que-es-rentora">¿Qué es Rentora?</a>
            <a href="#faq">Preguntas frecuentes</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Contáctanos <Icon name="diagonal" size={13} />
            </a>
          </div>
          <div className="r-footer-location">
            <Icon name="globe" size={20} />
            <span>
              Desde El Salvador,
              <br />
              <strong>para Latinoamérica.</strong>
            </span>
          </div>
        </div>
        <div className="r-footer-bottom">
          <span>
            © {new Date().getFullYear()} Rentora. Todos los derechos reservados.
          </span>
          <a href="mailto:hola@rentora-app.com">
            hola@rentora-app.com <Icon name="diagonal" size={13} />
          </a>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  )
}
