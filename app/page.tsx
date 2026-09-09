import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="rounded-lg bg-blue-50 px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome to ShopEasy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          ShopEasy is a simple online store offering a curated selection of
          everyday products across home, outdoor, electronics, and more.
          Browse our catalog and find something you&apos;ll love.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Browse All Products
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Featured Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
