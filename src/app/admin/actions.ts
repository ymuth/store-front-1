// app/admin/actions.ts
"use server"

import { prisma } from "@prisma-db"
import { auth } from "@/lib/auth"
import { sendEmail } from "@/utils/sendEmail"
import crypto from "crypto"
import { headers } from "next/headers"

export async function inviteAdmin(email: string) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) throw new Error("Unauthorized")

  const token = crypto.randomBytes(32).toString("hex")

  await prisma.invitation.create({
    data: {
      email,
      token,
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours
    },
  })

  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/signup?token=${token}&email=${encodeURIComponent(email)}`

  await sendEmail({
    to: email,
    subject: "You've been invited to the admin dashboard",
    html: `
      <h1>You're invited</h1>
      <p>Click below to create your admin account. This link expires in 48 hours.</p>
      <a href="${inviteUrl}">Create your account</a>
    `,
  })
}