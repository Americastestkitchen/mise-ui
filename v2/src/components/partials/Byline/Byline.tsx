import Link from "../Links/Link/Link";

import classNames from "classnames/bind";

import styles from './byline.module.scss';

const cx = classNames.bind(styles);
export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  image: { altText: string, url: string };
  inactive?: boolean;
};

export interface BylineProps {
  className?: string;
  authors: Author[];
  theme?: "light" | "dark";
}

export const Byline: React.FC<BylineProps> = ({
  className,
  authors,
  theme = "dark",
}) => {
  const classNames = cx({
    "authors": true,
    [`authors--is-${theme}`]: true,
    [`authors--has-${authors.length === 2 ? "two" : "many"}`]: authors.length >= 2,
  })

  return (
    <div className={`${classNames} ${className}`}>
      <ul className={styles["author-image-list"]}>
        { authors.map((author, i) => {
          const path = `/authors/${author.id}-${author.firstName}-${author.lastName}`;

          if (i <= 2) {
            return (
              <li
                key={`${path}-${i}-image`}
                className={styles["author-image-list__item"]}
              >
                <Link
                  className={styles["author-image-link"]}
                  path={path}
                >
                  <img
                    className={styles["author-image"]}
                    alt={author.image?.altText}
                    src={author.image?.url}
                  />
                </Link>
              </li>
            )
          } else {
            return null
          }
        })}
      </ul>
      <span className={styles["author-names"]}>
      { authors.map((author, i, arr) => {
          const name = arr.length > 1
            ? author.firstName
            : `${author.firstName} ${author.lastName}`;

          const path = `/authors/${author.id}-${author.firstName}-${author.lastName}`;

          const conjunction = () => {
            if (arr.length === 1 || i === arr.length -1) {
              return 
            } else if (arr.length <= 3 && i === arr.length - 2) {
              return " and "
            } else if (arr.length > 3 && i === 2) {
              return " and others"
            } else {
              return ", "
            }
          }
          
          if (i <= 2) {
            return (
              <>
                <Link
                  key={`${path}-${i}-name`}
                  className={styles["author-name"]}
                  path={path}
                >
                  {name}
                </Link>
                {conjunction()}
              </>
            )
          } else {
            return null
          }
        })}
      </span>
    </div>
  );
}

export default Byline;