import hero from "@public/home/body-polish.jpg"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {

    return (
        <div>
            {/* Welcome section */}
            < div className="min-h-dvh flex " >

                {/* Background + fade */}
                < div className="fixed inset-0 -z-10" >
                    <Image
                        src={hero}
                        alt="background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover "
                    />
                </div >
                <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-r from-black to-transparent" />


                {/* Slogan + services link */}
                <div className="md:m-10 md:p-10 md:max-w-[45%] flex flex-col text-white p-5 m-3">

                    <h1 className="md:text-7xl md:text-left text-5xl text-center font-bold border-b-3 p-5 pb-8">Ensuring Excellence in Every Detail</h1>
                    <p className="md:text-left text-2xl p-5 text-center">Expert Detailing and Aftercare for Premium Vehicles</p>
                    <div className="md:ml-0 mt-10 mx-auto font-semibold flex gap-4 text-center">
                        <Link href="#services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>
                        <Link href="/services/#booking" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
                    </div>

                </div>

                {/* scroll wheel (desktop) */}
                <div className="hidden md:flex m-auto flex-col items-center gap-2 text-white animate-bounce">
                    <span className="text-sm tracking-widest uppercase ">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                        <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                </div>



            </div >

        </div>
    )
}