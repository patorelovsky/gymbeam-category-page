import type { Filter } from "@/types";
import styles from "./MultiselectFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function MultiselectFilter({ filter }: Props) {
  return (
    <div className={styles.multiselectFilter}>
      <h3>{filter.name}</h3>
      <div>{filter.options.map((option) => option.name)}</div>
    </div>
  );
}
