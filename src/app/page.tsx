import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import ServicesSection from "@/components/home/services";
import ProductsSection from "@/components/home/products";
import BookingSection from "@/components/home/booking";
import TestimonialsSection from "@/components/home/testimonials";
import { prisma } from '@prisma-db'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Detailing Corp",

  description:
    "Professional car detailing and vehicle care services.",

  url: "https://store-front-1.vercel.app",

  priceRange: "££",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Sheffield",
    addressRegion: "South Yorkshire",
    addressCountry: "GB",
  },

};


export default async function Home() {
  const services = await prisma.services.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />



      <HeroSection />
      <AboutSection />
      <div id="services"><ServicesSection /></div>
      <ProductsSection />
      <div id="booking"><BookingSection services={services} /></div>
      <div id="testimonials"><TestimonialsSection /></div>






    </div>
  );
}
