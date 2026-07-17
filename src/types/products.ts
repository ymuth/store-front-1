// types/product.ts

import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  category: string;
};