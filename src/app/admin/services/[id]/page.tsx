import { prisma } from '@prisma-db'
import { notFound } from 'next/navigation';
import EditServiceForm from './editServiceForm';

export default async function ServiceEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const service = await prisma.services.findUnique({
        where: { id: Number(id) }
    })
    if (!service) { notFound() };

    const serviceForClient = {
        ...service,
        price: service.price ? Number(service.price) : null,
    };


    return (
        <div>

            <div className='bg-linear-to-br from-purple-950 to-mist-600 fixed inset-0 -z-10' />

            <div className='mt-10 '>

                <h1 className='text-center w-full lg:text-3xl md:text-2xl text-xl'>Edit {service.name}</h1>


                <EditServiceForm className="m-5" service={serviceForClient} />

            </div>
        </div>
    )



}
