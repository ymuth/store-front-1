import Image from "next/image";
import Link from "next/link";
import bookingBD from "@/../public/home/twin-white.jpg"

export default function BookingSection() {

    return (

        <div>


            {/* Booking form */}

            <div className="font-poppins relative w-full flex flex-col bg-black/80 p-10 md:p-20">

                {/* Backdrop */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={bookingBD}
                        alt="background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover object-center "
                    />
                </div>

                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold w-fit pb-3 mb-10">
                    Secure a Booking Today
                </h1>

                <form className="mx-auto w-full max-w-5xl bg-[#191919] p-8 rounded-xl border border-gray-600 shadow-xl">

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="e.g John Smith..."
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="07..."
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                        {/* Vehicle */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Vehicle</label>
                            <input
                                type="text"
                                placeholder="e.g. BMW 3 Series 2014"
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                        {/* Service */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Service Required</label>

                            <select className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]">
                                <option>Exterior Detail</option>
                                <option>Interior Detail</option>
                                <option>Full Detail</option>
                                <option>Ceramic Coating</option>
                                <option>Headlight Restoration</option>
                                <option>Body Polish</option>
                                <option>Paint Restoration</option>
                            </select>
                        </div>

                        {/* Preferred Date */}
                        <div className="flex flex-col">
                            <label className="text-white mb-2">Preferred Date</label>
                            <input
                                type="date"
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                    </div>

                    {/* Notes */}
                    <div className="flex flex-col mt-6">
                        <label className="text-white mb-2">
                            Additional Information
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Tell us anything you'd like us to know about your vehicle..."
                            className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a] resize-none"
                        />
                    </div>

                    <div className="flex md:flex-row flex-col gap-6 pt-10 justify-between ">

                        <button
                            type="submit"
                            className=" p-5 text-white font-semibold bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity"
                        >
                            Request Booking
                        </button>
                        <div className=" text-gray-500 my-auto">
                            <p>*We'd love to hear from you, feel free to contact us for a quote!</p>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}