import type { GetProductsResponse } from "@/types";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getProducts(
  searchParams: Record<string, string>
): Promise<GetProductsResponse> {
  const url = `${API_ENDPOINT}?${new URLSearchParams(searchParams)}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
