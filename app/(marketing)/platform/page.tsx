import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, TrendingUp, Shield, BarChart3, Zap, Lock } from 'lucide-react'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Platform Features',
  description: 'Discover the powerful features of RANK PRO\'s local SEO platform. Reviews, rankings, analytics, and automation in one system.',
  openGraph: {
    title: 'Platform Features | RANK PRO',
    description: 'All-in-one local SEO platform for reviews, rankings, and analytics.',
    images: ['/api/og?title=Platform%20Features&description=All-in-one%20local%20SEO%20platform&type=page'],
  },
}

const features = [
  {
    icon: Star,
    title: 'Review Generation',
    description: 'Automated systems that capture authentic 5-star reviews from real customers. QR codes, email sequences, and SMS triggers.',
    stats: '42 avg reviews/month'
  },
  {
    icon: TrendingUp,
    title: 'Ranking Optimization',
    description: 'Continuous monitoring and optimization of your Google Business Profile for maximum visibility in local search results.',
    stats: 'Top 3 Map Pack'
  },
  {
    icon: Shield,
    title: 'Reputation Shield',
    description: 'Intercept and manage negative feedback before it impacts your public rating. Private resolution pathways.',
    stats: '98% resolution rate'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into calls, direction requests, website visits, and conversion metrics from your Google presence.',
    stats: 'Live data'
  },
  {
    icon: Zap,
    title: 'Automation Engine',
    description: 'Set-and-forget workflows that continuously build your online reputation without manual intervention.',
    stats: '24/7 operation'
  },
  {
    icon: Lock,
    title: 'Full Ownership',
    description: 'Unlike agencies, you own everything we build. No monthly fees, no hostage situations. Your assets, forever.',
    stats: '100% yours'
  }
]

export default function PlatformPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Platform', url: 'https://rankpro.dhyz.company/platform' }
      ]} />
      <ServiceJsonLd services={features.map(f => ({ name: f.title, description: f.description }))} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
              Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Powerful <span className="text-grey-500">Features</span>
            </h1>
            <p className="text-grey-300 text-xl">
              Everything you need to dominate local search in one integrated platform. Built for performance, designed for simplicity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-electric-blue/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-electric-blue transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-electric-blue text-sm font-mono">{feature.stats}</span>
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-grey-500">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-grey-100 transition-colors">
              Get Platform Access
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
