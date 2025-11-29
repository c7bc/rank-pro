import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, TrendingUp, Phone, MapPin } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Real results from real businesses. See how RANK PRO has transformed local businesses with verified Google reviews and SEO infrastructure.',
  openGraph: {
    title: 'Success Stories | RANK PRO',
    description: 'Real results from real businesses using RANK PRO.',
    images: ['/api/og?title=Success%20Stories&description=Real%20results%20from%20real%20businesses&type=page'],
  },
}

const caseStudies = [
  {
    company: 'Las Vegas HVAC Pros',
    industry: 'Home Services',
    challenge: 'Stuck at 12 reviews with a 3.9 rating, invisible in local search results.',
    solution: 'Implemented our review generation system and local SEO infrastructure.',
    results: [
      { metric: '42', label: 'New reviews in first month' },
      { metric: '4.9', label: 'Star rating achieved' },
      { metric: '156%', label: 'Increase in calls' },
      { metric: 'Top 3', label: 'Map Pack ranking' }
    ],
    quote: "The new review system captured 42 verified Google reviews in the first week. Our phone started ringing double the usual volume.",
    timeline: '4 weeks'
  },
  {
    company: 'Apex Dental Studio',
    industry: 'Healthcare',
    challenge: 'Competing against practices with hundreds more reviews and higher ratings.',
    solution: 'Review filtering, reputation repair, and citation network buildout.',
    results: [
      { metric: '3.8→4.9', label: 'Rating improvement' },
      { metric: '89', label: 'Fake reviews removed' },
      { metric: '234%', label: 'Website traffic increase' },
      { metric: '$47K', label: 'Monthly revenue increase' }
    ],
    quote: "We were stuck at 3.8 stars. VegasRank cleaned up the fake spam and got us to 4.9 stars with real patient feedback. Incredible ROI.",
    timeline: '6 weeks'
  },
  {
    company: 'Neon City Law',
    industry: 'Legal Services',
    challenge: 'High-value keywords dominated by established competitors with massive budgets.',
    solution: 'Complete SEO Bundle with local citation network and review system.',
    results: [
      { metric: '#1', label: 'For "Las Vegas DUI Lawyer"' },
      { metric: '73', label: 'Verified reviews' },
      { metric: '312%', label: 'Lead increase' },
      { metric: '$0', label: 'Monthly SEO fees' }
    ],
    quote: "Finally, an SEO agency that doesn't charge monthly fees. They built the infrastructure, handed us the keys, and we own the ranking.",
    timeline: '5 weeks'
  }
]

export default function SuccessStoriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Success Stories', url: 'https://rankpro.dhyz.company/success-stories' }
      ]} />

      <section className="pt-40 pb-32 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_10px_#007AFF]"></span>
              Case Studies
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Success <span className="text-grey-500">Stories</span>
            </h1>
            <p className="text-grey-300 text-xl max-w-2xl mx-auto">
              Real businesses. Real results. See how our infrastructure transforms local search presence.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 hover:border-electric-blue/20 transition-all">
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  <div className="lg:w-1/3">
                    <span className="text-xs font-mono text-electric-blue mb-2 block">{study.industry}</span>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-2">{study.company}</h2>
                    <span className="text-sm text-grey-500">Completed in {study.timeline}</span>
                  </div>
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-2">Challenge</h4>
                      <p className="text-grey-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-2">Solution</h4>
                      <p className="text-grey-300">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-black p-4 rounded-xl border border-white/5">
                      <div className="text-2xl md:text-3xl font-display font-bold text-electric-blue mb-1">{result.metric}</div>
                      <div className="text-xs text-grey-500 uppercase tracking-wide">{result.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-electric-blue pl-6">
                  <p className="text-grey-300 text-lg italic">&quot;{study.quote}&quot;</p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-grey-500 mb-6">Ready to become our next success story?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-grey-100 transition-colors">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
