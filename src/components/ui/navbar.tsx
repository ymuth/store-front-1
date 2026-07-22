"use client"
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const NAV_LINKS = [
        { label: "Services", href: "/services" },
        { label: "Products", href: "/products" },
        { label: "About", href: "/about" },
        { label: "Contact Us", href: "/contact" },
    ]

    return (
        <nav className="relative z-20 text-black">

            {/* Desktop */}
            <div className="flex w-full relative z-20 items-center py-2 px-4 pr-6 border-b-2 bg-white  border-b-black ">

                <div className="font-extrabold text-xl">
                    <Link className="uppercase" href={"/"} onClick={() => setOpen(false)}>Detailing Corp</Link>
                </div>


                <div className="items-center gap-4 ml-auto hidden md:flex">

                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-semibold hover:text-amber-400"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>

                <button className="text-xl p-2 md:hidden flex ml-auto" onClick={() => setOpen(!open)}>
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile */}
            <div className="md:hidden">

                {open && (

                    <div className="w-full bg-white  border-t transition-all">
                        <div className="flex flex-col p-4 gap-4 mr-auto">

                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-semibold hover:text-amber-400 focus:text-amber-400 mr-auto"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                        </div>
                    </div>

                )}

            </div>


        </nav>
    )
}