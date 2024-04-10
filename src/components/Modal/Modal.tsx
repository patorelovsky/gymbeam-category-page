import Link from "next/link";
import type { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./Modal.module.scss";

type Props = {
  title: string;
  show: boolean;
  showQueryParamName: string;
  children: ReactNode;
};

export default function Modal({
  title,
  show,
  showQueryParamName,
  children,
}: Props) {
  return (
    show && (
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <h2 className={styles.title}>{title}</h2>
            <Link
              className={styles.close}
              href={`?${showQueryParamName}=false`}
            >
              <IoMdClose />
            </Link>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
