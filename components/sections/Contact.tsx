'use client'

import { CalButton } from '@/components/ui/CalButton'
import { QuickCallIcon, StrategyIcon, DeepDiveIcon } from '@/components/icons/MeetingIcons'

const meetingOptions = [
  {
    duration: '15min' as const,
    title: 'Quick Call',
    description: 'Perfect for initial questions and quick consultations',
    Icon: QuickCallIcon
  },
  {
    duration: '30min' as const,
    title: 'Strategy Session',
    description: 'In-depth discussion about your SEO needs and goals',
    Icon: StrategyIcon
  },
  {
    duration: '1-hour-meeting' as const,
    title: 'Deep Dive',
    description: 'Comprehensive analysis and detailed strategy planning',
    Icon: DeepDiveIcon
  }
]

export const Contact = () => {

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            Let&apos;s Build
          </div>
          <h2 className="text-white font-display font-medium text-5xl md:text-6xl mb-6">
            Ready to dominate local search? <br/> Book your free consultation.
          </h2>
          <p className="text-grey-300 text-lg max-w-2xl mx-auto">
            Choose the meeting duration that works best for you. No commitment required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {meetingOptions.map((option) => (
            <div
              key={option.duration}
              className="bg-surface border border-white/5 rounded-2xl p-8 text-left hover:border-electric-blue/30 transition-all group"
            >
              <div className="text-electric-blue mb-6 transition-transform group-hover:scale-110">
                <option.Icon className="w-10 h-10" />
              </div>
              <h3 className="text-white font-display font-medium text-2xl mb-2">
                {option.title}
              </h3>
              <p className="text-grey-500 text-sm mb-6 min-h-[40px]">
                {option.description}
              </p>
              <CalButton calLink={option.duration} variant="primary" />
            </div>
          ))}
        </div>

        <p className="text-grey-500 text-sm mt-8">
          All meetings include a free SEO audit • 100% confidential • No pressure sales
        </p>
      </div>
    </section>
  )
}
