// app/verify-email-sent/page.tsx
import Link from "next/link"

export default function VerifyEmailSent() {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-[#121212] p-5">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-8 flex flex-col gap-4 text-center">
        <div className="text-4xl mb-2">📧</div>

        <h1 className="text-2xl font-bold text-gray-900">Check your email</h1>

        <p className="text-gray-600">
          We&apos;ve sent a verification link to your email address. Click the link to activate your account.
        </p>

        <p className="text-sm text-gray-400">
          Didn&apos;t get it? Check your spam folder, or try signing up again in a few minutes.
        </p>

        <Link
          href="/signin"
          className="mt-4 text-teal-600 hover:text-teal-700 font-medium text-sm"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  )
}