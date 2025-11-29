// TEMPORARILY DISABLED - next-auth not compatible with Next.js 16
// Uncomment when next-auth adds support for Next.js 16

// 'use client'

// import { useState } from 'react'
// import { signIn } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { Lock, Mail, ArrowRight, AlertCircle, ArrowLeft } from 'lucide-react'

// export default function ClientAccessPage() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     const result = await signIn('credentials', {
//       email,
//       password,
//       redirect: false,
//     })

//     if (result?.error) {
//       setError('Invalid credentials. Please try again.')
//       setLoading(false)
//     } else {
//       router.push('/client-access/dashboard')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-6">
//       <div className="w-full max-w-md">
//         {/* Back Link */}
//         <Link href="/" className="inline-flex items-center gap-2 text-grey-500 hover:text-white transition-colors mb-8">
//           <ArrowLeft size={16} />
//           <span className="text-sm">Back to Home</span>
//         </Link>

//         {/* Logo */}
//         <div className="text-center mb-12">
//           <h1 className="text-2xl font-display font-bold text-white">
//             RANK<span className="text-grey-500 font-light">PRO</span>
//           </h1>
//           <p className="text-grey-500 text-sm mt-2">Client Portal Access</p>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="bg-surface border border-white/5 rounded-2xl p-8 space-y-6">
//           {error && (
//             <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
//               <AlertCircle size={16} />
//               {error}
//             </div>
//           )}

//           <div>
//             <label className="block text-xs font-bold text-grey-500 uppercase tracking-wider mb-2">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-500" size={18} />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-black border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
//                 placeholder="client@company.com"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-bold text-grey-500 uppercase tracking-wider mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-500" size={18} />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-black border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-electric-blue text-white font-bold py-4 rounded-lg hover:bg-electric-blue/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
//           >
//             {loading ? 'Authenticating...' : 'Access Portal'}
//             {!loading && <ArrowRight size={18} />}
//           </button>
//         </form>

//         <p className="text-center text-grey-500 text-sm mt-8">
//           Need access? <Link href="/contact" className="text-electric-blue hover:underline">Contact us</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'

export default function ClientAccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-grey-500 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Home</span>
        </Link>

        <Construction className="w-16 h-16 text-electric-blue mx-auto mb-6" />
        <h1 className="text-2xl font-display font-bold text-white mb-4">
          Client Portal Coming Soon
        </h1>
        <p className="text-grey-500 mb-8">
          The client portal is currently under maintenance. Please check back later.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue text-white font-bold rounded-lg hover:bg-electric-blue/80 transition-colors">
          Contact Support
        </Link>
      </div>
    </div>
  )
}
