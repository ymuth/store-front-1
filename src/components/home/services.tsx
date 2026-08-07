import { prisma } from "@prisma-db"
import Image from "next/image"
import Link from "next/link"
import BD2 from "@public/home/merc.jpg"
import FadeIn from "../ui/fadeIn"
import ServiceImage from "../ui/servicesImage"
import image404 from "@public/Image404.png"


export default async function ServicesSection() {
    const services = await prisma.services.findMany({
        orderBy: { id: 'asc' },
        take: 3,
    })

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
                        {services.map((service, index) => (
                            <div key={service.id}>

                                <FadeIn delay={index * 0.2} delayMobile={0}>
                                    <div className={index % 2 != 0 ? "flex flex-col md:flex-col-reverse" : ""}>

                                        <div className="overflow-hidden relative aspect-square">
                                            <ServiceImage
                                                image={service.image}
                                                name={service.name}
                                            />
                                        </div>
                                        <div className="bg-[#5b5a5a] size-full p-3 text-center flex flex-col justify-center-safe aspect-square overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50">
                                            <h3 className="text-xl font-bold p-3">{service.name}</h3>
                                            <p className="text-lg">{service.description}</p>
                                        </div>

                                    </div>
                                </FadeIn>
                            </div>
                        ))}





                    </div>

                    <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View All Services</Link>


                </div>

            </div>
        </div>
    )
}