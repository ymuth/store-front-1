import { prisma } from '@prisma-db'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EditTestimonialsForm from './editTestimonialsForm';

export default async function ServiceEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const testimonial = await prisma.testimonials.findUnique({
        where: { id: Number(id) }
    })
    if (!testimonial) { notFound() };

    const testimonialForClient = {
        ...testimonial,
        createdAt: String(testimonial.createdAt),
    };


    return (
        <div>

            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='mt-10 '>

                <div className='mb-6 flex w-full items-center justify-between gap-4 px-5'>
                    <Link href='/admin/testimonials' className='absolute rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                    <h1 className='flex-1 text-center text-2xl font-bold text-white'>Edit {testimonial.name}&apos;s testimonial</h1>
                    <div className='w-24' />
                </div>


                <EditTestimonialsForm className="m-5" testimonial={testimonialForClient} />

            </div>
        </div>
    )



}
