import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "@/lib/siteConfig";



export default function ContactPage() {


    return (
        <div className="md:mt-6 mt-10 flex flex-col max-w-7xl md:mx-auto">
            <div className="bg-linear-to-br from-purple-950  to-gray-900 min-h-dvh fixed -z-10 inset-0"></div>

            <div className="text-center p-3 flex flex-col">
                <h1 className="text-3xl font-bold m-5 border-b-2 w-fit mx-auto">Get in Touch</h1>
                <h3 className="text-xl">Have a question, feedback, or want a quote?</h3>
                <p className=" italic ">We're happy to help!</p>
            </div>

            <div className="grid my-5 md:grid-cols-2 md:grid-rows-2 auto-cols-auto text-lg md:mx-auto md:w-[65%] gap-3 mx-5 p-5 bg-white text-black">
                <a href={`tel: ${siteConfig.businessPhone}`}><p ><FaPhoneSquareAlt className="inline my-auto mr-1" />Phone: {siteConfig.businessPhone}</p></a>
                <a href={`mailto:${siteConfig.businessEmail}`}><p><MdEmail className="inline my-auto mr-1" />Email: {siteConfig.businessEmail}</p></a>
                <a href={`${siteConfig.socials.instagram}`}><p><FaInstagramSquare className="inline my-auto mr-1" />Instagram: {siteConfig.socials.instagram_at}</p></a>
                <a href={`${siteConfig.socials.facebook}`}><p><FaFacebookSquare className="inline my-auto mr-1" />Facebook: {siteConfig.socials.facebook_at}</p></a>
            </div>

            <div className="mx-auto text-center my-5 flex flex-col">
                <h3 className="text-xl">Ready to Book?</h3>
                <p>Request a booking online in just a minute.</p>
                <Link href="/services/#booking" className="mt-3 mx-auto p-5 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:mx-[10%] my-5">
                <div className="m-5 text-xl">
                    <h1 className="text-2xl font-semibold ">Service Area:</h1>
                    <ul className="list-inside list-disc ml-1">
                        <li>Sheffield</li>
                        <li>Rotherham</li>
                        <li>Chesterfield</li>
                        <li>Barnsley</li>
                    </ul>
                </div>

                <div className="m-5 text-xl">
                    <h1 className="text-2xl font-semibold ">Opening Hours:</h1>
                    <ul className="list-inside mx-5 gap-1 flex flex-col">
                        <li className="flex flex-row justify-between">
                            <p>Monday</p>
                            <p className="text-right">09:00-18:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Tuesday</p>
                            <p className="text-right">09:00-18:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Wednesday</p>
                            <p className="text-right ml-5">09:00-18:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Thursday</p>
                            <p className="text-right">09:00-18:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Friday</p>
                            <p className="text-right">09:00-18:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Saturday</p>
                            <p className="text-right">10:00-14:00</p>
                        </li>
                        <li className="flex flex-row justify-between">
                            <p>Sunday</p>
                            <p className="text-right">Closed</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}