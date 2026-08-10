import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://store-front-1.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://store-front-1.vercel.app/services",
            lastModified: new Date(),
        },
        {
            url: "https://store-front-1.vercel.app/products",
            lastModified: new Date(),
        },
        {
            url: "https://store-front-1.vercel.app/about",
            lastModified: new Date(),
        },
        {
            url: "https://store-front-1.vercel.app/contact",
            lastModified: new Date(),
        },
    ];
}