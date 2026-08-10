"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/client";

function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const token = searchParams.get("token") ?? undefined;
    const resetError = searchParams.get("error");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    if (resetError || !token) {
        return <p>This reset link is invalid or has expired.</p>;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        const { error } = await authClient.resetPassword({
            newPassword: password,
            token,
        });

        setLoading(false);

        if (error) {
            setError(error.message ?? "Unable to reset password.");
            return;
        }

        router.replace("/signin");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="New password"
                />

                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm new password"
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Resetting..." : "Reset password"}
                </button>

                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ResetPasswordForm />
        </Suspense>
    );
}