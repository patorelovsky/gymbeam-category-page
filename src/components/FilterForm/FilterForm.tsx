"use client";

import type {
  Filter,
  FilterComponentProps,
  FilterType,
  FilterValue,
} from "@/types";
import {
  SHOW_FILTER_PARAM_NAME,
  parseFilterValues,
  stringifyFilterValues,
} from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
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

function groupByFilterType(
  allFilters: Filter[],
  filterValues: Record<string, FilterValue>
) {
  return allFilters.reduce((retVal, filter) => {
    if (!retVal[filter.type]) {
      retVal[filter.type] = [];
    }
    const filterValue = filterValues[filter.code];
    retVal[filter.type].push({ filter, filterValue });

    return retVal;
  }, {} as Record<FilterType, FilterComponentProps[]>);
}

export default function FilterForm({ filters }: Props) {
  sortFilters(filters);

  const searchParams = useSearchParams();
  const filterValues = parseFilterValues(searchParams.get("filters"));
  const { multiselect, checkbox, range } = groupByFilterType(
    filters,
    filterValues
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    hideFilters(stringifyFilterValues(formData, filters));
  }

  function handleReset(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    hideFilters("");
  }

  const router = useRouter();

  function hideFilters(filters: string) {
    const newSearchParams = {
      ...Object.fromEntries(searchParams),
      filters,
      [SHOW_FILTER_PARAM_NAME]: "false",
    };
    router.push(`?${new URLSearchParams(newSearchParams)}`);
  }

  return (
    <div className={styles.filterForm}>
      <form
        className={styles.filters}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {multiselect?.map(({ filter, filterValue }) => (
          <MultiselectFilter
            className={styles.filterGroup}
            key={filter.code}
            filter={filter}
            filterValue={filterValue}
          />
        ))}
        <fieldset className={styles.filterGroup}>
          <legend>Filter By</legend>
          {checkbox?.map(({ filter, filterValue }) => (
            <CheckboxFilter
              key={filter.code}
              filter={filter}
              filterValue={filterValue}
            />
          ))}
        </fieldset>
        {range?.map(({ filter, filterValue }) => (
          <RangeFilter
            key={filter.code}
            filter={filter}
            filterValue={filterValue}
          />
        ))}
        <footer className={styles.footer}>
          <button className={`${styles.button} ${styles.reset}`} type="reset">
            Reset filters
          </button>
          <button className={`${styles.button} ${styles.submit}`} type="submit">
            Apply filters
          </button>
        </footer>
      </form>
    </div>
  );
}
