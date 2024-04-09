import { Response } from "@/types";

export async function getProducts(categoryId?: string): Promise<Response> {
  const res = await fetch(
    `${process.env.API_ENDPOINT}?category_ids[]=${categoryId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
