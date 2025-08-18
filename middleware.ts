import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/&") {
    return NextResponse.redirect(new URL("/", request.url), 301)
  }

  if (pathname === "/$") {
    return NextResponse.redirect(new URL("/", request.url), 301)
  }

  // Handle other numeric paths that should be blog posts
  const numericMatch = pathname.match(/^\/(\d+)$/)
  if (numericMatch) {
    const postId = numericMatch[1]
    return NextResponse.redirect(new URL(`/blog/${postId}`, request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
