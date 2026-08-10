import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Detailing Corp",
    template: "%s | Detailing Corp",
  },

  description:
    "Professional car detailing services, products and vehicle care.",

  openGraph: {
    title: "Detailing Corp",
    description:
      "Professional car detailing services, products and vehicle care.",
    url: "https://store-front-1.vercel.app",
    siteName: "Detailing Corp",
    images: [
      {
        url: "/home/twin-white.jpg",
        width: 1200,
        height: 630,
        alt: "Detailing Corp",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behaviour="smooth"
      className={` ${poppins.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-thin scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
