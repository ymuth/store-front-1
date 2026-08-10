import { prisma } from '@prisma-db';
import Link from 'next/link';

export default async function TestimonialsMenu() {
    const testimonials = await prisma.testimonials.findMany({
        orderBy: [
            { featured: 'desc' },
            { id: 'asc' }
        ]
    })
    const fields = [
        'Edit',
        'id',
        'name',
        'email',
        'review',
        'rating',
        'featured',
        'createdAt',
    ];

    function displayeddate(createdAt: Date) {
        return `${createdAt.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}`

    };



    return (
        <div>
            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='m-10 mx-auto max-w-7xl overflow-x-auto'>

                <div className='mb-6 flex w-full items-center justify-between gap-4'>
                    <Link href='/admin/dashboard' className='rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                    <h1 className='flex-1 text-center text-2xl font-bold text-white'>Testimonials</h1>
                    <div className='w-24' />
                </div>

                <table className='w-full md:m-2 m-5 border text-black'>

                    <thead>
                        <tr className='text-left bg-neutral-200'>
                            {fields.map((field, index) => (
                                <th key={field} className='border p-4 font-extrabold'>{field}</th>
                            ))}
                        </tr>

                    </thead>


                    <tbody>

                        {testimonials.map((testimonial, index) => (

                            <tr key={testimonial.id} aria-sort='ascending' className={`${index % 2 != 0 ? "bg-neutral-200" : "bg-neutral-400"}  text-left w-full`} >
                                <td className='text-center border p-4'><Link href={`/admin/testimonials/${testimonial.id}`}>EDIT</Link></td>
                                <td className='text-center border p-4'>{testimonial.id}</td>
                                <td className='min-w-48 border p-4'>{testimonial.name}</td>
                                <td className='min-w-100 border p-4'>{testimonial.email}</td>
                                <td className='border p-4'>{testimonial.review}</td>
                                <td className='text-center min-w-max border p-4'>{String(testimonial.rating)}</td>
                                <td className={`text-center min-w-max border p-4 border-black font-bold uppercase ${testimonial.featured == true ? 'text-emerald-700' : 'text-rose-700'}`}>{String(testimonial.featured)}</td>
                                <td className='min-w-48 border p-4 text-center'>{displayeddate(testimonial.createdAt)}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )

}