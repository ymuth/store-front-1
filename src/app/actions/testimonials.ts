'use server'

import { prisma } from "@prisma-db"
import { z } from 'zod'

const testimonialSchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email(),
    rating: z.number().int().min(1).max(5),
    review: z.string().trim().min(1).max(1000),
})

export async function submitTestimonial(formData: {
    name: string
    email: string
    rating: number
    review: string
}) {
    const parsed = testimonialSchema.safeParse(formData)

    if (!parsed.success) {
        return { success: false, error: "Please check your details and try again." }
    }

    try {
        await prisma.testimonials.create({
            data: parsed.data,
        })
        return { success: true, rating: parsed.data.rating }
    } catch (err) {
        console.error("Failed to save testimonial:", err)
        return { success: false, error: "Something went wrong. Please try again later." }
    }
}