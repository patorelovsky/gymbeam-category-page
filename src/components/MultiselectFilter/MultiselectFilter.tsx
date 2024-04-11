import type { Filter } from "@/types";
import { Fragment } from "react";
import styles from "./MultiselectFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function MultiselectFilter({ filter }: Props) {
  return (
    <div className={styles.multiselectFilter}>
      <fieldset>
        <legend>{filter.name}</legend>
        {filter.options.map(({ name, value }) => (
          <Fragment key={name}>
            <label htmlFor={name}>{name}</label>
            <input type="checkbox" name={filter.code} id={name} value={value} />
          </Fragment>
        ))}
      </fieldset>
    </div>
  );
}
