// TEMPORARILY DISABLED - next-auth not compatible with Next.js 16
// Uncomment when next-auth adds support for Next.js 16

// import { auth } from '@/auth'
// import { NextResponse } from 'next/server'

// export default auth((req) => {
//   const isLoggedIn = !!req.auth
//   const isOnDashboard = req.nextUrl.pathname.startsWith('/client-access/dashboard')

//   if (isOnDashboard && !isLoggedIn) {
//     return NextResponse.redirect(new URL('/client-access', req.url))
//   }

//   return NextResponse.next()
// })

// export const config = {
//   matcher: ['/client-access/dashboard/:path*'],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
