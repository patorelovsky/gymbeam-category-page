import { Filter, FilterValue } from "@/types";

export function stringifyFilterValues(
  formData: FormData,
  allFilters: Filter[]
): string {
  const searchParamsFilters: Record<string, FilterValue> = {};

  for (const filterCode of formData.keys()) {
    const type = allFilters.find((f) => f.code === filterCode)?.type;
    const value = formData.getAll(filterCode).map((v) => v.toString());
    searchParamsFilters[filterCode] = { value, type };
  }

  return JSON.stringify(searchParamsFilters);
}
