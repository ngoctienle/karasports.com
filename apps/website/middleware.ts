import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { authMiddleware } from '@clerk/nextjs'
import { appRouters } from './common/configs'

const locales = ['en', 'vi']
const publicRoutes = ['/', '/:locale']

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: false
})

export default authMiddleware({
  publicRoutes,
  beforeAuth: (req) => {
    return intlMiddleware(req)
  },
  afterAuth: (auth, req) => {
    if (auth.isPublicRoute) {
      // For public routes, we don't need to do anything
      return NextResponse.next()
    }

    const url = new URL(req.nextUrl.origin)

    if (!auth.userId) {
      // If the user tries to access a private route without authenticated, redirect to the login page
      url.pathname = appRouters.paths.en.auth.login
      return NextResponse.redirect(url)
    }
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
