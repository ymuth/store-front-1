import Image, { StaticImageData } from "next/image";
import image404 from "@public/Image404.png"
import { Product } from "@/types/products";
import ProductImage from "./productsImage";

type ProductFields = Pick<Product, "name" | "price" | "image">


export default function ProductCard({ name, price, image }: ProductFields) {

    // const productImagePath = image;


    return (
        <div>
            <div className="w-60 shrink-0 relative rounded-xl overflow-hidden shadow-black border-3 border-gray-500 hover:shadow-md hover:transform-[translateY(-8px)] transition">
                <div className="relative aspect-2/3 w-full overflow-hidden">
                    <ProductImage
                        image={image}
                        name={name}
                    />
                </div>

                <div className=" text-center p-2 bg-[#5b5a5a]  min-h-24">
                    <h3 className="font-semibold text-white">{name}</h3>
                    <p className="italic text-gray-300">£{price && price.toString()}</p>
                </div>

            </div>
        </div>
    )
}