import Icon from '../../../../tokens/Icons/Icon/Icon';
import styles from "./comment.module.scss";

export interface CommentProps {
  commentsCount: number,
}

export const Comment = ({ commentsCount }: CommentProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon type="comment" />
      <p className={styles.content}>{commentsCount}</p>
    </div>
  )
};

export default Comment;