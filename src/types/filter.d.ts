import { FilterOption } from "./filterOption";
import { FilterType } from "./filterType";

export type Filter = {
  code: string;
  display_mode?: "0" | "1";
  global_name: string;
  name: string;
  options: FilterOption[];
  position: string;
  type: FilterType;
  max: number;
  min: number;
};

