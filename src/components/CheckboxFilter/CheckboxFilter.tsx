import type { FilterComponentProps } from "@/types";

export default function CheckboxFilter({
  filter,
  filterValue,
}: FilterComponentProps) {
  const yesOption = filter.options[0];
  const checked = filterValue?.value[0] === yesOption.value;

  return (
    <>
      <input
        type="checkbox"
        name={filter.code}
        id={filter.code}
        value={yesOption?.value}
        defaultChecked={checked}
      />
      <label htmlFor={filter.code}>{filter.name}</label>
    </>
  );
}
