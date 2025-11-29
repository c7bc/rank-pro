import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { faqs } from '@/lib/data'
import { Contact } from '@/components/sections/Contact'
import { OrganizationJsonLd, LocalBusinessJsonLd, FAQJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'RANK PRO - Local Search Engineering | DHYZ',
  description: 'Precision-engineered local SEO infrastructure. We build scalable reputation systems for Las Vegas businesses. One-time build. Zero maintenance latency.',
  openGraph: {
    title: 'RANK PRO - Engineering Reputation Systems',
    description: 'Enterprise-grade SEO infrastructure and verified review architecture for businesses demanding market dominance.',
    images: ['/api/og?title=Engineering%20Reputation%20Systems&description=Enterprise-grade%20SEO%20infrastructure%20for%20market%20dominance&type=home'],
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd
        name="RANK PRO by DHYZ"
        url="https://rankpro.dhyz.company"
        logo="https://rankpro.dhyz.company/logo.png"
        description="Enterprise-grade SEO infrastructure and verified review architecture"
      />
      <LocalBusinessJsonLd />
      <ServiceJsonLd services={[
        { name: 'Verified Google Reviews', description: 'Real, verified customer feedback directly to your Google Business Profile' },
        { name: 'Google Map Pack SEO', description: 'Rank in the Top 3 Map Pack for your local market' },
        { name: 'Review Filtering Engine', description: 'Intercept negative feedback and amplify 5-star ratings' },
        { name: 'ROI Analytics Dashboard', description: 'Track calls, direction requests, and website visits in real-time' },
      ]} />
      <FAQJsonLd faqs={faqs} />

      <Hero />
      <Stats />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
