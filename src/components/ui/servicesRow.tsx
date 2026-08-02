"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"

type Props = {
    src: string | null
    alt: string
    fallback: StaticImageData
    className?: string
}

export default function ServiceColumn({ src, alt, fallback, className }: Props) {
    const [failed, setFailed] = useState(false)
    const showFallback = !src || failed

    return (
        <Image
            src={showFallback ? fallback : src!}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            priority
            className={`${showFallback ? "object-fit" : "object-cover"} object-left`}
            onError={() => setFailed(true)}
        />
    )
}