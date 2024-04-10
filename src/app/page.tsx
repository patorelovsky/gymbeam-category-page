import { getProducts } from "@/apis";
import { FilterForm, Header, Modal, ProductList } from "@/components";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import styles from "./page.module.scss";

const CATEGORY_ID = process.env.SPORTS_NUTRITION_CATEGORY_ID;

type Props = {
  searchParams?: { showdialog?: string };
};

export default async function Home({ searchParams }: Props) {
  const { items, filters } = await getProducts(CATEGORY_ID);
  const showDialog = Boolean(searchParams?.showdialog === "true");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <h2 className={styles.heading}>Sports Nutrition</h2>
          <Link className={styles.filter} href="?showdialog=true">
            <FaFilter className={styles.icon} />
            Show Filter
          </Link>
        </div>
        <ProductList products={items} />
      </main>
      <Modal title="Filters" show={showDialog} showQueryParamName="showdialog">
        <FilterForm filters={filters} />
      </Modal>
    </>
  );
}
