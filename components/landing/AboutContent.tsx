import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ButtonLink, Icon, SectionHeading } from './shared'
import { rentoraModules, rentoraFaqs } from '@/lib/rentora-seo'
import { FeatureSections } from './FeatureSections'
import { SalvadorJourney } from './SalvadorJourney'
import { DemoCallToAction, LandingFooter } from './ConversionSections'
import { LandingNav } from './LandingNav'
import { VideoPreview } from './VideoPreview'

export function AboutContent({ videoSource = '' }: { videoSource?: string }) {
  return (
    <div className="rentora-landing r-about" id="inicio">
      <a className="r-skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <LandingNav />
      <main id="contenido">
        <section className="r-about-hero">
          <div className="r-container r-about-hero-grid">
            <div>
              <a href="/" className="r-about-back">
                ← Volver al inicio
              </a>
              <span className="r-eyebrow">
                <span /> CONOCE RENTORA
              </span>
              <h1>
                Más que administrar autos.
                <br />
                <span>Impulsar tu negocio.</span>
              </h1>
              <p>
                Rentora es el software para empresas de alquiler de vehículos
                que conecta tu flota, tus reservas, tu equipo y tus cobros. Una
                operación clara, desde la primera consulta hasta la devolución.
              </p>
              <div className="r-hero-buttons">
                <ButtonLink>Agendar demo gratuita</ButtonLink>
                <VideoPreview source={videoSource} compact />
              </div>
            </div>
            <div className="r-about-brand-art">
              <div className="r-about-brand-orbit" />
              <Image
                src="/images/rentora-brand-navy.jpeg"
                alt="Rentora: identidad en azul marino, blanco y naranja"
                width={1600}
                height={800}
                priority
              />
              <div className="r-about-pulse">
                <Icon name="car" />
                <span>
                  Tu flota conectada.
                  <br />
                  <strong>Tu equipo en movimiento.</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="r-container r-about-values">
            {[
              'Una sola plataforma',
              'Cada usuario, su acceso',
              'Disponible desde el navegador',
            ].map((text, i) => (
              <span key={text}>
                <Icon name={['globe', 'shield', 'car'][i]} size={19} />
                {text}
              </span>
            ))}
          </div>
        </section>
        <section className="r-container r-section">
          <SectionHeading
            eyebrow="PENSADO PARA TU DÍA A DÍA"
            title={
              <>
                Tu operación cambia.
                <br />
                <span>Rentora crece contigo.</span>
              </>
            }
          />
          <div className="r-about-audience">
            {[
              {
                icon: 'car',
                title: 'Tu primera flota',
                text: 'Organiza vehículos, clientes y reservas desde el inicio. Ten un lugar para cada dato y un proceso para cada renta.',
              },
              {
                icon: 'pin',
                title: 'Más de una sucursal',
                text: 'Conecta tus ubicaciones, asigna vehículos y usuarios y conserva una vista general de tu empresa.',
              },
              {
                icon: 'chart',
                title: 'Un equipo en crecimiento',
                text: 'Define responsabilidades, documenta entregas y consulta los reportes que necesitas para tomar decisiones.',
              },
            ].map((item, i) => (
              <article
                key={item.title}
                style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
              >
                <Icon name={item.icon} size={28} />
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <FeatureSections />
        <SalvadorJourney videoSource={videoSource} />
        <section className="r-container r-section r-about-catalog">
          <SectionHeading
            eyebrow="CADA PIEZA EN SU LUGAR"
            title={
              <>
                Explora lo que puedes hacer.
                <br />
                <span>A tu ritmo.</span>
              </>
            }
          />
          <div className="r-about-module-groups">
            {rentoraModules.map((group, i) => (
              <details key={group.group} open={i === 0}>
                <summary>
                  <span>0{i + 1}</span>
                  {group.group}
                  <b>+</b>
                </summary>
                <div>
                  {group.modules.map((module) => (
                    <article key={module.name}>
                      <Icon name="check" size={17} />
                      <div>
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <p className="r-provider-note">
            La emisión DTE y los envíos por WhatsApp requieren configurar sus
            proveedores correspondientes.
          </p>
        </section>
        <section className="r-container r-section r-faq-grid" id="faq">
          <SectionHeading
            eyebrow="RESOLVEMOS TUS DUDAS"
            title={
              <>
                Conoce la plataforma.
                <br />
                <span>Decide con confianza.</span>
              </>
            }
          />
          <div className="r-faq-items">
            {rentoraFaqs.map((faq) => (
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
        <DemoCallToAction />
      </main>
      <LandingFooter />
    </div>
  )
}
