import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Services",
        template: "%s | Detailing Corp",
    },
    description:
        "Professional car detailing services, products and vehicle care.",
};

export default function ServicesLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}