import type { ReactNode } from 'react'
import { LandingNav } from './LandingNav'
import { LandingFooter } from './ConversionSections'
import { Icon, whatsappUrl } from './shared'
import { WhatsAppFloat } from './WhatsAppFloat'
import { rentoraBrand } from '@/lib/rentora-seo'

export type LegalSection = { id: string; title: string; children?: LegalSection[] }

export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedAt,
  sections,
  children,
}: {
  eyebrow: string
  title: string
  intro: ReactNode
  updatedAt: string
  sections: LegalSection[]
  children: ReactNode
}) {
  return (
    <div className="rentora-landing r-legal" id="inicio">
      <a className="r-skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <LandingNav />
      <main id="contenido">
        <section className="r-legal-hero">
          <div className="r-container">
            <a href="/" className="r-about-back">
              ← Volver al inicio
            </a>
            <span className="r-eyebrow">
              <span /> {eyebrow}
            </span>
            <h1>{title}</h1>
            <div className="r-legal-intro">{intro}</div>
            <p className="r-legal-updated">Última actualización: {updatedAt}</p>
          </div>
        </section>
        <div className="r-container r-legal-layout">
          <aside className="r-legal-toc" aria-label="Contenido de la página">
            <details open>
              <summary>Contenido</summary>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                    {section.children && (
                      <ol>
                        {section.children.map((child) => (
                          <li key={child.id}>
                            <a href={`#${child.id}`}>{child.title}</a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </details>
          </aside>
          <article className="r-legal-body">
            {children}
            <div className="r-legal-contact">
              <strong>¿Tienes preguntas sobre este documento?</strong>
              <span>
                Escríbenos a{' '}
                <a href={`mailto:${rentoraBrand.supportEmail}`}>
                  {rentoraBrand.supportEmail}
                </a>{' '}
                o por WhatsApp al{' '}
                <a
                  href={whatsappUrl(
                    'Hola, tengo una consulta sobre los términos o la privacidad de Rentora.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rentoraBrand.phoneDisplay} <Icon name="diagonal" size={13} />
                </a>
              </span>
            </div>
          </article>
        </div>
      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </div>
  )
}

export function DataTable({
  head,
  rows,
}: {
  head: [string, string]
  rows: [ReactNode, ReactNode][]
}) {
  return (
    <div className="r-legal-table-wrap">
      <table className="r-legal-table">
        <thead>
          <tr>
            <th scope="col">{head[0]}</th>
            <th scope="col">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([category, detail], index) => (
            <tr key={index}>
              <th scope="row">{category}</th>
              <td>{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
