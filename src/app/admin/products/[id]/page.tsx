import { prisma } from '@prisma-db'
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

                <h1 className='text-center w-full lg:text-3xl md:text-2xl text-xl'>Edit {product.name}</h1>
                {/* <p className="text-center text-xs text-gray-400">
                    Page rendered at: {new Date().toISOString()} — fetched inStock: {String(product.inStock)}
                </p> */}


                <EditProductForm className="m-5" product={productForClient} />

            </div>
        </div>
    )



}
