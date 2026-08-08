"use server";

import { prisma } from "@prisma-db";
import { revalidatePath } from "next/cache";

export async function updateProduct(formData: FormData) {

    const id = Number(formData.get("id"));
    const inStockValue = (formData.get("inStock") === 'true' ? true : false) ;

    await prisma.products.update({
        where: {
            id,
        },
        data: {
            name: String(formData.get("name")),
            description: String(formData.get("description")),
            price: Number(formData.get("price")),
            image: String(formData.get("image")),
            inStock: Boolean(inStockValue),
            category: String(formData.get("category")),
        },
    });

    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${id}`);
    
}
