import Image from "next/image"
import Link from "next/link"
import aboutimg from "@/../public/home/mercedes-sw.jpg"
import FadeIn from "../ui/fadeIn"

export default function AboutSection() {
    return (
        <div>
            {/* about section */}

            <div className="font-poppins relative w-full flex flex-col p-10 bg-[#191919] ">

                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center  font-bold  w-fit pb-3 mb-5 md:mb-0">About Us</h1>

                <div className="grid grid-cols-1 grid-rows-3 w-fit min-h-fit max-w-7xl mx-auto md:grid-cols-10 md:grid-rows-3 my-auto py-5 md:mt-10">


                    <div className=" col-span-1 md:col-[1/7] md:row-[1/3] ">

                        <FadeIn x={-80} y={0}>

                            <div className="relative shadow-2xl aspect-square md:aspect-9/5">

                                <Image
                                    src={aboutimg}
                                    alt="interior detailing"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
                                    priority
                                    placeholder="blur"
                                    className="object-right  object-cover"
                                />

                            </div>
                        </FadeIn>

                    </div>

                    <div className="row-span-2 md:col-[4/-1] md:row-[2/-1]">

                        <FadeIn x={80} y={0}>
                            <div className=" relative z-10 md:shadow-[-20px_10px_40px_rgba(0,0,0,0.45)] md:text-left text-center text-white justify-center flex flex-col bg-[#5b5a5a] overflow-hidden px-5 py-10 md:p-15  ">

                                <h3 className="md:text-4xl text-3xl font-semibold border-b-2 pb-3">What we do</h3>
                                <p className="py-10 md:text-xl text-lg text-gray-300">We offer precise, high-quality car cleaning services, including interior and exterior cleaning, seat and carpet shampooing, headlight restoration, and body polishing. Entrust your vehicle to us for sparkling results.</p>
                                <Link href="/about" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Learn More</Link>

                            </div>
                        </FadeIn>

                    </div>

                </div>

            </div>
        </div>
    )
}