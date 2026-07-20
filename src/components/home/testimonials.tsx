import Link from "next/link"

export default function TestimonialsSection() {

    return (

        <div>
            {/* Testimonial section */}
            <div className="font-poppins  w-full p-10  bg-[#191919] text-black  ">


                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-10 ">Testimonials</h1>

                <div className="max-w-7xl mx-auto bg-[#2f2e2e] grid md:grid-cols-3 grid-cols-1 p-5 gap-10">

                    <div className="text-center text-white p-3 flex flex-col gap-2 ">
                        <p >⭐⭐⭐⭐⭐</p>
                        <p >James R.</p>
                        <p className="md:text-left mt-3 font-semibold italic text-lg ">"Absolutely blown away with the results. My BMW hadn't looked this clean since I bought it. The paint had an incredible shine and the interior looked factory fresh. Highly recommend."</p>
                    </div>
                    <div className="text-center text-white p-3  flex flex-col gap-2 ">
                        <p >⭐⭐⭐⭐⭐</p>
                        <p >Oliver R.</p>
                        <p className="md:text-left mt-3 font-semibold italic text-lg ">"Professional from start to finish. They arrived on time, explained everything they were doing, and my car came back looking immaculate. I'll definitely be booking regular maintenance details."</p>
                    </div>
                    <div className="text-center text-white p-3 flex flex-col gap-2 ">
                        <p >⭐⭐⭐⭐⭐</p>
                        <p >Joseph M.</p>
                        <p className="md:text-left mt-3 font-semibold italic text-lg ">"I honestly didn't think the seats could be saved after years of family use, but they managed to remove stains I thought were permanent. Great attention to detail and fantastic customer service."</p>
                    </div>
                    <div className="text-center text-white p-3  flex flex-col gap-2 ">
                        <p >⭐⭐⭐⭐⭐</p>
                        <p >Ahmed A.</p>
                        <p className="md:text-left mt-3 font-semibold italic text-lg ">"Had my headlights restored and a full exterior polish. The difference is incredible—not only does the car look newer, but visibility at night has improved massively. Worth every penny."</p>
                    </div>
                    <div className="text-center text-white p-3  flex flex-col gap-2 ">
                        <p >⭐⭐⭐⭐⭐</p>
                        <p >Thomas K.</p>
                        <p className="md:text-left mt-3 font-semibold italic text-lg ">"Excellent value for money. Every corner of the car was spotless, from the wheels to the dashboard vents. It's clear they genuinely care about the quality of their work."</p>
                    </div>
                    <div className="text-center text-white p-5 bg-[#5b5a5a] flex flex-col gap-2 mx-auto justify-center-safe">
                        <h1 className="  text-lg">Help us improve</h1>
                        <p className="  text-lg">We'd love to know how your experience went!</p>
                        <Link href="/services" className=" mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Leave a Review</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}