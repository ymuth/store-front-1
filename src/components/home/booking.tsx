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
        vehicle_notes: ""
    })
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // submit function and error handling
    async function submit(e: React.FormEvent) {
        e.preventDefault();

        setStatus("");
        setError("");


        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error?.message || "Something went wrong.");
            }

            setStatus("Booking request sent! We'll get back to you shortly.")
        } catch (error) {
            if (error instanceof Error) { setError(error.message) }
            else { setError("Something went wrong... Please try again later ") }
        }
    }

    return (

        <div>


            {/* Booking form */}

            <div className="font-poppins relative w-full flex flex-col bg-black/80 p-5 md:p-20">

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



                <form onSubmit={submit} className="mx-auto w-full max-w-5xl bg-[#191919] p-5 md:p-8 rounded-xl border border-gray-600 shadow-xl">

                    <div className="grid md:grid-cols-2 gap-6 min-w-0">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-white mb-2">Name*</label>
                            <input
                                id="name"
                                name="name"
                                autoComplete="name"
                                required
                                type="text"
                                placeholder="e.g John Smith..."
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                value={form.name}
                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Phone */}
                        <div className="flex flex-col">
                            <label htmlFor="phone number" className="text-white mb-2">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                autoComplete="tel"
                                type="tel"
                                placeholder="07..."
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                value={form.phone}
                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white mb-2">Email*</label>
                            <input
                                id="email"
                                name="email"
                                autoComplete="email"
                                required
                                type="email"
                                placeholder="example@email.com"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                value={form.email}
                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Vehicle */}
                        <div className="flex flex-col">
                            <label htmlFor="vehicle" className="text-white mb-2">Vehicle*</label>
                            <input
                                id="vehicle"
                                name="vehicle"
                                required
                                type="text"
                                placeholder="e.g. BMW 3 Series 2014"
                                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                                value={form.vehicle}
                                className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                            />
                        </div>


                        {/* Service */}
                        <div className="flex flex-col">
                            <label htmlFor="service" className="text-white mb-2">Service Required*</label>

                            <select className="w-full min-w-0 rounded-lg bg-[#2a2a2a] border border-gray-600 p-3 text-white outline-none focus:border-[#b79c5a]"
                                id="service"
                                name="service"
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
                                name="date"
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
                            name="vehicle_notes"
                            autoComplete="off"
                            rows={6}
                            data-bwignore="true"
                            placeholder="Tell us anything you'd like us to know about your vehicle... (e.g. colour, reg no. etc.)"
                            onChange={(e) => setForm({ ...form, vehicle_notes: e.target.value })}
                            value={form.vehicle_notes}
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

                    {status && (
                        <div className="mt-5 rounded-lg bg-green-600/20 border border-green-500 p-4 text-green-300">
                            {status}
                        </div>
                    )}

                    {error && (
                        <div className="mt-5 rounded-lg bg-red-600/20 border border-red-500 p-4 text-red-300">
                            {error}
                        </div>
                    )}

                </form>

            </div>
        </div>
    )
}