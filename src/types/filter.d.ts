import { FilterOption } from "./filterOption";

export type Filter = {
  code: string;
  display_mode?: "0" | "1";
  global_name: string;
  name: string;
  options: FilterOption[];
  position: string;
  type: FilterType;
};

export type FilterType = "multiselect" | "checkbox" | "range";