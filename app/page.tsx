import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { ModulesSection } from '@/components/sections/ModulesSection'
import { DTESection } from '@/components/sections/DTESection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="landing-root min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUsSection />
        <ModulesSection />
        <DTESection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
