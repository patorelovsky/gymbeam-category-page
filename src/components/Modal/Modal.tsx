import Link from "next/link";
import type { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./Modal.module.scss";

type Props = {
  show: boolean;
  showQueryParamName: string;
  children: ReactNode;
};

export default function Modal({ show, showQueryParamName, children }: Props) {
  return (
    show && (
      <div className={styles.overlay}>
        <div className={styles.toolbar}>
          <Link className={styles.close} href={`?${showQueryParamName}=false`}>
            <IoIosClose />
          </Link>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    )
  );
}
