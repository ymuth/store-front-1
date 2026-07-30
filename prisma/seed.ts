import { prisma } from './db'

const cockpitShine = "../public/products/cockpit-shine.jpg";
const bodyPolish = "../public/home/body-polish.jpg"

async function main() {



  console.log("Seeding ...");

  const newProduct = await prisma.products.create({
    data: {
      name: "Cockpit Shine",
      description: "Long-lasting shine for interior",
      price: 8.99,
      image: cockpitShine,
      inStock: true,
    }
  })


  const newService = await prisma.services.create({
    data: {
      id: 1,
      name: "Body Polishing",
      description: "Our body polishing service restores the shine and clarity of your paintwork by removing surface imperfections, enhancing gloss, and bringing back a deep showroom finish.",
      process: "Our multi-stage process targets paint imperfections such as swirl marks and micro scratches, refining the surface to restore a smooth, high-gloss finish. Finished with a protective wax layer to enhance shine and provide additional protection.",
      price: null,
      image: bodyPolish,
    }
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
