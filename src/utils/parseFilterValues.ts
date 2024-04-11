import { FilterValue } from "@/types";

export function parseFilterValues(
  filterValues: string | undefined | null
): Record<string, FilterValue> {
  return filterValues ? JSON.parse(filterValues) : {};
}
