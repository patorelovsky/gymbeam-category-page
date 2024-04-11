import type { FilterComponentProps } from "@/types";
import styles from "./RangeFilter.module.scss";

export default function RangeFilter({
  filter: { code, name, min, max },
  filterValue,
}: FilterComponentProps) {
  const [from, to] = filterValue?.value || [];

  return (
    <div className={styles.rangeFilter}>
      <fieldset>
        <legend>{name}</legend>
        <label htmlFor={code + "from"}>{`${name} from`}</label>
        <input
          type="number"
          name={code}
          defaultValue={from}
          min={min}
          max={max}
        />
        <label htmlFor={code + "to"}>{`${name} to`}</label>
        <input
          type="number"
          name={code}
          defaultValue={to}
          min={min}
          max={max}
        />
      </fieldset>
    </div>
  );
}
