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



    return (
        <div>
            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='m-10 mx-auto max-w-7xl overflow-x-auto'>

                <table className='w-full md:m-2 m-5 border text-black'>

                    <thead>
                        <tr className='text-left bg-neutral-200'>
                            {fields.map((field, index) => (
                                <th key={field} className='border p-2 font-extrabold'>{field}</th>
                            ))}
                        </tr>

                    </thead>


                    <tbody>

                        {services.map((service, index) => (

                            <tr key={service.id} className={`${index % 2 != 0 ? "bg-neutral-200" : "bg-neutral-400"}  text-left w-full`} >
                                <td className='text-center border p-2'><Link href={`/admin/services/${service.id}`}>EDIT</Link></td>
                                <td className='text-center border p-2'>{service.id}</td>
                                <td className='min-w-48 border p-2'>{service.name}</td>
                                <td className='min-w-100 border p-2'>{service.description}</td>
                                <td className='min-w-100 border p-2'>{service.process}</td>
                                <td className='text-center border p-2'>{String(service.price)}</td>
                                <td className='min-w-max border p-2'>{service.image}</td>
                                <td className='min-w-max border p-2'>{service.category}</td>
                                <td className='min-w-48 border p-2'>{String(service.createdAt)}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )

}