"use client"
import Image from "next/image";
import bookingBD from "@/../public/home/twin-white.jpg"
import { useState } from "react";

export default function BookingSection() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        service: "Exterior Detail",
        date: "",
        message: ""
    })

    async function submit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            window.alert("booking request sent")
        } catch (error) {
            window.alert("Something went wrong")
        }
    }

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



                <form onSubmit={submit} className="mx-auto md:w-full max-w-5xl bg-[#191919] p-8 rounded-xl border border-gray-600 shadow-xl">

                    <div className="grid md:grid-cols-2 gap-6 overflow-x-clip">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-white mb-2">Name*</label>
                            <input
                                id="name"
                                name="name"
                                autoComplete="on"
                                required
                                type="text"
                                placeholder="e.g John Smith..."
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                value={form.name}
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Phone */}
                        <div className="flex flex-col">
                            <label htmlFor="phone number" className="text-white mb-2">Phone Number</label>
                            <input
                                id="phone number"
                                autoComplete="on"
                                type="tel"
                                placeholder="07..."
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                value={form.phone}
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white mb-2">Email*</label>
                            <input
                                id="email"
                                autoComplete="on"
                                required
                                type="email"
                                placeholder="example@email.com"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                value={form.email}
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Vehicle */}
                        <div className="flex flex-col">
                            <label htmlFor="vehicle" className="text-white mb-2">Vehicle*</label>
                            <input
                                id="vehicle"
                                required
                                type="text"
                                placeholder="e.g. BMW 3 Series 2014"
                                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                                value={form.vehicle}
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Service */}
                        <div className="flex flex-col">
                            <label htmlFor="service" className="text-white mb-2">Service Required*</label>

                            <select className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                                id="service"
                                value={form.service}
                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                required>

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
                            <label htmlFor="date" className="text-white mb-2">Preferred Date</label>
                            <input
                                id="date"
                                type="date"
                                onChange={(e) => setForm({ ...form, date: e.target.value })}
                                value={form.date}
                                className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>

                    </div>


                    {/* Notes */}
                    <div className="flex flex-col mt-6">
                        <label htmlFor="notes" className="text-white mb-2">
                            Additional Information
                        </label>

                        <textarea
                            id="notes"
                            rows={6}
                            placeholder="Tell us anything you'd like us to know about your vehicle..."
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            value={form.message}
                            className="rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a] resize-none"
                        />
                    </div>


                    <div className="flex md:flex-row flex-col gap-6 pt-10 justify-between ">
                        <button
                            type="submit"
                            className=" p-5 text-white font-semibold bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity"
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