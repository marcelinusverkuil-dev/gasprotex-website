import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/toegang')) {
    return NextResponse.next()
  }

  const password = process.env.PREVIEW_PASSWORD
  if (!password) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('gp_preview')
  if (cookie?.value === password) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/toegang'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)',
  ],
}
