import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import ServicesSection from "@/components/home/services";
import ProductsSection from "@/components/home/products";
import BookingSection from "@/components/home/booking";
import TestimonialsSection from "@/components/home/testimonials";

// colours:
// GOLD:          #b79c5a 
// DarkBlue:      #111524
// Blue:          #29304B
// Grey:          gray-500

export default function Home() {
  return (
    <div className="">


      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <div id="booking"><BookingSection /></div>
      <TestimonialsSection />

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
