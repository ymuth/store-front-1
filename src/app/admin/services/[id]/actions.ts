"use server";

import { prisma } from "@prisma-db";
import { revalidatePath } from "next/cache";

export async function updateService(formData: FormData) {

    const id = Number(formData.get("id"));

    await prisma.services.update({
        where: {
            id,
        },
        data: {
            name: String(formData.get("name")),
            description: String(formData.get("description")),
            process: String(formData.get("process")),
            price: (formData.get("price") === "" ? null : Number(formData.get("price"))),
            image: String(formData.get("image")),
            category: String(formData.get("category")),
        },
    });

    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${id}`);
}