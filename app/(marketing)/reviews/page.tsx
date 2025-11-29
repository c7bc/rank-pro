import type { Metadata } from 'next'
import { ReviewPricing } from '@/components/sections/ReviewPricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { faqs } from '@/lib/data'
import { Contact } from '@/components/sections/Contact'
import { FAQJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Buy Verified Google Reviews',
  description: 'Authentic, verified Google reviews delivered through our proven platform. Safe, compliant, and permanent. Volume packages from 50 to 1000+ reviews.',
  openGraph: {
    title: 'Buy Verified Google Reviews | RANK PRO',
    description: 'Authentic, verified reviews delivered through our proven platform. Safe, compliant, and permanent.',
    images: ['/api/og?title=Verified%20Google%20Reviews&description=Volume%20packages%20from%2050%20to%201000%2B%20reviews&type=page'],
  },
}

export default function ReviewsPage() {
  return (
    <>
      <ServiceJsonLd services={[
        { name: 'Starter Pack - 50 Reviews', description: 'Perfect for new listings establishing initial trust' },
        { name: 'Growth Pack - 100 Reviews', description: 'Accelerated authority for competitive niches' },
        { name: 'Dominance - 500 Reviews', description: 'Market leader status. Own the map pack.' },
        { name: 'Enterprise - 1000 Reviews', description: 'Complete category domination' },
      ]} />
      <FAQJsonLd faqs={faqs} />

      <div className="pt-32">
        <ReviewPricing />
      </div>
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
