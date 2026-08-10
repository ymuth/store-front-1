import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Reset Password",
        template: "%s | Detailing Corp",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function ResetPasswordLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}