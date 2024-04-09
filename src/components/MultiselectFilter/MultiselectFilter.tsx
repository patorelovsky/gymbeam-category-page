import type { Filter } from "@/types";
import styles from "./MultiselectFilter.module.scss";

type Props = {
  filter: Filter;
};

export default function MultiselectFilter({ filter }: Props) {
  return (
    <div className={styles.multiselectFilter}>
      <h3>{filter.global_name}</h3>
    </div>
  );
}
