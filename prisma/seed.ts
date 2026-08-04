import { prisma } from './db'

async function main() {

  console.log("Clearing existing data...")
  await prisma.log.deleteMany()
  await prisma.products.deleteMany()
  await prisma.services.deleteMany()
  await prisma.testimonials.deleteMany()

  // #################################################

  console.log("Seeding Products...");
  await prisma.products.createMany({
    data: [
      {
        name: "Cockpit Shine",
        description: "Long-lasting shine for interior",
        price: 8.99,
        image: "/products/cockpit-shine.jpg",
        inStock: true,
        category: "Interior"
      },
      {
        name: "Glass Cleaner",
        description: "Keep you windows looking clear through the sun and rain",
        price: 5.99,
        image: "/products/glass-cleaner.jpg",
        inStock: true,
        category: "Exterior",
      },
      {
        name: "Tyre Shine",
        description: "Long-lasting wet-look tyre dressing.",
        price: 8.99,
        image: "/products/tyre-shine.jpg",
        inStock: true,
        category: "Exterior",
      },
      {
        name: "Wheel Cleaner",
        description: "Long-lasting wet-look tyre dressing.",
        price: 5.99,
        image: "/products/wheel-cleaner.jpg",
        inStock: true,
        category: "Exterior",
      },
      {
        name: "Wash and Wax",
        description: "All in one wash and wax; keeping your paint fresh",
        price: 12.99,
        image: "/products/wash-n-wax.jpg",
        inStock: true,
        category: "Exterior",
      },
    ],
  })

  // ##################################################

  console.log("Seeding Servcies...")
  await prisma.services.createMany({
    data: [
      {
        name: "Body Polishing",
        description: "Our body polishing service restores the shine and clarity of your paintwork by removing surface imperfections, enhancing gloss, and bringing back a deep showroom finish.",
        process: "Our multi-stage process targets paint imperfections such as swirl marks and micro scratches, refining the surface to restore a smooth, high-gloss finish. Finished with a protective wax layer to enhance shine and provide additional protection.",
        price: null,
        image: "/home/body-polish.jpg",
        category: "Exterior"
      },
      {
        name: "Interior Detailing",
        description: "Our interior cleaning transforms the interior of your vehicle and eliminates dirt and bad odors. Includes upholstery and carpet shampooing to restore your seats and carpets, removing dirt, stains, and built-up grime.",
        process: "A complete interior clean covering every area of your vehicle, including vacuuming of carpets, seats, pockets, and hard-to-reach areas. Finished with a deep clean of the seats, steering wheel, and dashboard to remove built-up grime and leave a fresh, protected matte showroom finish.",
        price: null,
        image: "/home/interior-cleaning.jpeg",
        category: "Interior",
      },
      {
        name: "Ceramic Coating",
        description: "Our ceramic coating provides long-lasting protection for your vehicle's paintwork, creating a durable hydrophobic layer that enhances gloss, depth, and colour while protecting against environmental contaminants.",
        process: "Our multi-stage process begins with a thorough wash, decontamination, and paint preparation before applying the ceramic coating by hand. Once cured, the coating provides improved resistance against dirt, water spots, UV damage, and everyday contaminants while making your vehicle easier to maintain with a deep showroom finish.",
        price: null,
        image: "/home/ceramic-coating.jpeg",
        category: "Exterior",
      },
      {
        name: "Full Vehicle Detail",
        description: "Our full vehicle detail combines a complete exterior and interior clean to restore your vehicle inside and out, leaving it looking refreshed and professionally maintained.",
        process: "Our process includes a deep exterior wash, wheel and tyre cleaning, paint decontamination, interior vacuuming, upholstery cleaning, and detailed finishing touches throughout the vehicle. Perfect for bringing neglected vehicles back to a high standard.",
        price: null,
        image: "/home/clean-car.jpg",
        category: "Exterior",
      },
      {
        name: "Paint Correction",
        description: "Our paint correction service restores the appearance of your vehicle's paintwork by reducing swirl marks, light scratches, and surface imperfections to achieve a smoother, deeper gloss finish.",
        process: "Using a careful machine polishing process, we refine the clear coat in multiple stages depending on the condition of the paint. The result is improved clarity, enhanced reflections, and a finish prepared for long-term protection.",
        price: null,
        image: "/home/new-paint.jpg",
        category: "Exterior",
      },
      {
        name: "Headlight Restoration",
        description: "Cloudy and faded headlights can reduce visibility and make your vehicle look older. Our headlight restoration service restores clarity and improves the appearance of your headlights.",
        process: "The process removes oxidation, yellowing, and surface imperfections before polishing and applying protection to help maintain a clearer finish and improve nighttime visibility.",
        price: null,
        image: "/home/headlight.jpg",
        category: "Exterior",
      },
      {
        name: "Maintenance Detail",
        description: "Designed for vehicles that already receive regular care, our maintenance detail keeps your vehicle looking its best without the need for a full restoration.",
        process: "This service includes a thorough safe wash, wheel cleaning, interior refresh, and finishing touches to maintain your vehicle's appearance and protection between larger detailing services.",
        price: null,
        image: "/home/car-washed-BMWX6.jpg",
        category: "Exterior",
      },

    ],
  })

  console.log("Seeding Testimonials...")
  await prisma.testimonials.createMany({
    data: [
      {
        name: "James R.",
        email: "James.R@fakeemail.com",
        review: "Absolutely blown away with the results. My BMW hadn't looked this clean since I bought it. The paint had an incredible shine and the interior looked factory fresh. Highly recommend.",
        rating: 5,
        featured: true,
      },
      {
        name: "Oliver R.",
        email: "Oliver.R@fakeemail.com",
        review: "Professional from start to finish. They arrived on time, explained everything they were doing, and my car came back looking immaculate. I'll definitely be booking regular maintenance details.",
        rating: 5,
        featured: true,
      },
      {
        name: "Joseph M.",
        email: "Joseph.M@fakeemail.com",
        review: "I honestly didn't think the seats could be saved after years of family use, but they managed to remove stains I thought were permanent. Great attention to detail and fantastic customer service.",
        rating: 5,
        featured: true,
      },
      {
        name: "Ahmed A.",
        email: "Ahmed.A@fakeemail.com",
        review: "Had my headlights restored and a full exterior polish. The difference is incredible—not only does the car look newer, but visibility at night has improved massively. Worth every penny.",
        rating: 5,
        featured: true,
      },
      {
        name: "Thomas K.",
        email: "Thomas.K@fakeemail.com",
        review: "Excellent value for money. Every corner of the car was spotless, from the wheels to the dashboard vents. It's clear they genuinely care about the quality of their work.",
        rating: 5,
        featured: true,
      },

    ]
  })

}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
