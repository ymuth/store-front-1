import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import ServicesSection from "@/components/home/services";
import ProductsSection from "@/components/home/products";
import BookingSection from "@/components/home/booking";
import TestimonialsSection from "@/components/home/testimonials";
import { prisma } from '@prisma-db'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const services = await prisma.services.findMany({
    orderBy: { id: "asc" },
  });
  
  return (
    <div className="">


      <HeroSection />
      <AboutSection />
      <div id="services"><ServicesSection /></div>
      <ProductsSection />
      <div id="booking"><BookingSection services={services} /></div>
      <div id="testimonials"><TestimonialsSection /></div>

      {/* 

      
      
      TODO:  see who requested a booking etc.
      TODO: make sign up only possible through an email link
      TODO: add user settings to bokdashbaord
      TODO  fix feedback form on mobile, text going lower on my phone...
      TODO: second email to customer confirming booking?
      TODO: remove clear tables and seed from build script

       */}



    </div>
  );
}
