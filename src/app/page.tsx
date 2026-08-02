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
      <div id="services"><ServicesSection /></div>
      <ProductsSection />
      <div id="booking"><BookingSection /></div>
      <TestimonialsSection />

      {/* 

      TODO: services page - add the booking section?
      TODO: Products Page
      TODO: Testimonials/customers page
      TODO: CONTACT / SOCIALS
      TODO: footer
      TODO: second email to customer confirming booking?
      TODO: BACKEND DB for products
      TODO: login for admin, see who requested a booking etc.
      TODO: payment section? X

       */}



    </div>
  );
}
