import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.get("auth_token"); // Example: Check for an auth cookie if a backend was available
  const url = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  // this checks if a route is protected
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // Redirect to login if the user is not authenticated
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"], // some example paths that could be protected
};
