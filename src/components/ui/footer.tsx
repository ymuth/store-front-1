import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {




    return (
        <footer className="bg-white relative z-10 flex-col align-middle py-2 px-4 border-t-2 mt-auto text-black">

            <div className="flex flex-row justify-between w-full mx-auto md:w-[50%] m-3">

                <div className="flex flex-col text-gray-400">
                    <h1 className="text-black font-semibold">Routes</h1>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className="flex flex-col text-gray-400">
                    <h1 className="text-black font-semibold">Resources</h1>
                    <Link href="/services">Services</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/#testimonials">Testimonials</Link>
                    <Link href="/services/#booking">Book with us</Link>
                </div>

                <div className="flex flex-col justify-between gap-3 text-center text-3xl">
                    <a href="https://facebooks.com"><FaFacebookSquare /></a>
                    <a href="https://instagram.com"><FaInstagramSquare /></a>
                    <a href={`mailto:${process.env.BUSINESS_EMAIL}`}><MdEmail /></a>

                </div>
            </div>
            <h1 className="mx-auto text-center  m-3 font-light">© 2026 Detailing Corp. All rights reserved.</h1>


        </footer>
    )
}