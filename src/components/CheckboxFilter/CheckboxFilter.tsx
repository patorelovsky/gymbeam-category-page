import type { FilterComponentProps } from "@/types";
import styles from "./CheckboxFilter.module.scss";

export default function CheckboxFilter({
  filter,
  filterValue,
}: FilterComponentProps) {
  const yesOption = filter.options[0];
  const checked = filterValue?.value[0] === yesOption.value;

  return (
    <div className={styles.checkboxFilter}>
      <label htmlFor={filter.code}>{filter.name}</label>
      <input
        type="checkbox"
        name={filter.code}
        id={filter.code}
        value={yesOption?.value}
        defaultChecked={checked}
      />
    </div>
  );
}
