import Image from "next/image";
import hero from "@/../public/home/body-polish.jpg"
import aboutimg from "@/../public/home/mercedes-sw.jpg"
import bodyPolish from "@/../public/home/body-polish.jpg"
import ceramicCoating from "@/../public/home/ceramic-coating.jpeg"
import interiorCleaning from "@/../public/home/interior-cleaning.jpeg"
import aboutBD from "@/../public/home/twin-white.jpg"
import BD2 from "@/../public/home/merc.jpg"
import Link from "next/link";
import ProductCard from "@/components/productsCard";
import { products } from "@/data/products";

// colours:
// GOLD:          #b79c5a 
// DarkBlue:      #111524
// Blue:          #29304B
// Grey:          gray-500

export default function Home() {
  return (
    <div className="">

      {/* Welcome section */}
      <div className="min-h-dvh flex ">

        {/* Background + fade */}
        <div className="fixed inset-0 -z-10">
          <Image
            src={hero}
            alt="background"
            fill
            priority
            placeholder="blur"
            className="object-cover "
          />
        </div>
        <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-r from-black to-transparent" />


        {/* Slogan + services link */}
        <div className="md:m-10 md:p-10 md:max-w-[45%] flex flex-col text-white p-5 m-3">

          <h1 className="md:text-7xl md:text-left text-5xl text-center font-bold border-b-3 p-5 pb-8">Ensuring Excellence in Every Detail</h1>
          <p className="md:text-left text-2xl p-5 text-center">Expert Detailing and Aftercare for Premium Vehicles</p>
          <div className="md:ml-0 mt-10 mx-auto font-semibold flex gap-4 text-center">
            <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>
            <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
          </div>

          {/* Scroll symbol mobile */}
          {/* <div className="md:hidden mx-auto my-auto flex-col items-center gap-2 text-white animate-bounce bg-black/10 rounded-full p-5">
            <span className="text-sm tracking-widest uppercase ">Scroll</span>
            <h3 className="text-center">↓</h3>
          </div> */}

        </div>

        {/* scroll wheel (desktop) */}
        <div className="hidden md:flex m-auto flex-col items-center gap-2 text-white animate-bounce">
          <span className="text-sm tracking-widest uppercase ">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>



      </div>




      {/* --------------------- */}



      {/* about section */}

      <div className="font-poppins relative w-full flex flex-col p-10 bg-[#191919] ">

        {/* Background + fade */}
        {/* <div className="absolute inset-0 -z-10">
          <Image
            src={aboutBD}
            alt="background"
            fill
            priority
            placeholder="blur"
            className="object-cover "
          />
        </div>
        <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-b from-black to-transparent" /> */}

        <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center  font-bold  w-fit pb-3 mb-5 md:mb-0">About Us</h1>

        <div className="grid grid-cols-1 grid-rows-3 w-fit min-h-fit md:grid-cols-10 md:grid-rows-3 my-auto py-5 md:mt-10">


          <div className="relative col-span-1 md:col-[1/7] md:row-[1/3]  ">
            <Image
              src={aboutimg}
              alt="interior detailing"
              fill
              priority
              placeholder="blur"
              className="object-right  object-cover"
            />
          </div>

          <div className=" relative z-10 row-span-2 md:col-[4/-1] md:row-[2/-1]  md:text-left text-center text-white justify-center flex flex-col bg-[#5b5a5a] overflow-hidden px-5 py-10 md:p-15  ">

            <h3 className="md:text-4xl text-3xl font-semibold border-b-2 pb-3">What we do</h3>
            <p className="py-10 md:text-xl text-lg text-gray-300">We offer precise, high-quality car cleaning services, including interior and exterior cleaning, seat and carpet shampooing, headlight restoration, and body polishing. Entrust your vehicle to us for sparkling results.</p>
            <Link href="/about" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Learn More</Link>


          </div>

        </div>

      </div>



      {/* --------------------- */}



      {/* Services section */}
      <div className="font-poppins relative w-full max-w-screen  flex flex-col p-10 md:p-20 bg-black/50 text-white">

        {/* Background + fade */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={BD2}
            alt="background"
            fill
            priority
            placeholder="blur"
            className="object-fill "
          />
        </div>
        <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-b from-black to-transparent" />


        <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-10 ">What we offer</h1>
        <div className=" flex flex-col mx-auto max-w-7xl w-full my-auto">

          <div className="grid flex-1 md:grid-cols-3 gap-10 w-full items-center text-center">

            {/* Body Polishing */}
            <div>

              <div className="overflow-hidden relative aspect-square ">
                <Image
                  src={bodyPolish}
                  alt="Body Polishing"
                  fill
                  priority
                  placeholder="blur"
                  className=" object-cover object-left"
                />
              </div>
              <div className="bg-[#5b5a5a] size-full p-3 text-center flex flex-col justify-center aspect-square">
                <h3 className="text-xl font-bold p-3">Body Polishing</h3>
                <p className="text-lg">Car body polishing restores the shine and luster of your car, making it look like new.</p>
              </div>

            </div>


            {/* Interior Cleaning */}
            <div className="flex flex-col md:flex-col-reverse">

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={interiorCleaning}
                  alt="interior detailing w-full"
                  fill
                  priority
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#5b5a5a] size-full p-3 text-center flex flex-col justify-center  aspect-square">
                <h3 className="text-xl font-bold p-3">Interior Cleaning</h3>
                <p className="text-lg">Our interior cleaning transforms the interior of your vehicle and eliminates dirt and bad odors. Includes Upholstery and carpet shampoo to bring your seats and carpets back to life</p>
              </div>

            </div>


            {/* Cermaic Coating */}
            <div>

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={ceramicCoating}
                  alt="Ceramic Coating"
                  fill
                  priority
                  placeholder="blur"
                  className=" object-cover"
                />
              </div>
              <div className="bg-[#5b5a5a] size-full p-3 text-center aspect-square flex flex-col justify-center ">
                <h3 className="text-xl font-bold p-3">Ceramic coating</h3>
                <p className="text-lg">Our Ceramic coating protects your orignal paint for 3-5 years</p>
              </div>

            </div>




          </div>

          <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View All Services</Link>


        </div>

      </div>



      {/* --------------------- */}




      {/* Products */}

      <div className="font-poppins  w-full flex flex-col p-10 md:p-20 bg-[#191919] text-black">

        <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-5 md:mb-0">Products</h1>


        <div className="my-auto pt-5 md:justify-center-safe flex flex-row gap-4 overflow-x-auto pb-3 scrollbar-thumb-black scrollbar-track-gray-500/50">


          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}


        </div>

        <Link href="/services" className="mt-10 mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">View All Products</Link>



      </div>



      {/*  --------------------------  */}

      {/* TODO: Booking form here */}


      {/*  --------------------------  */}



      {/* Testimonial section */}
      <div className="font-poppins  w-full p-10  bg-[#2f2e2e] text-black  ">


        <h1 className="text-5xl border-b-3 border-white text-white mx-auto text-center font-bold font-sans w-fit pb-3 mb-10 ">Testimonials</h1>

        <div className="max-w-7xl  bg-[#191919] grid md:grid-cols-3 grid-cols-1 p-5 gap-10">

          <div className="text-center text-white p-3 flex flex-col gap-2 ">
            <p >⭐⭐⭐⭐⭐</p>
            <p >James R.</p>
            <p className="md:text-left mt-3 font-semibold italic text-lg ">"Absolutely blown away with the results. My BMW hadn't looked this clean since I bought it. The paint had an incredible shine and the interior looked factory fresh. Highly recommend."</p>
          </div>
          <div className="text-center text-white p-3  flex flex-col gap-2 ">
            <p >⭐⭐⭐⭐⭐</p>
            <p >Oliver R.</p>
            <p className="md:text-left mt-3 font-semibold italic text-lg ">"Professional from start to finish. They arrived on time, explained everything they were doing, and my car came back looking immaculate. I'll definitely be booking regular maintenance details."</p>
          </div>
          <div className="text-center text-white p-3 flex flex-col gap-2 ">
            <p >⭐⭐⭐⭐⭐</p>
            <p >Joseph M.</p>
            <p className="md:text-left mt-3 font-semibold italic text-lg ">"I honestly didn't think the seats could be saved after years of family use, but they managed to remove stains I thought were permanent. Great attention to detail and fantastic customer service."</p>
          </div>
          <div className="text-center text-white p-3  flex flex-col gap-2 ">
            <p >⭐⭐⭐⭐⭐</p>
            <p >Ahmed A.</p>
            <p className="md:text-left mt-3 font-semibold italic text-lg ">"Had my headlights restored and a full exterior polish. The difference is incredible—not only does the car look newer, but visibility at night has improved massively. Worth every penny."</p>
          </div>
          <div className="text-center text-white p-3  flex flex-col gap-2 ">
            <p >⭐⭐⭐⭐⭐</p>
            <p >Thomas K.</p>
            <p className="md:text-left mt-3 font-semibold italic text-lg ">"Excellent value for money. Every corner of the car was spotless, from the wheels to the dashboard vents. It's clear they genuinely care about the quality of their work."</p>
          </div>
          <div className="text-center text-white p-5 bg-[#5b5a5a] flex flex-col gap-2 mx-auto justify-center-safe">
            <h1 className="  text-lg">Help us improve</h1>
            <p className="  text-lg">We'd love to know how your experience went!</p>
            <Link href="/services" className=" mx-auto p-5 text-white font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br rounded-3xl hover:opacity-90 transition-opacity">Leave a Review</Link>
          </div>

        </div>

      </div>



      {/* --------------------- */}



      {/* 

      TODO: Booking section
      TODO: About Page - pretty quick
      TODO: services page - add the booking section? lead to a form that goes to email or connects to calender
      TODO: Products Page - 
      TODO: Testimonials/customers 
      TODO: CONTACT / SOCIALS

       */}



    </div>
  );
}
