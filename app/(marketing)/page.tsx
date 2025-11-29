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
  title: 'RANK PRO - Google Ranking & Review Management | DHYZ',
  description: 'Data-driven local SEO and review generation for Las Vegas businesses. Rank higher on Google, generate authentic reviews, own your digital presence. One-time setup. Permanent results.',
  openGraph: {
    title: 'Dominate Local Search & Own Your Reviews',
    description: 'Proven local SEO services and authentic Google review generation for businesses demanding market dominance.',
    images: ['/api/og?title=Dominate%20Local%20Search%20%26%20Own%20Your%20Reviews&description=Proven%20local%20SEO%20and%20Google%20review%20generation&type=home'],
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd
        name="RANK PRO by DHYZ"
        url="https://rankpro.dhyz.company"
        logo="https://rankpro.dhyz.company/logo.png"
        description="Proven local SEO services and authentic Google review generation"
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
