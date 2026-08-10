import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Contact us to learn more about our professional car detailing and vehicle care services. Questions about high quality detailing",
};

export default function ContactLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}
