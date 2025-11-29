import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Users, Shield, Headphones, Clock, FileText } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Enterprise Solutions',
  description: 'Enterprise-grade SEO solutions for multi-location businesses. Dedicated support, custom SLAs, and white-glove service.',
  openGraph: {
    title: 'Enterprise Solutions | RANK PRO',
    description: 'Enterprise-grade SEO solutions for multi-location businesses.',
    images: ['/api/og?title=Enterprise%20Solutions&description=Multi-location%20SEO%20solutions&type=page'],
  },
}

const benefits = [
  {
    icon: Building2,
    title: 'Multi-Location Support',
    description: 'Manage dozens or hundreds of locations from a single dashboard with unified reporting and analytics.'
  },
  {
    icon: Users,
    title: 'Dedicated Account Team',
    description: 'Your own account manager and technical lead who understand your business inside and out.'
  },
  {
    icon: Shield,
    title: 'Custom SLAs',
    description: 'Guaranteed uptime, response times, and performance metrics tailored to your requirements.'
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: '24/7 access to our SEO consultants with guaranteed response within 2 hours.'
  },
  {
    icon: Clock,
    title: 'Accelerated Delivery',
    description: 'Fast-track implementation with dedicated resources for time-sensitive deployments.'
  },
  {
    icon: FileText,
    title: 'Custom Reporting',
    description: 'Branded reports, custom metrics, and executive dashboards built to your specifications.'
  }
]

export default function EnterprisePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Enterprise', url: 'https://rankpro.dhyz.company/enterprise' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
                Enterprise
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                Built for <span className="text-grey-500">Scale</span>
              </h1>
              <p className="text-grey-300 text-xl mb-8">
                For businesses managing multiple locations or requiring custom solutions, our enterprise tier delivers the services, support, and flexibility you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-electric-blue text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-electric-blue/80 transition-colors">
                  Contact Sales
                </Link>
                <Link href="/architecture" className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors">
                  View Architecture
                </Link>
              </div>
            </div>
            <div className="bg-surface border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-medium text-white mb-6">Enterprise Includes</h3>
              <ul className="space-y-4">
                {['Unlimited locations', 'Custom integrations', 'Dedicated account management', 'White-label options', 'API access', 'Custom contracts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-grey-300">
                    <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-all">
                <benefit.icon className="w-8 h-8 text-electric-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium text-white mb-2">{benefit.title}</h3>
                <p className="text-grey-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
