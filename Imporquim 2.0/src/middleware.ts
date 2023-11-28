import { NextResponse, NextRequest } from "next/server";
import path from "path";

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/_next/")) {
    if (!/\.(jpg|jpeg|png|gif|svg)$/i.test(request.url)) console.log(pathname);
  }
}
