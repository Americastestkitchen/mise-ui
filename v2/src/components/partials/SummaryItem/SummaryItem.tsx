import Comment from './partials/Comment/Comment'
import Rating from './partials/Rating/Rating'
import styles from "./summaryItem.module.scss"

export interface SumamryItemProps {
  commentsCount?: number,
  rating?: {
    avgRating: number,
    numRating: number,
  }
}

export const SummaryItem: React.FC<SumamryItemProps> = ({ commentsCount, rating }: SumamryItemProps) => {
  return (
    <div className={styles.wrapper}>
        {rating && <Rating rating={rating} />}
        {commentsCount && <Comment commentsCount={commentsCount} />}
    </div>
  )
};

export default SummaryItem;