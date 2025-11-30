'use client'

import { Check, Star } from 'lucide-react'
import { CalButton } from '@/components/ui/CalButton'

const plans = [
  {
    name: "Starter Pack",
    amount: "50",
    price: "750",
    description: "Perfect for new listings establishing initial trust.",
    features: ["50 Verified Reviews", "Drip-Feed Delivery (30 Days)", "Real User Profiles", "Geo-Located in Las Vegas"]
  },
  {
    name: "Growth Pack",
    amount: "100",
    price: "1,400",
    description: "Accelerated authority for competitive niches.",
    features: ["100 Verified Reviews", "Drip-Feed Delivery (60 Days)", "Keyword Optimized Content", "Photo-Enhanced Reviews"]
  },
  {
    name: "Dominance",
    amount: "500",
    price: "6,000",
    isHighlighted: true,
    description: "Market leader status. Own the map pack.",
    features: ["500 Verified Reviews", "Drip-Feed Delivery (6 Months)", "Priority Support", "Negative Review Shield", "Dedicated Campaign Manager"]
  },
  {
    name: "Enterprise",
    amount: "1000",
    price: "10,000",
    description: "Complete category domination.",
    features: ["1000 Verified Reviews", "Custom Delivery Schedule", "Multi-Location Split", "White-Glove Service", "API Integration Available"]
  }
]

export const ReviewPricing = () => {
  return (
    <section id="pricing" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_10px_#007AFF]"></span>
            Verified Google Reviews
          </div>
          <h2 className="text-white font-display font-medium text-5xl md:text-7xl mb-6">
            Volume <span className="text-electric-blue">Packages.</span>
          </h2>
          <p className="text-grey-500 text-xl max-w-2xl mx-auto">
            Authentic, verified reviews delivered through our proven platform. Safe, compliant, and permanent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-2xl flex flex-col justify-between min-h-[500px] border transition-all duration-300
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
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-electric-blue fill-electric-blue" size={20} />
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-white">{plan.amount}</span>
                  <span className="text-grey-500 ml-2">Reviews</span>
                </div>

                <div className="flex items-baseline mb-6">
                  <span className="text-sm text-grey-500 mr-1">$</span>
                  <span className={`text-3xl font-display font-medium ${plan.isHighlighted ? 'text-electric-blue' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-xs text-grey-500 ml-2">one-time</span>
                </div>

                <div className="w-full h-px bg-white/10 mb-6"></div>

                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-grey-300 leading-relaxed">
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.isHighlighted ? 'text-electric-blue' : 'text-white'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-[10px] text-grey-500 mb-4 italic">
                  &quot;{plan.description}&quot;
                </p>
                <CalButton
                  calLink="30min"
                  className={`
                    w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-wider transition-all border
                    ${plan.isHighlighted
                      ? 'bg-electric-blue text-white border-electric-blue hover:bg-electric-blue/80'
                      : 'bg-transparent text-white border-white/20 hover:bg-white/5'}
                  `}
                >
                  Purchase Package
                </CalButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
