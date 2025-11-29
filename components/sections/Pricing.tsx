import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Review System",
    price: "997",
    period: "one-time",
    description: "Automated reputation machine for Google Business.",
    features: ["Lifetime System Setup", "Real Google Review Generation", "Negative Feedback Filter", "QR Code & Email Templates"]
  },
  {
    name: "SEO Bundle",
    price: "2,497",
    period: "one-time",
    isHighlighted: true,
    description: "Complete Google Domination Stack.",
    features: ["Review System Included", "Google Map Pack Optimization", "Top 50 Local Citations", "Competitor Displacement", "Conversion Rate Optimization"]
  },
  {
    name: "Local SEO Core",
    price: "1,997",
    period: "one-time",
    description: "Pure ranking infrastructure.",
    features: ["Google Business Profile Optimization", "Competitor Keyword Analysis", "Local Citation Cleanup", "On-Page SEO Structure"]
  }
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-white font-display font-medium text-5xl md:text-7xl mb-6">
            Pay Once. <span className="text-electric-blue">Rank Forever.</span>
          </h2>
          <p className="text-grey-500 text-xl max-w-2xl mx-auto">
            Engineering success without the monthly bloat. One-time investment for a lifetime asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-10 rounded-2xl flex flex-col justify-between min-h-[500px] border transition-all duration-300
                ${plan.isHighlighted
                  ? 'bg-electric-blue/5 border-electric-blue/50 shadow-[0_0_30px_rgba(0,122,255,0.1)]'
                  : 'bg-surface border-white/5 hover:border-white/10'}
              `}
            >
              {plan.isHighlighted && (
                <div className="absolute top-0 right-0 bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                  Best Value
                </div>
              )}

              <div>
                <h3 className="text-2xl font-display font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-grey-500 mb-8">{plan.description}</p>

                <div className="flex items-baseline mb-8">
                  <span className={`text-5xl font-display font-medium ${plan.isHighlighted ? 'text-electric-blue' : 'text-white'}`}>${plan.price}</span>
                  <span className="text-sm text-grey-500 ml-2">/one-time</span>
                </div>

                <div className="w-full h-px bg-white/10 mb-8"></div>

                <ul className="space-y-4">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-grey-300">
                      <Check size={16} className={`mt-0.5 ${plan.isHighlighted ? 'text-electric-blue' : 'text-white'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className={`
                mt-10 w-full py-4 rounded-lg flex items-center justify-center gap-2 font-medium text-sm uppercase tracking-wider transition-all border
                ${plan.isHighlighted
                  ? 'bg-electric-blue text-white border-electric-blue hover:bg-electric-blue/80'
                  : 'bg-transparent text-white border-white/20 hover:bg-white/5'}
              `}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
