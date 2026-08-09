import { prisma } from '@prisma-db'
import { notFound } from 'next/navigation';
import EditTestimonialsForm from './editTestimonialsForm';
export const dynamic = 'force-dynamic'

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

                <h1 className='text-center w-full lg:text-3xl md:text-2xl text-xl'>Edit {testimonial.name}'s testimonial</h1>


                <EditTestimonialsForm className="m-5" testimonial={testimonialForClient} />

            </div>
        </div>
    )



}
