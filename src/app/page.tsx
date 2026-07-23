import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import ServicesSection from "@/components/home/services";
import ProductsSection from "@/components/home/products";
import BookingSection from "@/components/home/booking";
import TestimonialsSection from "@/components/home/testimonials";

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

      TODO: Fade in to loading backgrounds, animate text.
      TODO: second email to customer confirming booking?
      TODO: services page - add the booking section?
      TODO: Products Page
      TODO: Testimonials/customers page
      TODO: CONTACT / SOCIALS
      TODO: payment section?
      TODO: BACKEND DB for products
      TODO: login for admin, see who requested a booking etc.

       */}



    </div>
  );
}
