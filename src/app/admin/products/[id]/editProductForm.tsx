"use client";

import { updateProduct } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | null;
    inStock: boolean;
    category: string | null;
    createdAt: string;
};

type Props = {
    product: Product;
    className?: string;
};

export default function EditProductForm({ product, className }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price.toString());
    const [image, setImage] = useState(product.image ?? "");
    const [inStock, setInStock] = useState(product.inStock);
    const [category, setCategory] = useState(product.category ?? "");




    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const formData = new FormData(e.currentTarget);


        try {
            await updateProduct(formData);

            setMessage("Product updated successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            setMessage("Failed to update product");
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
                    value={product.id}
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
                        className="w-full border p-2"
                    />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description">Description</label>

                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-2 field-sizing-content"
                    />
                </div>

                {/* Price */}
                <div>
                    <label htmlFor="price">Price</label>

                    <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border p-2"
                    />
                </div>

                {/* Image */}
                <div>
                    <label htmlFor="image">Image</label>

                    <input
                        id="image"
                        name="image"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full border p-2"
                    />
                </div>

                {/* In Stock */}
                <div>
                    <label htmlFor="inStock">In Stock</label>

                    <select
                        id="inStock"
                        name="inStock"
                        value={inStock ? "true" : "false"}
                        onChange={(e) =>
                            setInStock(e.target.value === "true")
                        }
                        className="w-full border p-2 field-sizing-content"
                    >
                        <option value="true">In Stock</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category">Category</label>

                    <input
                        id="category"
                        name="category"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-2"
                    />
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