"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/lib/search";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = searchProducts(query);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Search Products</h1>
      <p className="mt-2 text-slate-600">
        Search by product name or category.
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. earbuds, outdoor, kitchen..."
        className="mt-6 w-full max-w-md rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <div className="mt-8">
        {query.trim() === "" && (
          <p className="text-slate-500">Start typing to search products.</p>
        )}

        {query.trim() !== "" && results.length === 0 && (
          <p className="text-slate-500">
            No products found for &quot;{query}&quot;.
          </p>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
