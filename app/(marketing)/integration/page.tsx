import type { Metadata } from 'next'
import Link from 'next/link'
import { Plug, Code, Webhook, Database, RefreshCw, FileJson } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect RANK PRO with your existing tools. RESTful APIs, webhooks, and native integrations with popular platforms.',
  openGraph: {
    title: 'Integrations | RANK PRO',
    description: 'Connect with your existing tools via APIs and webhooks.',
    images: ['/api/og?title=Integrations&description=RESTful%20APIs%20and%20webhooks&type=page'],
  },
}

const integrations = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Full-featured API for custom integrations. Manage reviews, citations, and analytics programmatically.',
    features: ['OAuth 2.0 authentication', 'Rate limiting', 'Comprehensive documentation', 'SDKs for major languages']
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Real-time notifications for review events, ranking changes, and system alerts.',
    features: ['Customizable payloads', 'Retry logic', 'Event filtering', 'Delivery logs']
  },
  {
    icon: Database,
    title: 'CRM Integrations',
    description: 'Native connections to popular CRM platforms for automated review requests.',
    features: ['Salesforce', 'HubSpot', 'Zoho', 'Custom CRM support']
  },
  {
    icon: RefreshCw,
    title: 'Zapier & Make',
    description: 'Connect with 5,000+ apps through no-code automation platforms.',
    features: ['Pre-built templates', 'Trigger actions', 'Multi-step workflows', 'Custom Zaps']
  },
  {
    icon: FileJson,
    title: 'Data Export',
    description: 'Export your data in multiple formats for reporting and analysis.',
    features: ['CSV export', 'JSON API', 'Scheduled reports', 'Custom queries']
  },
  {
    icon: Plug,
    title: 'Custom Integrations',
    description: 'Our engineering team can build custom integrations for your specific needs.',
    features: ['Dedicated support', 'Custom development', 'SLA guarantees', 'Enterprise priority']
  }
]

export default function IntegrationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Integration', url: 'https://rankpro.dhyz.company/integration' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
              Connectivity
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Seamless <span className="text-grey-500">Integrations</span>
            </h1>
            <p className="text-grey-300 text-xl">
              Connect RANK PRO with your existing technology stack. Our open architecture ensures compatibility with virtually any system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-electric-blue/30 transition-all">
                <integration.icon className="w-8 h-8 text-electric-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium text-white mb-3">{integration.title}</h3>
                <p className="text-grey-500 mb-4">{integration.description}</p>
                <ul className="space-y-2">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-grey-300">
                      <span className="w-1 h-1 bg-electric-blue rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-black border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl font-display font-medium text-white mb-2">Need a Custom Integration?</h2>
                <p className="text-grey-500">Our team can build exactly what you need.</p>
              </div>
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-grey-100 transition-colors whitespace-nowrap">
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
