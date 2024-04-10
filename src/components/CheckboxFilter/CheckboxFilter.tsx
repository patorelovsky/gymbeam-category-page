import type { Filter } from "@/types";
import styles from "./CheckboxFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function CheckboxFilter({ filter }: Props) {
  return (
    <div className={styles.checkboxFilter}>
      <label htmlFor={filter.code}>{filter.name}</label>
      <input type="checkbox" name={filter.name} id={filter.code} />
    </div>
  );
}
