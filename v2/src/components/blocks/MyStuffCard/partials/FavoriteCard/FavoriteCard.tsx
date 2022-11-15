import styles from "./FavoriteCard.module.scss";
import SummaryItem from '../../../../partials/SummaryItem/SummaryItem';
import { Favorite } from '../../types';

export type FavoriteCardProps = {
  favorite: Favorite,
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ 
  favorite 
}: FavoriteCardProps) => {
  const {image} = favorite
  return (
    <a href={favorite.url} className={styles.wrapper}>
      {image && <img className={styles.imageWrapper} src={image.cloudinaryUrl} alt={image.altText}/>}
      <div className={styles.bodyWrapper}>
        <h2 className={styles.title}>{favorite.title}</h2>
        <div className={styles.footer}>
        {(favorite.rating || favorite.commentsCount) && <SummaryItem commentsCount={favorite.commentsCount} rating={favorite.rating} />}
        </div>
      </div>
    </a>
  )
};

export default FavoriteCard;