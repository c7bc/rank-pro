import type { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with RANK PRO. Book a free consultation to discuss your local SEO needs.',
  openGraph: {
    title: 'Contact Us | RANK PRO',
    description: 'Book a free consultation for your SEO project.',
    images: ['/api/og?title=Contact%20Us&description=Book%20a%20free%20consultation&type=page'],
  },
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'partner@dhyz.company',
    href: 'mailto:partner@dhyz.company'
  },
  {
    icon: MapPin,
    title: 'Locations',
    value: 'NYC • LDN • LAS',
    href: null
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: null
  }
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://rankpro.dhyz.company' },
        { name: 'Contact', url: 'https://rankpro.dhyz.company/contact' }
      ]} />

      <section className="pt-40 pb-20 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-6 bg-surface border border-white/5 rounded-xl text-center">
                <info.icon className="w-6 h-6 text-electric-blue mx-auto mb-3" />
                <h3 className="text-sm text-grey-500 uppercase tracking-wider mb-1">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-white hover:text-electric-blue transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <span className="text-white">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
