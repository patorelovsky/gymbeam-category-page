import { Product } from "@/types";
import { ProductInfo } from "../ProductInfo";
import styles from "./ProductList.module.scss";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductInfo key={product.id} product={product} />
      ))}
    </div>
  );
}
