'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            Let&apos;s Build
          </div>
          <h2 className="text-white font-display font-medium text-5xl md:text-6xl mb-6">
            Have a complex challenge? <br/> Let&apos;s design your solution.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-white/5 rounded-2xl p-8 md:p-12 text-left space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-grey-500 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-grey-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-grey-500 uppercase tracking-wider mb-2">Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-grey-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Book Free Consultation
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
