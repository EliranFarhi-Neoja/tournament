import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const managerProtectedRoutes = [
    '/managers/menu',
    '/managers/leaderboard',
    '/managers/markteams',
    '/managers/monitorteams',
    '/managers/operatorcontrol',
    '/managers/registeredteams',
    '/managers/submitresult',
    '/managers/topteams'
  ];

  const operatorProtectedRoutes = [
    '/operators/allteams',
    '/operators/playerturn',
    '/operators/selectedteam'
  ];

  if (managerProtectedRoutes.includes(request.nextUrl.pathname)) {
    const managerToken = request.cookies.get('managerToken')?.value

    if (!managerToken) {
      return NextResponse.redirect(new URL('/managers/start', request.url))
    }
  }

  if (operatorProtectedRoutes.includes(request.nextUrl.pathname)) {
    const operatorToken = request.cookies.get('operatorToken')?.value

    if (!operatorToken) {
      return NextResponse.redirect(new URL('/operators/start', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/managers/menu',
    '/managers/leaderboard',
    '/managers/markteams',
    '/managers/monitorteams',
    '/managers/operatorcontrol',
    '/managers/registeredteams',
    '/managers/submitresult',
    '/managers/topteams',
    '/managers/:path*',
    '/operators/allteams',
    '/operators/playerturn',
    '/operators/selectedteam',
    '/operators/:path*'
  ],
}