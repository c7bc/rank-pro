import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-display font-bold text-electric-blue mb-4">404</h1>
        <h2 className="text-2xl font-display font-medium text-white mb-4">Page Not Found</h2>
        <p className="text-grey-500 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-sm hover:bg-grey-100 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
