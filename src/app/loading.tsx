import { Spinner } from "@/components";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}
