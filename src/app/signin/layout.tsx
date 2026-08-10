import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Sign In",
        template: "%s | Detailing Corp",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function SignInLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}