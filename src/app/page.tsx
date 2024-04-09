import { getProducts } from "@/apis";
import { Header, ProductList } from "@/components";
import styles from "./page.module.scss";

export default async function Home() {
  const { items } = await getProducts(process.env.SPORTS_NUTRITION_CATEGORY_ID);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProductList products={items} />
      </main>
    </>
  );
}
