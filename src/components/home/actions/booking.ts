"use server";

import { prisma } from "@prisma-db";

export async function createBooking(formData: FormData) {
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const vehicle = String(formData.get("vehicle") ?? "");
    const serviceValue = String(formData.get("service") ?? "");
    const otherService = String(formData.get("otherService") ?? "");
    const preferredDate = String(formData.get("date") ?? "");
    const notes = String(formData.get("vehicle_notes") ?? "");

    const isOther = serviceValue === "other";

    await prisma.bookings.create({
        data: {
            name,
            email,
            phone: phone || null,
            vehicle: vehicle,

            serviceId: isOther ? null : Number(serviceValue),
            otherService: isOther ? otherService : null,

            preferredDate: preferredDate
                ? new Date(preferredDate)
                : null,

            notes,
        },
    });
    
}