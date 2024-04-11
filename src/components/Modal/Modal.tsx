import type { ReactNode } from "react";
import styles from "./Modal.module.scss";

type Props = {
  title: string;
  show: boolean;
  closeButton: ReactNode;
  children: ReactNode;
};

export default function Modal({ title, show, closeButton, children }: Props) {
  return (
    show && (
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <h2 className={styles.title}>{title}</h2>
            {closeButton}
          </div>
          {children}
        </div>
      </div>
    )
  );
}
