"use client"

import { useEffect, useState, } from "react";
import { submitTestimonial } from "@/app/actions/testimonials"
import { siteConfig } from "@/lib/siteConfig";


export default function ReviewPopup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        rating: "",
        review: "",
    })
    const [formOpened, setFormOpened] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState(0);
    const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")
    const [error, setError] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        if (!formOpened) return;

        const originalOverflow = document.body.style.overflow;
        const originalHeight = document.body.style.height;
        const originalPosition = document.body.style.position;
        const originalTop = document.body.style.top;
        const originalLeft = document.body.style.left;
        const originalRight = document.body.style.right;

        document.body.style.overflow = "hidden";
        document.body.style.height = "100dvh";
        document.body.style.position = "fixed";
        document.body.style.top = "0";
        document.body.style.left = "0";
        document.body.style.right = "0";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.height = originalHeight;
            document.body.style.position = originalPosition;
            document.body.style.top = originalTop;
            document.body.style.left = originalLeft;
            document.body.style.right = originalRight;
        };
    }, [formOpened]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError("")

        if (rating === 0) {
            setError("Please select a star rating.")
            return
        }

        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const result = await submitTestimonial({ ...form, rating })
        if (result.success) {
            setSubmittedRating(rating)
            setStatus("done")
        } else {
            setError(result.error ?? "Something went wrong.")
            setStatus("idle")
        }




    }

    return (
        <div>

            <button onClick={() => setFormOpened(true)} className="cursor-pointer mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Leave a Review</button>

            {formOpened && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 overflow-y-auto overscroll-none">
                    <div className="relative w-full max-w-5xl max-h-[90dvh] overflow-y-auto overscroll-contain scrollbar-thin p-5 md:px-10 rounded-2xl border border-gray-600 shadow-xl shadow-black bg-linear-to-br from-black via-20% via-gray-950 to-gray-900" style={{ WebkitOverflowScrolling: "touch" }}>

                        {status === "done" ?
                            <div>

                                <button
                                    onClick={() => setFormOpened(false)}
                                    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white font-sans text-xl font-bold text-black cursor-pointer"
                                >
                                    ✕
                                </button>
                                <ThankYou rating={submittedRating} />

                            </div>
                            :

                            <div>
                                <button
                                    onClick={() => setFormOpened(false)}
                                    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white font-sans text-xl font-bold text-black cursor-pointer"
                                >
                                    ✕
                                </button>                               <h1 className="text-2xl"> Leave a review! </h1>
                                <h3 className="text-gray-400"> Thought we were great; or have some room for improvement?</h3>
                                <h3 className="text-gray-400"> We&apos;d love to hear back from you!</h3>

                                <form onSubmit={handleSubmit}>
                                    {/* <form  className="mx-auto w-full max-w-5xl bg-[#191919]  border border-gray-600 shadow-xl"> */}

                                    <div className="grid md:grid-cols-3 gap-6 min-w-0 mt-3">

                                        {/* Name */}
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="text-white mb-2">Name*</label>
                                            <input
                                                id="name"
                                                name="name"
                                                autoComplete="name"
                                                required
                                                type="text"
                                                placeholder="e.g John Smith..."
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                value={form.name}
                                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-[16px] text-white outline-none focus:border-[#b79c5a]"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-white mb-2">Email*</label>
                                            <input
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                required
                                                type="email"
                                                placeholder="example@email.com"
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                value={form.email}
                                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-[16px] text-white outline-none focus:border-[#b79c5a]"
                                            />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex flex-col">
                                            <label htmlFor="rating" className="text-white mb-2">Rating*</label>
                                            <div className="flex gap-1 text-5xl justify-center w-full">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setRating(star)}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        className="focus:outline-none cursor-pointer"
                                                    >
                                                        {(hoverRating || rating) >= star ? "★" : "☆"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                    </div>


                                    {/* Notes */}
                                    <div className="flex flex-col mt-3">
                                        <label htmlFor="notes" className="text-white mb-2">
                                            Review*
                                        </label>

                                        <textarea
                                            id="notes"
                                            name="vehicle_notes"
                                            autoComplete="off"
                                            rows={6}
                                            data-bwignore="true"
                                            placeholder="How'd your experience with us go; what went well or could be improved upon?"
                                            onChange={(e) => setForm({ ...form, review: e.target.value })}
                                            value={form.review}
                                            className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-[16px] text-white outline-none focus:border-[#b79c5a] resize-none"
                                        />
                                    </div>


                                    <div className="flex md:flex-row flex-col gap-6 pt-10 justify-between ">
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className=" p-5 text-white cursor-pointer font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity"
                                        >
                                            {status === "submitting" ? "Submitting..." : "Submit Review"}
                                        </button>

                                        <div className=" text-gray-500 my-auto">
                                            <p>We&apos;d love to hear from you, feel free to leave us a message!</p>
                                        </div>
                                    </div>


                                    {error && (
                                        <div className="mt-5 rounded-lg bg-red-600/20 border border-red-500 p-4 text-red-300">
                                            {error}
                                        </div>
                                    )}

                                </form>
                            </div>

                        }

                    </div>
                </div>
            )}
        </div>



    )
}


function ThankYou({ rating, }: { rating: number }) {
    const isPositive = rating >= 4

    return (

        <div className="text-center text-white flex flex-col gap-4 py-6">
            {isPositive ? (
                <>
                    <h2 className="text-2xl font-bold">Thank you! 🎉</h2>
                    <p>We&apos;re so glad you had a great experience with us.</p>
                    <p>If you have a moment, it&apos;d really help us out if you left a Google review too!</p>
                    <a
                        href={`${siteConfig.googleReviewLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto mt-2 p-4 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity"
                    >
                        Leave a Google Review
                    </a>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold">We&apos;re sorry to hear that</h2>
                    <p>Thank you for your honesty — it genuinely helps us improve.</p>
                    <p>We&apos;ve noted your feedback and someone from our team will look into it.</p>
                </>
            )}
        </div>
    )
}