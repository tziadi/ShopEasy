import { products, type Product } from "@/data/products";

/**
 * SEARCH FUNCTIONALITY
 * --------------------
 * This is the single place that implements product search.
 * It currently matches a query string against product name or category
 * (case-insensitive, substring match). Change the matching logic here
 * to modify how search behaves across the app.
 */
export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery === "") {
    return [];
  }

  return products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
    const categoryMatch = product.category
      .toLowerCase()
      .includes(normalizedQuery);
    return nameMatch || categoryMatch;
  });
}
