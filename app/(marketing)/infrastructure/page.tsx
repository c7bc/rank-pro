import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, Shield, Zap, Globe, Database, Lock } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Enterprise-grade infrastructure powering RANK PRO. 99.9% uptime, global CDN, SOC 2 compliance, and real-time monitoring.',
  openGraph: {
    title: 'Infrastructure | RANK PRO',
    description: 'Enterprise-grade infrastructure with 99.9% uptime guarantee.',
    images: ['/api/og?title=Infrastructure&description=Enterprise-grade%20with%2099.9%25%20uptime&type=page'],
  },
}

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'Response Time' },
  { value: '50+', label: 'Edge Locations' },
  { value: '24/7', label: 'Monitoring' }
]

const features = [
  {
    icon: Server,
    title: 'Multi-Region Deployment',
    description: 'Your assets are distributed across multiple data centers for redundancy and optimal performance.'
  },
  {
    icon: Shield,
    title: 'SOC 2 Compliance',
    description: 'Enterprise security standards with annual audits and penetration testing.'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Sub-second response times for all API calls and data synchronization.'
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivered from the nearest edge location for minimal latency worldwide.'
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Continuous data protection with point-in-time recovery capabilities.'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'TLS 1.3 in transit, AES-256 at rest. Your data is always protected.'
  }
]

export default function InfrastructurePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Infrastructure', url: 'https://rankpro.dhyz.company/infrastructure' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              All Systems Operational
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Enterprise <span className="text-grey-500">Infrastructure</span>
            </h1>
            <p className="text-grey-300 text-xl max-w-2xl mx-auto">
              Built on battle-tested technology stack with redundancy at every layer. Your SEO infrastructure runs on the same foundations as Fortune 500 companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-surface border border-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-electric-blue mb-2">{stat.value}</div>
                <div className="text-sm text-grey-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-all">
                <feature.icon className="w-8 h-8 text-electric-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-grey-500">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-electric-blue/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">Questions About Our Infrastructure?</h2>
            <p className="text-grey-500 mb-8 max-w-xl mx-auto">
              Our engineering team is happy to discuss technical requirements, compliance needs, or custom deployment options.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-electric-blue/80 transition-colors">
              Talk to Engineering
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
