import { prisma } from "@prisma-db"
import ReviewPopup from "./reviewPopup"

export default async function TestimonialsSection() {
    const testimonials = await prisma.testimonials.findMany({
        where: {featured: true},
        orderBy: { id: 'asc' },
        take: 5,
    })

    return (

        <div>
            {/* Testimonial section */}
            <div className="font-poppins  w-full p-10  bg-[#191919] text-black  ">


                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-10 ">Testimonials</h1>

                <div className="max-w-7xl mx-auto bg-[#2f2e2e] grid md:grid-cols-3 grid-cols-1 p-5 gap-10">

                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="text-center text-white p-3 flex flex-col gap-2 ">
                            <p >{"⭐".repeat(testimonial.rating)}</p>
                            <p >{testimonial.name}</p>
                            <p className="md:text-left mt-3 font-semibold italic text-lg ">&quot;{testimonial.review}&quot;</p>
                        </div>
                    ))}
                    <div className="md:aspect-auto md:order-last order-first aspect-square text-center text-white p-5 bg-[#5b5a5a] flex flex-col gap-2 mx-auto justify-center-safe">
                        <h1 className="  text-lg">Help us improve</h1>
                        <p className="  text-lg">We&apos;d love to know how your experience went!</p>
                        <ReviewPopup/>
                    </div>

                </div>

            </div>
        </div>
    )
}