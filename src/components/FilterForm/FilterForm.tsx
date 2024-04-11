"use client";

import type { Filter, FilterType } from "@/types";
import { SHOW_FILTER_PARAM_NAME } from "@/utils/constants";
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchParamsFilters: Record<string, FormDataEntryValue[]> = {};

    for (const key of formData.keys()) {
      searchParamsFilters[key] = formData.getAll(key);
    }
    
    hideFilters(JSON.stringify(searchParamsFilters));
  }

  function handleReset(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    hideFilters("");
  }

  const router = useRouter();
  const searchParams = useSearchParams();

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
