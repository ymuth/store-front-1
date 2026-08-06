import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname;


    // const publicPaths = [
    //     '/',
    //     '/signin',
    //     'signup',
    //     'reset-password',
    //     '/verify-email',
    //     '/about',
    //     '/contact',
    //     '/services',
    //     '/products',
    // ];

    // const privatePaths = [
    //     '/admin',
    //     '/admin/*',
    // ];



    // allow public paths
    // if (publicPaths.includes(path) || path.startsWith('/api/auth')) {
    //     return NextResponse.next();
    // }

    // const session = await auth.api.getSession({
    //     headers: req.headers
    // });
    // if (!session) {
    //     const signinUrl = new URL('/signin', req.url);
    //     signinUrl.searchParams.set('callbackUrl', path);
    //     return NextResponse.redirect(signinUrl);
    // }


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
    matcher: ['/admin/:path*', '/dashboard'],
};