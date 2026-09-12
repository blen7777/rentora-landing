import { LandingNav } from '@/components/landing/LandingNav'
import { LandingHero } from '@/components/landing/LandingHero'
import { SalvadorJourney } from '@/components/landing/SalvadorJourney'
import { getDemoVideoSource } from '@/lib/demo-video'
import { FeatureSections } from '@/components/landing/FeatureSections'
import {
  ConversionSections,
  LandingFooter,
  landingFaqs,
} from '@/components/landing/ConversionSections'
import './landing.css'
import { buildSeoJsonLd, rentoraBrand } from '@/lib/rentora-seo'

const pageUrl = rentoraBrand.canonicalUrl

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  return (
    <div className="rentora-landing" id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSeoJsonLd(pageUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <a className="r-skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <LandingNav />
      <main id="contenido">
        <LandingHero videoSource={getDemoVideoSource()} />
        <SalvadorJourney videoSource={getDemoVideoSource()} />
        <FeatureSections />
        <ConversionSections />
      </main>
      <LandingFooter />
    </div>
  )
}
