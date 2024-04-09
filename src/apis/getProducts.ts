import { Product } from "@/types";

type Response = {
  items: Product[];
  filters: unknown;
  meta: unknown;
};

export async function getProducts(categoryId: string): Promise<Product[]> {
  const res = await fetch(
    `${process.env.API_ENDPOINT}?category_ids[]=${categoryId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const { items } = (await res.json()) as Response;
  return items;
}
