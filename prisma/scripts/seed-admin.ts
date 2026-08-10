// seed-admin.ts
import { prisma } from "../db"
import crypto from "crypto"

async function main() {
  // Capture email from console argument: node seed-admin.ts user@example.com
  const email = process.argv[2]

  if (!email) {
    console.error("❌ Error: Please provide an email address.")
    process.exit(1)
  }

  const token = crypto.randomBytes(32).toString("hex")

  console.log(`⏳ Creating invitation for: ${email}...`)

  await prisma.invitation.create({
    data: {
      email,
      token,
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours
    },
  })

  // Generate the URL manually
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const inviteUrl = `${appUrl}/signup?token=${token}&email=${encodeURIComponent(email)}`

  console.log("\n✅ Invitation created successfully in the database!")
  console.log("\n👉 Use this exact link in your browser to sign up:")
  console.log(inviteUrl)
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
