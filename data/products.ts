// Static product catalog for ShopEasy.
// No database in this version - products live here as plain data.

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  discountPercentage?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aroma Pro Coffee Maker",
    category: "Home & Kitchen",
    price: 79.99,
    description: "Brew rich, smooth coffee at home with a 12-cup glass carafe.",
  },
  {
    id: 2,
    name: "TrailRunner Backpack",
    category: "Outdoor",
    price: 54.5,
    description: "Lightweight 28L backpack built for day hikes and travel.",
  },
  {
    id: 3,
    name: "EchoBeat Wireless Earbuds",
    category: "Electronics",
    price: 39.99,
    description: "Compact earbuds with clear sound and a 20-hour battery case.",
    discountPercentage: 100,
  },
  {
    id: 4,
    name: "Slim Fit Denim Jacket",
    category: "Clothing",
    price: 64.0,
    description: "A classic denim jacket that pairs well with any outfit.",
  },
  {
    id: 5,
    name: "CozyKnit Throw Blanket",
    category: "Home & Kitchen",
    price: 29.95,
    description: "Soft knit blanket, perfect for movie nights on the couch.",
  },
  {
    id: 6,
    name: "FlexFit Yoga Mat",
    category: "Sports & Fitness",
    price: 24.99,
    description: "Non-slip yoga mat with extra cushioning for daily practice.",
    discountPercentage: 20,
  },
  {
    id: 7,
    name: "Nomad Steel Water Bottle",
    category: "Outdoor",
    price: 18.5,
    description: "Insulated 750ml bottle that keeps drinks cold for 24 hours.",
  },
  {
    id: 8,
    name: "PixelView 24-inch Monitor",
    category: "Electronics",
    price: 129.0,
    description: "Full HD monitor with a slim bezel, ideal for study or work.",
    discountPercentage: 15,
  },
];
