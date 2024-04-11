import type { Filter } from "./filter";
import type { Meta } from "./meta";
import type { Product } from "./product";

export type GetProductsResponse = {
  items: Product[];
  filters: Filter[];
  meta: Meta;
};
