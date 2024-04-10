import type { Filter } from "@/types";
import styles from "./RangeFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function RangeFilter({ filter }: Props) {
  return (
    <div className={styles.rangeFilter}>
      <label htmlFor={filter.code}>{filter.name}</label>
      <input id={filter.code} type="range" />
    </div>
  );
}
