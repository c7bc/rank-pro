import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rankpro.dhyz.company'),
  title: {
    default: 'RANK PRO - Google Ranking & Review Management | DHYZ',
    template: '%s | RANK PRO by DHYZ',
  },
  description: 'Data-driven local SEO and review generation. We create proven reputation systems for Las Vegas businesses. One-time setup. Permanent results.',
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
    title: 'Dominate Local Search & Own Your Reviews',
    description: 'Proven local SEO services and authentic Google review generation for businesses demanding market dominance.',
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
        <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
