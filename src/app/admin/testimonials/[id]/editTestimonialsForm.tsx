
"use client";

import { updateTestimonial } from "./actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Testimonial = {
    id: number;
    name: string;
    email: string;
    review: string;
    rating: number;
    featured: boolean;
    createdAt: string;
};

type Props = {
    testimonial: Testimonial;
    className?: string;
};

export default function EditTestimonialForm({
    testimonial,
    className,
}: Props) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [name, setName] = useState(testimonial.name);
    const [email, setEmail] = useState(testimonial.email);
    const [review, setReview] = useState(testimonial.review);
    const [rating, setRating] = useState(testimonial.rating.toString());
    const [featured, setFeatured] = useState(testimonial.featured);

    // Update the form if the testimonial prop changes
    useEffect(() => {
        setName(testimonial.name);
        setEmail(testimonial.email);
        setReview(testimonial.review);
        setRating(testimonial.rating.toString());
        setFeatured(testimonial.featured);
    }, [testimonial]);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            await updateTestimonial(formData);

            setMessage("Testimonial updated successfully");

            // Re-fetch the server component data
            router.refresh();
        } catch (error) {
            console.error("Failed to update testimonial:", error);
            setMessage("Failed to update testimonial");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={className ?? ""}>
            <form
                onSubmit={handleSubmit}
                className="text-black flex flex-col gap-5 max-w-2xl mx-auto p-5 rounded-2xl bg-white"
            >
                {/* ID */}
                <input
                    type="hidden"
                    name="id"
                    value={testimonial.id}
                />

                {/* Name */}
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border p-2"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border p-2"
                    />
                </div>

                {/* Review */}
                <div>
                    <label htmlFor="review">Review</label>

                    <textarea
                        id="review"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                        rows={5}
                        className="w-full border p-2"
                    />
                </div>

                {/* Rating */}
                <div>
                    <label htmlFor="rating">Rating</label>

                    <input
                        id="rating"
                        name="rating"
                        type="number"
                        min={1}
                        max={5}
                        step={1}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        className="w-full border p-2"
                    />
                </div>

                {/* Featured */}
                <div>
                    <label htmlFor="featured">Featured</label>

                    <select
                        id="featured"
                        name="featured"
                        value={featured ? "true" : "false"}
                        onChange={(e) =>
                            setFeatured(e.target.value === "true")
                        }
                        className="w-full border p-2"
                    >
                        <option value="true">Featured</option>
                        <option value="false">Not Featured</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white p-3 rounded disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Changes"}
                </button>

                {/* Message */}
                {message && (
                    <p className="mt-5 rounded-lg bg-green-600/20 border border-green-500 p-4 text-green-700">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}

