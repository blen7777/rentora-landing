import type { Metadata } from 'next'
import {
  ALLY_RATE_AFTER,
  ALLY_RATE_FIRST_YEAR,
  AllyContent,
  allyFaqs,
} from '@/components/landing/AllyContent'
import { rentoraBrand } from '@/lib/rentora-seo'
import '../landing.css'

const pageUrl = `${rentoraBrand.siteUrl}/aliados`
const title = `Programa de aliados | Gana ${ALLY_RATE_FIRST_YEAR}% mensual recomendando Rentora`
const description = `¿Conoces rentadoras de vehículos? Hazte aliado de Rentora y gana el ${ALLY_RATE_FIRST_YEAR}% de cada mensualidad durante el primer año y el ${ALLY_RATE_AFTER}% después, mientras la rentadora siga pagando. No necesitas ser cliente.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: 'website',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Rentora' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: pageUrl,
  mainEntity: allyFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function AliadosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AllyContent />
    </>
  )
}
