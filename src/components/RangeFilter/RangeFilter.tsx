import type { FilterComponentProps } from "@/types";
import styles from "./RangeFilter.module.scss";

export default function RangeFilter({
  filter,
  filterValue,
}: FilterComponentProps) {
  const value = filterValue?.[0];

  return (
    <div className={styles.rangeFilter}>
      <label htmlFor={filter.code}>{filter.name}</label>
      <input id={filter.code} type="range" value={value} />
    </div>
  );
}
