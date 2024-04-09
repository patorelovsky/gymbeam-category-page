import { Product } from "@/types";
import styles from "./ProductInfo.module.scss";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div className={styles.productInfo}>
      <h3>{product.name}</h3>
    </div>
  );
}
