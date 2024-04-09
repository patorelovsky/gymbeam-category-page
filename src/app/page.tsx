import { getProducts } from "@/apis";
import { ProductList } from "@/components";
import styles from "./page.module.scss";

export default async function Home() {
  const products = await getProducts(process.env.SPORTS_NUTRITION_CATEGORY_ID);

  return (
    <main className={styles.main}>
      <h1>Hello GymBeam!</h1>
      <ProductList products={products} />
    </main>
  );
}
