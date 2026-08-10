// components/admin/inviteAdminForm.tsx
"use client"

import { useState } from "react"
import { inviteAdmin } from "@/app/admin/actions"

export default function InviteAdminForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        setError("")

        try {
            await inviteAdmin(email)
            setMessage(`Invitation sent to ${email}`)
            setEmail("")
        } catch (err) {
            console.error(err)
            setError("Failed to send invitation. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm bg-white p-5 rounded-xl text-black">
            <h2 className="text-lg font-bold">Invite a new admin</h2>

            <input
                type="email"
                required
                placeholder="colleague@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-black text-white p-2 rounded disabled:opacity-50"
            >
                {loading ? "Sending..." : "Send Invite"}
            </button>

            {message && <p className="text-green-600 text-sm">{message}</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
    )
}