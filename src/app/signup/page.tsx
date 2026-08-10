// app/signup/page.tsx
"use client";

import { Suspense, useState } from 'react';
import { signUp } from '@/lib/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function SignUpForm() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const prefilledEmail = searchParams.get('email') ?? '';

    const [email, setEmail] = useState(prefilledEmail);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    if (!token) {
        return (
            <div className="min-h-dvh flex items-center justify-center bg-[#121212] p-5">
                <p className="text-white">This sign-up link is invalid or missing. Please request an invitation.</p>
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data, error } = await signUp.email({
                email,
                password,
                name,
                token,
                callbackURL: "/signin"
            } as any);

            if (error) {
                setError(error.message ?? 'An error occurred during sign up');
            } else {
                router.push('/verify-email-sent');
            }
        } catch (err) {
            console.error(err)
            setError('An error occurred during sign up');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                            sign in to your account
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Full name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? 'Creating account...' : 'Sign up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function SignUpPage() {
    return (
        <Suspense fallback={<div className="min-h-dvh bg-gray-50" />}>
            <SignUpForm />
        </Suspense>
    )
}