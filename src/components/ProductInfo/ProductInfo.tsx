import { Product } from "@/types";
import Image from "next/image";
import { Rating } from "../Rating";
import styles from "./ProductInfo.module.scss";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div className={styles.productInfo}>
      <div className={styles.thumbnail}>
        <Image
          src={product.thumbnail}
          alt="Product thumbnail"
          width={1200}
          height={1200}
          sizes="(max-width: 768px) 140px, 168px"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <Rating
          ratingValue={product.rating_summary}
          reviewsCount={product.reviews_count}
        />
        <p>{product.formatted_price}</p>
      </div>
    </div>
  );
}
