import { getProducts } from "@/apis";
import { FilterList, Header, ProductList } from "@/components";
import styles from "./page.module.scss";

const CATEGORY_ID = process.env.SPORTS_NUTRITION_CATEGORY_ID;

export default async function Home() {
  const { items, filters } = await getProducts(CATEGORY_ID);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.heading}>Sports Nutrition</h2>
        <FilterList filters={filters} />
        <ProductList products={items} />
      </main>
    </>
  );
}
