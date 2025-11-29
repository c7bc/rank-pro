'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '@/lib/data'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            Common Questions
          </div>
          <h2 className="text-white font-display font-medium text-5xl md:text-6xl">
            Key Information
          </h2>
          <p className="text-grey-500 mt-6 text-lg">
            Find answers to common questions about our engagement models and core services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-surface border border-white/5 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-white/20' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className={`text-grey-500 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <Plus size={20} />
                </span>
              </button>

              <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden px-6 pb-6">
                  <p className="text-grey-500 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
