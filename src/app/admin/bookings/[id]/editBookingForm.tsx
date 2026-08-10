"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateBooking } from "./actions";

type Booking = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    vehicle: string;
    serviceId: number | null;
    otherService: string | null;
    preferredDate: Date | null;
    notes: string;
    createdAt: Date;
};

type Props = {
    booking: Booking;
    services: Array<{ id: number; name: string }>;
    className?: string;
};

export default function EditBookingForm({ booking, services, className }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setMessage("");

        try {
            await updateBooking(formData);
            setMessage("Booking updated successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            setMessage("Failed to update booking");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={className ?? ""}>
            <form
                action={handleSubmit}
                className="text-black flex flex-col gap-5 max-w-2xl mx-auto p-5 rounded-2xl bg-white"
            >
                <input type="hidden" name="id" value={booking.id} />

                <div>
                    <label>Name</label>
                    <input name="name" defaultValue={booking.name} className="w-full border p-2" />
                </div>

                <div>
                    <label>Email</label>
                    <input name="email" type="email" defaultValue={booking.email} className="w-full border p-2" />
                </div>

                <div>
                    <label>Phone</label>
                    <input name="phone" defaultValue={booking.phone ?? ""} className="w-full border p-2" />
                </div>

                <div>
                    <label>Vehicle</label>
                    <input name="vehicle" defaultValue={booking.vehicle} className="w-full border p-2" />
                </div>

                <div>
                    <label>Service</label>
                    <select name="serviceId" defaultValue={booking.serviceId ?? ""} className="w-full border p-2">
                        <option value="">Select a service</option>
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Other Service</label>
                    <input name="otherService" defaultValue={booking.otherService ?? ""} className="w-full border p-2" />
                </div>

                <div>
                    <label>Preferred Date</label>
                    <input
                        name="preferredDate"
                        type="datetime-local"
                        defaultValue={booking.preferredDate ? new Date(booking.preferredDate).toISOString().slice(0, 16) : ""}
                        className="w-full border p-2"
                    />
                </div>

                <div>
                    <label>Notes</label>
                    <textarea name="notes" defaultValue={booking.notes} className="w-full border p-2 field-sizing-content" />
                </div>

                <button disabled={loading} className="bg-black text-white p-3 rounded disabled:opacity-50">
                    {loading ? "Saving..." : "Save Changes"}
                </button>

                {message && (
                    <p className="mt-5 rounded-lg bg-green-600/20 border border-green-500 p-4 text-green-700">{message}</p>
                )}
            </form>
        </div>
    );
}
