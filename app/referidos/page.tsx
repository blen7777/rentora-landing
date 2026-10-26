import type { Metadata } from 'next'
import {
  REFERRAL_PERCENT,
  ReferralContent,
  referralFaqs,
} from '@/components/landing/ReferralContent'
import { rentoraBrand } from '@/lib/rentora-seo'
import '../landing.css'

const pageUrl = `${rentoraBrand.siteUrl}/referidos`
const title = `Programa de referidos | Gana el ${REFERRAL_PERCENT}% recomendando Rentora`
const description = `¿Tu rentadora usa Rentora? Recomiéndala a otras rentadoras y gana el ${REFERRAL_PERCENT}% de un mes de su plan cuando hagan su primer pago. Conoce cómo funciona, cuánto puedes ganar y las condiciones.`

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
  mainEntity: referralFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function ReferidosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ReferralContent />
    </>
  )
}
