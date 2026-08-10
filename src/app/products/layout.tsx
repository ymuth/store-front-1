import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore our professional car detailing and vehicle care products.",
};

export default function ProductsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}
