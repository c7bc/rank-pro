import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
