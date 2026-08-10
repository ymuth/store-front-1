import { APIError, betterAuth, User } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma, } from "@prisma-db";
import { sendEmail } from "@/utils/sendEmail";

type emailProps = { email: string, token: string, user: User }
const DAY = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;
const MINUTE = 60 * 1000;

export const auth = betterAuth({

    // Using the Prisma adapter
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite", etc.
    }),


    // authentication configuration
    emailAndPassword: {
        enabled: true,

        passwordRules: {
            minLength: 8,
            requireUppercase: true,
            requireLowercase: true,
            requireNumbers: true,
            requireSpecialChars: true,
        },

        errorMessages: {
            invalidCredentials: "Invalid email or password",
            emailAlreadyInUse: "This email is already in use",
            passwordTooWeak: "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters",
        },

        requireEmailVerification: true,

    },

    emailVerification: {
        sendOnSignUp: true,

        sendVerificationEmail: async ({ user, url, token }) => {
            console.log("sending verification email to:", user.email);

            await sendEmail({
                to: user.email,
                subject: "Verify your email address",
                html: `
                <h1>Welcome to Detailing Corp, ${user.name}!</h1>
                <p>Click the link below to verify your email:</p>
                <a href="${url}">Verify Email</a>
            `,
            });

        },

        expiresIn: 30 * MINUTE,
    },



    databaseHooks: {
        user: {
            create: {
                before: async (user, ctx) => {
                    const token = ctx?.body?.token

                    if (!token) {
                        throw new APIError("BAD_REQUEST", {
                            message: "An invitation is required to sign up.",
                        })
                    }

                    const invitation = await prisma.invitation.findUnique({
                        where: { token },
                    })

                    if (
                        !invitation ||
                        invitation.usedAt ||
                        invitation.expiresAt < new Date() ||
                        invitation.email.toLowerCase() !== user.email.toLowerCase()
                    ) {
                        throw new APIError("BAD_REQUEST", {
                            message: "This invitation is invalid or has expired.",
                        })
                    }

                    return { data: user } // allow creation to proceed
                },
                after: async (user) => {
                    // mark the invitation as used now that the account genuinely exists
                    await prisma.invitation.updateMany({
                        where: { email: user.email, usedAt: null },
                        data: { usedAt: new Date() },
                    })
                },
            },
        },
    },


    // session configuration
    session: {

        strategy: "database",
        maxAge: 14 * DAY,
        updateAge: DAY,

    },

    rateLimit: {
        enabled: true, // disabled by default in dev — you must explicitly enable it to test
        window: 60,    // seconds
        max: 100,      // default max requests per window, applies broadly
        customRules: {
            "/sign-in/email": { window: 60, max: 5 },  // stricter for login specifically
            "/sign-up/email": { window: 3600, max: 3 }, // stricter for signup, prevents bot spam
        },
    },

    plugins: [nextCookies()], // must be last in the plugins array


});


