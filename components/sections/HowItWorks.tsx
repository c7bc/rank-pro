import Link from 'next/link'

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, market, and competitive landscape. Strategic alignment to define KPIs and a roadmap."
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Our SEO strategists create your custom roadmap and campaign structure. You approve a comprehensive plan before we implement."
  },
  {
    number: "03",
    title: "Implementation & Optimization",
    description: "Strategic execution delivering measurable results. Full transparency and adaptation during the implementation phase."
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Activation of your local SEO campaign and review generation. We hand over complete control for you to scale."
  }
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Header */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Our Methodology
            </div>
            <h2 className="text-white font-display font-medium text-5xl md:text-6xl leading-[1.1] mb-8">
              A Roadmap <br /> for Success.
            </h2>
            <p className="text-grey-500 text-lg">
              Our process is built on transparency, strategic alignment, and proven execution to deliver measurable results.
            </p>

            <div className="mt-12">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-grey-300 transition-colors inline-block">
                Start the Process
              </Link>
            </div>
          </div>

          {/* Right Steps */}
          <div className="lg:w-2/3 space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="group p-8 md:p-12 bg-surface border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row gap-8">
                <span className="text-sm font-mono text-grey-500 border border-white/10 px-3 py-1 rounded-full h-fit w-fit">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-display font-medium text-white mb-4">{step.title}</h3>
                  <p className="text-grey-500 leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
