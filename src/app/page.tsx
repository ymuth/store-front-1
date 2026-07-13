import Image from "next/image";
import hero from "@/../public/home/hero1.jpg"
import aboutimg from "@/../public/home/mercedes-sw.jpg"
import bodyPolish from "@/../public/home/body-polish.jpg"
import ceramicCoating from "@/../public/home/ceramic-coating.jpeg"
import interiorCleaning from "@/../public/home/interior-cleaning.jpeg"
import Link from "next/link";


export default function Home() {
  return (
    <div className="">

      {/* Welcome section */}
      <div className="min-h-dvh flex">

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
        <div className="-z-10 fixed inset-0 bg-linear-to-b md:bg-linear-to-r from-black via-black/80 via-50% to-transparent" />


        {/* Slogan + services link */}
        <div className="md:m-10 md:p-10 md:max-w-[45%] flex flex-col text-white p-5 m-3">

          <h1 className="md:text-7xl md:text-left text-5xl text-center font-bold border-b-3 p-5 pb-8">Ensuring Excellence in Every Detail</h1>
          <p className="md:text-left text-2xl p-5 text-center">Expert Detailing and Aftercare for Premium Vehicles</p>
          <div className="md:ml-0 mt-10 mx-auto font-semibold flex gap-4 text-center">
            <Link href="/services" className=" p-5 font-semibold bg-[#b79c5a] rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>
            <Link href="/services" className=" p-5 font-semibold bg-[#b79c5a] rounded-3xl hover:opacity-90 transition-opacity">Book services</Link>
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
      
      <div className="font-poppins min-h-dvh w-full flex p-10 md:p-20 border-y-3 border-gray-500 bg-[#111524] text-black">

        <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3 my-auto md:py-30 md:px-10 ">


          <div className="relative aspect-square  ">
            <Image
              src={aboutimg}
              alt="interior detailing"
              fill
              priority
              placeholder="blur"
              className="object-fill"
            />
          </div>

          <div className=" mt-10 md:mt-0 md:ml-10 md:col-span-2 md:text-left text-center justify-center flex flex-col bg-white overflow-hidden ring-inset ring-4 ring-gray-400 p-10 ">

            <h3 className="md:text-4xl text-3xl font-semibold ">What we do</h3>
            <p className="py-10 md:text-xl text-lg">We offer precise, high-quality car cleaning services, including interior and exterior cleaning, seat and carpet shampooing, headlight restoration, and body polishing. Entrust your vehicle to us for sparkling results.</p>
            <Link href="/about" className="md:ml-0 md:mr-auto mx-auto text-white p-5 font-semibold bg-[#b79c5a] rounded-3xl hover:opacity-90 transition-opacity">Learn More</Link>


          </div>

        </div>

      </div>



      {/* --------------------- */}



      {/* Services section */}
      <div className="font-poppins min-h-dvh w-full max-w-screen border-y-3 justify-center flex p-10 md:p-20 border-gray-500 bg-[#29304B] text-black">


        <div className=" flex flex-col  max-w-7xl w-full">

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
              <div className="bg-white size-full p-3 text-center flex flex-col justify-center border-[#b79c5a] border-5 aspect-square">
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
              <div className="bg-white size-full p-3 text-center flex flex-col justify-center border-[#b79c5a] border-5 aspect-square">
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
              <div className="bg-white size-full p-3 text-center aspect-square flex flex-col justify-center border-[#b79c5a] border-5">
                <h3 className="text-xl font-bold p-3">Ceramic coating</h3>
                <p className="text-lg">Our Ceramic coating protects your orignal paint for 3-5 years</p>
              </div>

            </div>




          </div>

          <Link href="/services" className=" mt-5 mx-auto p-5 text-white font-semibold bg-[#b79c5a] rounded-3xl hover:opacity-90 transition-opacity">View Services</Link>


        </div>

      </div>



      {/* --------------------- */}



      {/* Testimonial section */}
      <div className="font-poppins min-h-dvh w-full flex p-10 border-y-3 max-w-screen border-gray-500 bg-[#111524] text-black  ">

        <div className=" border flex-1 max-w-7xl mx-auto bg-[#29304B] grid md:grid-cols-3 grid-cols-1 p-5 gap-10">

          <div className="text-white p-3 md:border-none flex flex-col gap-2 ">
            <p className="text-center">⭐⭐⭐⭐⭐</p>
            <p className="text-center">James R.</p>
            <p className="mt-3 font-semibold italic text-lg ">"Absolutely blown away with the results. My BMW hadn't looked this clean since I bought it. The paint had an incredible shine and the interior looked factory fresh. Highly recommend."</p>
          </div>
          <div className="text-white p-3 md:border-none flex flex-col gap-2 ">
            <p className="text-center">⭐⭐⭐⭐⭐</p>
            <p className="text-center">Oliver R.</p>
            <p className="mt-3 font-semibold italic text-lg ">"Professional from start to finish. They arrived on time, explained everything they were doing, and my car came back looking immaculate. I'll definitely be booking regular maintenance details."</p>
          </div>
          <div className="text-white p-3 md:border-none flex flex-col gap-2 ">
            <p className="text-center">⭐⭐⭐⭐⭐</p>
            <p className="text-center">Joseph M.</p>
            <p className="mt-3 font-semibold italic text-lg ">"I honestly didn't think the seats could be saved after years of family use, but they managed to remove stains I thought were permanent. Great attention to detail and fantastic customer service."</p>
          </div>
          <div className="text-white p-3 md:border-none flex flex-col gap-2 ">
            <p className="text-center">⭐⭐⭐⭐⭐</p>
            <p className="text-center">Ahmed A.</p>
            <p className="mt-3 font-semibold italic text-lg ">"Had my headlights restored and a full exterior polish. The difference is incredible—not only does the car look newer, but visibility at night has improved massively. Worth every penny."</p>
          </div>
          <div className="text-white p-3 md:border-none flex flex-col gap-2 ">
            <p className="text-center">⭐⭐⭐⭐⭐</p>
            <p className="text-center">Thomas K.</p>
            <p className="mt-3 font-semibold italic text-lg ">"Excellent value for money. Every corner of the car was spotless, from the wheels to the dashboard vents. It's clear they genuinely care about the quality of their work."</p>
          </div>

        </div>

      </div>



      {/* --------------------- */}



      {/* 

      TODO: About Page
      TODO: services page
      TODO: Products Page
      TODO: Testimonials/customers 
      TODO: CONTACT / SOCIALS

       */}



    </div>
  );
}
