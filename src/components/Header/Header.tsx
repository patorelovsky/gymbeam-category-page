import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="#">
        <Image
          className={styles.logo}
          src="/logo.webp"
          alt="Header logo"
          width={707}
          height={200}
          sizes="(max-width: 768px) 140px, 168px"
        />
      </Link>
      <div className={styles.actions}>
        <div className={styles.action}>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
}
