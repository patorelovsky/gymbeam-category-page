import type { GetProductsResponse } from "@/types";

const API_ENDPOINT = process.env.API_ENDPOINT;
const CATEGORY_ID = process.env.SPORTS_NUTRITION_CATEGORY_ID!;

export async function getProducts(
  searchParams: Record<string, string>
): Promise<Pick<GetProductsResponse, "items">> {
  searchParams["category_ids[]"] = CATEGORY_ID;
  const url = `${API_ENDPOINT}?${new URLSearchParams(searchParams)}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
