import type { Metadata } from 'next'
import { CheckCircle, Clock, Users, Zap } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CalButton } from '@/components/ui/CalButton'

export const metadata: Metadata = {
  title: 'Initialize Your Project',
  description: 'Start your journey to Google dominance. Learn how to begin your SEO campaign with RANK PRO by DHYZ.',
  openGraph: {
    title: 'Initialize Project | RANK PRO',
    description: 'Start your journey to Google dominance with enterprise-grade SEO services.',
    images: ['/api/og?title=Initialize%20Project&description=Start%20your%20journey%20to%20Google%20dominance&type=page'],
  },
}

const steps = [
  {
    icon: Clock,
    title: 'Schedule Discovery Call',
    description: 'Book a 30-minute consultation where we analyze your current digital footprint and identify opportunities.'
  },
  {
    icon: Users,
    title: 'Strategic Alignment',
    description: 'Our team maps your business goals to technical deliverables with clear KPIs and timelines.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'We build and deploy your custom SEO campaign with full transparency throughout the process.'
  },
  {
    icon: CheckCircle,
    title: 'Handover & Training',
    description: 'You receive complete ownership of all assets with documentation and optional training sessions.'
  }
]

export default function InitializeProjectPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Initialize Project', url: 'https://rankpro.dhyz.company/initialize-project' }
      ]} />

      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
              Get Started
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Initialize <span className="text-grey-500">Project</span>
            </h1>
            <p className="text-grey-300 text-xl max-w-2xl mx-auto">
              Your path to Google dominance starts here. We make the process simple, transparent, and results-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-electric-blue/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-electric-blue/10 rounded-xl border border-electric-blue/20">
                    <step.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-grey-500 mb-2 block">Step {index + 1}</span>
                    <h3 className="text-xl font-display font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-grey-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CalButton calLink="30min" variant="secondary" />
            <p className="text-grey-500 text-sm mt-4">No commitment required. 100% free initial audit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
