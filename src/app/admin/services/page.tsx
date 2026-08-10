import { prisma } from '@prisma-db';
import Link from 'next/link';

export default async function ServicesMenu() {
    const services = await prisma.services.findMany({
        orderBy: { id: 'asc' },
    })
    const fields = [
        'EDIT',
        'ID',
        'Name',
        'Description',
        'Process',
        'Price',
        'Image',
        'Category',
        'CreatedAt',
    ];

    function displayeddate(createdAt: Date) {
        return `${createdAt.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}`

    };



    return (
        <div>
            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='md:m-12 mt-14 m-8 flex max-w-full items-center gap-4'>
                <Link href='/admin/dashboard' className='absolute rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                <h1 className=' text-center lg:text-4xl md:text-3xl text-2xl ml-auto font-bold text-white'>Services</h1>
            </div>

            <div className='m-10 mt-0 mx-auto max-w-7xl overflow-x-auto'>


                <table className='w-full md:m-2 m-5 border text-black'>

                    <thead>
                        <tr className='text-left bg-neutral-200'>
                            {fields.map((field) => (
                                <th key={field} className='border p-4 font-extrabold'>{field}</th>
                            ))}
                        </tr>

                    </thead>


                    <tbody>

                        {services.map((service, index) => (

                            <tr key={service.id} className={`${index % 2 != 0 ? "bg-neutral-200" : "bg-neutral-400"}  text-left w-full`} >
                                <td className='text-center border p-4'><Link href={`/admin/services/${service.id}`}>EDIT</Link></td>
                                <td className='text-center border p-4'>{service.id}</td>
                                <td className='min-w-48 border p-4'>{service.name}</td>
                                <td className='min-w-100 border p-4'>{service.description}</td>
                                <td className='min-w-100 border p-4'>{service.process}</td>
                                <td className='text-center border p-4'>{String(service.price)}</td>
                                <td className='min-w-max border p-4'>{service.image}</td>
                                <td className='min-w-max border p-4'>{service.category}</td>
                                <td className='text-center min-w-48 border p-4'>{displayeddate(service.createdAt)}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )

}