import Icon from '../../../../tokens/Icons/Icon/Icon';
import styles from "./rating.module.scss";

export interface RatingProps {
  rating: {
    avgRating: number,
    numRating: number,
  }
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon type="star" />
      <p className={styles.content}>{rating.avgRating}</p><p className={styles.qty}>({rating.numRating})</p>
    </div>
  )
};

export default Rating;