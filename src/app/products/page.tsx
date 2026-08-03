import Link from "next/link";
import ProductCard from "@/components/ui/productsCard";
import { products } from "@/data/products";
import FadeIn from "@/components/ui/fadeIn";

export const dynamic = 'force-dynamic'

export default function ProductsSection() {

    return (

        <div>

            {/* Products */}

            <div className="font-poppins  w-full flex flex-col p-10 md:p-20 bg-[#191919] text-black">

                <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-5 md:mb-0">Products</h1>


                <div className="my-auto pt-5 md:justify-center-safe flex overflow-y-clip flex-row gap-4 overflow-x-auto pb-3 scrollbar-thumb-black scrollbar-track-gray-500/50">


                    {products.slice(0, 4).map((product, index) => (
                        <FadeIn
                            key={product.id}
                            delay={index * 0.1}
                        >

                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </FadeIn>
                    ))}


                </div>

                <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View All Products</Link>



            </div>
        </div>
    )
}