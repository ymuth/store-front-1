"use client";

import { Decimal } from "@prisma/client/runtime/index-browser";
import { updateService } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Service = {
    id: number;
    name: string;
    description: string;
    process: string;
    price: number | null;
    image: string | null;
    category: string | null;
    createdAt: Date;
};

type Props = {
    service: Service;
    className?: string;
};

export default function EditServiceForm({ service, className }: Props) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setMessage("");

        try {
            await updateService(formData);
            setMessage("Service updated successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            setMessage("Failed to update service");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className={className ?? ""}>

            <form
                action={handleSubmit}
                className="text-black flex flex-col gap-5 max-w-2xl mx-auto p-5 rounded-2xl bg-white"
            >

                <input
                    type="hidden"
                    name="id"
                    value={service.id}
                />

                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        defaultValue={service.name}
                        placeholder={service.name}
                        className="w-full border p-2"
                    />
                </div>


                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        defaultValue={service.description}
                        placeholder={service.description}
                        className="w-full border p-2 field-sizing-content "
                    />
                </div>


                <div>
                    <label>Process</label>
                    <textarea
                        name="process"
                        defaultValue={service.process}
                        placeholder={service.process}
                        className="w-full border p-2 field-sizing-content"
                    />
                </div>


                <div>
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        step="0.01"
                        defaultValue={service.price?.toString() ?? ""}
                        placeholder={service.price?.toString() ?? ""}
                        className="w-full border p-2"
                    />
                </div>


                <div>
                    <label>Image</label>
                    <input
                        name="image"
                        defaultValue={service.image ?? ""}
                        placeholder={service.image ?? ""}
                        className="w-full border p-2"
                    />
                </div>


                <div>
                    <label>Category</label>
                    <input
                        name="category"
                        defaultValue={service.category ?? ""}
                        placeholder={service.category ?? ""}
                        className="w-full border p-2"
                    />
                </div>


                <button
                    disabled={loading}
                    className="bg-black text-white p-3 rounded disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Changes"}
                </button>


                {message && (
                    <p className="mt-5 rounded-lg bg-green-600/20 border border-green-500 p-4 text-green-700">{message}</p>
                )}

            </form>

        </div>
    );
}