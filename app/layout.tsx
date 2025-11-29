import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rankpro.dhyz.company'),
  title: {
    default: 'RANK PRO - Local Search Engineering | DHYZ',
    template: '%s | RANK PRO by DHYZ',
  },
  description: 'Precision-engineered local SEO infrastructure. We build scalable reputation systems for Las Vegas businesses. One-time build. Zero maintenance latency.',
  keywords: ['SEO', 'Local SEO', 'Google Reviews', 'Las Vegas SEO', 'Reputation Management', 'Google Business Profile', 'DHYZ'],
  authors: [{ name: 'DHYZ Management' }],
  creator: 'DHYZ Management',
  publisher: 'DHYZ Management',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RANK PRO',
    title: 'RANK PRO - Engineering Reputation Systems',
    description: 'Enterprise-grade SEO infrastructure and verified review architecture for businesses demanding market dominance.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@dhyzmanagement',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
