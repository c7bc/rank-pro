import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Our Methodology',
  description: 'Discover the proven 4-step methodology that powers RANK PRO\'s success. Discovery, Strategy, Implementation, and Growth.',
  openGraph: {
    title: 'Methodology | RANK PRO',
    description: 'Our proven 4-step process for SEO success.',
    images: ['/api/og?title=Our%20Methodology&description=Proven%204-step%20process%20for%20SEO%20success&type=page'],
  },
}

const methodology = [
  {
    phase: '01',
    title: 'Discovery & Strategy',
    duration: 'Week 1',
    description: 'We begin with a comprehensive audit of your current digital presence. This includes analyzing your Google Business Profile, existing reviews, local citations, competitor landscape, and market positioning.',
    deliverables: [
      'Complete digital footprint audit',
      'Competitor analysis report',
      'Opportunity identification',
      'Strategic roadmap document',
      'KPI definition and targets'
    ]
  },
  {
    phase: '02',
    title: 'Strategy & Planning',
    duration: 'Week 2',
    description: 'Our SEO strategists create your custom ranking plan. Every campaign element, workflow, and integration is mapped out for your approval before we begin implementation.',
    deliverables: [
      'Campaign strategy document',
      'Workflow automation designs',
      'Integration specifications',
      'Timeline and milestones',
      'Risk assessment and mitigation'
    ]
  },
  {
    phase: '03',
    title: 'Implementation & Optimization',
    duration: 'Weeks 3-4',
    description: 'Strategic implementation of your SEO campaign with weekly progress updates. We execute, test, and refine each component with full transparency throughout.',
    deliverables: [
      'Review generation system',
      'Citation network development',
      'Analytics dashboard setup',
      'Automation configurations',
      'Quality assurance testing'
    ]
  },
  {
    phase: '04',
    title: 'Launch & Handover',
    duration: 'Week 5',
    description: 'Full activation of your SEO campaign with complete documentation and optional training. You receive ownership of all assets and ongoing support access.',
    deliverables: [
      'Campaign activation',
      'Documentation package',
      'Training sessions',
      'Support access',
      '30-day optimization period'
    ]
  }
]

export default function MethodologyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Methodology', url: 'https://rankpro.dhyz.company/methodology' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Our Process
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              The <span className="text-electric-blue">Methodology</span>
            </h1>
            <p className="text-grey-300 text-xl max-w-2xl mx-auto">
              A proven, transparent process refined over 15+ years of delivering results. No surprises, just systematic excellence.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <span className="text-5xl font-display font-bold text-electric-blue/30">{step.phase}</span>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-white mt-2 mb-2">{step.title}</h2>
                    <span className="text-sm text-electric-blue font-mono">{step.duration}</span>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-grey-300 text-lg mb-6">{step.description}</p>
                    <div>
                      <h4 className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-4">Deliverables</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-grey-300 text-sm">
                            <span className="w-1 h-1 bg-electric-blue rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-grey-100 transition-colors">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
