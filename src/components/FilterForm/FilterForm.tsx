import type { Filter, FilterType } from "@/types";
import { CheckboxFilter } from "../CheckboxFilter";
import { MultiselectFilter } from "../MultiselectFilter";
import { RangeFilter } from "../RangeFilter";
import styles from "./FilterForm.module.scss";

type Props = {
  filters: Filter[];
};

function sortFilters(filters: Filter[]) {
  filters
    .map((filter) => ({ position: parseInt(filter.position), filter }))
    .sort((a, b) => a.position - b.position)
    .map(({ filter }) => filter);
}

function groupByFilterType(filters: Filter[]): Record<FilterType, Filter[]> {
  return filters.reduce((retVal, filter) => {
    if (!retVal[filter.type]) {
      retVal[filter.type] = [];
    }

    retVal[filter.type].push(filter);

    return retVal;
  }, {} as Record<FilterType, Filter[]>);
}

export default function FilterForm({ filters }: Props) {
  sortFilters(filters);
  const { multiselect, checkbox, range } = groupByFilterType(filters);

  return (
    <div className={styles.filterForm}>
      <h2 className={styles.heading}>Filters</h2>
      <form className={styles.filters}>
        {multiselect?.map((filter) => (
          <MultiselectFilter key={filter.code} filter={filter} />
        ))}
        <fieldset>
          <legend>FILTER BY</legend>
          {checkbox?.map((filter) => (
            <CheckboxFilter key={filter.code} filter={filter} />
          ))}
        </fieldset>
        {range?.map((filter) => (
          <RangeFilter key={filter.code} filter={filter} />
        ))}
      </form>
    </div>
  );
}
