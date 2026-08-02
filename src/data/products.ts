// data/products.ts

import cockpitShine from "@public/products/cockpit-shine.jpg";
import glassCleaner from "@public/products/glass-cleaner.jpg";
import tyreShine from "@public/products/tyre-shine.jpg";
import washWax from "@public/products/wash-n-wax.jpg"
import wheelCleaner from "@public/products/wheel-cleaner.jpg"

export const products = [
  {
    id: 1,
    name: "Cockpit Shine",
    description: "Long-lasting shine for interior ",
    price: 8.99,
    image: cockpitShine,
    category: "Interior",
  },
  {
    id: 2,
    name: "Glass Cleaner",
    description: "Keep you windows looking clear through the sun and rain",
    price: 5.99,
    image: glassCleaner,
    category: "Exterior",
  },
  {
    id: 3,
    name: "Tyre Shine",
    description: "Long-lasting wet-look tyre dressing.",
    price: 8.99,
    image: tyreShine,
    category: "Exterior",
  },
  {
    id: 4,
    name: "Wash and Wax",
    description: "All in one wash and wax; keeping your paint fresh",
    price: 12.99,
    image: washWax,
    category: "Exterior",
  },
  {
    id: 5,
    name: "Wheel Cleaner",
    description: "Long-lasting wet-look tyre dressing.",
    price: 5.99,
    image: wheelCleaner,
    category: "Exterior",
  }
];