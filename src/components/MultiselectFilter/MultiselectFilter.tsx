import type { FilterComponentProps } from "@/types";
import { Fragment } from "react";

export default function MultiselectFilter({
  filter,
  filterValue,
  className,
}: FilterComponentProps & { className: string }) {
  function isChecked(value: string) {
    return filterValue?.value.includes(value);
  }

  return (
    <fieldset className={className}>
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
          <label htmlFor={name}>{name}</label>
        </Fragment>
      ))}
    </fieldset>
  );
}
