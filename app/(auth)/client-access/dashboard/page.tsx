// TEMPORARILY DISABLED - next-auth not compatible with Next.js 16
// Uncomment when next-auth adds support for Next.js 16

// import { auth } from '@/auth'
// import { redirect } from 'next/navigation'
// import Link from 'next/link'
// import { BarChart3, Star, TrendingUp, Settings, LogOut, Home } from 'lucide-react'

// export default async function DashboardPage() {
//   const session = await auth()

//   if (!session) {
//     redirect('/client-access')
//   }

//   const stats = [
//     { label: 'Total Reviews', value: '127', icon: Star, change: '+12 this month' },
//     { label: 'Average Rating', value: '4.8', icon: TrendingUp, change: '+0.2' },
//     { label: 'Profile Views', value: '3,847', icon: BarChart3, change: '+23%' },
//   ]

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Header */}
//       <header className="border-b border-white/5 bg-surface">
//         <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-8">
//             <Link href="/" className="text-xl font-display font-bold text-white">
//               RANK<span className="text-grey-500 font-light">PRO</span>
//             </Link>
//             <nav className="hidden md:flex items-center gap-6">
//               <Link href="/client-access/dashboard" className="text-sm text-white">Dashboard</Link>
//               <Link href="/client-access/dashboard" className="text-sm text-grey-500 hover:text-white transition-colors">Reviews</Link>
//               <Link href="/client-access/dashboard" className="text-sm text-grey-500 hover:text-white transition-colors">Analytics</Link>
//               <Link href="/client-access/dashboard" className="text-sm text-grey-500 hover:text-white transition-colors">Settings</Link>
//             </nav>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-grey-500">{session.user?.email}</span>
//             <form action={async () => {
//               'use server'
//               const { signOut } = await import('@/auth')
//               await signOut({ redirectTo: '/' })
//             }}>
//               <button type="submit" className="p-2 text-grey-500 hover:text-white transition-colors">
//                 <LogOut size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-[1400px] mx-auto px-6 py-12">
//         <div className="mb-8">
//           <h1 className="text-3xl font-display font-bold text-white mb-2">
//             Welcome back{session.user?.name ? `, ${session.user.name}` : ''}
//           </h1>
//           <p className="text-grey-500">Here's an overview of your Google Business Profile performance.</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {stats.map((stat, index) => (
//             <div key={index} className="p-6 bg-surface border border-white/5 rounded-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <stat.icon className="w-5 h-5 text-electric-blue" />
//                 <span className="text-xs text-green-500">{stat.change}</span>
//               </div>
//               <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
//               <div className="text-sm text-grey-500">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Placeholder Content */}
//         <div className="bg-surface border border-white/5 rounded-xl p-8 text-center">
//           <Settings className="w-12 h-12 text-grey-500 mx-auto mb-4" />
//           <h2 className="text-xl font-display font-medium text-white mb-2">Dashboard Under Construction</h2>
//           <p className="text-grey-500 mb-6">
//             Your full analytics dashboard is being configured. Contact your account manager for early access.
//           </p>
//           <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue text-white font-bold text-sm rounded-lg hover:bg-electric-blue/80 transition-colors">
//             Contact Support
//           </Link>
//         </div>
//       </main>
//     </div>
//   )
// }

import { redirect } from 'next/navigation'

export default function DashboardPage() {
  // Redirect to client-access page since auth is disabled
  redirect('/client-access')
}
