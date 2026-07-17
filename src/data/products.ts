// data/products.ts

import cockpitShine from "@/../public/products/cockpit-shine.jpg";
import glassCleaner from "@/../public/products/glass-cleaner.jpg";
import tyreShine from "@/../public/products/tyre-shine.jpg";
import washWax from "@/../public/products/wash-n-wax.jpg"
import wheelCleaner from "@/../public/products/wheel-cleaner.jpg"

export const products = [
  {
    id: 1,
    name: "Cockpit Shine",
    price: 8.99,
    description: "Long-lasting shine for interior ",
    image: cockpitShine,
    category: "Interior",
  },
  {
    id: 2,
    name: "Glass Cleaner",
    price: 5.99,
    description: "Keep you windows looking clear through the sun and rain",
    image: glassCleaner,
    category: "Exterior",
  },
  {
    id: 3,
    name: "Tyre Shine",
    price: 8.99,
    description: "Long-lasting wet-look tyre dressing.",
    image: tyreShine,
    category: "Exterior",
  },
  {
    id: 4,
    name: "Wash and Wax",
    price: 12.99,
    description: "All in one wash and wax; keeping your paint fresh",
    image: washWax,
    category: "Exterior",
  },
  {
    id: 5,
    name: "Wheel Cleaner",
    price: 5.99,
    description: "Long-lasting wet-look tyre dressing.",
    image: wheelCleaner,
    category: "Exterior",
  }
];