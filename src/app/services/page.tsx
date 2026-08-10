import { prisma } from '@prisma-db'
import Image from "next/image"
import BD2 from "@public/home/merc.jpg"
import BookingSection from "@/components/home/booking"
import ServiceImage from '@/components/ui/servicesImage'
import hero from '@public/home/twin-white.jpg'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
    const services = await prisma.services.findMany({
        orderBy: { id: 'asc' },
    })


    return (

        <div>

            < div className="min-h-dvh flex justify-center-safe flex-col" >

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
                <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-t from-black to-transparent" />


                {/* Slogan + services link */}
                <div className="md:m-10 md:p-10 my-auto flex flex-col text-white p-5 m-3">

                    <h1 className="md:text-5xl  text-2xl text-center font-bold border-b-3 p-5 pb-8">Ensuring Excellence in Every Detail</h1>
                    <p className=" text-xl p-5 text-center">View all our Services below, or skip straight to the booking page!</p>
                    <div className=" mx-auto font-semibold flex gap-4 text-center">
                        <Link href="#services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>
                        <Link href="#booking" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
                    </div>

                </div>
            </div>


            {/* Services section */}
            <div id="services" className="font-poppins relative w-full max-w-screen  flex flex-col p-10 md:p-20 bg-black/50 text-white">

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

                                <div className={`overflow-hidden relative col-span-1 min-h-75 ${index % 2 != 0 && "md:order-last"}`}>
                                    <ServiceImage
                                        image={service.image}
                                        name={service.name}
                                    />
                                </div>

                                <div className="bg-[#5b5a5a] md:text-left text-center col-span-3 min-w-full md:p-10 p-5  max-w-[50%] flex flex-col justify-center-safe  overflow-y-scroll scrollbar-none scrollbar-thumb-black scrollbar-track-gray-500/50">
                                    <h3 className="text-2xl font-bold italic text-shadow-lg md:text-right md:mb-auto mb-5">{service.name}</h3>
                                    <p className="pb-2">{service.description}</p>
                                    <p className="text-gray-300 mb-auto">{service.process}</p>
                                </div>

                            </div>
                        ))}
                    </div>



                </div>

            </div>

            <div id="booking"><BookingSection services={services}/></div>
        </div >
    )
}