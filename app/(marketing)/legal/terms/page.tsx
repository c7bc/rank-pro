import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for RANK PRO by DHYZ Management. Read our agreement governing the use of our services.',
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Legal', url: 'https://rankpro.dhyz.company/legal' },
        { name: 'Terms of Service', url: 'https://rankpro.dhyz.company/legal/terms' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-grey-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-grey max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-grey-300 leading-relaxed">
                By accessing and using RANK PRO services (&quot;Services&quot;) provided by DHYZ Management (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">2. Description of Services</h2>
              <p className="text-grey-300 leading-relaxed">
                RANK PRO provides local SEO infrastructure, review generation systems, and related digital marketing services. Our Services are designed to help businesses improve their online presence and reputation on platforms like Google Business Profile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">3. Payment Terms</h2>
              <p className="text-grey-300 leading-relaxed">
                All fees are one-time payments unless otherwise specified. Payment is due upon agreement execution. We accept major credit cards and wire transfers. Refund policies are detailed in individual service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">4. Intellectual Property</h2>
              <p className="text-grey-300 leading-relaxed">
                Upon full payment, you receive ownership of all deliverables created specifically for your project. RANK PRO retains ownership of proprietary systems, processes, and methodologies used to create deliverables.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-grey-300 leading-relaxed">
                RANK PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our Services. Our total liability shall not exceed the amount paid for Services in the preceding 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">6. Governing Law</h2>
              <p className="text-grey-300 leading-relaxed">
                These Terms shall be governed by the laws of the State of Nevada, United States, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">7. Contact Information</h2>
              <p className="text-grey-300 leading-relaxed">
                For questions about these Terms, please contact us at partner@dhyz.company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
