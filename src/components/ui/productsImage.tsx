"use client"

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/types/products"
import image404 from "@public/Image404.png"

type ProductFields = Pick<Product, "image" | "name">

export default function ProductImage({ image, name }: ProductFields) {
    const [failed, setFailed] = useState(false)
    const showFallback = !image || failed

    return (
        <Image
            src={showFallback ? image404.src : image!}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            priority
            className={`${showFallback ? "object-fit" : "object-cover"} aspect-2/3`}
            onError={() => setFailed(true)}
        />
    )
}

