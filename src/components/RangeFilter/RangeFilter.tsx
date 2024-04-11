import type { FilterComponentProps } from "@/types";
import styles from "./RangeFilter.module.scss";

export default function RangeFilter({
  filter: { code, name, min, max },
  filterValue,
  className,
}: FilterComponentProps & { className: string }) {
  const [from, to] = filterValue?.value || [];

  return (
    <fieldset className={`${styles.rangeFilter} ${className}`}>
      <legend>{name}</legend>
      <label htmlFor={code + "from"}>From</label>
      <input
        type="number"
        name={code}
        defaultValue={from}
        min={min}
        max={max}
      />
      <label htmlFor={code + "to"}>To</label>
      <input type="number" name={code} defaultValue={to} min={min} max={max} />
    </fieldset>
  );
}
