import { ArrowUpRight, MessageSquare, MapPin, BarChart3, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: "Verified Google Reviews",
    description: "We implement systems that capture 100% real, verified customer feedback directly to your Google Business Profile. No bots, no fake accounts.",
    icon: ShieldCheck
  },
  {
    title: "Google Map Pack SEO",
    description: "Constructing the entire web of local citations and keyword structures to rank your GMB in the 'Top 3' Map Pack for Las Vegas.",
    icon: MapPin
  },
  {
    title: "Review Filtering Engine",
    description: "Our infrastructure intercepts negative feedback before it goes public, allowing you to resolve issues privately while amplifying 5-star ratings.",
    icon: MessageSquare
  },
  {
    title: "ROI Analytics Dashboard",
    description: "Track exactly how many calls, direction requests, and website visits your new Google ranking is generating in real-time.",
    icon: BarChart3
  }
]

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-electric-blue text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_10px_#007AFF]"></span>
              Core Infrastructure
            </div>
            <h2 className="text-white font-display font-medium text-5xl md:text-7xl leading-[1.1]">
              Real Authority, <br />
              <span className="text-grey-500">Engineered Trust.</span>
            </h2>
          </div>
          <p className="text-grey-500 max-w-md text-lg">
            We don&apos;t just &quot;do SEO&quot;. We build permanent reputation assets on Google that you own forever.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative p-10 bg-surface border border-white/5 rounded-2xl hover:border-electric-blue/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="text-electric-blue w-6 h-6" />
              </div>

              <div className="mb-8 p-4 bg-white/5 w-fit rounded-xl border border-white/5 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/20 transition-colors">
                <service.icon className="w-8 h-8 text-white group-hover:text-electric-blue transition-colors" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-display font-medium text-white mb-4">
                {service.title}
              </h3>
              <p className="text-grey-500 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
