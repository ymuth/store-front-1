import { prisma } from '@prisma-db'
import Image from "next/image"
import BD2 from "@/../public/home/merc.jpg"
import FadeIn from "@/components/ui/fadeIn"
import Image404 from "@/../public/Image404.png"
// import { services } from "@/data/services"
import BookingSection from "@/components/home/booking"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


export default async function ServicesPage() {
    const services = await prisma.services.findMany({
        orderBy: { id: 'asc' },
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


                    <div className="grid flex-1  gap-10 w-full items-center text-center">
                        {services.map((service, index) => (

                            <div key={service.id} className="grid md:grid-cols-4 grid-cols-1">

                                <div className={`overflow-hidden relative col-span-1 aspect-square ${index % 2 != 0 && "md:order-last"}`}>
                                    <Image
                                        src={service.image ?? Image404}
                                        alt={service.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                        priority
                                        className={` ${!service.image ? "object-fit" : "object-cover"} object-left `}
                                    />
                                </div>

                                <div className="bg-[#5b5a5a] text-left col-span-3 min-w-full md:p-10 p-3  max-w-[50%] flex flex-col justify-center-safe  overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50">
                                    <h3 className="text-2xl font-bold italic text-shadow-lg text-right mb-auto">{service.name}</h3>
                                    <p className="pb-2">{service.description}</p>
                                    <p className="text-gray-300 mb-auto">{service.process}</p>
                                </div>

                            </div>
                        ))}
                    </div>



                </div>

            </div>

            <div id="booking"><BookingSection /></div>
        </div >
    )
}