import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Scale } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'RANK PRO legal documents including Terms of Service, Privacy Policy, and compliance information.',
  openGraph: {
    title: 'Legal | RANK PRO',
    description: 'Terms of Service and Privacy Policy.',
    images: ['/api/og?title=Legal&description=Terms%20and%20Privacy&type=page'],
  },
}

const legalDocs = [
  {
    icon: FileText,
    title: 'Terms of Service',
    description: 'The agreement governing your use of RANK PRO services and platform.',
    href: '/legal/terms'
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    href: '/legal/privacy'
  },
  {
    icon: Scale,
    title: 'Compliance',
    description: 'Our commitment to data protection regulations and industry standards.',
    href: '/legal/privacy'
  }
]

export default function LegalPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Legal', url: 'https://rankpro.dhyz.company/legal' }
      ]} />

      <section className="pt-40 pb-32 bg-black min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Legal
            </h1>
            <p className="text-grey-300 text-lg">
              Important documents and policies governing your use of RANK PRO services.
            </p>
          </div>

          <div className="space-y-4">
            {legalDocs.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="flex items-start gap-4 p-6 bg-surface border border-white/5 rounded-xl hover:border-electric-blue/30 transition-all group"
              >
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-electric-blue/10 transition-colors">
                  <doc.icon className="w-6 h-6 text-white group-hover:text-electric-blue transition-colors" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-medium text-white mb-1 group-hover:text-electric-blue transition-colors">{doc.title}</h2>
                  <p className="text-grey-500">{doc.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-6 bg-surface border border-white/5 rounded-xl">
            <h3 className="text-lg font-medium text-white mb-2">Questions?</h3>
            <p className="text-grey-500 mb-4">
              If you have any questions about our legal documents, please contact us.
            </p>
            <a href="mailto:partner@dhyz.company" className="text-electric-blue hover:underline">
              partner@dhyz.company
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
