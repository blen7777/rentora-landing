import type { Metadata } from 'next'
import { AboutContent } from '@/components/landing/AboutContent'
import { getDemoVideoSource } from '@/lib/demo-video'
import {
  buildFaqJsonLd,
  buildSeoJsonLd,
  rentoraBrand,
  rentoraSeo,
} from '@/lib/rentora-seo'
import '../landing.css'

const pageUrl = `${rentoraBrand.siteUrl}/que-es-rentora`
export const metadata: Metadata = {
  title: '¿Qué es Rentora? | Software para rent a car en Latinoamérica',
  description: rentoraSeo.description,
  keywords: rentoraSeo.keywords,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '¿Qué es Rentora?',
    description: rentoraSeo.description,
    url: pageUrl,
    type: 'website',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Rentora' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es Rentora?',
    description: rentoraSeo.description,
    images: ['/og-image.png'],
  },
}

export default function QueEsRentoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSeoJsonLd(pageUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(pageUrl)),
        }}
      />
      <AboutContent videoSource={getDemoVideoSource()} />
    </>
  )
}
