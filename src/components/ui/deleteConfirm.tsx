"use client";

import { useState } from "react";

type Props = {
    action: () => Promise<void>;
    title?: string;
    message: string;
    buttonText?: string;
    confirmText?: string;
    amber?: boolean;
};

export default function DeleteConfirm({
    action,
    title = "Are you sure?",
    message,
    buttonText = "Delete",
    confirmText = "Delete",
    amber = false,
}: Props) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);

        try {
            await action();
            setOpen(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`cursor-pointer rounded px-3 py-1 font-semibold text-white ${amber ? 'bg-amber-700 hover:bg-amber-800' : 'bg-red-700 hover:bg-red-800'}`}
            >
                {buttonText}
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

                    <div className="w-full max-w-md rounded-xl border border-red-900 bg-[#181818] p-6 shadow-2xl">

                        <h2 className="text-xl font-bold text-white">
                            {title}
                        </h2>

                        <p className="mt-3 text-gray-300">
                            {message}
                        </p>

                        <div className="mt-4 rounded-lg border border-red-900/60 bg-red-950/30 p-3 text-sm text-red-300">
                            This action is irreversible.
                        </div>

                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                disabled={loading}
                                className="cursor-pointer rounded-lg border border-gray-600 px-4 py-2 font-semibold text-gray-200 hover:bg-gray-800"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={loading}
                                className="cursor-pointer rounded-lg bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? "Deleting..." : confirmText}
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}