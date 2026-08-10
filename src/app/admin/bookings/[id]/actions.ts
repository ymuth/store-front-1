"use server";

import { prisma } from "@prisma-db";
import { revalidatePath } from "next/cache";

export async function updateBooking(formData: FormData) {
    const id = Number(formData.get("id"));

    await prisma.bookings.update({
        where: {
            id,
        },
        data: {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            vehicle: String(formData.get("vehicle") ?? ""),
            serviceId: formData.get("serviceId") ? Number(formData.get("serviceId")) : null,
            otherService: String(formData.get("otherService") ?? ""),
            preferredDate: formData.get("preferredDate") ? new Date(String(formData.get("preferredDate"))) : null,
            notes: String(formData.get("notes") ?? ""),
        },
    });

    revalidatePath("/admin/bookings");
    revalidatePath(`/admin/bookings/${id}`);
}
