'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { CircularTextButton } from '@/components/ui/CircularTextButton'

export const Hero = () => {
  return (
    <section id="hero" className="relative bg-black overflow-hidden min-h-screen pt-32 pb-20 flex items-center justify-center">
      {/* Abstract Engineering Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Central Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">

        {/* Institutional Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 justify-center"
        >
          <div className="h-px w-8 bg-electric-blue/50"></div>
          <span className="text-electric-blue text-xs font-bold uppercase tracking-[0.3em]">DHYZ Infrastructure Division</span>
          <div className="h-px w-8 bg-electric-blue/50"></div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.95] mb-8 tracking-tight"
        >
          Engineering <br />
          <span className="text-grey-500">Reputation Systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-grey-300 text-lg md:text-2xl max-w-3xl leading-relaxed mb-14 font-light"
        >
          <b>RANK PRO</b> provides enterprise-grade SEO infrastructure and verified review architecture for businesses demanding market dominance. <br className="hidden md:block" />One-time build. Zero maintenance latency.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
        >
          <Link href="/initialize-project" className="group relative px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-sm transition-all hover:bg-grey-100 min-w-[200px]">
            <span className="flex items-center justify-center gap-2">
              Initialize Project
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/architecture" className="px-10 py-5 text-white text-sm font-bold uppercase tracking-wider border border-white/20 rounded-sm hover:border-electric-blue hover:text-electric-blue transition-colors flex items-center justify-center gap-2 group min-w-[200px]">
            <Globe size={16} className="text-grey-500 group-hover:text-electric-blue transition-colors" />
            View Architecture
          </Link>
        </motion.div>

      </div>

      {/* Floating Technical Element - Bottom Right */}
      <div className="absolute right-12 bottom-12 hidden 2xl:block opacity-50">
        <CircularTextButton text="RANK PRO • SYSTEM • ACTIVE • " />
      </div>
    </section>
  )
}
