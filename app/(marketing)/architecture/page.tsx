import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, Database, Globe, Shield, Cpu, Network } from 'lucide-react'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Technical Architecture',
  description: 'Explore the technical architecture powering RANK PRO\'s local SEO platform. Built for scale, security, and performance.',
  openGraph: {
    title: 'Technical Architecture | RANK PRO',
    description: 'Enterprise-grade SEO platform design for maximum performance and reliability.',
    images: ['/api/og?title=Technical%20Architecture&description=Enterprise-grade%20platform%20design&type=page'],
  },
}

const architecture = [
  {
    icon: Server,
    title: 'Distributed Infrastructure',
    description: 'Multi-region deployment ensures 99.9% uptime and minimal latency for your local SEO assets.'
  },
  {
    icon: Database,
    title: 'Citation Network Database',
    description: 'Proprietary database of 500+ high-authority citation sources, continuously updated and verified.'
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivery network optimized for Google\'s crawlers with edge caching worldwide.'
  },
  {
    icon: Shield,
    title: 'Security Layer',
    description: 'Enterprise-grade security with encryption at rest and in transit. SOC 2 compliant platform.'
  },
  {
    icon: Cpu,
    title: 'AI Processing Engine',
    description: 'Machine learning algorithms optimize review timing, content, and placement for maximum impact.'
  },
  {
    icon: Network,
    title: 'API Integration Layer',
    description: 'RESTful APIs connect your existing systems with our platform for seamless automation.'
  }
]

export default function ArchitecturePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Architecture', url: 'https://rankpro.dhyz.company/architecture' }
      ]} />
      <ServiceJsonLd services={architecture.map(a => ({ name: a.title, description: a.description }))} />

      <section className="pt-40 pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              System Design
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Technical <span className="text-grey-500">Architecture</span>
            </h1>
            <p className="text-grey-300 text-xl">
              Our platform delivers enterprise-grade performance, security, and scalability. Every component is designed to maximize your Google rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {architecture.map((item, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-xl border border-white/5 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/20 transition-colors">
                  <item.icon className="w-8 h-8 text-white group-hover:text-electric-blue transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{item.title}</h3>
                <p className="text-grey-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-white/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-display font-medium text-white mb-4">Ready to See It in Action?</h2>
            <p className="text-grey-500 mb-8 max-w-xl mx-auto">
              Schedule a strategy session with our SEO consultants to understand how our platform can power your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-electric-blue/80 transition-colors">
              Request Technical Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
