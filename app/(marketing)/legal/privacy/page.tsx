import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for RANK PRO by DHYZ Management. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Legal', url: 'https://rankpro.dhyz.company/legal' },
        { name: 'Privacy Policy', url: 'https://rankpro.dhyz.company/legal/privacy' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-grey-500 mb-12">Last updated: January 2025</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">1. Information We Collect</h2>
              <p className="text-grey-300 leading-relaxed mb-4">
                We collect information you provide directly, including:
              </p>
              <ul className="list-disc pl-6 text-grey-300 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, website, location)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communications with our team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-grey-300 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 text-grey-300 space-y-2">
                <li>Provide and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">3. Data Security</h2>
              <p className="text-grey-300 leading-relaxed">
                We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256), regular security audits, and access controls. Our platform is SOC 2 compliant.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">4. Data Retention</h2>
              <p className="text-grey-300 leading-relaxed">
                We retain your personal information for as long as necessary to provide Services and fulfill legal obligations. You may request deletion of your data at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">5. Your Rights</h2>
              <p className="text-grey-300 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-grey-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">6. Cookies</h2>
              <p className="text-grey-300 leading-relaxed">
                We use essential cookies for site functionality and analytics cookies to understand usage patterns. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-medium text-white mb-4">7. Contact Us</h2>
              <p className="text-grey-300 leading-relaxed">
                For privacy-related inquiries, please contact our Data Protection Officer at partner@dhyz.company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
