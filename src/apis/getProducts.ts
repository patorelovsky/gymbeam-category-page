import type { GetProductsResponse } from "@/types";

const API_ENDPOINT = process.env.API_ENDPOINT;
const CATEGORY_ID = process.env.SPORTS_NUTRITION_CATEGORY_ID!;

export async function getProducts(
  searchParams: URLSearchParams
): Promise<Pick<GetProductsResponse, "items">> {
  filterSportNutritionCategory(searchParams);
  const url = `${API_ENDPOINT}?${searchParams}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

function filterSportNutritionCategory(searchParams: URLSearchParams) {
  searchParams.append("category_ids[]", CATEGORY_ID);
}