import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { RentoraOverviewSection } from '@/components/sections/RentoraOverviewSection'
import { VideoDemoSection } from '@/components/sections/VideoDemoSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { ModulesSection } from '@/components/sections/ModulesSection'
import { DTESection } from '@/components/sections/DTESection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'
import {
  buildFaqJsonLd,
  buildSeoJsonLd,
  rentoraBrand,
} from '@/lib/rentora-seo'

const pageUrl = rentoraBrand.canonicalUrl

export default function Home() {
  return (
    <div className="landing-root min-h-screen antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSeoJsonLd(pageUrl)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(pageUrl)) }}
      />
      <Navbar />
      <main>
        <Hero />
        <RentoraOverviewSection />
        <VideoDemoSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ModulesSection />
        <DTESection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
