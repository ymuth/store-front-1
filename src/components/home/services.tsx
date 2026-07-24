import Image from "next/image"
import Link from "next/link"
import bodyPolish from "@/../public/home/body-polish.jpg"
import ceramicCoating from "@/../public/home/ceramic-coating.jpeg"
import interiorCleaning from "@/../public/home/interior-cleaning.jpeg"
import BD2 from "@/../public/home/merc.jpg"
import FadeIn from "../ui/fadeIn"



export default function ServicesSection() {

    return (

        <div>
            {/* Services section */}
            <div className="font-poppins relative w-full max-w-screen  flex flex-col p-10 md:p-20 bg-black/50 text-white">

                {/* Backdrop */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={BD2}
                        alt="background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-fill "
                    />
                </div>


                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-10 ">What we offer</h1>
                <div className=" flex flex-col mx-auto max-w-7xl w-full my-auto">

                    <div className="grid flex-1 md:grid-cols-3 gap-10 w-full items-center text-center">

                        {/* Body Polishing */}
                        <div>
                            <FadeIn>

                                <div className="overflow-hidden relative aspect-square ">
                                    <Image
                                        src={bodyPolish}
                                        alt="Body Polishing"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                        priority
                                        placeholder="blur"
                                        className=" object-cover object-left"
                                    />
                                </div>
                                <div className="bg-[#5b5a5a] size-full p-3 text-center flex flex-col justify-center-safe aspect-square overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50">
                                    <h3 className="text-xl font-bold p-3">Body Polishing</h3>
                                    <p className="text-lg">Car body polishing restores the shine and luster of your car, making it look like new.</p>
                                </div>

                            </FadeIn>
                        </div>


                        {/* Interior Cleaning */}
                        <div className="flex flex-col md:flex-col-reverse">
                            <FadeIn delay={0.2}>

                                <div className="aspect-square relative overflow-hidden">
                                    <Image
                                        src={interiorCleaning}
                                        alt="interior detailing w-full"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                        fill
                                        priority
                                        placeholder="blur"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="bg-[#5b5a5a] size-full p-3 text-center flex flex-col justify-center-safe  aspect-square overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50">
                                    <h3 className="text-xl font-bold p-3">Interior Cleaning</h3>
                                    <p className="text-lg">Our interior cleaning transforms the interior of your vehicle and eliminates dirt and bad odors. Includes Upholstery and carpet shampoo to bring your seats and carpets back to life</p>
                                </div>

                            </FadeIn>
                        </div>


                        {/* Cermaic Coating */}
                        <div>
                            <FadeIn delay={0.4}>

                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={ceramicCoating}
                                        alt="Ceramic Coating"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                        fill
                                        priority
                                        placeholder="blur"
                                        className=" object-cover"
                                    />
                                </div>
                                <div className="bg-[#5b5a5a] size-full p-3 text-center aspect-square flex flex-col justify-center-safe overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50 ">
                                    <h3 className="text-xl font-bold p-3">Ceramic coating</h3>
                                    <p className="text-lg">Our Ceramic coating protects your orignal paint for 3-5 years</p>
                                </div>

                            </FadeIn>
                        </div>




                    </div>

                    <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View All Services</Link>


                </div>

            </div>
        </div>
    )
}