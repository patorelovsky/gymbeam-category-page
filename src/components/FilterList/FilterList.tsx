import type { Filter } from "@/types";
import { CheckboxFilter } from "../CheckboxFilter";
import { MultiselectFilter } from "../MultiselectFilter";
import { RangeFilter } from "../RangeFilter";
import styles from "./FilterList.module.scss";

type Props = {
  filters: Filter[];
};

function sortFilters(filters: Filter[]) {
  filters
    .map((filter) => ({ position: parseInt(filter.position), filter }))
    .sort((a, b) => a.position - b.position)
    .map(({ filter }) => filter);
}

function mapFiltersByType(filters: Filter[]) {
  return filters.map((filter) => {
    switch (filter.type) {
      case "multiselect":
        return <MultiselectFilter key={filter.code} filter={filter} />;
      case "checkbox":
        return <CheckboxFilter key={filter.code} filter={filter} />;
      case "range":
        return <RangeFilter key={filter.code} filter={filter} />;
      default:
        throw Error("Unknown filter type!");
    }
  });
}

export default function FilterList({ filters }: Props) {
  sortFilters(filters);

  return (
    <div className={styles.filterList}>
      <h2 className={styles.heading}>Filters</h2>
      <div className={styles.filters}>{mapFiltersByType(filters)}</div>
    </div>
  );
}
