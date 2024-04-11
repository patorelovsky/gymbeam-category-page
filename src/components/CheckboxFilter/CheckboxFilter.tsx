import type { FilterComponentProps } from "@/types";
import styles from "./CheckboxFilter.module.scss";

export default function CheckboxFilter({
  filter,
  filterValue,
}: FilterComponentProps) {
  const checked = !!filterValue?.[0];

  return (
    <div className={styles.checkboxFilter}>
      <label htmlFor={filter.code}>{filter.name}</label>
      <input
        type="checkbox"
        name={filter.name}
        id={filter.code}
        defaultChecked={checked}
      />
    </div>
  );
}
