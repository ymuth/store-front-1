import { prisma } from '@prisma-db'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EditProductForm from './editProductForm';
export const dynamic = 'force-dynamic'

export default async function ProductsEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const product = await prisma.products.findUnique({
        where: { id: Number(id) }
    })
    if (!product) { notFound() };

    const productForClient = {
        ...product,
        price: Number(product.price),
        createdAt: String(product.createdAt),
    };


    return (
        <div>

            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='mt-10 '>

                <div className='mb-6 flex w-full items-center justify-between gap-4 px-5'>
                    <Link href='/admin/products' className='rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                    <h1 className='flex-1 text-center text-2xl font-bold text-white'>Edit {product.name}</h1>
                    <div className='w-24' />
                </div>
                {/* <p className="text-center text-xs text-gray-400">
                    Page rendered at: {new Date().toISOString()} — fetched inStock: {String(product.inStock)}
                </p> */}


                <EditProductForm className="m-5" product={productForClient} />

            </div>
        </div>
    )



}
