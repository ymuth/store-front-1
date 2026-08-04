import Link from "next/link";
import ProductCard from "@/components/ui/productsCard";
import { products } from "@/data/products";
import FadeIn from "@/components/ui/fadeIn";
import ProductsSection from "@/components/home/products";

export const dynamic = 'force-dynamic'

export default function ProductsPage() {

    return (

        <div>

            <ProductsSection/>

        </div>
    )
}