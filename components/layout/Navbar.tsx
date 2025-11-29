'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Buy Reviews', href: '/reviews', highlight: true },
  ]

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Top Bar - DHYZ Ecosystem */}
      <div className="bg-black border-b border-white/10 h-10 relative z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex justify-between items-center">
          <a
            href="https://dhyz.framer.website/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg width="80" height="20" viewBox="0 0 669 171" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
              <path d="M0.0319824 9.10879L38.2337 9.07326C44.818 9.06906 53.2788 8.84193 59.7435 9.20927C65.4105 8.95409 71.0844 9.15879 76.7538 9.07887C86.8435 8.93679 95.3548 8.87277 104.641 13.3305C119.308 20.3713 128.345 34.8007 128.865 51.2164C129.012 55.8535 128.942 60.6062 128.897 65.3078L128.977 136.815L129 149C109.098 148.735 93.972 148.192 93.972 148.192H90.3556L89.9035 47.423C89.2945 43.7164 37.2379 49.9229 37.2393 45.5867L0.0319824 9.10879Z" fill="url(#paint0_linear_nav)"/>
              <path d="M0.389396 75.4688C0.726593 74.8476 1.19029 72.329 1.44377 71.3845C4.33363 60.6085 12.4089 52.5077 22.8344 49.2043C28.5171 47.4036 33.5295 47.5073 39.5034 47.3695C39.6078 64.1062 39.4995 99.9884 39.4995 99.9884C39.4995 99.9884 52.6286 100.376 57.5817 100.447C66.1496 100.57 89.9035 99.9884 89.9035 99.9884C95.5719 100.13 99.9049 99.2893 105.674 97.6685C117.298 94.4021 125.478 85.3568 128.487 73.5596C128.884 71.9981 128.129 66.4056 128.897 65.3078L128.977 136.815L129 149C109.098 148.735 89.1431 148.933 69.2503 148.835C59.6929 148.787 48.7806 149.143 39.4592 148.635C28.5534 148.041 17.2934 141.52 10.3282 133.073C0.104646 120.675 -0.10007 109.49 0.10372 94.1096C0.187905 87.7403 -0.0991488 81.9927 0.389396 75.4688Z" fill="url(#paint1_linear_nav)"/>
              <path d="M90.1296 99.9884C95.798 100.13 99.905 99.2894 105.675 97.6685C117.298 94.4021 125.479 85.3568 128.487 73.5596C128.885 71.9981 128.129 66.4057 128.897 65.3078L128.977 136.815L90.8269 136.792C83.7002 136.792 76.3394 136.871 69.2265 136.673C62.777 136.494 53.68 132.503 49.376 127.588C48.8898 127.214 48.4366 126.798 48.0208 126.345C40.2059 117.925 39.2406 110.932 39.4996 99.9884H90.1296Z" fill="url(#paint2_linear_nav)"/>
              <path d="M0.0319696 9.10879L38.2337 9.07326C44.818 9.06906 53.2788 8.84193 59.7435 9.20927C60.3682 9.34201 63.9255 9.99865 64.2089 10.101C71.2634 11.0895 78.8565 16.2669 83.0506 22.0333C88.9867 30.1958 90.0328 37.7054 89.9596 47.4901L81.969 47.4606C68.0271 47.6139 53.477 47.4541 39.5034 47.3695C33.5295 47.5074 28.5171 47.4036 22.8344 49.2044C12.4089 52.5077 4.33365 60.6085 1.44378 71.3845C1.19031 72.329 0.726609 74.8477 0.389412 75.4688C-0.219659 71.7621 0.0673993 57.7468 0.0687794 53.4106L0.0319696 9.10879Z" fill="url(#paint3_linear_nav)"/>
              <path d="M214.045 153.586H165.061V15.3532H214.416C228.332 15.3532 240.3 18.1364 250.319 23.7028C260.339 29.2074 268.039 37.124 273.42 47.4528C278.863 57.7197 281.584 70.0277 281.584 84.3766C281.584 98.7875 278.863 111.157 273.42 121.486C268.039 131.815 260.308 139.762 250.227 145.329C240.145 150.833 228.085 153.586 214.045 153.586ZM194.191 128.537H212.746C225.796 128.537 235.692 125.042 242.434 118.053C249.175 111.064 252.546 99.8389 252.546 84.3766C252.546 69.0381 249.175 57.8744 242.434 50.8854C235.692 43.8965 225.796 40.402 212.746 40.402H194.191V128.537ZM288.093 153.586V15.3532H317.224V72.4089H376.506V15.3532H405.73V153.586H376.506V96.4372H317.224V153.586H288.093ZM406.394 15.3532H439.236L470.686 74.9138H472.078L503.621 15.3532H536.37L485.901 104.787V153.586H456.863V104.787L406.394 15.3532ZM535.549 153.586V136.33L604.573 39.4743H535.364V15.3532H641.218V32.7018L572.195 129.465H641.404V153.586H535.549Z" fill="url(#paint4_linear_nav)"/>
              <defs>
                <linearGradient id="paint0_linear_nav" x1="73.8345" y1="90.1792" x2="109.927" y2="16.5116" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#404040"/>
                  <stop offset="1" stopColor="#AEAEAF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_nav" x1="82.7425" y1="66.8729" x2="45.7757" y2="152.91" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#404040"/>
                  <stop offset="1" stopColor="#AEAEAF"/>
                </linearGradient>
                <linearGradient id="paint2_linear_nav" x1="101.409" y1="57.3536" x2="75.6988" y2="148.249" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E8E8E8"/>
                  <stop offset="1" stopColor="#AEAEAF"/>
                </linearGradient>
                <linearGradient id="paint3_linear_nav" x1="44.9816" y1="9" x2="44.9816" y2="75.4688" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E8E8E8"/>
                  <stop offset="1" stopColor="#AEAEAF"/>
                </linearGradient>
                <linearGradient id="paint4_linear_nav" x1="559.12" y1="-78.4144" x2="559.12" y2="245.635" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4B4B4B"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
              </defs>
            </svg>
            <ArrowUpRight size={10} className="text-white" />
          </a>
          <div className="hidden md:flex gap-4 text-[10px] text-grey-700 font-mono">
            <span>NYC</span>
            <span>LDN</span>
            <span>LAS</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/50 backdrop-blur-sm'} py-5`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="text-lg md:text-xl font-display font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                RANK<span className="font-light text-grey-500">PRO</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.highlight
                      ? 'text-electric-blue hover:text-electric-blue/80'
                      : pathname === item.href
                        ? 'text-white'
                        : 'text-grey-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/client-access"
                className="px-5 py-2 rounded-sm border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                Client Access
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 py-8 px-6 flex flex-col space-y-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-display font-medium text-lg ${
                  item.highlight ? 'text-electric-blue' : 'text-grey-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/client-access"
              onClick={() => setIsOpen(false)}
              className="text-white border border-white/20 text-center py-3 rounded-lg font-medium text-sm"
            >
              Client Access
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
