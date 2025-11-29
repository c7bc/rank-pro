'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const ProblemSolution = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-white font-display font-medium text-5xl md:text-7xl leading-[1.1] mb-8">
                The Truth About Reviews.
              </h2>
              <p className="text-grey-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
                Buying fake reviews is a death sentence for your Google Business Profile. Google&apos;s AI bans listings with suspicious activity.
                <br/><br/>
                We create <b>authentic</b> review generation systems. We develop the processes that compel your <i>real</i> customers to leave 5-star feedback, ensuring you rank higher without the risk.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {['Real Customer Verification', 'Anti-Spam Filtering', 'Google Compliant', 'Review Growth'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-electric-blue text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual - Dark Abstract Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="w-full h-[600px] bg-surface rounded-2xl overflow-hidden relative border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 group">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
                alt="Las Vegas Architecture"
                fill
                className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              {/* Floating Card Visual */}
              <div className="absolute bottom-10 left-10 right-10 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-electric-blue/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-mono text-sm">System Active</span>
                </div>
                <div className="text-grey-500 text-xs">Authentic reviews flowing to Google Business Profile...</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
