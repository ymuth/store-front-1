import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/dashboard/", "/signin/", "/signup/", "/forgot-password/", "/reset-password/", "/verify-email/"],
    },
    sitemap: "https://store-front-1.vercel.app/sitemap.xml",
  };
}