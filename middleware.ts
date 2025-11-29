import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnDashboard = req.nextUrl.pathname.startsWith('/client-access/dashboard')

  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL('/client-access', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/client-access/dashboard/:path*'],
}
