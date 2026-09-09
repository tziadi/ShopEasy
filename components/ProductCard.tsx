import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {product.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{product.description}</p>
      </div>
      <p className="mt-4 text-xl font-bold text-blue-600">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
