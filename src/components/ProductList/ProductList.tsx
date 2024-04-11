import type { Product } from "@/types";
import { ImWondering2 } from "react-icons/im";
import { ProductInfo } from "../ProductInfo";
import styles from "./ProductList.module.scss";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return products.length > 0 ? (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductInfo key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className={styles.noResults}>
      <ImWondering2 className={styles.icon} />
      Nothing to see here. Try to adjust filters to see results.
    </div>
  );
}
