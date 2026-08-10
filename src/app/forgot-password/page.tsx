"use client";

import { useState } from "react";
import { authClient } from "@/lib/client";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const { error } = await authClient.requestPasswordReset({
            email,
            redirectTo: '/reset-password',
        });

        setLoading(false);

        if (error) {
            setMessage("Something went wrong. Please try again.");
            return;
        }

        setMessage(
            "If an account exists for that email, a reset link has been sent."
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send reset link"}
                </button>

                {message && <p>{message}</p>}
            </form>
        </div>
    );
}