import Image, { StaticImageData } from "next/image";
import image404 from "@public/Image404.png"

type ProductCardProps = {
  name: string;
  price: Number;
  image: StaticImageData;
};

export default function ProductCard({name, price, image}: ProductCardProps) {

    // const productImagePath = image;


    return (
        <div>
            <div className="w-60 shrink-0 relative rounded-xl overflow-hidden shadow-black border-3 border-gray-500 hover:shadow-md hover:transform-[translateY(-8px)] transition">
                    <div className="relative aspect-2/3 w-full overflow-hidden">
                        {image ?
                            <Image className="aspect-2/3 object-cover"
                                src={image}
                                alt={name}
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                fill
                                
                            />
                            :
                            <Image className="aspect-2/3 object-cover"
                                src={image404}
                                alt={name}
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                fill
                            />
                        }
                    </div>

                    <div className=" text-center p-2 bg-[#5b5a5a]  min-h-24">
                        <h3 className="font-semibold text-white">{name}</h3>
                        <p className="italic text-gray-300">{price.toString()}</p>
                    </div>

            </div>
        </div>
    )
}