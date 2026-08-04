
export type Service = {
  id: number;
  name: string;
  description: string;
  price?: number;
  image?: string | null;
  inStock: boolean;
  category: string;
  createdAt: string;
};
