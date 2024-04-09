import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./Rating.module.scss";

type Props = {
  ratingValue: number;
  reviewsCount: number;
};

function getRatingStars(ratingValue: number) {
  const fullStarCount = Math.floor(ratingValue / 20);
  const showHalfStar = ratingValue % 20 > 0;
  const emptyStarCount = 5 - fullStarCount - (showHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStarCount).keys()].map((index) => (
        <FaStar key={index} />
      ))}
      {showHalfStar && <FaStarHalfAlt />}
      {[...Array(emptyStarCount).keys()].map((index) => (
        <FaRegStar key={index} />
      ))}
    </>
  );
}

function formatReviewsCount(reviewsCount: number): string {
  if (reviewsCount > 1000) {
    return (reviewsCount / 1000).toFixed(2) + "k";
  }

  return reviewsCount.toString();
}

export default function Rating({ ratingValue, reviewsCount }: Props) {
  return (
    <div className={styles.rating}>
      <span className={styles.stars}>{getRatingStars(ratingValue)}</span>
      <span>{ratingValue}%</span>
      <span>({formatReviewsCount(reviewsCount)})</span>
    </div>
  );
}
