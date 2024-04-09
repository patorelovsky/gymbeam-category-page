import type { Filter } from "@/types";
import styles from "./RangeFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function RangeFilter({ filter }: Props) {
  return (
    <div className={styles.rangeFilter}>
      <h3>{filter.name}</h3>
    </div>
  );
}
