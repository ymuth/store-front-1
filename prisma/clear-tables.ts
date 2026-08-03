import { prisma } from './db'

async function main() {

  console.log("Clearing existing data...")
  await prisma.log.deleteMany()
  await prisma.products.deleteMany()
  await prisma.services.deleteMany()
  await prisma.testimonials.deleteMany()
  console.log("Finished...")

  
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
