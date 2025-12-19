import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher([
  '/family(.*)',
])

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth()
  console.log('User ID:', userId)

  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn()
  }
})
