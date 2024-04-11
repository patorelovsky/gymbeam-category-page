import type { FilterComponentProps } from "@/types";
import { Fragment } from "react";
import styles from "./MultiselectFilter.module.scss";

export default function MultiselectFilter({
  filter,
  filterValue,
}: FilterComponentProps) {
  function isChecked(value: string) {
    return filterValue?.value.includes(value);
  }

  return (
    <fieldset className={styles.multiselectFilter}>
      <legend>{filter.name}</legend>
      {filter.options.map(({ name, value }) => (
        <Fragment key={name}>
          <input
            type="checkbox"
            name={filter.code}
            id={name}
            value={value}
            defaultChecked={isChecked(value)}
          />
          <label className={styles.choice} htmlFor={name}>
            {name}
          </label>
        </Fragment>
      ))}
    </fieldset>
  );
}
