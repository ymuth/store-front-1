import { prisma } from '@prisma-db';
import Link from 'next/link';
import { Decimal } from '@prisma/client/runtime/index-browser';

export default async function ServicesMenu() {
    const products = await prisma.products.findMany({
        orderBy: { id: 'asc' },
    })
    const fields = [
        'Edit',
        'id',
        'name',
        'description',
        'price',
        'image',
        'inStock',
        'category',
        'createdAt',
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

                        {products.map((product, index) => (

                            <tr key={product.id} className={`${index % 2 != 0 ? "bg-neutral-200" : "bg-neutral-400"}  text-left w-full`} >
                                <td className='text-center border p-2'><Link href={`/admin/products/${product.id}`}>EDIT</Link></td>
                                <td className='text-center border p-2'>{product.id}</td>
                                <td className='min-w-48 border p-2'>{product.name}</td>
                                <td className='min-w-100 border p-2'>{product.description}</td>
                                <td className='text-center border p-2'>{String(product.price)}</td>
                                <td className='min-w-max border p-2'>{product.image}</td>
                                <td className='min-w-max border p-2'>{String(product.inStock)}</td>
                                <td className='min-w-max border p-2'>{product.category}</td>
                                <td className='min-w-48 border p-2'>{String(product.createdAt)}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )

}