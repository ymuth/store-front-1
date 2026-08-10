import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname;


    // redirect unauthenticated users
    const sessionCookie = getSessionCookie(req);
    if (!sessionCookie) {
        const signinUrl = new URL('/signin', req.url);
        signinUrl.searchParams.set('callbackUrl', path);
        return NextResponse.redirect(signinUrl);
    }


    // allow authenticated users
    return NextResponse.next();

}

export const config = {
    // Apply middleware to routes
    matcher: ['/admin/:path*'],
};