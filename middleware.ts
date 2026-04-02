import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/AGM") {
    return NextResponse.redirect(new URL("/agm", request.url), 308);
  }
}

export const config = {
  matcher: "/AGM",
};
