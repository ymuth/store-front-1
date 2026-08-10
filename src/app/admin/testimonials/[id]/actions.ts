"use server";

import { prisma } from "@prisma-db";
import { revalidatePath } from "next/cache";

export async function updateTestimonial(formData: FormData) {
    const id = Number(formData.get("id"));

    const featuredValue =
        formData.get("featured") === "true";

    const ratingValue = Number(formData.get("rating"));

    if (!Number.isInteger(id)) {
        throw new Error("Invalid testimonial ID");
    }

    if (!Number.isInteger(ratingValue) || ratingValue < 1 || ratingValue > 5) {
        throw new Error("Rating must be between 1 and 5");
    }

    await prisma.testimonials.update({
        where: {
            id,
        },
        data: {
            name: String(formData.get("name")),
            email: String(formData.get("email")),
            review: String(formData.get("review")),
            rating: ratingValue,
            featured: featuredValue,
        },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath(`/admin/testimonials/${id}`);
    revalidatePath("/");
}