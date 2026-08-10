import InviteAdminForm from "@/components/admin/inviteAdminForm";
import Link from "next/link";



export default function Dashboard() {


    return (
        <div>
            <div className="bg-linear-to-br from-amber-950 from-15% to-gray-900 min-h-dvh fixed -z-10 inset-0" />

            <div className="md:pt-6 pt-10 mx-auto max-w-7xl w-full flex">


                <div className="w-full m-5 p-6 flex flex-col bg-white text-black rounded-2xl">

                    <h1 className="text-center lg:text-3xl md:text-2xl text-xl font-bold"> Admin Dashboard</h1>
                    <h3 className="text-center lg:text-xl md:text-lg text-md"> View and edit the services, products, testimonials, and bookings stored and displayed on your website.</h3>

                    <div className="mt-5 flex flex-col md:flex-row gap-3 max-w-full justify-center-safe">

                        <Link className="min-w-40 p-5 text-white text-center font-semibold bg-linear-to-r from-mist-700 via-mist-600 to-mist-500 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity" href="/admin/services">Services</Link>
                        <Link className="min-w-40 p-5 text-white text-center font-semibold bg-linear-to-r from-mist-700 via-mist-600 to-mist-500 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity" href="/admin/products">Products</Link>
                        <Link className="min-w-40 p-5 text-white text-center font-semibold bg-linear-to-r from-mist-700 via-mist-600 to-mist-500 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity" href="/admin/testimonials">Testimonials</Link>
                        <Link className="min-w-40 p-5 text-white text-center font-semibold bg-linear-to-r from-mist-700 via-mist-600 to-mist-500 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity" href="/admin/bookings">Bookings</Link>

                    </div>
                    <InviteAdminForm />


                </div>


            </div>
        </div>
    )
}