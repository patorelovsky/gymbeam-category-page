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
    <div className={styles.multiselectFilter}>
      <fieldset>
        <legend>{filter.name}</legend>
        {filter.options.map(({ name, value }) => (
          <Fragment key={name}>
            <label htmlFor={name}>{name}</label>
            <input
              type="checkbox"
              name={filter.code}
              id={name}
              value={value}
              defaultChecked={isChecked(value)}
            />
          </Fragment>
        ))}
      </fieldset>
    </div>
  );
}
