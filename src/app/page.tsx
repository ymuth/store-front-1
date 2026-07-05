import Image from "next/image";
import { bebasNeue } from "@/lib/fonts";
import hero from "@/../public/home/hero1.jpg"


export default function Home() {
  return (
    <div>

      {/* background and tint */}

      <div className="fixed inset-0 -z-10">
        <Image
          src={hero}
          alt="background"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
      </div>


      <div className="-z-10 fixed inset-0 bg-linear-to-l from-transparent to-black" />
      <div className="text-white m-10 p-10 md:max-w-[40%]">
        <h1 className="text-7xl font-bold border-b-3 p-3 pb-8">Ensuring Exellence in Quality</h1>
        <p className="text-2xl p-5">Expert Detailing and Aftercare Service for Premium Vehcicles</p>
      </div>



    </div>
  );
}
