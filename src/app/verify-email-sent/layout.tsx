import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Verify Email",
        template: "%s | Detailing Corp",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}