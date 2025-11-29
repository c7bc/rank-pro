import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black border-t border-white/5 py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          <div className="space-y-4">
            <div className="text-white font-display font-bold text-2xl tracking-tight flex items-center gap-2">
              RANK<span className="text-grey-500 font-light">PRO</span>
            </div>
            <p className="text-grey-500 text-sm max-w-xs">
              A product of <a href="https://dhyz.framer.website/" className="text-white hover:underline">DHYZ Management</a>.<br/>
              Engineering digital dominance for the modern enterprise.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Platform</h4>
              <Link href="/infrastructure" className="text-grey-500 text-sm hover:text-white transition-colors">Infrastructure</Link>
              <Link href="/reviews" className="text-grey-500 text-sm hover:text-white transition-colors">Buy Reviews</Link>
              <Link href="/integration" className="text-grey-500 text-sm hover:text-white transition-colors">Integration</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Company</h4>
              <a href="https://dhyz.framer.website/" className="text-grey-500 text-sm hover:text-white transition-colors flex items-center gap-1">
                DHYZ Global <ArrowUpRight size={12} />
              </a>
              <Link href="/contact" className="text-grey-500 text-sm hover:text-white transition-colors">Contact</Link>
              <Link href="/legal" className="text-grey-500 text-sm hover:text-white transition-colors">Legal</Link>
            </div>
          </div>

        </div>

        {/* Gradient Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-electric-blue/50 to-transparent my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-grey-700 font-mono">
          <p>© 2025 RANK PRO by DHYZ. All rights reserved.</p>
          <a href="mailto:partner@dhyz.company" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} />
            partner@dhyz.company
          </a>
        </div>
      </div>
    </footer>
  )
}
