import type { Filter } from "@/types";
import styles from "./CheckboxFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function CheckboxFilter({ filter }: Props) {
  return (
    <div className={styles.checkboxFilter}>
      <h3>{filter.name}</h3>
    </div>
  );
}
