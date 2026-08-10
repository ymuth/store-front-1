import { prisma } from '@prisma-db';
import Link from 'next/link';

export default async function BookingsMenu() {
    const bookings = await prisma.bookings.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            service: {
                select: { name: true },
            },
        },
    });

    const fields = [
        'Edit',
        'ID',
        'Name',
        'Email',
        'Phone',
        'Vehicle',
        'Service',
        'Other Service',
        'Preferred Date',
        'Notes',
        'Created At',
    ];

    function displayedDate(value: Date | null) {
        if (!value) return '—';
        return `${value.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    }

    return (
        <div>
            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='m-10 flex max-w-full items-center  gap-4'>
                <Link href='/admin/dashboard' className='absolute rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                <h1 className=' text-center text-2xl  mx-auto font-bold text-white'>Bookings</h1>
                <div className='w-24' />
            </div>

            <div className='m-10 mx-auto max-w-7xl overflow-x-auto'>

                <table className='w-full md:m-2 m-5 border text-black'>
                    <thead>
                        <tr className='text-left bg-neutral-200'>
                            {fields.map((field) => (
                                <th key={field} className='border p-4 font-extrabold'>{field}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking.id} className={`${index % 2 !== 0 ? 'bg-neutral-200' : 'bg-neutral-400'} text-left w-full`}>
                                <td className='text-center border p-4'><Link href={`/admin/bookings/${booking.id}`}>EDIT</Link></td>
                                <td className='text-center border p-4'>{booking.id}</td>
                                <td className='min-w-48 border p-4'>{booking.name}</td>
                                <td className='min-w-48 border p-4'>{booking.email}</td>
                                <td className='min-w-32 border p-4'>{booking.phone ?? '—'}</td>
                                <td className='min-w-40 border p-4'>{booking.vehicle}</td>
                                <td className='min-w-40 border p-4'>{booking.service?.name ?? '—'}</td>
                                <td className='min-w-40 border p-4'>{booking.otherService ?? '—'}</td>
                                <td className='text-center min-w-48 border p-4'>{displayedDate(booking.preferredDate)}</td>
                                <td className='min-w-96 border p-4'>{booking.notes}</td>
                                <td className='text-center min-w-48 border p-4'>{displayedDate(booking.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
