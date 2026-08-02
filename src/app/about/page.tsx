import Image from "next/image"
import Link from "next/link"
import r8_tail from "@public/home/R8-tail.jpg"

export default function AboutPage() {
    return (
        <div>
            {/* about section */}

            <div className="font-poppins relative w-full flex flex-col ">

                < div className="fixed inset-0 -z-10" >
                    <Image
                        src={r8_tail}
                        alt="background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover "
                    />
                </div >
                <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-r from-black to-transparent" />


                <div className="md:m-10 md:p-10 md:max-w-[45%] flex flex-col text-white p-5 m-3">

                    <h1 className="md:text-7xl md:text-left text-5xl text-center font-bold border-b-3 p-5 pb-8">About us</h1>
                    <div className="md:text-center text-2xl p-5 text-center font-mono">
                        <p>Detailing Corp was started in 2022 during the lockdown by John Doe and James Adam <br/> — </p>
                        <p>We've got a a love for cars and an eye for perfection so if you want your car looking the best it has we'd love for you to contact us!</p>
                        <br/>
                        <p className="font-poppins font-semibold">Have a look at out services and products below:</p>
                    </div>
                    <div className="md:ml-0 mx-auto font-semibold grid md:grid-cols-3 grid-cols-2 gap-4 text-center">
                        <Link href="/services" className="mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>
                        <Link href="/products" className="mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View Products</Link>
                        <Link href="/services/#booking" className="md:col-auto col-span-2 w-full mx-auto p-5 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}